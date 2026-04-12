---
title: Just Eat
pubDate: 2026-04-12
description: Get up-to-date instructions on how to use Demae Just Eat!
icon: utensils
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="globe"></span> Internet Connection</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="monitor"></span> Windows, Mac, or Linux Device</h4><div style="height:40px; border-radius:8px;  position:relative;">
<a href="https://github.com/WiiLink24/JustEatLinker/releases"><button type="button" style="height:50px; padding-left:28px; padding-right:28px; border-radius:12px 12px 12px 12px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><span class="download"></span> Just Eat Linker</button></a>
</div></div>

</br>

If you have not done so already, visit the [releases page](https://github.com/WiiLink24/JustEatLinker/releases) and download the correct linker for your operating system.

</br>

### Launching the linker:

#### <b>Windows:</b>
Simply download the Windows release (onefile or zip) of your choosing, and open the exe!

#### <b>macOS:</b>
Download the macOS release for your Mac (x64 for Intel, arm64 for Apple Silicon), and extract it. Then, launch Terminal. Type in `xattr -d com.apple.quarantine ` with a trailing space, drag the linker app file into the terminal, and press enter. After this, you can just right click the app file and choose `Open`!

#### <b>Linux:</b>
Download the Linux release for your computer's architecture and extract it. Then, open a terminal, and use `cd` to change to the directory you extracted the linker to. Run `chmod +x JustEatLinker` to make the linker executable, and `./JustEatLinker` to run it.

<l class= "notice info">On some Debian and Ubuntu based distros, the linker may fail to launch with the following error: </br>
`qt.qpa.plugin: Could not load the Qt platform plugin "xcb" in "" even though it was found.` </br>
You can resolve this by running `sudo apt install libxcb-cursor-dev`.</l>

</br>

### Linker usage:
1. Log into your [**WiiLink Account**](https://accounts.wiilink.ca).

![img2](/img/guide/loginpage.png)

2. Enter the code the linker displays at https://sso.riiconnect24.net/device.

![img2](/img/guide/just-eat-linker.png)

3. Choose the Wii Number you would like to link your Just Eat account to, and choose the country you reside in.

4. Log into your Just Eat account using the pop-up the linker opened for you.

<l class="notice warn fullwidth">Do not resize the sign-in window, as it can cause the process to fail.</l>

</br>

### Channel usage:
1. Launch the channel from the Wii Menu.

<l class="notice info">If you need help getting the channel installed, refer to our guides on [using the patcher](/guide/patcher) and [installing WADs](/guide/wads). WADs for other variants of the Food Channel (Domino's, fake ordering, etc) will not work.</l>

2. Ensure your delivery address, and other personal information, is set correctly.

<l class="notice warn fullwidth">Do not add a space in your ZIP code / postcode. Doing so will cause the channel to throw a `333400` error.</l>

3. Press `Order`, and complete your order, following the on-screen instructions.

![img2](/img/guide/food.png)

4. Once you have placed your order, navigate to [just-eat.wiilink.ca](https://just-eat.wiilink.ca), and complete checkout.

<l class="notice success smallwidth">Congratulations! You've ordered food from Just Eat on your console!</l>

## Troubleshooting & Questions

</br>

### When launching the Just Eat Linker, its says "Browser not found!"
> To use the linker, you need Chromium, Google Chrome, or Microsoft Edge installed. We recommend fixing this issue by installing Google Chrome. If this problem persits, join the <a href="https://discord.gg/wiilink">WiiLink Discord server</a>, or the <a href="https://forum.wiilink.ca">WiiLink Forum</a> for support.

