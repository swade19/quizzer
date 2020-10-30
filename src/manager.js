/*  
name of user (placeholder for now) 
list of quizzes ( from hard code atm? )
go button linked to particular quiz 


*/ 

var isAnswerSelected = 0;
var correctAnswer = catQuiz1.correctAnswer
var newSelectedButton; // "answer1"
var answer; //catquiz1.answer1
var matchButton;


showSelectedAnswer = function(selectedButton, questionAnswer) {
   if (isAnswerSelected === 0){

    answer= questionAnswer;
    newSelectedButton = selectedButton
    console.log(newSelectedButton);


    document.getElementById(selectedButton).style.borderColor = "#FFFF66";
    document.getElementById(selectedButton).style.borderWidth = "10px";
    isAnswerSelected = 1;
}};

checkAnswer = function(){
    if (answer == correctAnswer){
        document.getElementById(newSelectedButton).style.backgroundColor = "#49E20E	";
    } else{
        findCorrectElement();
        document.getElementById(newSelectedButton).style.backgroundColor = "#FF4500";
        document.getElementById(matchingButton).style.backgroundColor = "#49E20E";
        document.getElementById("submit").style.display = "none";
        document.getElementById("nextPage").style.display = "inherit";





    }
};

findCorrectElement = function() { 
    for (const property in catQuiz1) {
        if (`${catQuiz1[property]}` === correctAnswer){
            matchingButton= (`${property}`)
            break;
        }
  }
}
