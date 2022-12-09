var timerEl = document.getElementById('countdown');
var message = document.getElementById('time-up-message')
var startButton = document.getElementById('start-btn')
var timeLeft = 90;
var score = 0; 


//disappear the question 1 from the page 
document.getElementById("question-1").style.display = "none";

//disappear question 2 from the page 

document.getElementById("question-2").style.display = "none";

//disappear question 3 from the page 

document.getElementById("question-3").style.display = "none";

//disappear question 4 from the page 

document.getElementById("question-4").style.display = "none";

//disappear question 5 from the page 

document.getElementById("question-5").style.display = "none";

//Set timer for the Quiz 
function countdown() {
    
    
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      //
      // YOUR CODE HERE
      //
      timeLeft--;
      timerEl.textContent = "Time: " + timeLeft;
      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        // Calls function to disaply ganeover message
        displayMessage();
    }
  },1000);

  // subtracting 3 seconds from the timer for every wrong option selected for question 1 
  document.getElementById("btn-1").addEventListener('click', function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("btn-2").addEventListener('click', function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("btn-4").addEventListener('click', function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  // subtracting 3 seconds from the timer for every wrong option selected for question 2


  document.getElementById("q2-btn-1").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q2-btn-2").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q2-btn-4").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  //subtracting 3 seconds from the timer for every wrong option selected for question 3

  document.getElementById("q3-btn-1").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q3-btn-2").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q3-btn-3").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  //subtracting 3 seconds from the timer for every wrong option selected for question 4

  document.getElementById("q4-btn-1").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q4-btn-3").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q4-btn-4").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q4-btn-5").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  //subtracting 3 seconds from the timer for every wrong option selected for question 5

  document.getElementById("q5-btn-1").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q5-btn-2").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

  document.getElementById("q5-btn-3").addEventListener('click',function(){
    timeLeft = timeLeft - 3;
    timerEl.textContent = "Time: " + timeLeft;
  });

}

  

  function displayMessage(){

    message.textContent = "Time Up!!"

  }

  // adding event listener to start button

  startButton.addEventListener("click", function(){

    // starts the timer when button is clicked 
    countdown();

    //display the first question with button options 
    document.getElementById("question-1").style.display = "block";

    var buttons = document.getElementById("question-1-options");
    var result = document.getElementById("result-1")

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);

        if(event.target.dataset.message == 'option3'){
            result.textContent = 'correct!!';
            score = score + 5;
            console.log(score);
            
        }

        else
        {
            //does not display before the secondQuestion() is called 
            result.textContent = 'Wrong!!';
            
        }  
        
        secondQuestion();
       
    }) 
    
})

    
function secondQuestion(){

   

    //console.log("Hello")

    //display the second question with the button options
    document.getElementById("question-1").style.display = "none";
    document.getElementById("question-2").style.display = "block";
    

    var buttons = document.getElementById("question-2-options");
    var result = document.getElementById("result-2");

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);
        if(event.target.dataset.message == 'q2-option3'){
            result.textContent = 'correct!!';
            score = score + 5;
            console.log(score);
        }
        else
        {
            result.textContent = 'Wrong!!'
        }  

        thirdQuestion();

})
}

function thirdQuestion(){

    //console.log("Hello")

    
     // disappear the outcome of the first question before the third question is displayed 
    document.getElementById("result-1").style.display = "none";

    //display the third question with the button options
    document.getElementById("question-2").style.display = "none";
    document.getElementById("question-3").style.display = "block";
   

    var buttons = document.getElementById("question-3-options");
    var result = document.getElementById("result-3");

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);
        if(event.target.dataset.message == 'q3-option4'){
            result.textContent = 'correct!!';
            score = score + 5;
            
        }
        else
        {
            result.textContent = 'Wrong!!'
        }  

        fourthQuestion();

})
}


function fourthQuestion(){

    //console.log("Hello")

    // disappear the outcome of the second question before the third question is displayed 
    document.getElementById("result-2").style.display = "none";

    //display the second question with the button options
    document.getElementById("question-3").style.display = "none";
    document.getElementById("question-4").style.display = "block";

    var buttons = document.getElementById("question-4-options");
    var result = document.getElementById("result-4");

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);
        if(event.target.dataset.message == 'q4-option2'){
            result.textContent = 'correct!!';
            score = score + 5;
            
        }
        else
        {
            result.textContent = 'Wrong!!'
        }  

        finalQuestion();

})
}


function finalQuestion(){

    //console.log("Hello")

    // disappear the outcome of the third question before the third question is displayed 
    document.getElementById("result-3").style.display = "none";

    //display the second question with the button options
    document.getElementById("question-4").style.display = "none";
    document.getElementById("question-5").style.display = "block";

    var buttons = document.getElementById("question-5-options");
    var result = document.getElementById("result-5");

    buttons.addEventListener('click', function(event){
        console.log(event.target.dataset.message);
        if(event.target.dataset.message == 'q5-option4'){
            result.textContent = 'correct!!';
            score = score + 5;
        
        }
        else
        {
            result.textContent = 'Wrong!!'
        }  
    
    // disappear the outcome of the fourth question before the third question is displayed 
    document.getElementById("result-4").style.display = "none";
    saveScore();

})
}

function saveScore(){


    // disappear the fifth question from the page
    document.getElementById("question-5").style.display = "none";

    //display the final score 
    var finalScore = document.getElementById("score");
    finalScore.value = score;
    finalScore.textContent = "Your final score is " + finalScore.value;
}




    

    


  