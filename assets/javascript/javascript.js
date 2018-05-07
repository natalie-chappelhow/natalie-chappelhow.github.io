window.onload = function(){//creating an onload function. Once the window has loaded the function and the code within it will run

	var coronerData;//creating an empty variable

	var dataForChart = {//creating a variable as a JSON object to store information about the dataset to be used
		datasets: [{
			label: "killedUnlawfully",
			backgroundColor: "red"
		},
		{
			label: "killedLawfully",
			backgroundColor: "yellow"
		},

		{
			label: "lackofCareOrSelfNeglect",
			backgroundColor: "orange"
		},

		{
			label:"industrialDisease",
			backgroundColor: "blue"
		},

		{
			label:"accidentOrMisadventure",
			backgroundColor: "green"
		},

		{
			label:"naturalCauses",
			backgroundColor: "purple"
		}
		]
	};



/*Reference
https://www.w3schools.com/xml/ajax_intro.asp
https://www.w3schools.com/xml/dom_httprequest.asp
https://www.w3schools.com/js/js_json_parse.asp
*/

//When the page is loaded the Ajax function runs

function loadDoc() {//creating a function. When the function is called the code in the function will be ran
	var requestFile = new XMLHttpRequest(); //an XMLHttpRequest object is created that requests data
	requestFile.onreadystatechange = function() {//readyState property hold the status of the XML request. onreadystatechage event is triggered everytime the readyState changes
		//XMLHttpRequest object sends a request to the server. The server processes the request
		//During the server request, the readyState changes from 0 to 4
		if (this.readyState == 4 && this.status == 200) { //if the current readyState is equal to 4 (4 being that the request has finished and the response is ready) and the status is 200, the response is ready. The following block of code will run
			coronerData = JSON.parse(this.responseText); //the data whe it is recieved from the server will be as a string. JSON.parse() is used to parse the JSON data to a JavaScript object
			//console.log(coronerData);

			dataForChart.labels = createArray(coronerData, "year");//calling the labels for the x axis

			for (var i = 0; i < dataForChart.datasets.length; i++){//calling the dataset
				dataForChart.datasets[i].data = createArray(coronerData, dataForChart.datasets[i].label);
			}
			//console.log(dataForChart);
			chartBar();//calling the chartBar function. This function draws the chart
		}
	};
	requestFile.open("GET", "data.json", true);//gets the JSON file called data.json open(method, url, asynchronous (true)). GET is quicker than using POST. Sending using asynchronous means that the JavaScript does not need to wait for the server to respond
	requestFile.send();//sends the file back to the webpage (used with GET)
}

loadDoc();//calling the function

//action is performed
	function createArray(array, key){
		var callArray = [];//creating a variable which is an empty array

		for(var i = 0; i < array.length; i++){//using a for loop to loop through the array.
			callArray.push(array[i][key]);//adding a new element to the array using the push method
		}
		return callArray;//returns the array
	}

//Reference - http://www.chartjs.org/docs/latest/
	var ctx = document.getElementById('barChart').getContext('2d'); //creating a 2D object so that you are able to start drawing on the canvas element

	function chartBar(){//creating a function which draws the chart when it is called (the code in the function is ran)
		var chart = new Chart(ctx, {//creating a new chart
		    type: 'bar',//selecting the type of chart wanted
		    data: dataForChart, //calling dataset
			    options:{
			    	title:{//adding a title
			    		display: true,//displaying a title
			    		text: "Inquest Conclusions Recorded in England and Wales 2010-2015",//choosing the text for the title
			    		fontSize:20,//changing the font size of the title
			    	}
			    },
		});
	}
}