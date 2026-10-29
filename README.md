# SmartApply Bot

A UiPath job-application bot, built for the Robotic Process Automation module.

## What it does
1. Reads a resume (PDF, including scanned images) with OCR
2. Checks the extracted fields and flags anything missing
3. Searches the job board, then ranks listings against the resume and the user's preferences
4. Writes a tailored Word cover letter for each match
5. Logs every run to Excel, then emails an Outlook summary

The bot is split into 7 workflows (`Workflows/`), wired together by `Main.xaml`. It has error handling throughout, and its run logs are coded so a failure can be traced step by step.

## Foothold job board
`JobBoardWebsite/` is Foothold, a mock job board (HTML, CSS, JavaScript, 14 listings). It gives the bot a stable target to automate against.

## Demo trigger
`demo/` holds a small local page that starts the bot through an Orchestrator API trigger. It reads its credentials from environment variables:
`UIPATH_CLIENT_ID`, `UIPATH_CLIENT_SECRET`, `UIPATH_TRIGGER_URL`.

## Sample data
The resumes in `Input (...)` are made-up test cases: a complete resume, one with missing fields, and a scanned image.
