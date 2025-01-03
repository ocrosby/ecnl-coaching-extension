const chromeWebstoreUpload = require('chrome-webstore-upload');
const fs = require('fs');
const path = require('path');

const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN, EXTENSION_ID } = process.env;

const webStore = chromeWebstoreUpload({
    extensionId: EXTENSION_ID,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
});

const zipFilePath = path.resolve(__dirname, 'path/to/your/extension.zip');

async function publish() {
    try {
        const token = await webStore.fetchToken();
        const uploadResponse = await webStore.uploadExisting(zipFilePath, token);
        console.log('Upload Response:', uploadResponse);

        const publishResponse = await webStore.publish('default', token);
        console.log('Publish Response:', publishResponse);
    } catch (error) {
        console.error('Error:', error);
    }
}

publish();