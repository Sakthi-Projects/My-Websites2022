const number = Math.trunc(Math.random()*20)+1;
    
let score = 20;

    document.querySelector(".reload").addEventListener("click", e =>{
        location.reload();
    })

    



document.querySelector('.check_btn').addEventListener("click", function(){

let guess = Number (document.querySelector('.guess').value);

if(!guess){
    document.querySelector(".answer").textContent = "🚫 Not a  Number";
}else if(guess === number)
{
    document.querySelector(".answer").textContent = "🥳 Correct Answer";
    document.querySelector(".secretNumber").textContent = number;
    document.querySelector(".secretNumber").style.color = "#09ac11"
    score++;
    document.querySelector('.Score').textContent = score;
    document.querySelector(".container").style.backgroundColor ="#09ac11";
    document.querySelector(".HighScore").textContent = score;
    
}else if(guess > number)
{
    if(score > 1){
    document.querySelector(".answer").textContent = "😨 Too High";
    score--;
    document.querySelector('.Score').textContent = score;
    } else{
        document.querySelector(".answer").textContent = "😞 You Lost";
        document.querySelector('.Score').textContent = 0;
        document.querySelector(".container").style.backgroundColor ="#f12906";
    }
         
}
else if(guess < number)
{
    if(score > 1){
    document.querySelector(".answer").textContent = "🥱 Too Low";
    score--;
    document.querySelector('.Score').textContent = score;
    } else{
        document.querySelector(".answer").textContent = "😞 You Lost";
        document.querySelector('.Score').textContent = 0;
        document.querySelector(".container").style.backgroundColor ="#f12906";
    }
}
})

document.querySelector(".again-btn").addEventListener("click", e =>{
document.querySelector(".secretNumber").textContent = "?" ;
document.querySelector(".answer").textContent = "Start Guessing..";
document.querySelector('.Score').textContent = 20;
document.querySelector(".container").style.backgroundColor ="black";
})