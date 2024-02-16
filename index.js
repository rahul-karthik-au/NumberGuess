randomNum=Math.ceil(Math.random()*100);
const con=document.getElementById("result");
function guessNumber(){
    const num=document.getElementById("number").value;
    if(num<randomNum){
        con.innerText=`Your last guess ${num} is low`;
        document.body.style.backgroundColor = '#e01e37';
        setTimeout(function(){
            document.body.style.backgroundColor = '#f9f6ee';
        },750);
    }
    else if(num>randomNum){
        con.innerText=`Your last guess ${num} is high`;
        document.body.style.backgroundColor = '#e01e37';
        setTimeout(function(){
            document.body.style.backgroundColor = '#f9f6ee';
        },750);
        
    }
    else{
        document.body.style.backgroundColor = '#38b000';
        document.getElementById("welcome").style.display = 'none';
        document.getElementById("rules").style.display = 'none';
        document.getElementById("main").style.display = 'none';
        con.style.fontSize = "3rem";
        con.style.color = "#fff";
        con.style.marginTop = "20%";
        con.innerText=`Your guess ${num} is right`;
        setTimeout(function(){
            location.reload();
        }, 3000);
    }
    document.getElementById("number").value='';
}