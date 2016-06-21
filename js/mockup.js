(function(app){
	'use strict'
	//Load charts
	app.google.charts.load('current', {'packages':['corechart', 'bar']});
    app.google.charts.setOnLoadCallback(drawPieChart);

    app.google.charts.setOnLoadCallback(drawStackedBarChart);

    function drawPieChart() {

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

	function drawStackedBarChart() {
		var data = new google.visualization.arrayToDataTable([
		  ['Galaxy', 'Distance', 'Brightness'],
		  ['Canis Major Dwarf', 8000, 23.3],
		  ['Sagittarius Dwarf', 24000, 4.5],
		  ['Ursa Major II Dwarf', 30000, 14.3],
		  ['Lg. Magellanic Cloud', 50000, 0.9],
		  ['Bootes I', 60000, 13.1]
		]);

		var options = {
		  bars: 'horizontal', // Required for Material Bar Charts.
		  legend : {position:'none'},
		  series: {
		    0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
		    1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
		  },
		  axes: {
		    x: {
		      distance: {titlePosition:'none'}, // Bottom x-axis.
		      brightness: {titlePosition:'none'} // Top x-axis.
		    }
		  },
		  hAxis : {
		  	gridlines : {count:-1},
		  	textPosition:'none',
		  	titlePosition:'none'
		  },
		  vAxis : {
		  	gridlines : {count:-1},
		  	textPosition:'none',
		  	titlePosition:'none'
		  }
		};

		var chart1 = new google.charts.Bar(document.getElementById('barchart1'));
		//var chart2 = new google.charts.Bar(document.getElementById('barchart2'));
		//var chart2 = new google.charts.Bar(document.getElementById('barchart3'));
		//chart1.draw(data, options);
		//chart2.draw(data, options);
		//chart3.draw(data, options);
	};
})(window);