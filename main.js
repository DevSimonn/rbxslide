var btn = document.querySelector('.jackpot')
var btn2 = document.querySelector('.coinflip')

btn.addEventListener('click', (e) => {
    btn.style.backgroundImage = 'linear-gradient(#C3073F,#950740)';  
    btn.style.boxShadow = "0vw 0vw 0.4vw rgb(255, 0, 0)";
    btn2.style.boxShadow = "0vw 0vw 0vw rgb(0, 162, 255)";
    btn2.style.backgroundImage = 'linear-gradient(rgb(22, 18, 25),rgb(22, 18, 25))';  
    btn2.style.backroundColor = 'rgb(22, 18, 25)';  
   
})

btn2.addEventListener('click', (e) => {
    btn2.style.backgroundImage = 'linear-gradient(#C3073F,#950740)';  
    btn2.style.boxShadow = "0vw 0vw 0.4vw rgb(255, 0, 0)";
    btn.style.boxShadow = "0vw 0vw 0vw rgb(0, 162, 255)";
    btn.style.backgroundImage = 'linear-gradient(rgb(22, 18, 25),rgb(22, 18, 25))';  
    btn.style.backroundColor = 'rgb(22, 18, 25)';  
   
})
