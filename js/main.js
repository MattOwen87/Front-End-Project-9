
/********************
LINE CHART
********************/

var ctl = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctl, {
    // The type of chart we want to create
    responsive: true,
    type: 'line',


    // The data for our dataset
    data: {
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            backgroundColor: '#D4E6F1',
            borderColor: '#6A5ACD',
            borderWidth: 5,
            pointBackgroundColor: '#F5F5F5',
            pointBorderWidth: 3,
            pointRadius: 6,
            lineTension: 0,
            data: [0, 500, 1000, 800, 1000, 700, 500, 2200, 1500, 2300, 900, 1200],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      }
    }
});

/********************
BAR CHART
********************/

var ctb = document.getElementById('barChart').getContext('2d');
var chart = new Chart(ctb, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: '#6A5ACD',
            borderColor: '#6A5ACD',
            data: [50, 150, 100, 250, 140, 200, 90],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      }
    }
});

/********************
DONUT CHART
********************/

var ctd = document.getElementById('donutChart').getContext('2d');
var chart = new Chart(ctd, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Phones", "Tablets", "Desktops"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['#20B2AA', '#3CB371', '#6A5ACD'],
            data: [15, 25, 65],
        }]
    },

    // Configuration options go here
    options: {

    }
});
