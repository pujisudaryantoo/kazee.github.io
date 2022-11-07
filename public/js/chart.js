var options = {
  series: [20, 8, 4],
  chart: {
  type: 'donut',
},
fill: {
  colors: ['#54C370', '#C8CFE4', '#F92B60']
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 330,
      
      
    },
    legend: {
      show: false,
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();