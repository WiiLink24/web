---
title: Problem solving
icon: fa-solid fa-circle-exclamation
pubDate: 2024-07-07
description: Got any issues? Let's see if we can sort them out!
heroImage: "../../img/guidebg-3.png"
---

### Get some info on common errors!

<script src="https://www.w3schools.com/lib/w3.js"></script>

<input oninput="w3.filterHTML('#error-codes', 'div', this.value); displayErrorMessage()" placeholder="&#xF002; Search for your error here..." style="background-color: var(--bg-opaque-1); color: var(--color); border:2px solid var(--border-color); font-family:inter, FontAwesome; padding: 13px 10px;">

</br>
</br>

<div class="errorCodes" id="error-codes">


<div class="error">Squished screen <span class="badge bg-primary">Wii Room</span><h4>If the channel launches with the screen vertically squished, it means you are running the software in the PAL viewing mode. This is necessary to prevent crashes and general instability. To fix this, modify the video mode using a launcher like <a class="btn btn-success" href="https://oscwii.org/library/app/wiiflow"><i class="fa-solid fa-download"></i> WiiFlow WFL</a></h4><hr></div>

<div class="error">Error Code: -1017 <span class="badge bg-warning">Food Channel</span><h4>This is a known issue with the patcher! In the meantime, you will find a file titled "Food Channel (English).wad" on the root of your SD card. Use your favorite WAD manager to install!</h4><hr></div>

<div class="error">Wii Update <span class="badge bg-warning">Food Channel/Photo Prints Channel</span><h4>If the system asks you to update. It means that you didn't install the "WiiLink SPD (Wii).wad" or the "WiiLink SPD (vWii).wad" (Depending on your Console) using yawmME, go to the location where you put the WiiLink SPD.wad, then install it by pressing the A Button twice on your Wii remote.</h4><hr></div>

<div class="error">Error: -1022/Error -1029 <span class="badge bg-warning">Any Channel</span><h4>Using your favorite WAD manager, Uninstall the Channel, and Install again. For many, this means going to the Location the Channel WAD, and Pressing the - (minus) button on your Wii remote, and Pressing A to Uninstall. Then, Install the WAD again.</h4><hr></div>

<div class="error">Pink Bar <span class="badge bg-primary">European Wiis</span><h4>If you see a Pink Bar at the bottom of your TV/Screen, Go to the Wii Settings -> Screen -> TV Resolution, then set the TV Resolution to 60 HZ (480p/480i).</h4><hr></div>

<div class="error">Adding Food to Basket <span class="badge bg-warning">Food Channel</span><h4>Please try erasing save data for the Demae Channel, and setting it up again! Let us know in <a href="https://discord.gg/wiilink" class="text-info"><i class="fa-solid fa-message" style="margin-right:5px;"></i>#support</a> if you continue to experience issues.</h4><hr></div>

<div class="error">Error Code: 51330 <span class="badge bg-warning">Internet Error</span><h4>Make sure that your Internet Connection to your Wii is working by doing a Connection Test. if it's Successful, run the Patcher again. If it Fails, Use a different Internet Connection.</h4><hr></div>

<div class="error">Error: 109139 <span class="badge bg-warning">Any Channel</span>
     <h4>WiiConnect24 service isn’t activated on your console. Go to Wii Settings → WiiConnect24 and agree to it’s terms
          of use. If it reports that “WiiConnect24 and Wii Shop Channel service is not currently being offered”, try
          changing your Wii’s country setting (for European Wiis, “United Kingdom” is recommended). If it succeeds, you
          may attempt to switch back to your actual country, though it may not be supported in all
          regions.<br />If the issue persists, ensure that “Standby Connection” is enabled in WiiConnect24
          settings and in Priiloader (if you use it) and “Parental Controls” are turned off.</h4>
     <hr>
</div>

<div class="error">Error Code: 354 <span class="badge bg-primary">Wii Room</span><h4>Please <a href="https://discord.gg/wiilink" class="text-primary"><i class="fa-brands fa-discord" style="margin-right:5px;"></i> Join our Discord</a> server or message us on our Twitter account with more information. This error is server-side, so please let us know what happened for it to occur!</h4><hr></div>

<div class="error">PAL crashes <span class="badge bg-danger">Japanese channels</span><h4>Unfortunately, this is a known issue. We're aware of many crashes for PAL Region consoles. We continue to work on a solution for this, thank you for your patience.</h4><hr></div>

</div>

<div id="error-message" style="left:50%; width:500px; transform:translate(-50%, 0); margin-top:100px; margin-bottom:100px; text-align:center; display: none; flex-wrap:wrap; gap:15px; align-items:center; justify-content:center; position:relative;"><i class="fa-solid fa-bomb" style="font-size:100px;"></i>Hmm... We might've missed that error, why don't you let us know on our Discord server? </br> <a href="https://discord.gg/wiilink"><div class="btn btn-primary" style="padding:10px;"><i class="fa-brands fa-discord" style="margin-right:5px;"></i> Join our Discord</div></a></div>

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
    .errorCodes p{
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

    #container2{
         font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    }
</style>