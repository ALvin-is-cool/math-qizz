var player1_name = localStorage.getItem("player1");
var player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("question").innerHTML = "Question Turn :" + player1_name;
document.getElementById("answer").innerHTML = "Answer Turn :" + player2_name;
Number2=document.getElementById("number2").value;
Number1=document.getElementById("number1").value;//geting the number from the box and useing it for calculation
function send() {

    Number2=document.getElementById("number2").value;
   Number1=document.getElementById("number1").value;//geting the number from the box and useing it for calculation
   question=Number1+"x"+Number2;
   question_word = "<h4 id='word_display'> Q." + question + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;



}
question_turn = "player1";
answer_turn = "player2";
function check() {
   useranswer = document.getElementById("input_check_box").value;
    answer=Number1*Number2;
    console.log( answer);
    if (answer == useranswer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("question").innerHTML = "Question Turn - " + player1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn - " + player2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer Turn - " + player1_name;
    }




}





