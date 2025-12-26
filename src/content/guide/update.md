---
title: Updating WiiLink
icon: lucide:refresh-cw
pubDate: 2025-12-26
description: Get up-to-date instructions on how to update your WiiLink channels!
heroImage: "/img/guidebg-1.webp"
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="sd-card"></span> SD Card or USB Drive</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="globe"></span> Internet Connection</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="monitor"></span> Windows, Mac, Linux, or Android Device</h4><div style="height:40px; border-radius:8px;  position:relative;">
<a href="https://github.com/WiiLink24/WiiLink-Patcher-GUI/releases"><button type="button" style="height:50px; padding-left:28px; padding-right:28px; border-radius:12px 4px 4px 12px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><span class="download"></span> WiiLink Patcher</button></a>
<a href="https://github.com/hwalker56/WiiLinkPatcherAndroid#getting-started"><button type="button" style="height:50px; padding-left:18px; padding-right:18px; border-radius:4px 12px 12px 4px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><span class="android"></span></button></a>
</div></div>
</br>

## Section I - Patching WADs

</br>

> [If you want to see detailed instructions on how to install the WADs, click here!](#section-ii---installing-wads)

</br>

If you have not done so already, visit the [WiiLink Patcher releases page](https://github.com/WiiLink24/WiiLink-Patcher-GUI/releases) and download the correct patcher for your operating system.

</br>

### Launching the patcher:

#### Windows:
Simply download the Windows release (onefile or zip) of your choosing, and open the exe!

#### macOS:
Download the macOS release for your Mac (x64 for Intel, arm64 for Apple Silicon), and extract it. Then, launch Terminal. Type in `xattr -d com.apple.quarantine ` with a trailing space, drag the patcher app file into the terminal, and press enter. After this, you can just right click the app file and choose `Open`!

#### Linux:
Download the Linux release for your computer's architecture and extract it. Then, open a terminal, and use `cd` to change to the directory you extracted the patcher to. Run `chmod +x WiiLinkPatcherGUI` to make the patcher executable, and `./WiiLinkPatcherGUI` to run it.

<l class= "notice info">On some Debian and Ubuntu based distros, the patcher may fail to launch with the following error: </br>
`qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "" even though it was found.` </br>
You can resolve this by running `sudo apt install libxcb-cursor-dev`.</l>

</br>

If you know which channels you need to update, select `Custom Setup` and follow the steps below. If you're migrating from RiiConnect24, or otherwise don't know which channels need updating, use `Express Setup`.

</br>

### Express Installation
   - Choose `Express Setup`. Follow the steps below:
     1. Select your region for the WiiConnect24 channels.
     2. Select whether or not you would like to install the regional channels.
     3. Select what language you would like for the regional channels as well as your preferred Food Channel version if you chose to install them.
     4. Select your platform.

### Custom Installation
   - Choose `Custom Setup`. Follow the steps below:
     1. Select which channels you would like to install out of the list.
     2. Select your platform.
     3. Select the region of the console you will be installing the channels to.

</br>

Please wait a moment for the patcher to download and patch the files on your device. Once it's done, you can choose to copy the files to your SD Card / USB Device automatically, which we recommend.

If you choose not to copy everything automatically, copy the `WAD` and `apps` folder from the `WiiLink` directory where the patcher executable is located to the root of your SD Card or USB Device.

<hr style="border-top:2px solid var(--border-color);">
</br>

<span id="section-ii---installing-wads"></span>
## Section II - Installing WADs and Patching `Wii Mail`

<l class="notice info smallwidth">If you’re using Dolphin, install WADs through the menu (`Tools` > `Install WAD…`) instead of following these instructions.</l>

1. Put your SD card or USB drive in your Wii.
2. Launch the Homebrew Channel on your Wii.
3. Launch yawmME (YAWM ModMii Edition).
4. Press `A` to select your source device, which defaults to `Wii SD Card`.
5. If your Wii is not Japanese region, and you have chosen to install regional channels, install `WiiLink Address Settings.wad` before anything else. This is required for use of the Food Channel and the Photo Prints Channel.
6. Highlight all other WADs and press + to select them. When all of them are selected, press A twice to install the WADs.

<l class="notice warn smallwidth">If you receive error `-1022` or `-1029` while installing WADs, press `-` to uninstall the existing WAD, and try again.</l>

7. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.
8. Open the `WiiLink Mail Patcher` application inside the Homebrew Channel.
9. Follow the on-screen instructions.

<l class="notice warn smallwidth">If you receive error `-110211` in the Mail Patcher, head over to [our forum](https://forum.wiilink.ca) or [Discord server](https://discord.gg/wiilink) for support.</l>

10. Once the patcher is finished, you can return to the Wii Menu.


</br>
<hr style="border-top:2px solid var(--border-color);">
</br>

## Section III (Optional) - Connecting to DNS

</br>

### Connecting to DNS

<l class="notice info smallwidth">This step is <b>optional</b>, but it's recommended as it allows additional services to function.
</br>
<b>If you don't have the DNS, WiiLink will still work fine.</b></l>

1. Go to the Wii Settings --> Internet --> Connection Settings --> the Connection that you're using --> Change Settings.

2. Make your way to the "Auto-Obtain DNS" setting.

<l class="notice info smallwidth">The "Auto-Obtain IP Address" and "Auto-Obtain DNS" settings both look similar, so be sure that you're on the DNS setting.</l>

3. Once you've made sure that you're on the DNS setting, Click on "No", then "Advanced Settings".

Set your Primary DNS to --> 167.235.229.36<br>
Set your Secondary DNS to --> 1.1.1.1

4. After you're done setting up the DNS, save the changes and let the system perform the Connection Test.

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
