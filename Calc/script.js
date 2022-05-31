function plus() {  
    var value1, value2, result;
    value1 = document.getElementById('value1').value; 
    value1 = parseInt(value1); 
    value2 = document.getElementById('value2').value;
    value2 = parseInt(value2);
    result = value1 + value2; 
    document.getElementById('end').innerHTML = result; 
}

function minus() {
    var value1, value2, result;
    value1 = document.getElementById('value1').value;
    value1 = parseInt(value1);
    value2 = document.getElementById('value2').value; 
    value2 = parseInt(value2);
    result = value1 - value2;
    document.getElementById('end').innerHTML = result;
}

function multiply() {
    var value1, value2, result;
    value1 = document.getElementById('value1').value;
    value1 = parseInt(value1);
    value2 = document.getElementById('value2').value; 
    value2 = parseInt(value2);
    result = value1 * value2;
    document.getElementById('end').innerHTML = result;
}

function divide() {
    var value1, value2, result;
    value1 = document.getElementById('value1').value;
    value1 = parseInt(value1);
    value2 = document.getElementById('value2').value;  
    value2 = parseInt(value2);
    result = value1 / value2;
    document.getElementById('end').innerHTML = result;
}