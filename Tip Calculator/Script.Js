// Script.JS

// Custom Function
function CalculateTip() {
    
    //Store the data of inputs
    var BillAmount = document.getElementById("BillAmount").value;
    var ServiceQuality = document.getElementById("ServiceQuality").value;
    var NumPeople = document.getElementById("TotalPeople").value;
    
    //Quick Validation
    if(BillAmount === "" || ServiceQuality === 0) {
            return window.alert("Please fill the labels to use the Tip Calculater!");//This will prevent the function from continuing
       }
    
    //Check to see if this input is empty or less then or equal to 1
    if(NumPeople === "" || NumPeople <= 1) {
            NumPeople = 1;
        
            document.getElementById("Each").style.display = "none";
            
        } else {
            
            document.getElementById("Each").style.display = "block";
       }
    
    //Do some math!
    var Total = (BillAmount *ServiceQuality) / NumPeople;
    Total = Math.round(Total * 100) / 100;
    Total = Total.toFixed(2);
    window.alert(Total);
    
    
    
    //Display the tip!
    document.getElementById("TotalTip").style.display = "block";
    document.getElementById("Tip").innerHTML = Total;
    
}

//Hide Tip Amout on Load
document.getElementById("TotalTip").style.display = "none";
document.getElementById("Each").style.display = "none";

//Clicking the button calls our custin function
document.getElementById("Calculate").onclick = function() { CalculateTip(); };