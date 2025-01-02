// background.js
function downloadCSV(coaches) {
    const csvContent = "data:text/csv;charset=utf-8,"
        + "Name,Team,Email\n"
        + coaches.map(coach => `${coach.name},${coach.team},${coach.email}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "coaches.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'downloadCSV') {
        downloadCSV(request.coaches);
    }
});