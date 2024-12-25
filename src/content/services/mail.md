---
title: Wii Message Board
pubDate: 2024-11-25
icon: lucide:mail
description: Communicate with other Wiis again!
type: "WiiConnect24"
heroImage: "msgbanner.webp"
---

### Communicate with other Wiis again!

WiiLink allows you to send messages to other Wiis again, as long as both Wiis are connected to our service. Many games and apps rely on this feature to send data to other Wiis, so you can send Miis through the Mii Channel or send ghost data or friend rankings with Mario Kart Wii, for example. You can also send messages to people via email or phone, which is powered by <a href="https://sendgrid.com">SendGrid</a> and you will get a nice email address (like w1234567890123456@rc24.xyz). To exchange messages with a phone, your phone carrier must have a SMS to email gateway. <a href="https://martinfitzpatrick.name/list-of-email-to-sms-gateways/">Here's a list of gateways</a>.

</br>
</br>


## Game Support

#### Below you'll find a list of the games which support Wii Mail for extra features:

</br>

<input oninput="w3.filterHTML('#countries', 'p', this.value); displayErrorMessage()" placeholder="&#xF002; Search for your game here..." style="font-family:inter, FontAwesome">

</br>
</br>

<div class="games" id="games" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); align-items:center; justify-content:center; gap:15px;">

All-Star Cheerleader

Animal Crossing: City Folk/Let's Go to the City

Band Hero

Big Brain Academy: Wii Degree

Blast Works: Build, Trade, Destroy

Boom Blox

Bonsai Barber

Cake Mania: In the Mix!

Calling

Chess Challenge!

Conduit 2

Crazy Machines

Dewy's Adventure

Dr. Mario Online Rx/& Germ Buster

Elebits

Excitebike: World Rally

Guitar Hero 5

Happy Holidays: Christmas

Happy Holidays: Halloween

Horse Life Adventures

Internet Channel

Kirby's Epic Yarn

Liight

MaBoShi's Arcade/The Three Shape Arcade

Marble Saga: Kororinpa/Marbles! Balance Challenge

Mario & Sonic at the Olympic Winter Games

Mario Kart Wii

Metroid Prime 3: Corruption

Metroid Prime Trilogy

Mii Channel

Mix Superstar

My Aquarium

My Aquarium 2

My Pokémon Ranch

Our House Party!

Photo Channel

Pro Evolution Soccer 2008

Pro Evolution Soccer 2009

Rabbids Go Home

Rock Revolution

Strong Bad Episode 1: Homestar Ruiner

Strong Bad Episode 2: Strong Badia - The Free

Strong Bad Episode 3: Baddest of the Bands

Strong Bad Episode 4: Dangeresque 3

Strong Bad Episode 5: 8-bit is Enough

Super Mario Galaxy

Super Mario Galaxy 2

Super Smash Bros. Brawl

The Conduit

UFC Personal Trainer: The Ultimate Fitness System

WarioWare: D.I.Y. Showcase

Wii Music

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
