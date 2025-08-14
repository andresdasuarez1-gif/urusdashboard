
document.getElementById('manualEntryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let result = 'Manual Entry Submitted:<br>';
    for (let [key, value] of formData.entries()) {
        result += `${key}: ${value}<br>`;
    }
    document.getElementById('entryResult').innerHTML = result;
});

document.getElementById('projectionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const currentPolicies = parseFloat(e.target.currentPolicies.value);
    const growthRate = parseFloat(e.target.growthRate.value);
    const projected = currentPolicies * (1 + growthRate / 100);
    document.getElementById('projectionResult').innerHTML = `Projected Policies: ${projected.toFixed(2)}`;
});
