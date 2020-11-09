$(function () {
  // INITIALIZE DATEPICKER PLUGIN
  $(".datepicker").datepicker({
    clearBtn: true,
    format: "dd/mm/yyyy",
  });
  $('#datepicker').datepicker({

          });
  // FOR DEMO PURPOSE
  $("#reservationDate").on("change", function () {
    var pickedDate = $("input").val();
    $("#pickedDate").html(pickedDate);
  });

  // Range Slider
  $(document).ready(function () {
    $(".single-slider").jRange({
      from: 0,
      to: 100,
      step: 10,
      scale: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      format: "%s",
      width: 450,
      showLabels: true,
      snap: true,
    });
  });

  // Enable Disable Screen 1
  $(function () {
    $("[name=proceed]").click(function () {
      $("#enable-val2").hide();
      $("#enable-val" + $(this).val()).show("slow");
    });
  });

  // Enable Disable Screen 2
  $(function () {
    $("[name=recommendnumber]").click(function () {
      $(".recommendnumber").hide();
      $("#hide-" + $(this).val()).show("slow");
    });

    $("#enableexpectedearnings").click(function () {
      $(".expectedearnings").show("slow");
    });
  });

  // Enable Disable Screen 3
  $(function () {
    $("[name=noteststores]").click(function () {
      $("#hide-11").hide();
      $("#hide-1" + $(this).val()).show("slow");
    });

    $("[name=teststores]").click(function () {
      $("#disable-1").hide();
      $("#disable-" + $(this).val()).show("slow");
    });

    $("#actualtestsites").click(function () {
      $(".samplecalc").show("slow");
    });

    $("[name=noofzone]").click(function () {
      $("#noofzone-2").hide();
      $("#noofzone-" + $(this).val()).show("slow");
    });

    $("[name=matchtest]").click(function () {
      $("#matchtest-2").hide();
      $("#matchtest-" + $(this).val()).show("slow");
    });
  });

// Datatable
  $(function() {
    $(document).ready(function() {
      $('.zonelist').DataTable({
        "paging":   false,
        "info":     false,
        "searching" : false
      });
    });
  });

  $(function() {
    $(document).ready(function() {
      $('#table2').DataTable();
      $('#summary').DataTable({
        "paging":   true,
        "info":     false,
        "searching" : true,
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
      });
    });
  });

  // Bootstrap Multiselect
  $(document).ready(function () {
    $(".boot-multiselect").multiselect({
      nonSelectedText: 'Select from custom set',
      includeSelectAllOption: true,
      numberDisplayed: 1,
      enableFiltering: true,
      templates: {
        li: '<li><a class="dropdown-item"><label class="p-2"></label></a></li>',
        ul: ' <ul class="multiselect-container dropdown-menu p-3 m-0  dark-bg"></ul>',
        button: '<button type="button" class="multiselect dropdown-toggle text-left w-100" data-toggle="dropdown" data-flip="true"><span class="multiselect-selected-text"></span> <b class="fa fa-angle-down"></b></button>',
        filter: '<li class="multiselect-item filter"><div class="input-group m-0 p-0"><input class="form-control m-0 multiselect-search" type="text"></div></li>',
        filterClearBtn: '<span class="input-group-btn"><button class="btn multiselect-clear-filter" type="button"><i class="fa fa-remove"></i></button></span>'
    },
    buttonContainer: '<div class="dropdown" />',
    buttonClass: 'btn btn-outline-theme'
    });
  });

// chart
$(document).ready(function () {
  var lineoptions = {
    series: [
    {
      name: "Test",
      data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
      name: "Control",
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#c9802a', '#0095ce'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'CTR',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  grid: {
    borderColor: 'transparent',
    row: {
      colors: ['#2b3c46', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
      format:'HH:mm'
    },
    y: {
      formatter:(value) => `${value}`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  yaxis: {
    min: 5,
    max: 40,
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5,
    labels: {
      colors: '#bfb09b'
  },
  }
  };
  var linechart = new ApexCharts(document.querySelector(".linechart"), lineoptions);
  linechart.render();

  var funnellineoptions = {
    series: [
    {
      name: "Test",
      data: [3.7,
        3.7,
        3.8,
        3.8,
        4.1,
        4.3,
        4.3]
    },
    {
      name: "Control",
      data: [3.7, 3.8,
        3.6,
        3.6,
        3.7,
        3.8,
        3.7]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#c9802a', '#0095ce'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'CTR',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  grid: {
    borderColor: 'transparent',
    row: {
      colors: ['#2b3c46', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
      format:'HH:mm'
    },
    y: {
      formatter:(value) => `${value}`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  yaxis: {
    min: 0,
    max: 10,
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5,
    labels: {
      colors: '#bfb09b'
  },
  }
  };

  var linechartdelivery = new ApexCharts(document.querySelector(".linechartdelivery"), funnellineoptions);
  linechartdelivery.render();

  var CSATlineoptions = {
    series: [
      {
        name: "Test",
        data: [72,
          75,
          76,
          78,
          78,
          81,
          81]
      },
      {
        name: "Control",
        data: [65,
          67,
          68,
          68,
          69,
          71,
          71]
      }
    ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#c9802a', '#0095ce'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'CSAT – subscriber',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  grid: {
    borderColor: 'transparent',
    row: {
      colors: ['#2b3c46', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
      format:'HH:mm'
    },
    y: {
      formatter:(value) => `${value}`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  yaxis: {
    min: 50,
    max: 100,
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5,
    labels: {
      colors: '#bfb09b'
  },
  }
  };
  var linechartsurvey = new ApexCharts(document.querySelector(".linechartsurvey"), CSATlineoptions);
  linechartsurvey.render();

  var baroptions = {
    series: [{
      name: "Lift",
      data: [0,0,4,4,11,11,11]
  }],
    chart: {
      toolbar: {
        show: false,
      },
    height: 350,
    type: 'line',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  colors: ['#c9802a'],
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: '#2b3c46',
  },
  legend: {
    show: false
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
    },
    y: {
      formatter:(value) => `${value}%`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],

    labels: {
      style: {
        colors: '#bfb09b'
      }
    }
  },
  title: {
    text: '% Lift',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  yaxis: {
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },

  };
  var barchart = new ApexCharts(document.querySelector(".barchart"), baroptions);
  barchart.render();

  var funnelbaroptions = {
    series: [{
      name: "Lift",
      data: [-1,-2,4,6,11,15,16]
  }],
    chart: {
      toolbar: {
        show: false,
      },
    height: 350,
    type: 'line',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  colors: ['#c9802a'],
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: '#2b3c46',
  },
  legend: {
    show: false
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
    },
    y: {
      formatter:(value) => `${value}%`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],

    labels: {
      style: {
        colors: '#bfb09b'
      }
    }
  },
  title: {
    text: '% Lift',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  yaxis: {
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },

  };
  var barchartdelivery = new ApexCharts(document.querySelector(".funnelbarchartdelivery"), funnelbaroptions);
  barchartdelivery.render();

  var surveybaroptions = {
    series: [{
      name: "Lift",
      data: [10,11,11,13,12,12,12]
  }],
    chart: {
      toolbar: {
        show: false,
      },
    height: 350,
    type: 'line',
    events: {
      click: function(chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  colors: ['#c9802a'],
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: '#2b3c46',
  },
  legend: {
    show: false
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
    },
    y: {
      formatter:(value) => `${value}%`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],

    labels: {
      style: {
        colors: '#bfb09b'
      }
    }
  },
  title: {
    text: '% Lift',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  yaxis: {
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },

  };
  var barchartsurvey = new ApexCharts(document.querySelector(".barchartsurvey"), surveybaroptions);
  barchartsurvey.render();


  var reversedbaroptions = {
    series: [{
      name: "Positive Lift",
      data: [7.6, 6.3, 5.1, 4.7, 4.1]
  }],
  title: {
    text: 'Positive Lift %',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
    },
    y: {
      formatter:(value) => `${value}%`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
    chart: {
      toolbar: {
        show: false,
      },
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: true,
    formatter:(value) => `${value}%`

  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: ['Orders Per Driver', 'Average Driver Earning', 'Offer Acceptance', 'Bonus Amount', 'Orders Accepted with RR'],
  },
  grid: {
    borderColor: 'transparent',
  },
  yaxis: {
    reversed: true,
    labels: {
      style: {
          colors: '#bfb09b'
      },
    },
    axisTicks: {
      show: false,
    }
  },
  colors: ['#3dbb58'],
  };
  var reversedbarchart = new ApexCharts(document.querySelector(".reversedbarchart"), reversedbaroptions);
  reversedbarchart.render();

  var reversedbarchartfeaturesoptions = {
    series: [{
      name: "Positive Lift",
      data: [4.1, 3.7, 3.1, 2.6]
  }],
  title: {
    text: 'Positive Lift %',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
    },
    y: {
      formatter:(value) => `${value}%`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
    chart: {
      toolbar: {
        show: false,
      },
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: true,
    formatter:(value) => `${value}%`

  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: ['OS - IOS', 'Tenure 12-18 Months', '% Accessory Share > 25%', 'Plan - Bundle'],
  },
  grid: {
    borderColor: 'transparent',
  },
  yaxis: {
    reversed: true,
    labels: {
      style: {
          colors: '#bfb09b'
      },
    },
    axisTicks: {
      show: false,
    }
  },
  colors: ['#3dbb58'],
  };
  var reversedbarchartfeatures = new ApexCharts(document.querySelector(".reversedbarchartfeatures"), reversedbarchartfeaturesoptions);
  reversedbarchartfeatures.render();

  var basicbaroptions = {
    series: [{
    name: "Negative Lift",
    data: [4.5, 3.7, 3.4, 2.4, 1]
  }],
    chart: {
      toolbar: {
        show: false,
      },
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: true,
    formatter:(value) => `${value}%`
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: ['Order Expired', 'Orders Dropped', 'Third Party Orders	', 'Broadcast Acceptance', 'Store Wait Time'],
  },
  title: {
    text: 'Negative Lift %',
    align: 'right',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  yaxis: {
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
    },
    y: {
      formatter:(value) => `${value}%`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  grid: {
    borderColor: 'transparent',
  },
  colors: ['  #f35448'],
  };
  var basicbarchart = new ApexCharts(document.querySelector(".basicbarchart"), basicbaroptions);
  basicbarchart.render();

  var basicbarchartfeaturesoptions = {
    series: [{
    name: "Negative Lift",
    data: [3.9,3.1,2.5,1.5]
  }],
    chart: {
      toolbar: {
        show: false,
      },
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: true,
    formatter:(value) => `${value}%`
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: ['OS - Android', 'Tenure < 6 Months', '% Accessory Share < 10%', 'Plan – Non Bundle'],
  },
  title: {
    text: 'Negative Lift %',
    align: 'right',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  yaxis: {
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
    },
    y: {
      formatter:(value) => `${value}%`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  grid: {
    borderColor: 'transparent',
  },
  colors: ['  #f35448'],
  };
  var basicbarchartfeatures = new ApexCharts(document.querySelector(".basicbarchartfeatures"), basicbarchartfeaturesoptions);
  basicbarchartfeatures.render();

  var KPIlineoptions = {
    series: [
    {
      name: "Control",
      data: [42, 43, 44, 44, 45, 45.5, 46]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#c9802a'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'ARPU',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  grid: {
    borderColor: 'transparent',
    row: {
      colors: ['#2b3c46', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
      format:'HH:mm'
    },
    y: {
      formatter:(value) => `${value}`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  yaxis: {
    tickAmount: 10,
    min: 35,
    max: 50,
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5,
    labels: {
      colors: '#bfb09b'
  },
  }
  };
  var KPIlinechart = new ApexCharts(document.querySelector(".KPIlinechart"), KPIlineoptions);
  KPIlinechart.render();


  var ARPUKPIlineoptions = {
    series: [
    {
      name: "Test",
      data: [41, 41, 42, 43, 45,46,46]
    },
    {
      name: "Control",
      data: [41, 41, 41, 41, 41, 41, 42]
    }
  ],
    chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#0095ce', '#c9802a'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'ARPU',
    align: 'left',
    style: {
      fontWeight:  'normal',
      color:  '#ffe2c0'
    },
  },
  grid: {
    borderColor: 'transparent',
    row: {
      colors: ['#2b3c46', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  tooltip: {
    enabled: true,
    style: {
      fontSize: '12px'
    },
    x: {
      show: true,
      format:'HH:mm'
    },
    y: {
      formatter:(value) => `${value}`
    },
    marker: {
      show: false,
    },
    theme:'dark'
  },
  xaxis: {
    categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  yaxis: {
    tickAmount: 10,
    min: 30,
    max: 50,
    labels: {
      style: {
          colors: '#bfb09b'
      },
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5,
    labels: {
      colors: '#bfb09b'
  },
  }
  };
  var  ARPUKPIlinechart = new ApexCharts(document.querySelector(".ARPUKPIlinechart"), ARPUKPIlineoptions);
  ARPUKPIlinechart.render();
});


  $('.dropdown-menu').find('form').click(function (e) {
    e.stopPropagation();
  });

// Login Slider
let $slides, interval, $selectors, $btns, currentIndex, nextIndex;

let cycle = index => {
  let $currentSlide, $nextSlide, $currentSelector, $nextSelector;

  nextIndex = index !== undefined ? index : nextIndex;

  $currentSlide = $($slides.get(currentIndex));
  $currentSelector = $($selectors.get(currentIndex));

  $nextSlide = $($slides.get(nextIndex));
  $nextSelector = $($selectors.get(nextIndex));

  $currentSlide.removeClass("active").css("z-index", "0");

  $nextSlide.addClass("active").css("z-index", "1");

  $currentSelector.removeClass("current");
  $nextSelector.addClass("current");

  currentIndex =
  index !== undefined ?
  nextIndex :
  currentIndex < $slides.length - 1 ?
  currentIndex + 1 :
  0;

  nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(() => {
  currentIndex = 0;
  nextIndex = 1;

  $slides = $(".slide");
  $selectors = $(".selector");
  $btns = $(".btn");

  $slides.first().addClass("active");
  $selectors.first().addClass("current");

  interval = window.setInterval(cycle, 6000);

  $selectors.on("click", e => {
    let target = $selectors.index(e.target);
    if (target !== currentIndex) {
      window.clearInterval(interval);
      cycle(target);
      interval = window.setInterval(cycle, 6000);
    }
  });

  $btns.on("click", e => {
    window.clearInterval(interval);
    if ($(e.target).hasClass("prev")) {
      let target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
      cycle(target);
    } else if ($(e.target).hasClass("next")) {
      cycle();
    }
    interval = window.setInterval(cycle, 6000);
  });
});

});

// Redirect
function redirectDesign() {
  location.replace("https://tredence-github.github.io/test-and-learn-platform/design.html")
}
