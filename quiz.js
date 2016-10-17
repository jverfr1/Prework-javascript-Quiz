var user = {};

var responses = [];
function repeatMethod(methodName,times,answer,questionNumber) {
	for (i=1; i<=times; i++) {
		methodName(answer,questionNumber);
	}
}
//Checks if an answer is true or false and depending on that, set the Class attribute to true or false.
function checkAnswer(answer,number) {
	if (answer == true) {
		document.getElementById("question" + number).lastChild.setAttribute("class","true");
	}else {
		document.getElementById("question" + number).lastChild.setAttribute("class","false");
	}
}
//Sets the titles of the quiz.
function createTitle(name) {
	var newItem = document.createElement("h2");
	var textItem = document.createTextNode("Quiz of " + name);
	console.log(newItem);
	newItem.appendChild(textItem);
	console.log(newItem);
	document.getElementById('quiz').appendChild(newItem);
}
//Creates the ul element. As parameters take the question and the question number.
function createQuestion(question,number) {
	var newItem = document.createElement("ul");
	var textItem = document.createTextNode(question);
	newItem.appendChild(textItem);
	document.getElementById("quiz").appendChild(newItem).setAttribute("id","question" + number);
}
//Creates the li element. As parameters take the answer and the answer number.
function createAnswer(answer,number) {
	var newItem = document.createElement("li");
	var textItem  = document.createTextNode(answer);
	newItem.appendChild(textItem);
	document.getElementById("question" + number).appendChild(newItem);
}
//Checks the coincidence beteween the CorrectAnswer and the user answer.
function checkString(string1,string2) {
	var totalCoincidences = 0;
	var letters = {
		index: 0,
		letter:""
	}
	var array1 = string1.split("");
	var array2 = string2.split("");
	console.log(array1);
	console.log(array2);
	for (i in array1) {
        letters.index=i;
        letters.letter=array1[i];
        for (j in array2) {
        	if (array2[j]==letters.letter && j==letters.index) {
        		totalCoincidences +=1;
        	}else if (array2[j-1]==letters.letter && j==letters.index) {
        		totalCoincidences +=1;
        	}
        }
	}
	if (totalCoincidences >= string1.length - 2) {
		return true;
	}
}
function question1() {
	var name = prompt("What's your name?");

    user.name = name;
    createTitle(user.name);
}

function question2() {
	var question = "Is Kim Jong Un the current supreme leader of North Korea?";
	var firstQuestion = prompt(question);
    createQuestion(question,2);
    createAnswer(firstQuestion,2);
	if (firstQuestion.toLowerCase() == "yes") {
		firstQuestion = true;
	}else if (firstQuestion.toLowerCase() == "no") {
		firstQuestion = false;
	}else {
		alert("Please, your answer must be Yes or No");
	    question2();
	}
	checkAnswer(firstQuestion,2);
	responses.push(firstQuestion);
}
					
 function question3() { 
 	var answer = prompt("Porche is a brand of car that originated in what country");
 	createQuestion("Porche is a brand of car that originated in what country?",3);
    createAnswer(answer,3);
    answer = answer.toLowerCase();
 	switch (answer) {
 		case "usa":
 		  alert("I'm sorry, that's Ford");
 		  answer = false;
 		  	break;
 		case "france":
 		  alert("I'm sorry, but that's Peugeot")
 		  answer = false;
 		    break;
 		
 			case "germany":
 		    answer = true;
 		    console.log("Congrats, you answer was right");
 		    alert("Congrats, your answer was right ");
 		    break;
 		default:
 		    answer = false;
 		    console.log("I'm afraid your answer is wrong...");
 		    alert("I'm afraid your answer is wrong..." + answer);
 		    

 	}
 	checkAnswer(answer,3);
 	responses.push(answer);
 }
 function question4() {
 	var question = "How many paintings did Vincent Van Gogh sell during his lifetime?";
 	var correctAnswer = "1";
 	var answer = prompt(question);
 	createQuestion(question,4);
 	createAnswer(answer,4);
 	if (answer === "1") {
 		answer = true;
 	}else {
 		answer = false;
 	}
 	checkAnswer(answer,4);
 	responses.push(answer);
 }
 function question5() {
 	var question = "Which female singer had an embarrasing wardrobe malfunction during the Super Bowl XXXVIII halftime show?";
 	var correctAnswer = "Janet Jackson";
 	var answer = prompt(question);
 	createQuestion(question,5);
 	createAnswer(answer,5);
 	answer = answer.toLowerCase();
 	console.log(answer);
    if (checkString(correctAnswer.toLowerCase(),answer)) {
 		 answer = true;
 	}else {
 		 answer = false;
 	}
 	checkAnswer(answer,5);
    responses.push(answer);
 }
 function question6() {
 	var question = "What was the name of Michael Jackson's first solo album as an adult?";
 	var correctAnswer = "Off The Wall";
 	var answer = prompt(question);
 	createQuestion(question,6);
 	createAnswer(answer,6);
 	answer = answer.toLowerCase();
 	if (checkString(correctAnswer.toLowerCase(),answer.toLowerCase())) {
 		answer = true;
 	}else {
 		answer = false;
 	}
 	checkAnswer(answer,6);
 	responses.push(answer);
 }
 function question7() {
 	var question = "In what year was the Nintendo 64 officially released?";
 	var correctAnswer = "1996";
 	var answer = prompt(question);
 	createQuestion(question,7);
 	repeatMethod(createAnswer,4,answer,7);
 	if (answer=="1996") {
 		answer = true;
 	}else {
 		answer = false;
 	}
 	checkAnswer(answer,7);
 	responses.push(answer);
 }
 //Checks all the answers, and returns the total correct and wrong anwers.
 function evaluate(responsesArray) {
 	var totalTrue = 0;
 	var totalFalse = 0;
 	for (i in responsesArray) {
 		if (responsesArray[i] == true) {
 			totalTrue += 1;
 		}else {
 			totalFalse += 1;
 		}
 		user.totalTrue = totalTrue;
 		user.totalFalse = totalFalse;
 		//user.name.push(totalTrue);
 	}
 	var result = document.createTextNode(user.name + " has " + user.totalTrue + " correct answers and " + user.totalFalse + " wrong");
 	var element = document.createElement("h3");
 	element.appendChild(result);
 	document.getElementById("quiz").appendChild(element);
 	console.log(user.name + " has " + user.totalTrue + " correct answers and "  + user.totalFalse + " wrong answers");
 }

question1();

question2();

question3();

question4();

question5();

question6();

question7();

evaluate(responses);

