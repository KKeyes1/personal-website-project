<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Who Is Ken</title>
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />


		<link
			rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
			integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
			crossorigin="anonymous" />

		<link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">

		<link rel="stylesheet" href="CSS/style.css">

		<script
			src="https://code.jquery.com/jquery-3.3.1.js"
			integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
			crossorigin="anonymous"></script>

		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
			integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
			crossorigin="anonymous"></script>

		<script
			src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
			integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
			crossorigin="anonymous"></script>
	</head>
	<body>
		<div class="container">
			<div class="jumbotron">
				<div class="row text-center">
					<div class="col-lg-4 col-sm-12">
						<img src="http://placecage.com/200/300" alt="" class="image-flex">
					</div>
					<div class="col-lg-8 col-sm-12">
						<p>This is Nicholas Cage...</p>
					</div>
				</div>
			</div>
		</div>
		<div class="jumbotron">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 col-sm-12">
						<p>Random textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom text.</p>
					</div>
					<div class="col-lg-6 col-sm-12">
						<p>Random textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom textRandom text.</p>
					</div>
				</div>

			</div>
		</div>

		<div class="container bg-inverse text-white rounded">

			<div class="row">

				<div class="col-lg-8 col-lg-offset-2">

					<h1>Contact form Tutorial from <a href="http://bootstrapious.com">Bootstrapious.com</a></h1>

					<p class="lead">This is a demo for our tutorial dedicated to crafting working Bootstrap contact form with PHP and AJAX background.</p>
					<i class="fab fa-angular"></i>

					<!-- We're going to place the form here in the next step -->
					<form class="float-lg-right" id="contact-form" method="post" action="contact.php" role="form">

						<div class="messages"></div>

						<div class="controls">

							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="form_name">Firstname *</label>
										<input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required.">
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="form_lastname">Lastname *</label>
										<input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required.">
										<div class="help-block with-errors"></div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="form_email">Email *</label>
										<input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required.">
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="form_phone">Phone</label>
										<input id="form_phone" type="tel" name="phone" class="form-control" placeholder="Please enter your phone">
										<div class="help-block with-errors"></div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label for="form_message">Message *</label>
										<textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please,leave us a message."></textarea>
										<div class="help-block with-errors"></div>
									</div>
								</div>
								<div class="col-md-12">
									<input type="submit" class="btn btn-success btn-send" value="Send message">
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<p class="text-muted"><strong>*</strong> These fields are required. Contact form template by <a href="http://bootstrapious.com" target="_blank">Bootstrapious</a>.</p>
								</div>
							</div>
						</div>

					</form>

				</div>

			</div>

		</div>
	</body>
</html>