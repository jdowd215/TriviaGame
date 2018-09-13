//TRIVIA GAME
//Create a trivia form with multiple choice or true/false options.
//The player will have a limited amount of time to finish the quiz. 
//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
//Don't let the player pick more than one answer per question.
//Don't forget to include a countdown timer.

//USE CASES
//#1. User loads page, countdown timer begins.
//#2. User navigates thru questions, selecting one answer for each
//#3. User either clicks "done" or timer runs to 0, screen displays the # of 
        //correct, incorrect, and incomplete answers


//start game function
function submitQuiz() {
    var number = 20;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 2000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;
      console.log(number);

      //  Show the number
      $(".time").text("Time Remaining: " + number);

      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time is up, press submit to see your score!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

// get each answer score
    function answerScore (qName) {
        var answers = document.getElementsByName(qName);

        //for loop to iterate over the answers array
        for (var i = 0, length = answers.length; i < length; i++) {
               if (answers[i].checked) {

                var answerValue = Number(answers[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

// calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4'));
    console.log("CalcScore: " + calcScore);

// function to return correct answer string
    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);
        return ("The correct answer for question #" + qNumber + ": " +
            (document.getElementById(correctStringNo).innerHTML));
        }

// print correct answers only if wrong
    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }

// calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

// show score
    var showScore = "Your Score: " + calcScore +"/" + questionCounter;
// if 4/4, "perfect score!"
    if (calcScore === questionCounter) {
        showScore = showScore + "&nbsp; <strong>Perfect Score!</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

$('#submitButton').click(function() {
    $(this).addClass('hide');
});

});
    
