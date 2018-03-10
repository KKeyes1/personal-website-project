<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<!--		<meta http-equiv="refresh" content="5" >-->
		<title>Who Is Ken</title>
		<link rel="shortcut icon" type="image/x-icon" href="image/1520526304.ico">

		<!--		Bootstrap CSS-->
		<link
			rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
			integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
			crossorigin="anonymous"/>

		<!--		Custom CSS-->
		<link
			rel="stylesheet"
			href="css/style.css"/>

		<!--		Bootstrap JS Dependencies-->
		<script
			src="https://code.jquery.com/jquery-3.3.1.min.js"
			integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
			crossorigin="anonymous"></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
			integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
			crossorigin="anonymous"></script>
		<script
			src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
			integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
			crossorigin="anonymous"></script>

		<!-- jQuery Form, Additional Methods, Validate -->
		<script
			type="text/javascript"
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"></script>
		<script
			type="text/javascript"
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
		<script
			type="text/javascript"
			src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/additional-methods.min.js"></script>

		<!-- Your JavaScript Form Validator -->
		<script src="js/form-validate.js"></script>

		<!-- Google reCAPTCHA -->
		<script src='https://www.google.com/recaptcha/api.js'></script>

		<!--		Font Awesome JS-->
		<script
			defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>

		<!--		<!--		Custom JS-->
		<script
			src="js/typeWriter.js"></script>
		<script
			src="js/madlib-typewriter.js"></script>
	</head>
	<body onLoad="scrollDiv_init()">

		<div class="jumbotron rounded-0">
			<div class="container py-3" id="container">

				<!--			Console Navbar with tabs-->
				<nav class="navbar navbar-expand-md" id="consoleNav">
					<div class="navbar-header">
						<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
							<i class="fas fa-bars"></i>
						</button>
					</div>
					<div class="collapse navbar-collapse" id="myNavbar">
						<ul class="nav nav-tabs" role="tablist">
							<li class="nav-item"><a href="#main" class="nav-link active" role="tab" data-toggle="tab">Main</a>
							</li>
							<li class="nav-item"><a href="#contact" class="nav-link" role="tab" data-toggle="tab">Contact</a>
							</li>
							<li class="nav-item"><a href="#proficiencies" class="nav-link" role="tab" data-toggle="tab">Proficiencies</a>
							</li>
						</ul>
					</div>
					<a class="navbar-brand pull-right">Who Is Ken</a>
				</nav>


				<!--			Tab Panels-->

				<!--			Main section-->
				<div class="tab-content">
					<div role="tabpanel" class="tab-pane active" id="main">
						<div id="scroll">
							<section id="typeWriter"></section>
						</div>
					</div>

					<!--				Contact Form Tab Panel-->
					<div role="tabpanel" class="tab-pane pt-3" id="contact">
						<form class="form-horizontal" role="form" method="post" action="php/mailer.php" id="contactForm">
							<div class="form-group">
								<label for="name" class="col-sm-3 control-label console-color">
									<span class="required">*</span> Name:</label>
								<div class="col-sm-12">
									<input type="text" class="form-control" id="name" name="name" placeholder="First & Last"
											 required>
								</div>
							</div>
							<div class="form-group">
								<label for="email" class="col-sm-3 control-label console-color">
									<span class="required">*</span> Email: </label>
								<div class="col-sm-12">
									<input type="email" class="form-control" id="email" name="email" placeholder="you@domain.com"
											 required>
								</div>
							</div>
							<div class="form-group">
								<label for="subject" class="col-sm-3 control-label console-color">
									<span class="required">*</span> Subject:</label>
								<div class="col-sm-12">
									<input type="text" class="form-control" id="subject" name="subject" placeholder="Subject"
											 required>
								</div>
							</div>
							<div class="form-group">
								<label for="message" class="col-sm-3 control-label console-color">
									<span class="required">*</span> Message:</label>
								<div class="col-sm-12">
									<textarea name="message" rows="4" required class="form-control" id="message"
												 placeholder="Comments"></textarea>
								</div>
							</div>
							<div class="form-group px-3">
								<span class="required console-color">* Required</span>
								<div class="row">
									<div class="col-6">
										<div class="g-recaptcha" data-theme="dark"
											  data-sitekey="6LdL90cUAAAAAAAVEvxsqj4n0BT2MpfG1rJjcsbu"></div>
									</div>
									<div class="col-6 text-right">
										<input type="submit" class="btn btn-lg p-4" value="Send" name="enter" id="sendButton">
									</div>
								</div>
							</div>
						</form>
						<div id="output-area"></div>
						<div id="success-output-area"></div>
					</div>

					<!--				Proficiencies Tab Panel-->
					<div role="tabpanel" class="tab-pane" id="proficiencies">
						<p class="m-5">Hover over each row.</p>
						<div class="row my-5 mx-auto text-center" id="top-languages"
							  title="Languages I have spent the most time with.">
							<div class="col">
								<i class="fab fa-html5 fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-css3-alt fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-js fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-angular fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-php fa-3x"></i>
							</div>
						</div>
						<div class="row my-5 mx-auto text-center" id="browsers" title="Browsers I have installed.">
							<div class="col">
								<i class="fab fa-chrome fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-firefox fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-safari fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-opera fa-3x"></i>
							</div>
						</div>
						<div class="row my-5 mx-auto text-center" id="five-more" title="Still learning!">
							<div class="col">
								<i class="fab fa-node-js fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-npm fa-3x"></i>
							</div>
							<div class="col">
								<i class="fas fa-database fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-linux fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-wordpress fa-3x"></i>
							</div>
						</div>
						<div class="row my-5 mx-auto text-center" id="online-resources"
							  title="Some of my favorite online resources!">
							<div class="col">
								<i class="fab fa-reddit-alien fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-stack-overflow fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-codepen fa-3x"></i>
							</div>
							<div class="col">
								<i class="fab fa-jsfiddle fa-3x"></i>
							</div>
						</div>
						<div class="row my-5 mx-auto text-center" id="security-design"
							  title="Physical security and design are some of my favorite places to play, also.">
							<div class="col">
								<i class="fab fa-keycdn fa-3x"></i>
							</div>
							<div class="col">
								<i class="fas fa-user-secret fa-3x"></i>
							</div>
							<div class="col">
								<i class="fas fa-pencil-alt fa-3x"></i>
							</div>
							<div class="col">
								<i class="fas fa-file fa-3x"></i>
							</div>
							<div class="col">
								<i class="fas fa-users fa-3x"></i>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!--			Footer with Links-->

			<nav class="navbar fixed-bottom navbar-dark justify-content-center">
				<a class="navbar-item console-color p-2" target="_blank" href="https://www.instagram.com/_who_is_ken/"><i
						class="fab fa-instagram fa-3x"></i></a>
				<a class="navbar-item console-color p-2" target="_blank" href="https://www.linkedin.com/in/ken-keyes/"><i
						class="fab fa-linkedin fa-3x"></i></a>
				<a class="navbar-item console-color p-2" target="_blank" href="https://github.com/KKeyes1"><i
						class="fab fa-github-square fa-3x"></i></a>
			</nav>


	</body>
</html>