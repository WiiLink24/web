---
title: Wii Message Board
pubDate: 2026-01-24
description: Get up-to-date instructions on how to patch the Wii Message Board!
icon: lucide:presentation
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
  <a href="#troubleshooting-questions" style="text-decoration:none;">
  <div style="font-family:system-ui; font-size:15px; padding:5px 10px; border-radius:80px; border:2px solid var(--border-color); background-color: var(--bg-color-tertiary);">Skip to Troubleshooting and Questions</div>
  </a>
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="sd-card"></span> SD Card or USB Drive</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="globe"></span> Internet Connection</h4><div style="height:40px; border-radius:8px;  position:relative;">
<a href="https://oscwii.org/library/app/Mail-Patcher"><button type="button" style="height:50px; padding-left:28px; padding-right:28px; border-radius:12px 12px 12px 12px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><span class="download"></span> Mail Patcher</button></a>
</div></div>
</div></div>
</br>

## Installation guide

<l class="notice warn fullwidth">To use this service on vWii, you will need to enable the `Create message via Calendar button` hack in Priiloader. If you are unsure of how to do this, or do not have Priiloader installed, follow [this](/guide/vwii#section-i---priiloader) guide.</l>
</br></br>
<l class="notice warn fullwidth">At present, this service is <b>not compatible</b> with the Dolphin Emulator.</l>
</br>

1. Download the [**WiiLink Mail Patcher**](https://oscwii.org/library/app/Mail-Patcher) from the Open Shop Channel (if you don't already have it), and extract the `apps` folder to the root of your SD Card.

2. Launch the `WiiLink Mail Patcher` from The Homebrew Channel and follow the on-screen instructions.

![Image showing the WiiLink Mail Patcher](/img/guide/mail.webp)

3. Once the patcher is finished, you can return to the Wii Menu.

<l class="notice success smallwidth">Congratulations! You've patched Wii Mail on your Console! You can use the service to your hearts content once again!</l>

<l class="notice generic fullwidth"><b>What's next?</b></br>
<b>For people looking to use Demae Domino's:</b> Continue to <b><a href="/guide/accounts">linking your console to a WiiLink Account</a></b>.</br>
<b>For everyone else:</b> You are done! Enjoy using WiiLink to your heart's content!</l>

## Troubleshooting & Questions

</br>

### "I'm getting error -110211!"
> Please join the <a href="https://discord.gg/wiilink">WiiLink Discord server</a>, or the <a href="https://forum.wiilink.ca">WiiLink Forum</a> for support, you will need to have your Wii Number removed on the database side in order to remedy this issue.

### "I'm getting error -513XX / -510XX!"
> The patcher is failing to connect to the internet. Ensure your console has an internet connection setup, and try again. Waiting for the connection to initialise in The Homebrew Channel (the WiFi icon in the bottom right going solid white) can help.

### "I'm getting error -521XX!"
> There is something wrong with your DNS setup. Ensure your DNS settings match the WiiLink DNS (167.235.229.36), or are set to auto-obtain.