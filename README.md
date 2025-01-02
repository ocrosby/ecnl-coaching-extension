# ecnl-coaching-extension

A Google Chrome extension for extracting coaching information from the ECNL events page.

## Development

### Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the `Load unpacked` button and select the `ecnl-coaching-extension` directory.

### Debugging the Extension

#### Content Script

1. Navigate to the ECNL events page where your content script runs.
2. Open Chrome DevTools (right-click on the page and select "Inspect").
3. Go to the "Sources" tab and find your content script (content.js) under the "Conntent scripts" section.
4. Set breakpoints and use the console to debug.

#### Background Script

1. In the `chrome://extensions/` page, click the "background page" link under the "Inspect views" section.
2. This will open a new Devtools window for the background script.
3. Use the "Sources" tab to set breakpoints and the console to debug.

#### Popup Script

1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Right-click on the popup and select "Inspect".
3. This will open the DevTools for the popup.
4. Use the "Sources" tab to set breakpoints and the console to debug.

### Testing the Extension

1. Click the extension icon to open the popup.
2. Click the "Extract Coaches Info" button.
3. Verify that the data is extracted and downloaded as a CSV file.

By following these steps, you can effectively develop and debug your Chrome extension.

