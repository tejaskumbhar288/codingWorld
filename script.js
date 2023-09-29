// Simulated real-time data
function updateRealTimeData() {
    const currentConsumption = Math.floor(Math.random() * 100); // Random consumption value for demonstration
    document.getElementById('current-consumption').textContent = currentConsumption + ' kW';
}

// Simulated historical data chart
function createConsumptionChart() {
    const ctx = document.getElementById('consumption-chart').getContext('2d');
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Consumption (kW)',
            data: [50, 60, 45, 70, 55, 80],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };
    
    const config = {
        type: 'line',
        data: data,
    };

    new Chart(ctx, config);
}

// Update real-time data every 5 seconds
setInterval(updateRealTimeData, 5000);

// Initialize the historical data chart
createConsumptionChart();
