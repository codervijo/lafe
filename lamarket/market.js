//const marketData =


let marketData;// = JSON.parse(document.getElementById('localMarketData').src);
loadJSON(document.getElementById('localMarketData').src,
         function(data) { console.log(data); marketData = data; },
         function(xhr) { console.error(xhr); }
);
const chartWidth = 500;  
const chartHeight = 300;
const barPadding = 5;
const barWidth = (chartWidth / marketData.length);
const scaleFactor = 2.5;

//const marketData = d3.json('#localMarketData');
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

function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}