const marketData = [
{   
    "name": "Toyota RAV4",
    "model": "RAV4",
    "temperature": 50559
},
{   
    "name": "Toyota Prius C",
    "model": "PRI",
    "temperature": 12415
},
{   
    "name": "Toyota Prius (Liftback)",
    "model": "PRI",
    "temperature": 65630
},
{   
    "name": "Toyota Highlander",
    "model": "HIGH",
    "temperature": 16864
},
{   
    "name": "Toyota Camry",
    "model": "CAM",
    "temperature": 20985
},
{   
    "name": "Lexus RX400h (RX450h)",
    "model": "LX",
    "temperature": 8568
},
{   
    "name": "Kia Niro Hybrid",
    "model": "Kia",
    "temperature": 27195
},
{   
    "name": "Hyundai Sonata",
    "model": "HYU",
    "temperature": 10338
},
{   
    "name": "Hyundai Ioniq Hybrid",
    "model": "ION",
    "temperature": 10766
},
{   
    "name": "Honda Accord",
    "model": "HON",
    "temperature": 22008
},
{   
    "name": "Ford Fusion",
    "model": "FORD",
    "temperature": 57474
},]

const chartWidth = 500;  
const chartHeight = 300;
const barPadding = 5;
const barWidth = (chartWidth / marketData.length);
const scaleFactor = 2.5;

let svg = d3.select("body").append("svg")
    .attr("width", chartWidth)
    .attr("height", chartHeight)
    .attr("class", "bar-chart");

let barChart = svg.selectAll("rect")  
    .data(marketData)  
    .enter()  
    .append("rect")  
    .attr("y", function(dataPoint) {  
        return chartHeight - (dataPoint.temperature/1000)*scaleFactor;  
    })  
    .attr("height", function(dataPoint) {  
        return dataPoint.temperature*scaleFactor;  
    })  
    .attr("width", barWidth - barPadding*2)     
    .attr("transform", function (dataPoint, index) { 
         let translate = [barPadding + barWidth * index, 0];  
         return `translate(${translate})`;  
    })
    .attr("class", "rect");

svg.selectAll(".text") 
    .data(marketData)
    .enter()  
    .append("text")
        .attr("x", function (dataPoint, index) { 
             return barWidth * index + barWidth/2;  
        })
        .attr("y",function(dataPoint) {  
            return chartHeight - (dataPoint.temperature/1000)*scaleFactor + barPadding;  
        })
        .attr("class", "label-month")
        .attr("dy", "-1em")
        .text(function(dataPoint) { return dataPoint.model; });
    
svg.selectAll(".text") 
    .data(marketData)
    .enter()  
    .append("text")
        .attr("x", function (dataPoint, index) { 
             return barWidth * index + barWidth/2;  
        })
        .attr("y",function(dataPoint) {  
            return chartHeight - (dataPoint.temperature/1000)*scaleFactor + barPadding;  
        })
        .attr("dy", "1em")
        .attr("class", "label-temp")
        .text(function(dataPoint) { return formatTemperature(dataPoint.temperature/1000) })


function formatTemperature(temp){
    return `${Math.round(temp)}K`
}