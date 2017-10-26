var questions = [
    ["Cate state sunt in USA?", 50],
    ["Cate continente sunt?", 31],
    ["Care este nota maxima care o poti primii la scoala?", 10]
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
    var divOutput = document.getElementById("output");
    divOutput.innerHTML = message;
}

function buildList(arr) {
    var listHTML = '<ol>';
    for (var i=0; i<arr.length; i++){
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML +='</ol>';
    return listHTML;
}


for (var i = 0; i < questions.length; i++){
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer){
        correctAnswers++;
        correct.push(question);
    }else {
        wrong.push(question);
    }
}

html = "You got " + correctAnswers + " question(s) right.";
html += '<h2> You got these questions correct : </h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong</h2>';
html += buildList(wrong);
print(html);










