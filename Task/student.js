function findResult(){
    let name = document.getElementById("txtName").value;
    let email = document.getElementById("txtEmail").value;
    let phone = document.getElementById("txtPhone").value;
    let physics = parseInt(document.getElementById("txtPhysics").value);
    let chemistry = parseInt(document.getElementById("txtChemistry").value);
    let math = parseInt(document.getElementById("txtMath").value);
    let biology = parseInt(document.getElementById("txtBiology").value);

    let sum = physics + chemistry + math + biology;

    let average = (physics + chemistry + math + biology)/4;

    let percentage = sum/400*100;

    let grades = "";
    if (percentage <= 100 && percentage >= 80) { 
      grades = "A"; 
    } else if (percentage <= 79 && percentage >= 60) { 
      grades = "B"; 
    } else if (percentage <= 59 && percentage >= 40) { 
      grades = "C"; 
    } else { 
      grades = "D"; 
    } 

    // Checking the condition for the fail and pass 
    let status = "";
    if (percentage >= 39.5) { 
        
        status = "PASS - Congratulation";
      } else { 
        
        status = "FAIL - Sorry, Please Try again";
      } 
    

    document.getElementById('l1').innerHTML = name;
    document.getElementById('l2').innerHTML = email;
    document.getElementById('l3').innerHTML = phone;
    document.getElementById('result').innerHTML = sum;
    document.getElementById('resultAverage').innerHTML = average;
    document.getElementById('resultPercentage').innerHTML = percentage;
    document.getElementById('grade').innerHTML = grades;
    document.getElementById('statusDetails').innerHTML = status;
    
}