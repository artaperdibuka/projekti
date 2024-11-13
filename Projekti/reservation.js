// Funksioni për të inicializuar Flatpickr me datat e rezervuara
function initializeFlatpickr() {
    const reservedEvents = JSON.parse(localStorage.getItem('reservedEvents')) || [];
    const reservedDates = reservedEvents.map(event => event.date);

    flatpickr("#eventDate", {
        dateFormat: "Y-m-d",
        disable: reservedDates, // Çdo datë e rezervuar do të jetë e papërshkruar
        onOpen: function() {
            const calendar = this;
            reservedDates.forEach(date => {
                const dateElement = calendar.calendarContainer.querySelector(`.flatpickr-day[data-date="${new Date(date).getTime()}"]`);
                if (dateElement) {
                    dateElement.classList.add('reserved-date'); // Shtoni klasën për stilizim
                }
            });
        }
    });
}

// Funksioni për të rezervuar një ngjarje
function reserveEvent(event) {
    event.preventDefault();

    const date = document.getElementById('eventDate').value;
    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const email = event.target.email.value;
    const number = event.target.number.value;

    const reservedEvents = JSON.parse(localStorage.getItem('reservedEvents')) || [];
    const isDateReserved = reservedEvents.some(event => event.date === date);

    if (isDateReserved) {
        alert('Kjo datë është e rezervuar. Ju lutemi zgjidhni një datë tjetër.');
    } else {
        const newEvent = { date, name, surname, email, number };
        reservedEvents.push(newEvent);
        localStorage.setItem('reservedEvents', JSON.stringify(reservedEvents));

        alert(`Rezervimi i suksesshëm! Data e rezervuar: ${date}`);
        event.target.reset();
        initializeFlatpickr(); // Rinisni Flatpickr për të reflektuar datat e reja të rezervuara
    }
}

// Inicializoni Flatpickr kur ngarkohet faqja
document.addEventListener('DOMContentLoaded', function() {
    initializeFlatpickr();
});

// Function to suggest alternative dates
function suggestAlternativeDates(reservedEvents) {
    // Get reserved dates and suggest some alternatives
    const reservedDates = reservedEvents.map(event => new Date(event.date).getTime());
    const alternativeDates = [];

    // Suggest 3 upcoming dates that are not reserved
    let currentDate = new Date();
    for (let i = 1; alternativeDates.length < 3; i++) {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        if (!reservedDates.includes(nextDate.getTime())) {
            alternativeDates.push(nextDate.toISOString().split('T')[0]); // Format the date
        }
    }

    // Show alternative dates
    alert(`Mund zgjidhni njërën nga këto data: ${alternativeDates.join(', ')}`); // Replace with your desired alert method
}

// Initialize Flatpickr on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeFlatpickr();
});