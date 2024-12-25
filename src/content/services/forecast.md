---
title: Forecast Channel
pubDate: 2024-11-25
icon: lucide:sun
description: Check the weather from anywhere right from your Wii!
heroImage: "forecastbanner.webp"
type: "WiiConnect24"
color: 073cb860
---

## Check the weather from anywhere right from your Wii!

<br>

With the Forecast Channel, and you can view the weather forecast for hundreds
      of cities all across the globe! You can also view your local forecast on the Wii Menu. We use <a
        href="https://accuweather.com/">AccuWeather</a> as our new weather source, unlike the original version of the channel, which used <a
        href="https://global.weathernews.com">Weathernews</a>.

<hr>
<h4><i class="fab fa-youtube" aria-hidden="true"></i> Watch Video</h4>

<iframe src="https://www.youtube.com/watch?v=_kJcR_O7Zgg" frameborder="0" width="100%" height="500" allow="autoplay; encrypted-media" style="border-radius:8px;"
              allowfullscreen></iframe>

</br>
</br>


## Game Support

#### Below you'll find a list of the games which support the Forecast Channel for extra features:

</br>

<input oninput="w3.filterHTML('#countries', 'p', this.value); displayErrorMessage()" placeholder="&#xF002; Search for your game here..." style="font-family:inter, FontAwesome">

</br>
</br>

<div class="games" id="games" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); align-items:center; justify-content:center; gap:15px;">

Mario & Sonic at the Olympic Winter Games

My Aquarium

My Aquarium 2

NiGHTS: Journey of Dreams

Rilakkuma: Minna de Goyururi Seikatsu

Tiger Woods PGA Tour 10

Tiger Woods PGA Tour 11

Tiger Woods PGA Tour 12: The Masters

Wii Room

</div>


<div id="error-message" style="left:50%; width:500px; transform:translate(-50%, 0); margin-top:100px; margin-bottom:100px; text-align:center; display: none; flex-wrap:wrap; gap:15px; align-items:center; justify-content:center; position:relative;"><i class="fa-solid fa-heart-crack" style="font-size:100px;"></i>Well, this is odd... Your game isn't here. How about you ask about it on our Discord?</br> <a href="https://discord.gg/wiilink"><div class="btn btn-primary" style="padding:10px;"><i class="fa-brands fa-discord" style="margin-right:5px;"></i> Join our Discord</div></a></div>

<script>
	function displayErrorMessage() {
		var errorDiv = document.getElementById('error-message');
		var divs = document.querySelectorAll('.errorCodes div');
		var matchingDivs = Array.from(divs).filter(div => div.style.display !== 'none');
		
		if (matchingDivs.length === 0) {
			errorDiv.style.display = 'flex';
		} else {
			errorDiv.style.display = 'none';
		}
	}
</script>


<style>
	.games p{
		height:auto;
		background-color:#a1a1a160;
		padding:8px;
		border-radius:8px;
		position:relative;
	}

	input{
		width:100%;
		border:2px solid gray;
		border-radius:8px;
		padding:8px;
		margin-bottom:8px;
		position:relative;
	}
</style>
