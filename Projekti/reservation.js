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
        // Shfaq një dritare SweetAlert2 nëse data është e rezervuar
        window.Swal.fire({
            icon: 'warning',
            title: 'Kjo datë është e rezervuar',
            text: 'Ju lutemi zgjidhni një datë tjetër.',
            confirmButtonText: 'OK'
        }).then(() => {
            // Pas klikimit të OK, sugjero disa data alternative
            suggestAlternativeDates(reservedEvents);
        });
    } else {
        // Ruaj rezervimin
        const newEvent = { date, name, surname, email, number };
        reservedEvents.push(newEvent);
        localStorage.setItem('reservedEvents', JSON.stringify(reservedEvents));

        // Shtoni rezervimin në listën e rezervimeve
        addEventToList(newEvent);
        
        // Shfaq një mesazh me SweetAlert2 për sukses
        window.Swal.fire({
            icon: 'success',
            title: 'Rezervimi i suksesshëm',
            text: `Data e rezervuar: ${date}`,
            confirmButtonText: 'OK'
        });

        // Pastroni formën
        event.target.reset();
    }
}

function suggestAlternativeDates(reservedEvents) {
    // Merr datat e rezervuara dhe sugjero disa alternativa
    const reservedDates = reservedEvents.map(event => new Date(event.date).getTime());
    const alternativeDates = [];

    // Sugjero 3 data të ardhshme që nuk janë të rezervuara
    let currentDate = new Date();
    for (let i = 1; alternativeDates.length < 3; i++) {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i);
        if (!reservedDates.includes(nextDate.getTime())) {
            alternativeDates.push(nextDate.toISOString().split('T')[0]); // Formato datën
        }
    }

    // Shfaq datat alternative me SweetAlert2
    window.Swal.fire({
        icon: 'info',
        title: 'Data alternative',
        html: `<p>Mund zgjidhni njërën nga këto data:</p><ul>${alternativeDates.map(date => `<li>${date}</li>`).join('')}</ul>`,
        confirmButtonText: 'OK'
    });
}