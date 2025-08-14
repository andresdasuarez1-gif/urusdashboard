
function applyFilters() {
    document.getElementById("leads").innerText = "120";
    document.getElementById("quotes").innerText = "85";
    document.getElementById("policies").innerText = "45";
}

const quoteCtx = document.getElementById('quoteChart').getContext('2d');
const quoteChart = new Chart(quoteCtx, {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Quotes',
            data: [20, 25, 20, 20],
            borderColor: 'blue',
            fill: false
        }]
    }
});

const conversionCtx = document.getElementById('conversionChart').getContext('2d');
const conversionChart = new Chart(conversionCtx, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Conversion Rate (%)',
            data: [30, 35, 40, 45],
            backgroundColor: 'green'
        }]
    }
});
