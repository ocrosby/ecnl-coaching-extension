// content.js
function extractCoachesInfo() {
    const coaches = [];
    document.querySelectorAll('.college-attendance-row').forEach(row => {
        const university = row.querySelector('.font-s18 span').innerText;
        const sport = row.querySelector('.font-s18 + div').innerText;
        const division = row.querySelector('div:nth-child(3)').innerText.split(': ')[1];
        const conference = row.querySelector('div:nth-child(4)').innerText.split(': ')[1];
        const location = row.querySelector('div:nth-child(5)').innerText.split(': ')[1];
        const type = row.querySelector('div:nth-child(6)').innerText.split(': ')[1];
        const website = row.querySelector('a.no-decoration').href;

        row.querySelectorAll('td .col-lg-3').forEach(coachElement => {
            const name = coachElement.querySelector('.valign-middle:nth-child(2)').innerText.trim();
            const title = coachElement.querySelector('.valign-middle:nth-child(3)').innerText.trim();
            const email = coachElement.querySelector('.valign-middle a').href.replace('mailto:', '');
            coaches.push({ university, sport, division, conference, location, type, website, name, title, email });
        });
    });
    return coaches;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'extractCoaches') {
        const coaches = extractCoachesInfo();
        sendResponse({ coaches });
    }
});