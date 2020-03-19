// this is your custom javascript code
d3.select("body").append("svg")
    .attr('viewbox', '0 0 720 360')
    .attr('width', '720')
    .attr('height', '360');

d3.select(window).on("load", changeCircle);

d3.select("#btn-wrapper")
.append("button")
.text("Circles")
.on("click", changeCircle)


d3.select("#btn-wrapper")
.append("button")
.text("Squares")
.on("click", changeRect)


function changeRect(){

    d3.selectAll("circle").remove()

    for(let i=0;i<cities.length;i++){
        let latitude = cities[i].latitude;
        let longitude = cities[i].longitude;
        let positieX = (~~longitude + 180)*2;
        let positieY = (90-~~latitude)*2;

        d3.select("svg")
        .append("rect")
        .attr("x", positieX)
        .attr("y", positieY)
        .attr("width", 1.5)
        .attr("height", 1.5)
        .attr("fill", "lightblue")
    }
}

function changeCircle(){

    d3.selectAll("rect").remove()

    for(let i=0;i<cities.length;i++){
        let latitude = cities[i].latitude;
        let longitude = cities[i].longitude;
        let positieX = (~~longitude + 180)*2;
        let positieY = (90-~~latitude)*2;

        d3.select("svg")
        .append("circle")
        .attr("cx", positieX)
        .attr("cy", positieY)
        .attr("r", .5)
        .attr("fill", "lightblue")
    }
}
