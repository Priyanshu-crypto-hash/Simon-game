
var buttonColors = ["red","blue","yellow","green"];
var gamePattern = [];
var userClickedPattern = [];
var level = 1;
var flag = true;

$(".btn").click(function(){
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);


  animatePress(userChosenColor);
  playSound(userChosenColor);


  var answer = checkAnswer(userClickedPattern.length-1);

})
$(document).keypress(function() {
  if(flag){
    $("#level-title").text("Level "+level);
    nextSequence();

    flag = false;


  }


})
function checkAnswer(index){
  if (userClickedPattern[index] == gamePattern[index]){
    if(gamePattern.length==userClickedPattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    animateBody()
    playSound("wrong");

  }

}


function nextSequence(){
  userClickedPattern=[];
  $("#level-title").text("Level "+level);
  level+=1;
  var randomNumber =  Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];


  gamePattern.push(randomChosenColor);
  var targetElement = "#"+randomChosenColor;
  $(targetElement).fadeTo(100, 0.3, function() { $(this).fadeTo(500, 1.0); });

  playSound(""+randomChosenColor);
  animatePress(randomChosenColor);




}
function playSound(ch){
  switch (ch) {
    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
    break;
    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
    break;
    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
    break;
    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
    break;
    case "wrong":
      var wrong = new Audio('sounds/wrong.mp3');
      wrong.play();
    break;
    default:
        console.log(ch);

  }

}

function animatePress(currentColor){

  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}
function animateBody(){
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
}
