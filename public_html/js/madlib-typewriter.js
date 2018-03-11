//forces the menu to collapse on click

$(window).click(function() {
	$('.navbar-collapse').collapse('hide');
});

//First call to typewriter

$(function() {
	let typeWriter = new TypeWriter('#typeWriter',
		[
			'Who am I?',
			'I am a web developer, but so much more than that, and I want to change the world.',
			'',
			'\"Here\'s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes<button onclick="expand()">...</button><s id="quote"></s> and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.\"',
			' -Steve Jobs',
			'',
			'The support of my friends and family has given me the strength to continue this pursuit.',
			'I have not taken the easy path to get where I am today, so I made a game to share some of that with you.',
			'',
			'<button onclick="newTypewriter()">Click here</button> to learn who I am.'
		]);

	typeWriter.start();
});

//newTypeWriter manipulates the DOM to clear the previous typewriter and prepare the section for a new typewriter object
//It then calls a function

function newTypewriter() {
	document.getElementById('main').innerHTML = "";
	document.getElementById('main').innerHTML = "<section id='typeWriter'></section>";
	goAgain();
}

//goAgain creates a new typewriter object

function goAgain() {
	let typeWriter = new TypeWriter('#typeWriter',
		[
			'Read this, and regenerate it as many times as you like to learn more.',
			'',
			'<s id="iLove">I love learning</s>',
			'I need to understand the world around me. An interest of mine is <em id="interests">locksmithing</em>',
			'<s id="iAm">I think like a designer</s>',
			'I take advantage of looking at problems differently than most. Recently I have been thinking about <em id="webSkillz">development</em>',
			'<s id="iWant">I want to help people</s>',
			'I will always be a student, but I hope to develop my skills to be able to do this. In the meantime, take a look at how my skills are developing by checking out my <em id="projects">bacon ipsum generator</em>',
			'So who am I?',
			'I am Ken.',
			'',
			'I hope to hear from you.',
			'',
			'<em id="signOff">All my best</em>,',
			'<em id="name">Ken</em>',
			'',
			'<button onclick="generate()">Click here</button> to see more.'
		]);

	typeWriter.start();
}

//generate grabs elements of the main tab by ID and manipulates them on click.

function generate() {


	//replacement sentences and words

	let iLoveArray = [
		"<s id='iLove'>I love learning</s>",
		"<s id='iLove'>I love facing new problems</s>",
		"<s id='iLove'>I love sharing what I have learned with others</s>",
		"<s id='iLove'>I love the the process of breaking down an insurmountable obstacle until the path to overcome it becomes clear</s>"
	];

	let interests = [
		"fencing",
		"karate",
		"violin",
		"trumpet",
		"piano",
		"drums",
		"guitar",
		"locksmithing",
		"graphic design",
		"web development",
		"app development",
		"software development",
		"construction",
		"architecture",
		"engineering",
		"film",
		"lifeguarding",
		"personal training",
		"jewelry making",
		"coaching lacrosse",
		"yo-yoing",
		"carpentry",
		"set design",
		"forensics",
		"Muay Thai",
		"tutoring",
		"teaching",
		"painting",
		"sculpting",
		"olympic weightlifting",
		"powerlifting",
		"crossfit",
		"magic"
	];

	let iAmArray = [
		"<s id='iAm'>I think like a designer</s>",
		"<s id='iAm'>I think critically</s>",
		"<s id='iAm'>I think like an architect</s>",
		"<s id='iAm'>I think like an artist</s>",
		"<s id='iAm'>I think an engineer</s>"
	];

	let webSkillz = [
		"html",
		"html5",
		"web development",
		"full stack web development",
		"CSS",
		"JavaScript",
		"PHP",
		"Angular",
		"Object Oriented Programming",
		"mySQL",
		"database design",
		"digital security",
		"git",
		"version control",
		"project management",
		"security",
		"health",
		"safety"
	];

	let iWantArray = [
		"<s id='iWant'>I want to help people</s>",
		"<s id='iWant'>I want to make the world a better place</s>",
		"<s id='iWant'>I want to work with you</s>",
		"<s id='iWant'>I want to make a difference</s>",
	];

	let projects = [
		"bacon ipsum generator",
		"ROT 13 encoder",
		"anagram maker",
		"javascript animations",
		"bootstrap static pages",
		"palindrome checker",
		"capstone project",
		"development",
	];


	let signOff = [
		"Thank you",
		"My best",
		"All the best",
		"Best wishes",
		"Best regards",
		"Regards",
		"Warm Regards",
		"Warmly",
		"Take care",
		"Thanks",
		"Thanks so much",
		"Many thanks",
		"Hope this helps",
		"Be well",
		"Sincerely",
		"Cheers",
		"High five from down low",
		"See you around",
		"Sent from a prehistoric stone tablet"
	];

	let name = [
		"Ken",
		"Kenneth",
		"Ken Keyes",
		"Kenneth Keyes",
		"KC"
	];

	let newILoveArray = iLoveArray[Math.floor(Math.random() * iLoveArray.length)];
	document.getElementById("iLove").innerHTML = newILoveArray;

	let newInterests = interests[Math.floor(Math.random() * interests.length)];
	document.getElementById("interests").innerHTML = newInterests;

	let newIAmArray = iAmArray[Math.floor(Math.random() * iAmArray.length)];
	document.getElementById("iAm").innerHTML = newIAmArray;

	let newWebSkillz = webSkillz[Math.floor(Math.random() * webSkillz.length)];
	document.getElementById("webSkillz").innerHTML = newWebSkillz;

	let newIWantArray = iWantArray[Math.floor(Math.random() * iWantArray.length)];
	document.getElementById("iWant").innerHTML = newIWantArray;

	let newProjects = projects[Math.floor(Math.random() * projects.length)];
	document.getElementById("projects").innerHTML = newProjects;

	let newSignOff = signOff[Math.floor(Math.random() * signOff.length)];
	document.getElementById("signOff").innerHTML = newSignOff;

	let newName = name[Math.floor(Math.random() * name.length)];
	document.getElementById("name").innerHTML = newName;

}

function expand() {
	document.getElementById("quote").innerHTML = "the ones who see things differently -- they're not fond of rules... You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things... they push the human race forward,";
}




//Scroll Function that will force the "main" tab to the bottom every second if the content overflows

// setInterval('forceBottom()', 100);
//
// function forceBottom() {
// 	let objDiv = document.getElementById("scroll");
// 	objDiv.scrollTop = objDiv.scrollHeight;
// }