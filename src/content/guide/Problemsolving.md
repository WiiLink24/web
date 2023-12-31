---
title: Problem solving
icon: fa-solid fa-circle-exclamation
pubDate: 2023-09-24
description: Got any issues? Let's see if we can sort them out!
heroImage: "../../img/guidebg-3.png"
---

### Get some info on common errors!

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
<script src="https://www.w3schools.com/lib/w3.js"></script>

<input oninput="w3.filterHTML('#error-codes', 'div', this.value); displayErrorMessage()" placeholder="&#xF002; Search for your error here..." style="font-family:inter, FontAwesome">

</br>
</br>

<div class="errorCodes" id="error-codes">

<div class="error">Error Code: -1017 <span class="badge bg-warning">Food Channel</span><h4>This is a known issue with the patcher! In the meantime, you will find a file titled "Food Channel (English).wad" on the root of your SD card. Use your favorite WAD manager to install!</h4><hr></div>

<div class="error">Wii Update <span class="badge bg-warning">Food Channel/Photo Prints Channel</span><h4>If the system asks you to update. It means that you didn't install the "WiiLink SPD (Wii).wad" or the "WiiLink SPD (vWii).wad" (Depending on your Console) using YAWMME, go to the location where you put the WiiLink SPD.wad, then install it by pressing the + (plus) on your Wii remote.</h4><hr></div>

<div class="error">Error Code: -1022 <span class="badge bg-warning">Any Channel</span><h4>Using your favorite WAD manager, Uninstall the Channel, and Install again. For many, this means going to the Location the Channel WAD, and Pressing the - (minus) button on your Wii remote, and Pressing A to Uninstall. Then, Install the WAD again.</h4><hr></div>
<div class="error">Error Code -110211 <span class="badge bg-warning">WiiLink Mail Patcher</span><h4>If this happens when you run the Patcher for the first time, let us know in <a href="https://discord.gg/wiilink-750581992223146074" class="text-info"><i class="fa-solid fa-message" style="margin-right:5px;"></i>#support</a> and we'll happily try to resolve this issue.</h4><hr></div>

<div class="error">Adding Food to Basket <span class="badge bg-warning">Food Channel</span><h4>Please try erasing save data for the Demae Channel, and setting it up again! Let us know in <a href="https://discord.gg/wiilink-750581992223146074" class="text-info"><i class="fa-solid fa-message" style="margin-right:5px;"></i>#support</a> if you continue to experience issues.</h4><hr></div>

<div class="error">Error Code: 50130 <span class="badge bg-warning">Internet Error</span><h4>Make sure that your Internet Connection to your Wii is working by doing a Connection Test. if it's Successful, run the Patcher again. If it Fails, Use a different Internet Connection.</h4><hr></div>

<div class="error">Error Code: 354 <span class="badge bg-primary">Wii Room</span><h4>Please <a href="https://discord.gg/wiilink-750581992223146074" class="text-primary"><i class="fa-brands fa-discord" style="margin-right:5px;"></i> Join our Discord</a> server or message us on our Twitter account with more information. This error is server-side, so please let us know what happened for it to occur!</h4><hr></div>

<div class="error">PAL crashes <span class="badge bg-danger">Japanese channels</span><h4>Unfortunately, this is a known issue. We're aware of many crashes for PAL Region consoles. We continue to work on a solution for this, thank you for your patience.</h4><hr></div>

</div>

<div id="error-message" style="left:50%; width:500px; transform:translate(-50%, 0); margin-top:100px; margin-bottom:100px; text-align:center; display: none; flex-wrap:wrap; gap:15px; align-items:center; justify-content:center; position:relative;"><i class="fa-solid fa-bomb" style="font-size:100px;"></i>Hmm... We might've missed that error, why don't you let us know on our Discord server? </br> <a href="https://discord.gg/wiilink-750581992223146074"><div class="btn btn-primary" style="padding:10px;"><i class="fa-brands fa-discord" style="margin-right:5px;"></i> Join our Discord</div></a></div>

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