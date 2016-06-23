(function(app){
	'use strict'

	//CLass
	function prototypeApp(){
		//Constructor
		app.google.charts.load('current', {'packages':['corechart', 'bar']});
	}

	prototypeApp.prototype.init = function(){
	}
	prototypeApp.prototype.chartCallBack = function(fn){
		app.google.charts.setOnLoadCallback(fn);
	}
	prototypeApp.prototype.drawPieChart = function(){
		var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     7],
          ['Eat',      4],
        ]);

        var options = {
          //title: 'My Daily Activities'
          chartArea : {top:'10', width:'100%'},
          legend : {position:'none'},
          tooltip: { trigger: 'none' },
          height:'350px',
          width:'350px',
          colors: ['#ff6412', '#171580']
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
	}
	prototypeApp.prototype.drawStackedBarChart1 = function(){
		var data = google.visualization.arrayToDataTable([
	        [' ', 'Value', 'Value in %'],
	        ['Passende afgeronde kandidaten', 8175000, 8008000],
	        ['Gesprek ingepland', 3792000, 3694000],
	        ['Gesprek plaats gevonden', 2695000, 2896000],
	        ['Neit opgevolgd', 2099000, 1953000]
	      ]);

		var options = {
			chart: {
			//title: 'Population of Largest U.S. Cities'
			},
			hAxis: {
				title: 'Total Population',
				titlePosition : 'none',
				minValue: 0,
			},
			vAxis: {
				title: 'City'
			},
			bars: 'horizontal',
			legend : {position:'none'},
			colors: ['#ff6412', '#171580']
		};

		var chart1 = new google.charts.Bar(document.getElementById('barchart1'));
		chart1.draw(data, options);
	}
	prototypeApp.prototype.drawStackedBarChart2 = function(){
		var data = google.visualization.arrayToDataTable([
	        [' ', 'Value', 'Value in %'],
	        ['Gesproken kandidaten', 8175000, 8008000],
	        ['Kandidaat voorgesteld bij klant', 3792000, 3694000],
	        ['Sollicitatiegesprek ingepland', 2695000, 2896000],
	        ['Sollicitatiegesprek plaatsgevonden', 2099000, 1953000],
	        ['Niet opgevolgd', 2099000, 1953000],
	        ['Kandidaat geplaatst', 2099000, 1953000]
	      ]);

		var options = {
			chart: {
			//title: 'Population of Largest U.S. Cities'
			},
			hAxis: {
				title: 'Total Population',
				titlePosition : 'none',
				minValue: 0,
			},
			vAxis: {
				title: 'City'
			},
			bars: 'horizontal',
			legend : {position:'none'},
			colors: ['#ff6412', '#171580']
		};

		var chart2 = new google.charts.Bar(document.getElementById('barchart2'));
		chart2.draw(data, options);
	}
	prototypeApp.prototype.drawStackedBarChart3 = function(){
		var data = google.visualization.arrayToDataTable([
	        [' ', 'Value', 'Value in %'],
	        ['1e week', 8175000, 8008000],
	        ['1e maand', 3792000, 3694000],
	        ['3 maanden', 2695000, 2896000],
	        ['3 maandelijks', 2099000, 1953000]
	      ]);

		var options = {
			chart: {
			//title: 'Population of Largest U.S. Cities'
			},
			hAxis: {
				title: 'Total Population',
				titlePosition : 'none',
				minValue: 0,
			},
			vAxis: {
				title: 'City'
			},
			bars: 'horizontal',
			legend : {position:'none'},
			colors: ['#ff6412', '#171580']
		};

		var chart3 = new google.charts.Bar(document.getElementById('barchart3'));
		chart3.draw(data, options);
	}
	prototypeApp.prototype.initializeDateRange = function(ele){
		$(ele).daterangepicker({
            initialText: 'Selecteer periode',
            presetRanges: [{
                text: 'Afgelopen 7 dagen', //Last 7 days
                dateStart: function () {
                    return moment().subtract(7, 'days')
                },
                dateEnd: function () {
                    return moment()
                }
            }, {
                text: 'Deze week', //This week, Monday up to present day of the week.
                dateStart: function () {
                    return moment().startOf('week').add(1, 'days')
                },
                dateEnd: function () {
                    return moment()
                }
            }, {
                text: 'Vorige week', //Previous week. So Monday untill Sunday of the previous week
                dateStart: function () {
                    return moment().subtract(1, 'weeks').startOf('week')
                },
                dateEnd: function () {
                    return moment().subtract(1, 'weeks').endOf('week')
                }
            }, {
                text: 'Afgelopen 30 dagen', //Take the last 30 days. Should be the same as the standard view
                dateStart: function () {
                    return moment().subtract(29, 'days')
                },
                dateEnd: function () {
                    return moment()
                }
            }, {
                text: 'Vorige maand',
                dateStart: function () {
                    return moment().subtract(1, 'months').startOf('month')
                },
                dateEnd: function () {
                    return moment().subtract(1, 'months').endOf('month')
                }
            }, {
                text: 'Sinds 1e publicatie',
                dateStart: function () {
                    return moment(jobStart, "MMDDYYYY")
                },
                dateEnd: function () {
                    return moment(jobEnd, "MMDDYYYY")
                }
            }],
            applyButtonText: "Toepassen",
            applyOnMenuSelect: false
        });
	};

	//Init
	init();

	function init(){
		var app = new prototypeApp();

		app.chartCallBack(app.drawPieChart);
		app.chartCallBack(app.drawStackedBarChart1);
		app.chartCallBack(app.drawStackedBarChart2);
		app.chartCallBack(app.drawStackedBarChart3);
		app.initializeDateRange('#pickerToUpdate1');
	}
	
})(window);