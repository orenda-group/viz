looker.plugins.visualizations.add({
	create: function(element, config){
		element.innerHTML = "<h1>Ready to render!</h1>";
	},
	updateAsync: function(data, element, config, queryResponse, details, doneRendering){
		var html = "";
    
    var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: 450,
          title: { text: "Speed" },
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 400 },
          gauge: { axis: { range: [null, 500] } }
        }
      ];
		console.log(data)
		var layout = { width: 600, height: 400 };
		element.innerHTML = "<div id='tester' style='width:600px;height:250px;'></div>";
    Plotly.newPlot('tester', data, layout);

    doneRendering()
	}
});
