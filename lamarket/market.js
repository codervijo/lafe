
let marketData;
let barWidth;
d3.json(document.getElementById('localMarketData').src,
        function(data) {
            marketData = data;

            const chartWidth = 700;  
            const chartHeight = 350;
            const barPadding = 5;
            const scaleFactor = 2.5;
            barWidth = (chartWidth / marketData.length);

            let vals = marketData.map(function(o) { return o.temperature});
            let maxv  = d3.max(vals);

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
                                  return chartHeight - (normalize(dataPoint.temperature, maxv))*scaleFactor;  
                               })  
                              .attr("height", function(dataPoint) {  
                                  return normalize(dataPoint.temperature*scaleFactor, maxv);  
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
                   return chartHeight - (normalize(dataPoint.temperature, maxv))*scaleFactor + barPadding;  
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
                   return chartHeight - (normalize(dataPoint.temperature, maxv))*scaleFactor + barPadding;  
                })
               .attr("dy", "1em")
               .attr("class", "label-temp")
               .text(function(dataPoint) { return formatDatapoint(normalize(dataPoint.temperature, maxv)) })

            } 
    )

function normalize(dataPoint, max) {
    return max > 100000 ? dataPoint/5000 : dataPoint/1000;
}

function formatDatapoint(temp){
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