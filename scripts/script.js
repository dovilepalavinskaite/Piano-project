
//Function that makes sound:

function playPiano(fileName) {
	event.stopPropagation();
	event.preventDefault();
	var keySound = new Audio ();
	keySound.src = fileName;
	keySound.play();
}

// Including JQuery: change class - realistic white keys movement

var keyWhite = document.querySelectorAll('.piano-key-white');

for (var i = 0; i < keyWhite.length; i++){
	keyWhite[i].addEventListener('click', function(){
		$(this).addClass('white-piano-key-played').delay(500).queue(function(){
			$(this).removeClass('white-piano-key-played').dequeue();
		});
	});
}

// Including JQuery: change class - realistic black keys movement

var keyBlack = document.querySelectorAll('.piano-key-black');

for (var i = 0; i < keyBlack.length; i++){
	keyBlack[i].addEventListener('click', function(){
		$(this).addClass('black-piano-key-played').delay(500).queue(function(){
			$(this).removeClass('black-piano-key-played').dequeue();
		});
	});
}



