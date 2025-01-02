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

## Publishing

To deploy the Chorme extension, follow these steps:

### 1. Prepare the Extension

1. Ensure all files are in the correct directory structure.
2. Update the manifest.json version number if you need to.
3. Test your extension thoroughly in developer mode.

### 2. Package Your Extension

1. Open Chrome and go to chorome://extensions/.
2. Enable "Developer mode" using the toggle switch in the top right corner.
3. Click the "Pack extension" button.
4. In the "Extension root directory" field, select the directory containinng your extension files.
5. Click "Pack extension".

This will generate a .crx file and a private key file (.pem) in the directory you specified.

### 3. Publish Your Extension

1. Go to the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole).
2. Click "Add a new item".
3. Upload the .crx file generated in the previous step.
4. Fill out the required information (description, screenshots, etc.).
5. Submit your extension for review.

Once approved, your extension will be available on the Chrome Web Store.
