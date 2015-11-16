var totalCorrect = 0;
var gradePercent = 0;
var letterGrade = "";
var correctAnswers = ["Gill", "No", "20", "1", "Ashville", "4"];
var userAnswers = document.getElementsByClassName("answers");
var corrections = document.getElementsByClassName("corrections");
var currentUserAnswer;
var currentCorrectAnswer;

var gradeTest = function()
{ 
	
	//check correct answers
	for(var i = 0; i < userAnswers.length; i++)
	{
		currentUserAnswer = userAnswers[i];
		currentUserAnswer = currentUserAnswer.value.toLowerCase();
		currentUserAnswer = currentUserAnswer.replace(/\s+/g, '');
		
		currentCorrectAnswer = userAnswers[i];
		currentCorrectAnswer = currentCorrectAnswer.value.toLowerCase();
		currentCorrectAnswer = currentCorrectAnswer.replace(/\s+/g, '');
		
		if(currentUserAnswer === currentCorrectAnswer)
		{
			totalCorrect++;
		}
		else
		{
			userAnswers[i].style.setProperty("color", "red");
			userAnswers[i].style.setProperty("text-decoration", "line-through");
			corrections[i].innerHTML = correctAnswers[i];
		}
		userAnswers[i].disabled = true;
	}
	
	/*
	//old for loop
	for(var i = 1; i <= 5; i++)
	{
		userAnswerNumber = "q" + i + "answer";
		correctAnswerNumber = "q" + i + "CorrectAnswer";
		
		console.log(userAnswerNumber);
		console.log(correctAnswerNumber);
		
		if(document.getElementById(userAnswerNumber).value.toLowerCase() === correctAnswerNumber)
		{
			totalCorrect++;
		}
	}
	*/
	
	//removes grade test button
	document.getElementById("btnParent").removeChild(document.getElementById("btnGradeTest"));
	
	//calculate grade percentage
	gradePercent = +(totalCorrect/5*100).toFixed(2);
	
	//find letter grade
	if(gradePercent > 92)
	{
		letterGrade = "A";
	}
	else if(gradePercent > 89)
	{
		letterGrade = "A-";
	}
	else if(gradePercent > 86)
	{
		letterGrade = "B+";
	}
	else if(gradePercent > 82)
	{
		letterGrade = "B";
	}
	else if(gradePercent > 79)
	{
		letterGrade = "B-";
	}
	else if(gradePercent > 76)
	{
		letterGrade = "C+";
	}
	else if(gradePercent > 72)
	{
		letterGrade = "C";
	}
	else if(gradePercent > 69)
	{
		letterGrade = "C-";
	}
	else if(gradePercent > 66)
	{
		letterGrade = "D+";
	}
	else if(gradePercent > 62)
	{
		letterGrade = "D";
	}
	else if(gradePercent > 59)
	{
		letterGrade = "D-";
	}
	else
	{
		letterGrade = "F";
	}
	
	//gives results
	document.getElementById("grade").innerHTML = "You got: " + totalCorrect + " questions right which is " + gradePercent + "%"  + "<br/>" + "Your South Hills letter grade is: " + letterGrade;
}