---
title: Problem solving
icon: lucide:circle-alert
pubDate: 2024-10-20
description: Got any issues? Let's see if we can sort them out!
heroImage: "../../img/guidebg-3.webp"
---

### Get some info on common errors!

<script src="https://www.w3schools.com/lib/w3.js"></script>

<input oninput="w3.filterHTML('#error-codes', 'div', this.value); displayErrorMessage()" placeholder="&#xF002; Search for your error here..." style="background-color: var(--bg-opaque-1); color: var(--color); border:2px solid var(--border-color); font-family:inter, FontAwesome; padding: 13px 10px;">

</br>
</br>

<div class="errorCodes" id="error-codes">


<div class="error">Error Code: 110211 <span class="badge bg-warning">Wii Mail</span><h4>Head on over to <a href="https://discord.gg/wiilink" class="text-info"><i class="fa-solid fa-message" style="margin-right:5px;"></i>#support-text</a>, and send a picture of your error.</h4><hr></div>

<div class="error">Error Code: 107245 <span class="badge bg-warning">Any Channel</span><h4>Navigate to Internet Settings, and set your DNS to auto-obtain. Then, return to the channel you were in, set your region, and head back to Internet Settings to re-enable the WiiLink DNS.</h4><hr></div>

<div class="error">Error Code: FORE/NEWS000006 <span class="badge bg-primary">Forecast Channel / News Channel</span><h4>Follow the instructions <a href="https://wii.hacks.guide/wiiconnect24#updating-rtc-clock">here</a> to synchronise your time. After doing this, leave your console on the system menu for 30 minutes, then try again. If you still receive the error, ask in <a href="https://discord.gg/wiilink" class="text-info"><i class="fa-solid fa-message" style="margin-right:5px;"></i>#support-text</a> for further help with diagnosing your issue!</h4><hr></div>

<div class="error">Squished screen <span class="badge bg-primary">Wii Room</span><h4>If the channel launches with the screen vertically squished, it means you are running the software in the PAL viewing mode. This is necessary to prevent crashes and improve general instability. To fix this, modify the video mode using a launcher like <a class="btn btn-success" href="https://oscwii.org/library/app/wiiflow"><i class="fa-solid fa-download"></i> WiiFlow WFL</a>.</h4><hr></div>

<div class="error">Error Code: -1017 <span class="badge bg-warning">Food Channel</span><h4>This is a known issue with the patcher! In the meantime, you will find a file titled "Food Channel (English).wad" on the root of your SD card. Use your favorite WAD manager to install!</h4><hr></div>

<div class="error">Wii Update <span class="badge bg-warning">Food Channel/Photo Prints Channel</span><h4>If the system asks you to update, you didn't install "WiiLink Address Settings.wad". Using yawmME, go to the location where you put "WiiLink Address Settings.wad", then install it by pressing the A Button twice on your Wii remote. 
</h4><hr></div>

<div class="error">Error Code: -1022/-1029 <span class="badge bg-warning">Any Channel</span><h4>Using your favorite WAD manager, uninstall the channel, and install again. For yawmME, this means locating the channel WAD, and pressing the - (minus) button on your Wii remote, and pressing A to uninstall. Then, install the WAD again.</h4><hr></div>

<div class="error">Adding Food to Basket <span class="badge bg-warning">Food Channel</span><h4>Please ensure your console ID is registered as per the instructions <a href="/guide/demae/#section-ii---registering-your-console-id">here</a>, then try erasing save data for the Demae Channel, and setting it up again! Let us know in <a href="https://discord.gg/wiilink" class="text-info"><i class="fa-solid fa-message" style="margin-right:5px;"></i>#support-text</a> if you continue to experience issues.</h4><hr></div>

<div class="error">Error Code: 51330 <span class="badge bg-warning">Internet Error</span><h4>Make sure that your internet connection to your Wii is working by doing a connection test. If it's successful, run the Mail Patcher again. If it fails, your router is incompatible with the Wii. You can potentially fix this by configuring your router to use the 802.11g or 802.11b band alongside the other bands that it uses.</h4><hr></div>

<div class="error">Error Code: 109139 <span class="badge bg-warning">Any Channel</span><h4>The WiiConnect24 service isn’t activated on your console. Go to Wii Settings → WiiConnect24 and agree to its terms of use. If it reports that “WiiConnect24 and Wii Shop Channel service is not currently being offered”, try changing your Wii’s country setting (for European Wiis, “United Kingdom” is recommended). If it succeeds, you can use AnyGlobe Changer to switch back to your country.<br />If the issue persists, ensure that “Standby Connection” is enabled in WiiConnect24 settings, and “Parental Controls” are turned off.</h4><hr></div>

<div class="error">Error Code: 221001 <span class="badge bg-warning">EULA</span><h4>Try changing your Wii’s country setting (for European Wiis, “United Kingdom” is recommended). If it succeeds, you can use AnyGlobe Changer to switch back to your country.<br />If the issue persists, ensure that “Standby Connection” is enabled in WiiConnect24 settings, and “Parental Controls” are turned off.</h4><hr></div>

<div class="error">Error Code: 354xxx <span class="badge bg-primary">Wii Room</span><h4>Please <a href="https://discord.gg/wiilink" class="text-primary"><i class="fa-brands fa-discord" style="margin-right:5px;"></i> Join our Discord</a> server or message us on our Twitter account with more information. This error is server-side, so please let us know what happened for it to occur!</h4><hr></div>

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