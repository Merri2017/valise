 	// This is to open the modal box when button is pressed
 $(document).ready(function(){
    	$('.modal').modal();
    });

 // a function to push elements when called, instead of using seperate page links
 
 // function addModal(projectName,image, story, code, site){
 // 	this.name = name;
 // 	this.languages = languages;
 // 	this.image = image;
 // 	this.story = story;
 // 	this.code = code;
 // 	this.site = site;
 // 	document.getElementById('name').value
 // }

 // var calculator = new addModal('Avdanced calculator', "javascript", "../images/pink.jpg", "This is my advance calculator with a suprise", 'src="https://github.com/Merri2017/B2T-The-Heights-Cohort2/tree/master/advancecalculator"', "src='google.com" );

 // calculator.addModal();

//  name languages inspo PICS
// .value returns the value of the tag

// WAHH this is hard!!! LOL Im going home

// $('.modal-trigger').click
 function Project (name, inspo){
	this.name = name;
	// this.languages = [];
	// for (i = 0; i <languages.length;i++){
	// 	languages.push(languages[i]);
	// }
	this.inspo = inspo;
	// this.github = github;
	
};

var project1 = new Project('Advanced Calculator', 'A beautiful calculator with an element of  suprise!');

// document.getElementById('p1').innerHTML= name;
// 	// document.getElementById('p2').innerHTML= languages;
	document.getElementById('p3').value= inspo;
