---
title: Dolphin Installation
icon: lucide:download
pubDate: 2024-12-23
description: Get up-to-date instructions on how to install all of our services on Dolphin!
heroImage: "../../img/guidebg-1.webp"
---

<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-globe"></i> Internet Connection</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-desktop"></i> Windows, Mac, Linux, or Android Device</h4><div style="height:40px; border-radius:8px;  position:relative;">
<a href="https://github.com/WiiLink24/WiiLink24-Patcher/releases"><button type="button" style="height:50px; padding-left:28px; padding-right:28px; border-radius:12px 4px 4px 12px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><i class="fa-solid fa-download"></i> WiiLink Patcher</button></a>
<a href="https://github.com/AyeItsHarry/WiiLinkPatcherAndroid#getting-started"><button type="button" style="height:50px; padding-left:18px; padding-right:18px; border-radius:4px 12px 12px 4px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><i class="fa-brands fa-android"></i></button></a>
</div></div>
</br>

## Section I - Patching WADs

</br>

1. Visit the [WiiLink Patcher releases page](https://github.com/WiiLink24/WiiLink24-Patcher/releases) and download the correct patcher for your operating system.
2. On `Windows`, run `WiiLink_Patcher_Windows_vXXX.exe`\*. <br>

   On `MacOS`, open a terminal window on the folder where the patcher downloaded, then run `chmod +x WiiLink_Patcher_macOS-<arch>_vXXX`\*. Afterwards, run `./WiiLink_Patcher_macOS-<arch>_vXXX`\* and the patcher will launch right on your terminal.<br>

   On `Linux`, open a terminal window on the folder where the patcher downloaded, then run `chmod +x WiiLinkPatcher_Linux-<arch>_vXXX`\*. Afterwards, run `./WiiLinkPatcher_Linux-<arch>_v.2.X.X`\* and the patcher will launch right on your terminal.

   On `Android`, follow the guide [here](https://github.com/AyeItsHarry/WiiLinkPatcherAndroid#getting-started) to launch the unofficial patcher script in Termux.

   <l class="notice info">Alternatively, you can rename the patcher file on MacOS or Linux to a simpler filename like `WiiLinkPatcher` and run the commands with that name in mind.</l>

> \***For Linux and MacOS Users:** Replace `<arch>` with either `x64` or `ARM64` depending on your system architecture, and `XXX` with the latest version on the filename.

3. Choose your installation setup:

</br>

### Express Installation
   - Press `1` for `Express Install Setup`. Follow the steps below:
     1. Select your region for the WiiConnect24 channels.
     2. Select whether or not you would like to install the regional channels.
     3. Select what language you would like for the regional channels as well as your preferred Food Channel version if you chose to install them.
     4. Select `Dolphin Emulator`.

### Custom Installation
   - Press `2` for `Custom Install Setup`. Follow the steps below:
     1. Select which channels you would like to install out of the list.
     2. Select `Dolphin Emulator`.
     3. Please wait a moment for the patcher to download and patch the files on your device.
     4. Once it's done, you can safely close the patcher. All of the files are ready.

</br>

</br>
<hr style="border-top:2px solid var(--border-color);">
</br>

## Section II - Installing WADs

</br>

<l class="notice info">To use WiiConnect24 services in Dolphin, you need to have the Wii System Menu installed. You can do this by navigating to `Tools` > `Perform Online System Update`</l>

<l class="notice warning">`Wii Mail` doesn't work properly in Dolphin yet, but patching it is necessary for the Everybody Votes Channel to function correctly</l>

1. Open Dolphin Emulator.
2. Select `Tools`
3. Select `Install WAD...`
4. If you have chosen to install regional channels, navigate to the `WAD` folder on your device, and select to install `WiiLink Address Settings.wad` before anything else.
5. Repeat the process to install all other WADs.
6. Navigate to `Options` > `Configuration` > `Wii`, and ensure `Enable WiiConnect24 via WiiLink` is enabled.
7. Head to `File` > `Open`, and navigate to the folder where you ran the patcher.
8. Navigate to `apps` > `Mail-Patcher`, and open `boot.dol`.
9. Wait for patching to complete, then press `HOME` / `Enter` to exit the patcher.
10. Load the Wii System Menu (`Tools` > `Load Wii System Menu`), then navigate to `Wii Options` (Wii logo in bottom left corner) > `Wii Settings` > `WiiConnect24`, and accept the EULA. If it tells you that WiiConnect24 isn't being offered in your region, change your country to a supported one and try again (we recommend the United Kingdom for PAL, and the United States for NTSC-U). Note that, while this will display Nintendo's EULA, by using WiiLink services you agree to our EULA, which can be found [here](/eula).

</br>
<hr style="border-top:2px solid var(--border-color);">
</br>

## Section III - Using the Address Settings and AnyGlobe Changer

</br>

### Setting your region in AnyGlobe Changer
<l class="notice generic smallwidth">This allows you to set your country if the WiiConnect24 settings say that it's not supported.</l>
1. In Dolphin, head to `File` > `Open`, and navigate to the folder where you ran the patcher.
2. Navigate to `apps` > `AnyGlobe Changer`, and open `boot.dol`.
3. Read the disclaimer, and press `1` to continue.
4. Using the D-pad / arrow keys, set your region and sub-region.
5. Highlight `Save Settings`, then press `A` / left click to save.
6. Return to the System Menu.

### Adding Personal Information

<l class="notice generic smallwidth">WiiLink never stores your personal data. For more information on what is used, read our [Privacy Policy](/privacy-policy).</l>

<l class="notice info smallwidth">Adding your personal information to the Address Settings will allow the Photo Prints Channel to send images to your email, and the Food Channel to deliver the food to your house.</l>

<l class="notice warn smallwidth">You are responsible for entering your correct Address Information. Failure to do so may result in emails and/or orders not succeeding.</l>

### Photo Prints Channel

1. Launch the Photo Prints Channel from your Wii's home menu.
2. On the bottom right, press `Address Settings` and then `Yes`.
3. Click on `Email Address` within the settings and type in your email address. (make sure you **put it in correctly** or it **will not work!**)
4. Press `OK` and then `Done`.
5. Once you are in the SPD main menu, choose `Digicam` in the `Choose Channel` menu.

### Food Channel

<l class="notice warn smallwidth">If you want to use the **Domino's** version of the Food Channel, please follow this [guide](/guide/demae) instead. Otherwise, proceed with the guide below.</l>

1. Launch the Food Channel from your Wii's home menu.
2. In the Delivery Address, Press the `Change Address Information` button in the main menu.
3. Replace the Placeholder info with the Following:

- `Your First and Last Name`
- `Your Phone Number (country code FIRST, phone number afterwards)`
- `Your City`
- `Your Home Address`
- `Your Zip Code`

(Make sure you **put it in correctly** or it **will not work!** Use the example data in the settings as a template to put your information in correctly.)

4. Press `OK` and then `Done`
5. Once you are in the SPD main menu, choose `Demae` in the `Choose Channel` menu.
6. When you return to the Food Channel via `SPD`, it will display your information that you put in and will give a confirmation box. Once you double check and everything is correct, click on Yes.
