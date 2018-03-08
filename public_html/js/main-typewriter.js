
	$(function() {
		var typeWriter = new TypeWriter('#typeWriter',[
			'<i class="fas fa-quote-left pr-2"></i>Here\'s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes... the ones who see things differently -- they\'re not fond of rules... You can quote them, disagree with them, glorify or vilify them, but the only thing you can\'t do is ignore them because they change things... they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.<i class="fas fa-quote-right pl-2"></i>',
			' -Steve Jobs',
			'',
			'--> <input type="button" class="btn" id="generate" onclick="newTypewriter()" value="Click"></input> to learn more.',
		]);

		typeWriter.start();
	});

	ScrollRate = 10;

	function scrollDiv_init() {
		DivElmnt = document.getElementById('scroll');
		ReachedMaxScroll = false;

		DivElmnt.scrollTop = 0;
		PreviousScrollTop  = 0;

		ScrollInterval = setInterval('scrollDiv()', ScrollRate);
	}

	function scrollDiv() {

		if (!ReachedMaxScroll) {
			DivElmnt.scrollTop = PreviousScrollTop;
			PreviousScrollTop++;

			ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
		}
		else {
			ReachedMaxScroll = (DivElmnt.scrollTop == 0)?false:true;

			DivElmnt.scrollTop = PreviousScrollTop;
			PreviousScrollTop--;
		}
	}
