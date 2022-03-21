function checkLuck(input){
    document.getElementById("luckButton").style.display = "none";
    document.getElementById("resetButton").style.display = "block";
    document.getElementById("results").style.display = "block";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    if(randomNumber == 17){
        document.getElementById("output").innerHTML = "You have been converted into a girl";
    }else{
        document.getElementById("output").innerHTML = "You have won a million dollar !!!";
    }
}

function reset(){
    location.reload();
}