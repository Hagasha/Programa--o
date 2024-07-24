const dates = ["2024-1-10", "2024-2-20", "2024-3-30"];
const formattedDates = dates.map(formatDate);

console.log(formattedDates);

function formatDate(element) {
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}