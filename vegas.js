			var firework = document.querySelector("#fire");
			var sound = document.querySelector("#firework");
			var sound2 = document.querySelector("#firework2");
			var sound3 = document.querySelector("#firework3");
			var sounds = [sound, sound2, sound3];
			var winText = "";
			var winText2 = "";
			var w = document.querySelector("#win");
			var w2 = document.querySelector("#win2");
			var clicked = 0;
			var platinum = document.querySelector(".platinum");
			var gold = document.querySelector(".gold");
			var silver = document.querySelector(".silver");
			var bronze = document.querySelector(".bronze");
			var elements = [platinum, gold, silver, bronze];

				for(var i=0; i< elements.length; i++)
			elements[i].classList.add("visible");



		var showAndPush = function(e){
			if(clicked == 1) location.reload();
			w.classList.replace("hidden","visible");
			firework.classList.replace("hidden", "visible");
			for(var i=0; i<sounds.length; i++)
			sounds[i].play();
			w2.innerHTML = winText2;
			w.innerHTML = winText;
			w.style.animation = "type 10s steps(360, end)"; 
			w.classList.replace("hidden", "visible");
			e.classList.replace("hidden", "visible");
			e.style.transform = "translate3d(0, 0, 0)";
			e.style.animation = "shake 0.68s cubic-bezier(.36,.07,.19,.97) infinite";
			clicked= 1;
			}
		

	
		var throwJackpot =  function(e){
			for(var i=0; i<elements.length; i++)
			elements[i].classList.replace("visible", "hidden");

			if(e.target.classList.contains("p")){

				winText += " <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> ";
				winText2 = winText;
				w.style.color = "white";
				w2.style.color= "white";
				winText += " PLATINUM JACKPOT ";
				winText += " <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> ";
				showAndPush(platinum);
			}

			if(e.target.classList.contains("g")){
				winText += " <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> ";
				winText2 = winText;
				w.style.color = "#c79220";
				w2.style.color= "#c79220";
				winText += " GOLD JACKPOT ";
				winText += " <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> ";
				showAndPush(gold);
			}

			if(e.target.classList.contains("s")){
				winText += " <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> ";
				winText2 = winText;
				w.style.color = "silver";
				w2.style.color= "silver";
				winText += " SILVER JACKPOT ";
				winText += " <span class='glyphicon glyphicon-star'></span> <span class='glyphicon glyphicon-star'></span> ";
				showAndPush(silver);
			}

			if(e.target.classList.contains("b")){
				winText += " <span class='glyphicon glyphicon-star'></span> ";
				winText2 = winText;
				w.style.color= "#d99400";
				w2.style.color= "#d99400";
				winText += " BRONZE JACKPOT ";
				winText += " <span class='glyphicon glyphicon-star'></span> ";
				showAndPush(bronze);
			}
		}

		for(var i=0; i<elements.length; i++)
		elements[i].addEventListener("click", throwJackpot);