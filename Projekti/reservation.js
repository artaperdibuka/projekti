// reservation.js

// Funksioni për të rezervuar një datë
function reserveEvent(event) {
    event.preventDefault(); // Parandalon dërgimin e formës

    // Merr të dhënat nga forma
    const date = document.getElementById('eventDate').value;
    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const email = event.target.email.value;
    const number = event.target.number.value;

    // Kontrollo nëse data është e rezervuar
    const reservedEvents = JSON.parse(localStorage.getItem('reservedEvents')) || [];
    const isDateReserved = reservedEvents.some(event => event.date === date);

    if (isDateReserved) {
        alert('Kjo datë është e rezervuar. Ju lutemi zgjidhni një datë tjetër.');
    } else {
        // Ruaj rezervimin
        const newEvent = { date, name, surname, email, number };
        reservedEvents.push(newEvent);
        localStorage.setItem('reservedEvents', JSON.stringify(reservedEvents));

        // Shtoni rezervimin në listën e rezervimeve
        addEventToList(newEvent);
        
        // Pastroni formën
        event.target.reset();
    }
}

// Funksioni për të shtuar rezervimin në listë (vetëm data)
function addEventToList(event) {
    const reservedEventsList = document.getElementById('reservedEventsList');
    
    // Kontrolloni nëse data është e vlefshme
    if (event.date) {
        const listItem = document.createElement('li');
        listItem.textContent = `Data e rezervuar: ${event.date}`; // Tani shfaq vetëm datën
        reservedEventsList.appendChild(listItem);
    }
}

// Ngarko rezervimet nga localStorage kur ngarkohet faqja
function loadReservedEvents() {
    const reservedEvents = JSON.parse(localStorage.getItem('reservedEvents')) || [];
    reservedEvents.forEach(addEventToList);
}

// Ngarko rezervimet kur faqja ngarkohet
window.onload = loadReservedEvents;

// Shto event listener për formën
document.getElementById('contactForm').addEventListener