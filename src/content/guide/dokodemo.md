---
title: Wii Room Anywhere
pubDate: 2023-12-06
description: Get up-to-date instructions on how to patch Wii Room Anywhere!
icon: lucide:house
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
  <a href="#troubleshooting-questions" style="text-decoration:none;">
  <div style="font-family:system-ui; font-size:15px; padding:5px 10px; border-radius:80px; border:2px solid var(--border-color); background-color: var(--bg-color-tertiary);">Skip to Troubleshooting and Questions</div>
  </a>
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="sd-card"></span> SD Card</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="globe"></span> Internet Connection</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="monitor"></span> Windows, Mac or Linux Device</h4><div style="height:40px; border-radius:8px;  position:relative;">
<a href="https://github.com/WiiLink24/WiiLink-Patcher-GUI/releases"><button type="button" style="height:50px; padding-left:28px; padding-right:28px; border-radius:12px 12px 12px 12px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><span class="download"></span> WiiLink Patcher</button></a>
</div></div>
</br>
</br>

<l class="notice info">You need to own the DSiWare title "Dokodemo Wii no Ma" to get Wii Room Anywhere.</l>

<br>

## Dumping Dokodemo Wii no Ma

### 3DS:
1. Hold `START` while turning on your console to enter GodMode9
2. Press `HOME`, and open `Title manager`
3. Select `NAND/TWL`
4. Find and select "Dokodemo Wii no Ma" in the list (TWL-KDGJ)
5. Select `Manage Title...` > `Dump CXI/NDS file`

### DSi:
Follow the instructions at https://dsi.cfw.guide/dsiware-backups.html.

<br>

## Installation guide

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

1. Select `Wii Room Anywhere` from the main menu
2. Click `Browse...` and navigate to your ROM
3. Choose the language you want the application to be in
4. Open the "WiiLink" folder, and copy the `nds` folder within to your SD card
5. Insert your SD card to your console, and install the `.nds` file using GodMode9(i)

<l class="notice success fullwidth center">Congrats! You've installed Wii Room Anywhere on your console! Enjoy the app to your hearts content!</l>
___
<i id="troubleshooting-questions"></i>

## Troubleshooting & Questions

### "I get a white screen when I open the app!"
> Just wait. It can take up to a minute for the application to open, depending on the size of your SD card.

### "Why does the video cut off at the 10 minute mark?"
> Wii Room Anywhere has a video file size limit of 41.9MB. Longer videos would go over this limit, so we cap the length at 10 minutes. You can enjoy the full
video on the Wii Room channel.

### "My console can't find Wii Room on Dolphin Emulator!"
> Dolphin Emulator is not compatible with Wii Room Anywhere, as the app uses a direct WiFi connection to the channel. To use Wii Room Anywhere, you need a real
Wii or Wii U, and a real DSi or 3DS.