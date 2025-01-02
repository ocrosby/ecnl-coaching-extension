// content.js
function extractCoachesInfo() {
    const coaches = [];
    document.querySelectorAll('.coach-info').forEach(coachElement => {
        const name = coachElement.querySelector('.name').innerText;
        const team = coachElement.querySelector('.team').innerText;
        const email = coachElement.querySelector('.email').innerText;
        coaches.push({ name, team, email });
    });
    return coaches;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'extractCoaches') {
        const coaches = extractCoachesInfo();
        sendResponse({ coaches });
    }
});