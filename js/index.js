/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


// DOM

const convertBtn = document.getElementById("convert-btn")
const convertNum = document.getElementById("convert-number")
const numberValue = document.querySelectorAll(".number-value")
const feetResult = document.getElementById("feet-conversion-result")
const metersResult = document.getElementById("meters-conversion-result")
const gallonsResult = document.getElementById("gallons-conversion-result")  
const litersResult = document.getElementById("liters-conversion-result")  
const poundsResult = document.getElementById("pounds-conversion-result")    
const kilogramsResult = document.getElementById("kilograms-conversion-result")    


// I need to make the calculation for the convertNum when the convertBtn is clicked   
// for that i need to set a fix value for the convertNum and a sample 
// I need to create a function that take the input value and then make the calculation 



convertBtn.addEventListener("click", function(){
    const number = parseFloat(convertNum.value)
    const convertToFeet = number * 3.281
    const convertToMeters = number / 3.281
    const convertToGallons = number * 0.264
    const convertToLiters = number / 0.264
    const convertToPounds = number * 2.04
    const convertToKilograms = number / 2.04
    
    numberValue.forEach(element => {
        element.innerHTML = number
    })
    
    feetResult.innerHTML = convertToFeet.toFixed(3)
    metersResult.innerHTML = convertToMeters.toFixed(3)
    gallonsResult.innerHTML = convertToGallons.toFixed(3)    
    litersResult.innerHTML = convertToLiters.toFixed(3)    
    poundsResult.innerHTML = convertToPounds.toFixed(3)    
    kilogramsResult.innerHTML = convertToKilograms.toFixed(3)    
})

// function render(convert) {
//     const number = parseInt(convertNum.value)
//     const convert = number *3.2808
// }


/* <div >
<h3 class="color-accent">Length (Meter/Feet)</h3>
<p> <span class="number-value">20</span> meters = <span id="feet-conversion-result"> 65.616 </span> feet | <span class="number-value">20</span> feet = <span id="meters-conversion-result"> 6.096 </span> meters</p>
</div>

<div id="volume-container">
<h3 class="color-accent">Volume (Liters/Gallons)</h3>
<p><span class="number-value">20</span> liters = <span id="gallons-conversion-result"></span> 5.284 </span>gallons | <span class="number-value">20</span> gallons = <span id="liters-conversion-result"> 75.708 </span> liters</p>
</div>

<div id="mass-container">
<h3 class="color-accent">Mass (Kilograms/Pounds)</h3>
<p><span class="number-value">20</span> kilos = <span id="pounds-conversion-result"> 44.092 </span> pounds | <span class="number-value">20</span> pounds = <span id="kilos-conversion-result"> 9.072 </span> kilos</p>
</div> */
