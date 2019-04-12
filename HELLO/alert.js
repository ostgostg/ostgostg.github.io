$(document).ready(function(){
$("button").click(function(){
$("#subs span").text("You subscribed");
$("#subs").css({"padding-left": "100px", "background-color": "#8a8c91", "color": "#000", "border": "#8a8c91"});


});
$("#sleeps").mouseover(function(){
$("#sleeps span").text("Zzzzz");


});
$("#sleep2").mouseover(function(){
$("#sleep2 span").text("Zzzzz");


});
$("#sleeps").mouseleave(function(){
$("#sleeps span").text("sleep");
$("#sleeps").css({"background-color":"#1666ff"})

});
$("#sleep2").mouseleave(function(){
$("#sleep2 span").text("sleep");
$("#sleep2").css({"background-color":"#1666ff"})

});

$("#sleeps").css({"background-color":"#1666ff"})



$("#sleep2").css({"background-color":"#1666ff"})



});


function save(amount, apr, years, zipcode){
  if(window.localStorage){
    localStorage.loan_amount = amount;
localStorage.loan_apr = apr;
localStorage.loan_years = years;
localStorage.loan_zipcode = zipcode;
  }
}
window.onload = function(){
  if(window.localStorage && localStorage.loan_amount){
    document.getElementById("amount").value = localStorage.loan_amount;
    document.getElementById("apr").value = localStorage.loan_apr;
    document.getElementById("years").value = localStorage.loan_years;
    document.getElementById("zipcode").value = localStorage.loan_zipcode;
  }
};


