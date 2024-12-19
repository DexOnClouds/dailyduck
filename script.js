document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');

    function updateDateTime() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        dateElement.textContent = now.toLocaleDateString(undefined, options);
        timeElement.textContent = now.toLocaleTimeString();
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);
});