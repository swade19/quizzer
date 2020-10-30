/*  
name of user (placeholder for now) 
list of quizzes ( from hard code atm? )
go button linked to particular quiz 


*/ 

var isAnswerSelected = 0;
var correctAnswer = catQuiz1.correctAnswer;
var answer = "";

showSelectedAnswer = function(selection) {
   if (isAnswerSelected === 0){

    answer = selection
    document.getElementById(answer).style.borderColor = "#FFFF66";
    document.getElementById(answer).style.borderWidth = "10px";
    isAnswerSelected = 1;
}};

checkAnswer = function(){
    if (answer === quiz.correctAnswer){
        console.log("this works!")
    };

};
