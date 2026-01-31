---
title: WiiLink DNS
icon: lucide:database
pubDate: 2026-01-24
description: Get up-to-date instructions on how to set your DNS to WiiLink!
heroImage: "/img/guidebg-1.webp"
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="gamepad-2"></span> Wii / Wii U console</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="globe"></span> Internet Connection</h4>
</div>
</br>

<l class="notice info smallwidth">This step is <b>optional</b>, but it's recommended as it allows additional services to function.
</br>
<b>If you don't have the DNS, WiiLink will still work fine.</b></l>

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Where will you be using the DNS?</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));  margin-bottom:50px; gap:5px; flex-wrap:nowrap; position:relative;">
  <div style="width:100%; height:70px; margin-top:5px; position:relative;">
    <a href="#wii">
      <button type="button" style="width:100%; height:70px; color:white !important; font-family:system-ui; border-radius:12px 4px 4px 12px; background-color:#0099CC; border:2px solid #33B5E5; transition: all 0.3s ease;" class="btn1 btn btn-primary">
        <img src="../../img/wiimote.webp" style="rotate:30deg; filter:invert(1);" height="25px"> Wii
      </button>
    </a>
  </div>
  <div style="width:100%; height:70px; margin-top:5px; position:relative;">
    <a href="#wii-u">
      <button type="button" style="width:100%; height:70px; color:white !important; font-family:system-ui; border-radius:4px 12px 12px 4px; background-color:#FF6600; border:2px solid #FF9933; transition: all 0.3s ease;" class="btn1 btn btn-primary">
        <img src="../../img/gamepad.webp" style="filter:invert(1);" height="35px"> Wii U
      </button>
    </a>
  </div>
</div>

## Wii

1. Go to the Wii Menu > `Wii Options` > `Wii Settings` > `Internet` > `Connection Settings` > the connection that you're using > `Change Settings`.

2. Make your way to the `Auto-Obtain DNS` setting.

<l class="notice info smallwidth">The "Auto-Obtain IP Address" and "Auto-Obtain DNS" settings both look similar, so be sure that you're on the DNS setting.</l>

3. Once you've made sure that you're on the DNS setting, Click on `No`, then `Advanced Settings`.

4. Set your Primary DNS to `167.235.229.36`<br>Set your Secondary DNS to `1.1.1.1`

5. After you're done setting up the DNS, save the changes and let the system perform the Connection Test.

<l class="notice generic smallwidth">If the Connection Test failed, use a different Internet Connection or try again.</l>

6. Go to the 1st page of the "Internet" category, then select "User Agreements", then select "Yes".

7. Allow the EULA to load.

<l class="notice info smallwidth">If it tells you that WiiConnect24 isn't being offered in your region, or you receive error 221001, change your country to a supported one and try again (we recommend the United Kingdom for PAL, and the United States for NTSC-U).
</br>
After agreeing to the EULA, you can use AnyGlobe Changer in the Homebrew Channel to switch back to your actual country.</l>

The developers recommended that you read the EULA, as it gives important information about the service.

<l class="notice warn smallwidth">If you do not see the WiiLink logo on the EULA, the DNS will not work on your network. If you want to enable it, you can use the <a href="https://github.com/WiiLink24/DNS-Server">DNS Server application</a>.</l>

8. Once you read the EULA, click on "I ACCEPT".

9. Navigate back to the main settings page, select WiiConnect24, and set "WiiConnect24" and "Standby Connection" to On.

</br>

<l class="notice success smallwidth">Congratulations! You've setup the DNS on your Console!</l>

<l class="notice generic fullwidth"><b>What's next?</b></br>
Continue to <b><a href="/guide/board">patching the Wii Message Board</a></b>.</l>

## Wii U
1. Go to the Wii U Menu > `System Settings` > `Internet` > `Connect to the Internet` > `Connection List` > the connection that you're using > `Change Settings`.

2. Make your way to the `DNS` setting.

3. Click on `Do not auto-obtain`, then enter the following DNS info:

4. Set your Primary DNS to `167.235.229.36`<br>Set your Secondary DNS to `1.1.1.1`

5. After you're done setting up the DNS, save the changes and let the system perform the Connection Test.

<l class="notice generic smallwidth">If the Connection Test failed, use a different Internet Connection or try again.</l>

6. Go to the Wii Menu > `Wii Options` > `WiiConnect24` > `OK` > `Next`.

7. Allow the EULA to load.

<l class="notice info smallwidth">If it tells you that WiiConnect24 isn't being offered in your region, or you receive error 221001, change your country to a supported one and try again (we recommend the United Kingdom for PAL, and the United States for NTSC-U).
</br>
After agreeing to the EULA, you can use AnyGlobe Changer in the Homebrew Channel to switch back to your actual country.</l>

The developers recommended that you read the EULA, as it gives important information about the service.

<l class="notice warn smallwidth">If you do not see the WiiLink logo on the EULA, the DNS will not work on your network. If you want to enable it, you can use the <a href="https://github.com/WiiLink24/DNS-Server">DNS Server application</a>.</l>

8. Once you read the EULA, click on "I ACCEPT".

</br>

<l class="notice success smallwidth">Congratulations! You've setup the DNS on your console!</l>

<l class="notice generic fullwidth"><b>What's next?</b></br>
Continue to <b><a href="/guide/board">patching the Wii Message Board</a></b>.</l>