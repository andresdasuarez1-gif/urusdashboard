
function applyFilters() {
    const producer = document.getElementById('producerFilter').value;
    const company = document.getElementById('companyFilter').value;
    const location = document.getElementById('locationFilter').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Simulate metric updates
    document.getElementById('leads').textContent = 'Leads: ' + Math.floor(Math.random() * 100);
    document.getElementById('quotes').textContent = 'Quotes: ' + Math.floor(Math.random() * 50);
    document.getElementById('policies').textContent = 'Policies: ' + Math.floor(Math.random() * 30);
}
