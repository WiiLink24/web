---
title: WiiLink Patcher
icon: download
pubDate: 2026-01-24
description: Get up-to-date instructions on how to use the patcher!
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

<l class="notice info">To install WiiLink, you will need to have a homebrewed console. If your console isn't already homebrewed, follow the instructions [here](https://wii.hacks.guide/get-started) to homebrew your Wii.</l>

## Installation guide

If you have not done so already, visit the [WiiLink Patcher releases page](https://github.com/WiiLink24/WiiLink-Patcher-GUI/releases) and download the correct patcher for your operating system.

</br>

### Launching the patcher:

#### <b>Windows:</b>
Simply download the Windows release (onefile or zip) of your choosing, and open the exe!

#### <b>macOS:</b>
Download the macOS release for your Mac (x64 for Intel, arm64 for Apple Silicon), and extract it. Then, launch Terminal. Type in `xattr -d com.apple.quarantine ` with a trailing space, drag the patcher app file into the terminal, and press enter. After this, you can just right click the app file and choose `Open`!

#### <b>Linux:</b>
Download the Linux release for your computer's architecture and extract it. Then, open a terminal, and use `cd` to change to the directory you extracted the patcher to. Run `chmod +x WiiLinkPatcherGUI` to make the patcher executable, and `./WiiLinkPatcherGUI` to run it.

<l class= "notice info">On some Debian and Ubuntu based distros, the patcher may fail to launch with the following error: </br>
`qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "" even though it was found.` </br>
You can resolve this by running `sudo apt install libxcb-cursor-dev`.</l>

</br>

### Express Installation
   - Choose `Express Setup`. Follow the steps below:
     1. Select your language for the channels.
     2. Select your region for the WiiConnect24 channels.
     3. Select the channels you'd like to install.
     4. Select the platform you'll be installing WiiLink onto.

### Custom Installation
   - Choose `Custom Setup`. Follow the steps below:
     1. Select which channels you'd like to install.
     2. Select platform you'll be installing WiiLink onto.
     3. Select the region of the console you will be installing the channels to.

![Image of the patcher downloading files](/img/guide/patcher.webp)

Please wait a moment for the patcher to download and patch the files on your device. Once it's done, you can choose to copy the files to your SD Card / USB Device automatically, which we recommend.

If you choose not to copy everything automatically, copy the `WAD` and `apps` folder from the `WiiLink` directory in your `Downloads` folder to the root of your SD Card or USB Device.

<l class="notice success smallwidth">Congratulations! You've got the files you need to install WiiLink!</l>

<l class="notice generic fullwidth"><b>What's next?</b></br>
Continue to <b><a href="/guide/wads">installing WADs</a></b>.</l>