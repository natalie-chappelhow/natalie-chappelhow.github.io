//creating a mixed chart using a bar chart and a line chart. For a mixed chart to be created a basic chart needs to be initialised
window.onload = function(){	//http://www.chartjs.org/docs/latest/charts/mixed.html. This Website was used as reference on how to create a mixed chart using Chart.js. For these charts getting the data from a JSON file did not work so a JSON object had to be included in the file for the data to be included for the chart
	new Chart(document.getElementById('barChart'),{ //creating a chart in the canvas element
		type:'bar',//determing the chart type. For a mixed chart with a bar and line chart
		data:{
			labels:["2010", "2011", "2012", "2013", "2014", "2015"], //creating labels for the x axis
			datasets:[{
				label: "Male Inquests",//the label for the dataset
				data: [19931, 20041, 20317, 21275, 19338, 21307],//the data for the dataset
			fill:false,//when the line chart has been created a background' appears. This stos this 'background' from appearing
			backgroundColor:"blue",//changing the colour of the line to blue
			borderColor:"blue",
			pointStyle: 'rectRot',//changing the point style to a diamond shape
			pointRadius: 8,
			type:'line'//changing the type of chart to line
			}, {

			label: "Female Inquests",
			data: [9454, 9817, 9806, 10304, 9802, 14166],
			fill:false,
			backgroundColor:"pink",
			borderColor:"pink",
			pointStyle: 'rectRot',
			pointRadius: 8,
			type:'line'
			}, {

			/*label: "Total Inquests",
			data: [29385, 29858, 30123, 31579, 29153, 35473],
			fill:false,
			backgroundColor:"red",
			borderColor:"red",
			type: 'bar'
			*/
			label: "Killed Unlawfully",
			data: [238, 229, 152, 154, 158, 141],
			fill:false,
			backgroundColor:"red",
			borderColor:"red",
			type: 'bar'//changing the type of chart to bar
			}, {

			label: "Killed Lawfully",
			data: [10, 8, 6, 7, 6, 3],
			fill:false,
			backgroundColor:"green",
			borderColor:"green",
			type: 'bar'
			}, {

			label: "Lack of Care or Self Neglect",
			data: [42, 50, 33, 31, 40, 18],
			fill:false,
			backgroundColor:"yellow",
			borderColor:"yellow",
			type: 'bar'
			}, {

			label: "Industrial Disease",
			data: [2560, 2569, 2756, 2766, 2873, 2733],
			fill:false,
			backgroundColor:"brown",
			borderColor:"brown",
			type: 'bar'
			}, {

			label: "Accident or Misadventure",
			data: [8113, 7775, 7705, 8166, 7941, 7977],
			fill:false,
			backgroundColor:"purple",
			borderColor:"purple",
			type: 'bar'
			},{

			label: "Natural Causes",
			data: [8382, 8818, 8849, 8881, 4873, 11043],
			fill:false,
			backgroundColor:"orange",
			borderColor:"orange",
			type: 'bar'
			}, {

			label: "Total Inquests",
			data: [29385, 29858, 30123, 31579, 29153, 35473],
			fill:false,
			backgroundColor:"grey",
			borderColor:"grey",
			hoverBorderWidth:5,
			type: 'bar'
			}
			]
		},
		options:{ //setting options for the chart
			//responsive:true,
			elements:{
				line:{
					tension:0//disabling bezier curve for the lines so the lines are straight rather than a curve. This will improve render times as drawing a bezier curve using canvas takes more rendering than a straight line.
					}
			},
			animation:{
				duration:5000,//slowing down the animation for the data visual appearing when the page is loaded and reloaded
				easing:'linear'
			},
			title:{//adding a title to the charts
				display:true,//ensuring that the title displays on the page
				text: "Inquest Conclusions Recorded in England and Wales 2010-2015",
				fontSize:20,
			},

			legend:{
				position: 'right',//positioning the legend/key to the right of the data visual
				labels:{
					padding: 15//adding a padding to the labels to make it clearer for the user to read them
				}
			},
			//http://www.chartjs.org/docs/latest/axes/labelling.html. Used to look at how to create labels for the axes.
			scales:{
				xAxes:[{//creating label for the x axis
					scaleLabel:{
						display: true,//displays the axis label
						labelString: "Years",//setting the text tobe displayed
						fontSize:15//changing the font size of the text
					}
				}],
				yAxes:[{
					scaleLabel:{
						display: true,
						labelString: "Number of Inquest Conclusions",
						fontSize:15
					}
				}]
			}
		}



		/* getting two line charts to appear on the page
		var ctx = document.getElementById('barChart').getContext('2d');

		var maleDataset = {
			label: "Male Inquests",
			data: [19931, 20041, 20317, 21275, 19338, 21307],
			fill:false,
			backgroundColor:"blue",
			borderColor:"blue"

	};

		var femaleDataset = {
			label: "Female Inquests",
			data: [9454, 9817, 9806, 10,304, 9802, 14166],
			fill:false,
			backgroundColor:"pink",
			borderColor:"pink"
	};



		var dataCoroner = {
			labels:["2010", "2011", "2012", "2013", "2014", "2015"],
			datasets: [maleDataset, femaleDataset]
		}


		//creating two line charts
		/*var lineChart = new Chart(ctx, {
			type:'line',
			data: dataCoroner,
		});
		*/

	});
}