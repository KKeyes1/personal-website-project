//First call to typewriter

$(function() {
	let typeWriter = new TypeWriter('#typeWriter',
		[
		'<i class="fas fa-quote-left pr-2"></i>Here\'s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes... the ones who see things differently -- they\'re not fond of rules... You can quote them, disagree with them, glorify or vilify them, but the only thing you can\'t do is ignore them because they change things... they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.<i class="fas fa-quote-right pl-2"></i>',
		' -Steve Jobs',
		'',
		'This quote has inspired me not to back down from my attempts to change the world.',
		'I’ve made a game of the many professional directions I’ve followed in this pursuit.',
		'',
		'<button onclick="newTypewriter()">Click here</button> to see the various versions of me and my latest endeavor, programming.'
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
		'So who is Ken?',
		'Read this, and regenerate it as many times as you like to learn more.',
		'',
		'<s id="iLove">I love learning</s>',
		'I have already got my hands dirty with <em id="interests">locksmithing</em>',
		'<s id="iAm">I am a designer</s>',
		'Programming is my latest tool, I am diving into <em id="webSkillz">javascript</em>',
		'<s id="iWant">I want to help people</s>',
		'You can see my development on instagram, check out some fun challenges like my <em id="projects">bacon ipsum generator</em>',
		'I look forward to hearing from you',
		'',
		'<em id="signOff">All my best</em>',
		'    <em id="name">Ken</em>',
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
		"<s id='iAm'>I am a designer</s>",
		"<s id='iAm'>I am a critical thinker</s>",
		"<s id='iAm'>I am multi passionate</s>",
		"<s id='iAm'>I am an architect</s>",
		"<s id='iAm'>I am an artist</s>",
		"<s id='iAm'>I am an engineer</s>"
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
		"project management"
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
		"capstone"
	];


	let signOff = [
		"Thank you",
		"Best",
		"My best",
		"My best to you",
		"All best",
		"All the best",
		"Best wishes",
		"Bests",
		"Best regards",
		"Regards",
		"Rgds",
		"Warm Regards",
		"Warmest",
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
		"KC"];

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

//Scroll Function that will force the "main" tab to the bottom every second if the content overflows

setInterval('forceBottom()', 100);

function forceBottom() {
	let objDiv = document.getElementById("scroll");
	objDiv.scrollTop = objDiv.scrollHeight;
}