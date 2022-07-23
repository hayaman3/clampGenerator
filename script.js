let minWidth = 22.5;
let maxWidth = 52.5;
let minFontSize = 1;
let maxFontSize = 3.5;

function getPrefferedValue(){
    let slope = getSlope(minWidth,maxWidth,minFontSize,maxFontSize)
    console.log("slope: "+slope);
    let yAxis = -minWidth*slope + minFontSize;
    console.log("y-axis: "+yAxis);
    return yAxis.toString() +" + "+ (slope*100).toString()+"vw"; 
}

function getSlope(minWidth,maxWidth,minFontSize,maxFontSize){
    return (maxFontSize-minFontSize)/(maxWidth-minWidth)
}