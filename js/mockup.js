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
          width:'350px'
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
			legend : {position:'none'}
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
			legend : {position:'none'}
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
			legend : {position:'none'}
		};

		var chart3 = new google.charts.Bar(document.getElementById('barchart3'));
		chart3.draw(data, options);
	};

	//Init
	init();

	function init(){
		var app = new prototypeApp();

		app.chartCallBack(app.drawPieChart);
		app.chartCallBack(app.drawStackedBarChart1);
		app.chartCallBack(app.drawStackedBarChart2);
		app.chartCallBack(app.drawStackedBarChart3);

		//Datepicker
		$('#pickerToUpdate1').datetimepicker({
	        format: 'DD/MM/YYYY'
	    });
	}
	
})(window);