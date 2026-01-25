---
title: Wii U Priiloader
icon: lucide:settings
pubDate: 2026-01-24
description: Get up-to-date instructions on how to configure Priiloader on Wii U!
heroImage: "/img/guidebg-3.webp"
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><span class="sd-card"></span> SD Card or USB Drive</h4></div>
</br>

<l class="notice info">To install WiiLink, you will need to have a homebrewed console. If your console isn't already homebrewed, follow the instructions [here](https://wii.hacks.guide/get-started) to homebrew your vWii.</l>

</br>

## Installation Guide

</br>


<l class="notice info">If you already have Priiloader installed, skip to [Configuring Priiloader](#configuring-priiloader)</l>

</br>


### Installing Priiloader

1. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Download the `Priiloader Installer` from [here](https://oscwii.org/library/app/priiloader), and `Load Priiloader` from [here](https://oscwii.org/library/app/LoadPriiloader).
2. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Unzip both zip files, and copy the `apps` folder from within each to the root of your SD Card or USB Drive.
3. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Launch `Priiloader`.
4. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Follow the installation steps.

### Configuring Priiloader

1. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Visit [this site](https://garyodernichts.github.io/priiloader-patch-gen/) to generate a Priiloader patch that will fix a timestamp issue.
2. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Follow the instructions on the page then copy the result.
3. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> On your SD Card or USB Drive, traverse to `apps/priiloader` and open `hacks_hash.ini`
4. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Paste the patch from `Step 5` into a new line at the bottom of the `hacks_hash.ini`, and save the file.
5. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Launch `Load Priiloader`
6. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Using your Wii Remote, go to `System Menu Hacks`.
7. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Enable `Fix NWC24iSetUniversalTime`, `Permanent vWii System Settings`, `Wii System Settings via Options Button`, and `Create message via Calendar button` from the menu.

<l class="notice warn">If you have `Always enable WiiConnect24 on boot` enabled, you must disable it, as it conflicts with `Permanent vWii System Settings`.</l>

8. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Scroll down to `save settings` and press A.
9. <i style="margin-bottom:13px; margin-right:8px; font-size:25px;"></i> Power off your console.

</br>

<l class="notice success smallwidth">Congratulations! You've setup Priiloader on your console!</l>

<l class="notice generic fullwidth"><b>What's next?</b></br>
Continue to <b><a href="/guide/patcher">running the WiiLink Patcher</a></b>.</l>