---
title: Installing WADs
icon: lucide:refresh-cw
pubDate: 2026-01-24
description: Get up-to-date instructions on how to install WADs on your console!
heroImage: "/img/guidebg-1.webp"
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="sd-card"></span> SD Card or USB Drive</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="globe"></span> Internet Connection</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;">
</div></div>
</br>

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Where will you be installing the WADs?</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));  margin-bottom:50px; gap:5px; flex-wrap:nowrap; position:relative;">
  <div style="width:100%; height:70px; margin-top:5px; position:relative;">
    <a href="#wii--wii-u">
      <button type="button" style="width:100%; height:70px; color:white !important; font-family:system-ui; border-radius:12px 4px 4px 12px; background-color:#0099CC; border:2px solid #33B5E5; transition: all 0.3s ease;" class="btn1 btn btn-primary">
        <img src="../../img/wiimote.webp" style="rotate:30deg; filter:invert(1);" height="25px"> Wii
      </button>
    </a>
  </div>
  <div style="width:100%; height:70px; margin-top:5px; position:relative;">
    <a href="#dolphin-emulator">
      <button type="button" style="width:100%; height:70px; color:white !important; font-family:system-ui; border-radius:4px 4px 4px 4px; background-color:#006699; border:2px solid #3388CC; transition: all 0.3s ease;" class="btn1 btn btn-primary">
        <img src="../../img/dolphin.webp" style="filter:invert(1);" height="25px"> Dolphin
      </button>
    </a>
  </div>
  <div style="width:100%; height:70px; margin-top:5px; position:relative;">
    <a href="#wii--wii-u">
      <button type="button" style="width:100%; height:70px; color:white !important; font-family:system-ui; border-radius:4px 12px 12px 4px; background-color:#FF6600; border:2px solid #FF9933; transition: all 0.3s ease;" class="btn1 btn btn-primary">
        <img src="../../img/gamepad.webp" style="filter:invert(1);" height="35px"> Wii U
      </button>
    </a>
  </div>
</div>

## Wii / Wii U

1. Put your SD card or USB drive in your Wii.
2. Launch the Homebrew Channel on your Wii.
3. Launch yawmME (YAWM ModMii Edition).
4. Press `A` to select your source device, which defaults to `Wii SD Slot`.

![Screenshot showing yawmME](/img/guide/yawmme.webp)

5. Scroll to the first file in the list, and hold down `+` for two seconds to select all files.
6. Press `A` twice to install all WADs.

<l class="notice warn smallwidth">If you receive error `-1022` or `-1029` while installing WADs, press `-` to uninstall the WAD giving the error, and try again.</l>

7. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

<l class="notice success smallwidth">Congratulations! You've installed the patched channels on your console!</l>

<l class="notice generic fullwidth"><b>What's next?</b></br>
Continue to <b><a href="/guide/dns">setting the DNS</a></b>.</l>

## Dolphin Emulator

<l class="notice info">To use WiiConnect24 services in Dolphin, you need to have the Wii System Menu installed. You can do this by navigating to `Tools` > `Perform Online System Update`</l>

1. Open Dolphin Emulator.
2. Select `Tools`
3. Select `Install WAD...`
4. Navigate to the `WAD` folder inside the `WiiLink` folder on your device, and install each file.
5. Navigate to `Options` > `Configuration` > `Wii`, and ensure `Enable WiiConnect24 via WiiLink` is enabled.
6. Load the Wii System Menu (`Tools` > `Load Wii System Menu`), then navigate to `Wii Options` (Wii logo in bottom left corner) > `Wii Settings` > `WiiConnect24`, and accept the EULA. If it tells you that WiiConnect24 isn't being offered in your region, change your country to a supported one and try again (we recommend the United Kingdom for PAL, and the United States for NTSC-U). Note that, while this will display Nintendo's EULA, by using WiiLink services you agree to our EULA, which can be found [here](/eula).

<l class="notice success smallwidth">Congratulations! You've installed the patched channels on your console!</l>

<l class="notice generic fullwidth"><b>What's next?</b></br>
<b>For people looking to use Demae Domino's:</b> Continue to <b><a href="/guide/accounts">linking your console to a WiiLink Account</a></b>.</br>
<b>For everyone else:</b> You are done! Enjoy using WiiLink to your heart's content!</l>