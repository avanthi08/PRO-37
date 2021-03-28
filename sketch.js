var canvas,database,gameState=0;
var quiz, contestantCount, question, contestant;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();

  quiz = new Quiz();

  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
if (keyPressed (submit))
{
  option1.hide();
  option2.hide();
  option3.hide();
  option4.hide();
  question.hide();
  
}
  
}
