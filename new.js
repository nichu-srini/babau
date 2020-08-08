var app1 = document.getElementById("num1");
var app2 = document.getElementById("num2");
var ans = document.getElementById("result");
var form = document.getElementById("film");

form.addEventListener('submit',function(event){
    if(!app1.value || !app2.value){
        alert("pls enter a value correctly");

    }
    else{
    var x = parseFloat(app1.value);
    var y = parseFloat(app2.value);

    var answer =x/y;
    var percent = answer * 100;

    result.innerText = "Answer" + percent +"%";
   
    event.preventDefault();
    }
})