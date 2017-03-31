// var myArrayOfObjects = [
// 		{x: 100, y: 100},
// 		{x: 130, y: 120},
// 		{x: 80, y: 180},
// 		{x: 180, y:80}
// 	]

// myArrayOfObjects.forEach(function (d){
// 	console.log(d.x +", " + d.y);
// })

// d3.csv("data.csv", type, function(myArrayOfObjects){
// 	myArrayOfObjects.forEach(function(d){
// 		console.log(d.x  + d.y)
// 	})
// })

// function type(d){
// 	d.x = parseFloat(d.x);
// 	d.y = parseFloat(d.y);
// 	return d;
// }

// var scale= d3.scaleLinear()
	// .domain([0,1]) // Data space
	// .range([0,100]); // Pixel space

// console.log(scale.domain())
// console.log(scale.range())
// console.log(scale(0)); //prints 0
// console.log(scale(0.5)); //prints 50
// console.log(scale(1)); //prints 100

// var scale= d3.scaleOrdinal()
// 	.domain(["A","B","C"])
// 	.range(["Apple","Bannana","Coconut"]); 

// 	console.log(scale("A")) //returns Apple
// 	console.log(scale("B")) //returns Bannana
// 	console.log(scale("C")) //returns Coconut


// var scale= d3.scalePoint()
// 	.domain(["A","B","C","D"])
// 	.rangeRound([0,100]); //or .range

// 	console.log(scale("A")) //
// 	console.log(scale("B")) //
// 	console.log(scale("C")) //
// 	console.log(scale("D"))	//

// var svg= d3.select("body").append("svg")
// 	.attr("width",250)
// 	.attr("height",250);

// var rect = svg.append("rect")
// 	.attr("x",50)
// 	.attr("y",50)
// 	.attr("width",20)
// 	.attr("height",20);


// var data= [1,2,3,4,5];

var scale= d3.scaleLinear()
	.domain([1,5])
	.range([0, 200]);

var svg= d3.select("body").append("svg")
	.attr("width", 250)
	.attr("height",250);

function render(data, color){
	var rects = svg.selectAll("rect").data(data);


	rects.enter().append("rect");

	rects
		.attr("x", scale)
		.attr("y", 50)
		.attr("width", 20)
		.attr("height", 20)
		.attr("fill",color);

	rects.exit().remove()

} 
	setTimeout(function(){  render([1,2,3,4,5]); render([1,2.5,3,4,5],"red");}, 1000);
	setTimeout(function(){  render([1,2,3,4],"yellow");}, 2000);
	setTimeout(function(){  render([1,2,3],"blue");}, 3000);
	setTimeout(function(){  render([1,2,3,4,5]); render([1,2,3,4],"blue");}, 4000);
	// render([1,2,3,4,5],"yellow")
	// render([1,2,3,4],"red")
	// render([1,2,3],"blue")
	// render([1,2],"green")



