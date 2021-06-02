'use strict';

 document.querySelector('.lastbox').style['visibility'] = "hidden";

// const randomsNumber = Math.floor(Math.random() * 6 ) + 1 ;

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El  = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const holdBtn  = document.querySelector('.btn--hold')
const newBtn  = document.querySelector('.btn--new')





score0El.textContent = 0 ;
score1El.textContent = 0 ;

diceEl.classList.add('hidden')

 
let currentScore = 0 ;
let activePlayer = 0 ;
const scores = [0 , 0];
let totalScore = 0 ;
let playing = true ;


document.querySelector('.btn--roll').addEventListener("click" , function(){

     if (playing){

         document.querySelector('#audio').play()

      
    const randomsNumber = Math.floor(Math.random() * 6 ) + 1 ;
      
      
     diceEl.classList.remove('hidden')
     diceEl.src = `dice-${randomsNumber}.png`
          
      if (randomsNumber !== 1 ) {
        
         currentScore = currentScore + randomsNumber ;
       
         document.querySelector(`#current--${activePlayer}`).textContent = currentScore

      }  

       else if ( randomsNumber === 1 ){

          

            
           
           currentScore = 0 
           document.querySelector(`#current--${activePlayer}`).textContent = currentScore ;

           activePlayer = activePlayer === 0 ? 1 : 0 ;

           player0El.classList.toggle('player--active')
           player1El.classList.toggle('player--active')
            
           
                
            

       }
    }

   

});

holdBtn.addEventListener('click' , function(){
         
             if(playing){
                document.querySelector('#audio2').play()


             scores[activePlayer] = currentScore + scores[activePlayer]
          
           document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]
          
             if (scores[activePlayer] >= 100){
                 playing = false ; 
                 document.querySelector('#audio3').play()
                 document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                 document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
                 diceEl.classList.add('hidden')
                 document.querySelector('.lastClassItem').textContent = `Player ${activePlayer + 1}  won`
                 //document.querySelector('.lastbox').classList.add('overlay')
                 document.querySelector('.lastbox').style['z-index'] = "3";
              document.querySelector('.lastbox').style['visibility'] = "visible";

                  
                 

             }
             else{

             
            
          currentScore = 0 
           document.querySelector(`#current--${activePlayer}`).textContent = currentScore ;
      
           activePlayer = activePlayer === 0 ? 1 : 0 ;
           player0El.classList.toggle('player--active')
           player1El.classList.toggle('player--active')
             }

            }

             

})

newBtn.addEventListener('click' , function(){
    document.querySelector('#audio4').play()
    //document.querySelector('.
 ').classList.remove('overlay')
 document.querySelector('.lastbox').style['visibility'] = "hidden";
     score0El.textContent = 0 ;
     score1El.textContent = 0 ;
     current0El .textContent = 0 ;
     current1El .textContent = 0 ;
     
     player0El.classList.remove('player--winner')
     player1El.classList.remove('player--winner')
     player0El.classList.add('player--active');
     player1El.classList.remove('player--active');
      playing = true ;
      currentScore = 0

    scores[0] = 0;
    scores[1] = 0 ; 
    activePlayer = 0 

    
    
    
     
     
   
})





