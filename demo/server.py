import http.server
import json
import os
import subprocess
import time

# credentials for the UiPath external app - set these in the environment,
# never in this file
CLIENT_ID = os.environ["UIPATH_CLIENT_ID"]
CLIENT_SECRET = os.environ["UIPATH_CLIENT_SECRET"]
TOKEN_URL = "https://cloud.uipath.com/identity_/connect/token"
SCOPE = "OR.Jobs"
TRIGGER_URL = os.environ["UIPATH_TRIGGER_URL"]

PORT = 8787
DIR = os.path.dirname(os.path.abspath(__file__))


def _curl_json(args, retries=3, backoff=1.5):
    # UiPath's identity/orchestrator endpoints sit behind Cloudflare bot
    # protection that blocks Python's urllib TLS/HTTP fingerprint outright.
    # curl passes, so we shell out to it instead of using urllib. Even with
    # curl, occasional automated-traffic checks (HTTP 403, "error code: 1010")
    # show up as transient blips, so retry a few times before giving up.
    last_error = None
    for attempt in range(retries):
        result = subprocess.run(
            ["curl", "-s", "-w", "\n%{http_code}", *args],
            capture_output=True, text=True, timeout=30,
        )
        *body_lines, status = result.stdout.rsplit("\n", 1)
        body = "\n".join(body_lines)
        if status.isdigit() and int(status) < 400:
            return json.loads(body)
        last_error = RuntimeError(f"HTTP {status}: {body}")
        if attempt < retries - 1:
            time.sleep(backoff)
    raise last_error


def get_access_token():
    body = _curl_json([
        "-X", "POST", TOKEN_URL,
        "-u", f"{CLIENT_ID}:{CLIENT_SECRET}",
        "-d", f"grant_type=client_credentials&scope={SCOPE}",
    ])
    return body["access_token"]


def fire_trigger(token):
    return _curl_json([
        "-X", "POST", TRIGGER_URL,
        "-H", f"Authorization: Bearer {token}",
        "-H", "Content-Type: application/json",
        "-d", "{}",
    ])


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def do_POST(self):
        if self.path == "/run":
            try:
                token = get_access_token()
                result = fire_trigger(token)
                payload = json.dumps({"ok": True, "result": result}).encode()
                self.send_response(200)
            except Exception as e:
                payload = json.dumps({"ok": False, "error": str(e)}).encode()
                self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(payload)
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        print(f"[server] {format % args}")


class DemoServer(http.server.HTTPServer):
    # Default is 1, which on Windows lets several instances bind the same port
    # at once. Requests then get routed to an arbitrary one -- including stale
    # instances running older code. Refuse to start instead.
    allow_reuse_address = False


if __name__ == "__main__":
    try:
        httpd = DemoServer(("127.0.0.1", PORT), Handler)
    except OSError:
        print(f"ERROR: port {PORT} is already in use.")
        print("Another copy of this server is still running -- close that window,")
        print("or kill leftover instances with:")
        print("  taskkill /F /IM python.exe")
        raise SystemExit(1)

    with httpd:
        print("SmartApply Bot demo server [curl build]")
        print(f"Running at http://127.0.0.1:{PORT}")
        print("Leave this window open during the demo. Close it to stop the server.")
        httpd.serve_forever()
