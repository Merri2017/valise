 	// This is to open the modal box when button is pressed
 	 // Initial issue: Had onclick() the modal div instead of in the project div.
 	// the eventlistener would be called because it;s document.click.
 	// correction: added an id and the onclick to the placeholder. Works perfectly.
 $("#project1").click(function(){
    	$('.modal').modal();
    });
 	//every placeholder needs it's own id.

 // Need to use OOP - a class with instances
 // when user click image, the info for that project displays without constantly rewriting the code.
 // function that displays the data entered - onclick="displayInfo()"
 

// function displayInfo(){
// 	var image = ["<img src= images/rustic.jpg>"];
// 	var name = ["Advanced Calculator"];
// 	var languages = ["HTML,"+  " " +  "CSS," +" " +  "JavaScript"];
// 	var inspo = ["A Whimiscial Calculator with a suprise! My Bridge-To-Tech final project."];
// 	var github = ["<a href ='https://github.com/Merri2017/B2T-The-Heights-Cohort2/tree/master/advancecalculator'></a>"];
// 	document.getElementById('pic').innerHTML = image;
// 	document.getElementById('name').innerHTML = name;
// 	document.getElementById('languages').innerHTML = languages;
// 	document.getElementById('inspo').innerHTML = inspo;
// 	document.getElementById('github').innerHTML = github;

// }
// so the error message left. Progress. I had the onlick in the wrong section - in the body of the html page instead of the modal card itself. 
// now I need to figure out how to get the content to display as a function and all i have to do is add new projects to update. I don't want to keep writing functions or adding in extra code when I can have it do it for me. Condense this comment before pushing to github.
// displayInfo();
	// My issue was : id names were not the same. I can't believe it lol
	
	// This is the skeleton for a constructor. Basically I need to use this same function with a constructor, then have this.name etc. Keep the document.getelement but 
	// then make new projects with the properties, instead of inside of the instances. 
function Project(image, name, languages, inspo, github){
	this.image = image;
	this.name = name;
	this.languages = languages;
	this.inspo = inspo;
	this.github = github;
	document.getElementById('pic').innerHTML = image;
	document.getElementById('name').innerHTML = name;
	document.getElementById('languages').innerHTML = languages;
	document.getElementById('inspo').innerHTML = inspo;
	document.getElementById('github').innerHTML = github;

};
var calculator = new Project ("<img src= images/rustic.jpg>","Advanced Calculator","HTML,"+  " " +  "CSS," +" " +  "JavaScript","A Whimiscial Calculator with a suprise! My Bridge-To-Tech final project.", "<a href ='https://github.com/Merri2017/B2T-The-Heights-Cohort2/tree/master/advancecalculator'></a>");

// to add new projects, create a new project variable with properties like above. 
// figure out how to get links into the object
//constructor is a key word. research more - it is used to create the object in the class 
// class vs constructor

// bootstrap has tooltips and links for modals - look into it.

// https://getbootstrap.com/docs/4.0/components/modal/