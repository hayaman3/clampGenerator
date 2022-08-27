// let minParent = 22.5;
// let maxParent = 52.5;
// let minChild = 1;
// let maxChild = 3.5;
let minParent = ""
let maxParent = ""
let minChild = ""
let maxChild = ""
let slope = ""
let yAxis = ""
const form = document.getElementById('form');
const result = document.getElementById('result')


function getPrefferedValue(){
    slope = getSlope(minParent,maxParent,minChild,maxChild)
    yAxis = -minParent*slope + Number(minChild);
    let resultText = yAxis.toFixed(4).toString() +" + "+ (slope*100).toFixed(4).toString()+"vw"; 
    result.innerText = resultText;
}

function getSlope(minParent,maxParent,minChild,maxChild){
    console.log(maxChild-minChild)/(maxParent-minParent)
    return (maxChild-minChild)/(maxParent-minParent)
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page refresh
    const formData = new FormData(form);
    minParent = formData.get("min-parent");
    maxParent = formData.get("max-parent");
    maxChild = formData.get("max-child");
    minChild = formData.get("min-child");
    getPrefferedValue()
})
