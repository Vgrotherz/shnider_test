const getNearestMonday = (date) => {
    const day = date.getDay();
    const diff = 7 - day + (day === 0 ? -6 : 1); 
    return new Date(date.setDate(date.getDate() + diff));
}

const currentDate = new Date();

const nearestMonday = getNearestMonday(currentDate);

const formattedNearestMonday = nearestMonday.toISOString().slice(0, 10);

const firstBElement = document.querySelector('.pagination .links b');

firstBElement.textContent += ' ' + formattedNearestMonday;