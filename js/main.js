
/********************
VARIABLES
********************/

const submitButton = document.getElementById('submitButton');
const saveButton = document.getElementById('saveButton');
const cancelButton = document.getElementById('cancelButton');
const userSearch = document.getElementById('userSearchBar');
const messageUser = document.getElementById('messageBox');
const bellMessage = document.querySelector('.bellMessage');
const bellDot = document.querySelector('.dot');
const hourlyToggle = document.getElementById('hourly');
const dailyToggle = document.getElementById('daily');
const weeklyToggle = document.getElementById('weekly');
const monthlyToggle = document.getElementById('monthly');
const ctl = document.getElementById('lineChart').getContext('2d');
const ctb = document.getElementById('barChart').getContext('2d');
const ctd = document.getElementById('donutChart').getContext('2d');
let users = ['Matthew Haworth', 'Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver']
let timeZone = document.getElementById('timeZone');
let emailSwitch = document.getElementById('emailSwitch');
let profileSwitch = document.getElementById('profileSwitch');


/********************
LINE CHART
********************/


var firstChart = new Chart(ctl, {
    // The type of chart we want to create
    responsive: true,
    type: 'line',


    // The data for our dataset
    data: {
        labels: ["", "00am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm",
      "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"],
        datasets: [{
            backgroundColor: '#D4E6F1',
            borderColor: '#6A5ACD',
            borderWidth: 5,
            pointBackgroundColor: '#F5F5F5',
            pointBorderWidth: 3,
            pointRadius: 6,
            lineTension: 0,
            data: [0, 500, 1000, 800, 1000, 700, 500, 2200, 1500, 2300, 900, 1200, 750, 600, 1000, 200, 500, 1200, 300, 900,
            400, 1300, 2000, 2500, 1800],
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      }
    }
});

hourlyToggle.addEventListener('click', (event) => {
  var hourlyLineChart = new Chart(ctl, {
      // The type of chart we want to create
      responsive: true,
      type: 'line',


      // The data for our dataset
      data: {
          labels: ["", "00am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm",
        "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"],
          datasets: [{
              backgroundColor: '#D4E6F1',
              borderColor: '#6A5ACD',
              borderWidth: 5,
              pointBackgroundColor: '#F5F5F5',
              pointBorderWidth: 3,
              pointRadius: 6,
              lineTension: 0,
              data: [0, 500, 1000, 800, 1000, 700, 500, 2200, 1500, 2300, 900, 1200, 750, 600, 1000, 200, 500, 1200, 300, 900,
              400, 1300, 2000, 2500, 1800],
          }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: false
        }
      }
  });
})



dailyToggle.addEventListener('click', (event) => {

  var dailyLineChart = new Chart(ctl, {
      // The type of chart we want to create
      responsive: true,
      type: 'line',


      // The data for our dataset
      data: {
          labels: ["", "M", "T", "W", "T", "F", "S", "S"],
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
});

weeklyToggle.addEventListener('click', (event) => {

  var weeklyLineChart = new Chart(ctl, {
      // The type of chart we want to create
      responsive: true,
      type: 'line',


      // The data for our dataset
      data: {
          labels: ["", "1-12", "13-24", "25-40", "41-52"],
          datasets: [{
              backgroundColor: '#D4E6F1',
              borderColor: '#6A5ACD',
              borderWidth: 5,
              pointBackgroundColor: '#F5F5F5',
              pointBorderWidth: 3,
              pointRadius: 6,
              lineTension: 0,
              data: [0, 500, 700, 1100, 300],
          }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: false
        }
      }
  });
});

monthlyToggle.addEventListener('click', (event) => {

  var monthlyLineChart = new Chart(ctl, {
      // The type of chart we want to create
      responsive: true,
      type: 'line',


      // The data for our dataset
      data: {
          labels: ["", "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" ],
          datasets: [{
              backgroundColor: '#D4E6F1',
              borderColor: '#6A5ACD',
              borderWidth: 5,
              pointBackgroundColor: '#F5F5F5',
              pointBorderWidth: 3,
              pointRadius: 6,
              lineTension: 0,
              data: [0, 500, 1000, 800, 1000, 1500, 2000, 700, 1200, 400, 900, 600, 1500, 1300],
          }]
      },

      // Configuration options go here
      options: {
        legend: {
          display: false
        }
      }
  });
});


/********************
BAR CHART
********************/


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


/********************
ALERT ICON DOT
********************/

bellMessage.addEventListener('click', (event) => {
bellDot.style.display = 'none';
bellMessage.style.display = 'inline';
});


/********************
SUBMIT FORM
********************/

submitButton.addEventListener('click', (event) => {

if(userSearch.value === "" || messageUser.value === ""){
  alert("ERROR Message Can Not Be Sent")
} else {
  alert("Your Message Has Been Sent")
}

});


/********************
LOCAL STORAGE
********************/

function saveSettings(){
  localStorage.setItem('email', emailSwitch.checked);
  localStorage.setItem('profile', profileSwitch.checked);
  localStorage.setItem('tmeZne', timeZone.selectedIndex);

};

function loadSettings(){
  const storedEmail = localStorage.getItem('email');
  const storedProfile = localStorage.getItem('profile');
  const storedTimeZone = localStorage.getItem('tmezne');

};


saveButton.addEventListener('click', (event) => {

saveSettings();

});



cancelButton.addEventListener('click', (event) => {
localStorage.clear();
});

console.log(localStorage);
