let inputValue=0;
let buttonClicked=false;

$("#btn_1").click(function(){
    inputValue=document.getElementById("inCol").value;   
    if (buttonClicked!==true){
        $(".grBtn").css("background-color", inputValue);
        buttonClicked=true;
    }              
});

$("#rst").click(function(){
    $(".grBtn").css("background-color",""); 
    buttonClicked=false;
});


    
    