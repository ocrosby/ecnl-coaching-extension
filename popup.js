// popup.js
document.getElementById('extract').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'extractCoaches' }, (response) => {
            if (response && response.coaches) {
                chrome.runtime.sendMessage({ action: 'downloadCSV', coaches: response.coaches });
            }
        });
    });
});