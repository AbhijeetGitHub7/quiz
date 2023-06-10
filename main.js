var time=document.getElementById("time")
var index=0;
var points=0;
var clicked=[false,false,false,false,false,false,false,false,false];
let questions=["World No Tobacco Day is celebrated on which of the following day every year?",
"Q :  Which of the following day is celebrated as Law Day in India?",
"Q :  Which Indian site is included in UNESCO world heritage list in July, 2021?",
"Q :  Human Rights Day is observed on which of the following days?",
"Q :  ‘Unfinished: A Memoir’ is the autobiography of ______. ",
"Q :  The Government of India initiated the comprehensive Family Planning Programme in ______. ",
"Q :  Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) 2005 provides _________ days of assured employment every year to every rural household. ",
"Q :  The White Tiger provides a darkly humorous perspective of India’s class struggle in a globalised world. It is written by __________.",
"Q :  Who is the first Indian woman to win the Grammy Award? "];
let correct=["A","D","C","B","A","C","A","C","D"];
let answers=[["(A) May 31","(B) June 30","(C) July 31","(D) August 31"],
["(A) December 13","(B) August 9","(C) January 6","(D) November 26"],
["(A) Corbett National Park","(B) Meenakshi Temple","(C) Ramappa Temple","(D) Qutub Minar"],
["(A) 10 November","(B) 10 December","(C) 12 November","(D) 12 December"],
["(A) Priyanka Chopra Jonas","(B) Deepika Padukone","(C) Kareena Kapoor","(D) Alia Bhatt"],
["(A) 1954","(B) 1958","(C) 1952","(D) 1955"],
["(A) 100","(B) 120","(C) 150","(D) 200"],
["(A) Shashi Tharoor","(B) Amitav Ghosh","(C) Aravind Adiga","(D) Vikram Seth"],
["(A) Sunidhi Chauhan","(B) Lata Mangeshkar","(C) Asha Bhosle","(D) Tanvi Shah"],
 ]
let question=document.getElementById("question")
let option1=document.getElementById("option 1");
let option2=document.getElementById("option 2");
let option3=document.getElementById("option 3");
let option4=document.getElementById("option 4");
question.innerText=questions[0];
option1.innerText=answers[0][0];
option2.innerText=answers[0][1];
option3.innerText=answers[0][2];
option4.innerText=answers[0][3];

var t=60;
function timez(){
    var p=" ";
    if(t<10){
        p="0"+t.toString();

    }
    else{
        p=t.toString();
    }
    time.innerText=p;
    
    t=t-1   
    if(t>=0 && !clicked[index]){
    setTimeout(timez,1000);
    }
    if(t==0){
      
      showright();
      
    }
    
}
timez();
var c=""
function checkAnswer(ch){
    if(!clicked[index] && index<=8){
      clicked[index]=true
    c=ch;
    if(ch=='A'){
        option1.style.background="yellow";
     }
     if(ch=='B'){
        option2.style.background="yellow";
     }
     if(ch=='C'){
        option3.style.background="yellow";
     }
     if(ch=='D'){
        option4.style.background="yellow";
     }

     
     setTimeout(cha, 2000);
   }
}
function cha(){

     if(c=='A' && c==correct[index]){
        option1.style.background="green";
        points=points+1;
        setTimeout(changeques,2000);
     }
     if(c=='B' && c==correct[index]){
        option2.style.background="green";
        points=points+1;
        setTimeout(changeques,2000);
     }
     if(c=='C' && c==correct[index]){
        option3.style.background="green";
        points=points+1;
        setTimeout(changeques,2000);
     }
     if(c=='D' && c==correct[index]){
        option4.style.background="green";
        points=points+1;
        setTimeout(changeques,2000);
       
     }
     if(c=='A' && c!=correct[index]){
        option1.style.background="red"
        setTimeout(showright,2000);
     }
     if(c=='B' && c!=correct[index]){
        option2.style.background="red"
        setTimeout(showright,2000);
     }
     if(c=='C' && c!=correct[index]){
        option3.style.background="red"
        setTimeout(showright,2000);
     }
     if(c=='D' && c!=correct[index]){
        option4.style.background="red"
        setTimeout(showright,2000);
     }
     
}
function showright(){
   if(correct[index]=='A'){
      option1.style.background="green"
      
   }
   if(correct[index]=='B'){
      option2.style.background="green"
   }
   if(correct[index]=='C'){
      option3.style.background="green"
   }
   if(correct[index]=='D'){
      option4.style.background="green"
   }
   setTimeout(changeques, 4000);
  
}
function changeques(){
   index=index+1;
if(index<=8){
   option1.style.background="none";
   option2.style.background="none";
   option3.style.background="none";
   option4.style.background="none";
   t=60;
   question.innerText=questions[index];
option1.innerText=answers[index][0];
option2.innerText=answers[index][1];
option3.innerText=answers[index][2];
option4.innerText=answers[index][3];
timez();
}
else{
   result();
}
}
function result(){
   let percentage=(points/8)*100;
   let result=percentage.toString()+"%";
   question.style.display="none";
   option1.style.display="none";
   option2.style.display="none";
   option3.style.display="none";
   option4.style.display="none";
   time.style.display="none";
   let x=document.getElementById("result");
   x.innerText="Your Score Is "+result;
}