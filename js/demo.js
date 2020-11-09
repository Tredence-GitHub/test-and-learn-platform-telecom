function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
var randomScalingFactor = function() {
    return Math.round(Math.random() * 20);
  };
demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 1,

          ticks: {
            display: true,
            fontColor: 'rgb(255 255 255 / 65%)',
            beginAtZero: true
          },
          scaleLabel: {
							display: true,
							labelString: 'Lift',
              fontColor: 'rgb(255 255 255 / 65%)'
						},
          gridLines: 0,
          gridLines: {
            drawTicks: false,
            display: false,
            drawBorder: true
          }
        }],
        xAxes: [{
          display: 1,
          gridLines: 0,
          ticks: {
            display: true,
            fontColor: 'rgb(255 255 255 / 65%)'
          },
          scaleLabel: {
							display: true,
							labelString: 'FY 2020',
              fontColor: 'rgb(255 255 255 / 65%)'
						},
          gridLines: {
            zeroLineColor: 'transparent',
            drawTicks: false,
            display: false,
            drawBorder: true
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };



    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [0, 2, 4, 6, 8, 4, 3, 6, 9, 5, 4, 1]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initDashboardPageCharts: function() {

    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 1,
          ticks: {
            display: true,
            fontColor: 'rgb(255 255 255 / 65%)',
            beginAtZero: true
          },
          scaleLabel: {
							display: true,
							labelString: 'Lift  +ve',
              fontColor: 'rgb(255 255 255 / 65%)'
						},
          gridLines: 0,
          gridLines: {
            drawTicks: false,
            display: false,
            drawBorder: true
          }
        }],
        xAxes: [{
          display: 1,
          gridLines: 0,
          ticks: {
            display: true,
            fontColor: 'rgb(255 255 255 / 65%)'
          },
          scaleLabel: {
							display: true,
							labelString: 'FY 2020',
              fontColor: 'rgb(255 255 255 / 65%)'
						},
          gridLines: {
            zeroLineColor: "#fff",
            drawTicks: false,
            display: false,
            drawBorder: true
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };



    gradientChartOptionsConfigurationWithNumbersAndGrid = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 1,

          ticks: {
            display: true,
            fontColor: 'rgb(255 255 255 / 65%)'
          },
          scaleLabel: {
							display: true,
							labelString: 'Experiments',
              fontColor: 'rgb(255 255 255 / 65%)'
						},
          gridLines: 0,
          gridLines: {
            drawTicks: false,
            display: false,
            drawBorder: true
          }
        }],
        xAxes: [{
          display: 1,
          gridLines: 0,
          ticks: {
            display: true,
            fontColor: 'rgb(255 255 255 / 65%)'
          },
          scaleLabel: {
							display: true,
							labelString: 'FY 2020',
              fontColor: 'rgb(255 255 255 / 65%)'
						},
          gridLines: {
            zeroLineColor: "#fff",
            drawTicks: false,
            display: false,
            drawBorder: true
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };



    var cardStatsMiniLineColor = "#fff",
      cardStatsMiniDotColor = "#fff";

    ctx = document.getElementById('lineChartExample').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Lift ",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [2, 03, 04, 4, 5, 4, 3]
        }]
      },
      options: gradientChartOptionsConfiguration
    });


    ctx = document.getElementById('lineChartExampleWithNumbersAndGrid').getContext("2d");

    gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#18ce0f');
    gradientStroke.addColorStop(1, chartColor);

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB('#18ce0f', 0.4));

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: "Experiment Count -",
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [01, 02, 06, 09, 04, 01, 00]
        }]
      },
      options: gradientChartOptionsConfigurationWithNumbersAndGrid
    });
   var chartColors = {

   'blue':'blue',
   'orange':'orange',
   'yellow':'yellow',
   'green':'green'
 }
    var config = {
			type: 'pie',
			data: {
				datasets: [{
					data: [
						10,5,8,7
					],
					backgroundColor: [
						chartColors.orange,
						chartColors.yellow,
						chartColors.green,
						chartColors.blue,
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Scheduled',
					'Ongoing',
					'Completed',
					'Draft',

				]
			},
			options: {
				responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          labels: {
            fontColor: '#ffffff'
         }
        },


			}
		};
    ctx = document.getElementById('chart-area').getContext('2d');
		new Chart(ctx, config);


    var e = document.getElementById("barChartSimpleGradientsNumbers").getContext("2d");

    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB('#2CA8FF', 0.6));

    var a = {
      type: "bar",
      data: {
        labels: ["Email", "SMS", "Push Notification", "Web Push"],
        datasets: [{
          label: "Total",
          backgroundColor: gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [4, 5, 1, 3, 4]
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          bodySpacing: 4,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
          xPadding: 10,
          yPadding: 10,
          caretPadding: 10
        },
        responsive: true,
        scales: {
          yAxes: [{
            ticks: {
              display: true,
              fontColor: 'rgb(255 255 255 / 65%)',
              beginAtZero: true
            },
            gridLines: 0,
            gridLines: {
              drawTicks: false,
              display: false,
              drawBorder: true
            },
            scaleLabel: {
  							display: true,
  							labelString: 'Experiments',
                fontColor: 'rgb(255 255 255 / 65%)'
  						},
          }],
          xAxes: [{
            display: 1,
            gridLines: 0,
            ticks: {
              display: true,
              fontColor: 'rgb(255 255 255 / 65%)'
            },
            gridLines: {
              zeroLineColor: "transparent",
              drawTicks: false,
              display: false,
              drawBorder: true
            },
            scaleLabel: {
  							display: true,
  							labelString: 'Experiment Level',
                fontColor: 'rgb(255 255 255 / 65%)'
  						},
          },

        ]
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 15,
            bottom: 15
          }
        }
      }
    };

    var viewsChart = new Chart(e, a);
  },

  initGoogleMaps: function() {
    var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
    var mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e9e9e9"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 17
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 29
        }, {
          "weight": 0.2
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 18
        }]
      }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f5f5f5"
        }, {
          "lightness": 21
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#dedede"
        }, {
          "lightness": 21
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "visibility": "on"
        }, {
          "color": "#ffffff"
        }, {
          "lightness": 16
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "saturation": 36
        }, {
          "color": "#333333"
        }, {
          "lightness": 40
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#f2f2f2"
        }, {
          "lightness": 19
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 20
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#fefefe"
        }, {
          "lightness": 17
        }, {
          "weight": 1.2
        }]
      }]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: "Hello World!"
    });

    // To add the marker to the map, call setMap();
    marker.setMap(map);
  }
};


$(document).ready(function() {
    $('#myprojects').DataTable({searching: false});
    $('#allprojects').DataTable();
	 $('<label id="select-region">Region' +
        '<select class="form-control">'+
        '<option selected>All</option>'+
        '<option >APAC</option>'+
        '<option >Global</option>'+
        '<option >Europe</option>'+
        '<option >Latin America</option>'+
        '<option >North America</option>'+
        '</select>' +
        '</label>').appendTo(".dataTables_filter"); //example is our table id

    $(".dataTables_filter label").removeClass("pull-right");


} );
