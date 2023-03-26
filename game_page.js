player1_name=localStorage.getItem("player1_name");
player1_score=0;
player2_name=localStorage.getItem("player2_name");
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("question").innerHTML="question turn:"+player1_name;
document.getElementById("answer").innerHTML="answer turn:"+player2_name;


function send(){
    number1=document.getElementById("number1").value ;
    number2=document.getElementById("number2").value ;
    actual_answer=parseInt(number1)+parseInt(number2);
    
    

    q="<h4 id='word_display'>q."+number1+"+"+number2+"</h4>";
    i="<br>Answer : <input type='text' id='input_check_box'>";
    b="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=q+i+b;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){

    answer=document.getElementById("input_check_box").value;
    

    if(answer==actual_answer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;

        }
    }

   else if(answer!=actual_answer){
        if(answer_turn=="player1"){
            player1_score=player1_score-1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score-1;
            document.getElementById("player2_score").innerHTML=player2_score;

        }
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("answer").innerHTML="answer turn:"+player2_name;

    }
    else{
        answer_turn="player1";
        document.getElementById("answer").innerHTML="answer turn:"+player1_name;

    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("question").innerHTML="question turn:"+player2_name;

    }
    else{
        question_turn="player1";
        document.getElementById("question").innerHTML="question turn:"+player1_name;

    }
    document.getElementById("output").innerHTML="";
}