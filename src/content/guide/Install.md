---
title: Installation guide
icon: fa-solid fa-download
pubDate: 2023-09-24
description: Get up-to-date instructions on how to install all of our services!
heroImage: "../../img/guidebg-1.png"
---
## What you need

<div style="display:flex; gap:5px; justify-content:space-between; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-sd-card"></i> An SD Card or USB Drive</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-globe"></i> A Wii with an Internet Connection</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-desktop"></i> A Windows, Mac, or Linux Computer</h4></div>

<div style="width:100%; height:40px; margin-top:5px;  border-radius:8px;  position:relative;">
<a href="https://github.com/WiiLink24/WiiLink24-Patcher/releases"><button type="button" style="width:100%; height:50px;  font-family:system-ui;" class="btn1 btn btn-success"><i class="fa-solid fa-download"></i> WiiLink Patcher</button></a>
</div>
</br>
</br>

## Instructions
#### First of all, where are you planning to use WiiLink?

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));  margin-bottom:100px; gap:5px; flex-wrap:wrap; position:relative;">
<div style="width:100%; height:40px; margin-top:5px;  border-radius:8px;  position:relative;">
<a href="#wii"><button type="button" style="width:100%; height:70px;  font-family:system-ui;" class="btn1 btn btn-secondary"><img src="../../img/wiimote.png" style="rotate:30deg; filter:invert(1);" height="25px"> Wii</button></a>
</div>
<div style="width:100%; height:40px; margin-top:5px;  border-radius:8px;  position:relative;">
<a href="#vwii"><button type="button" style="width:100%; height:70px;  font-family:system-ui;" class="btn1 btn btn-primary"><img src="../../img/gamepad.png" style="filter:invert(1);" height="35px"> Wii U</button></a>
</div>
</div>

<div id="vwii"></div>

### vWii (Wii U) ONLY

<l class="notice warn">If you are on vWii and are downloading the Forecast Channel, these steps are required. Otherwise,[skip to Section I.](#section-i---patching-wads)</l>


1. Download the Priiloader `.zip` file from [here](https://oscwii.org/library/app/priiloader)
2. Unzip the Priiloader `.zip` file and copy the apps folder to your SD Card or USB Drive.
3. Download the LoadPriiloader.zip from [here](https://oscwii.org/library/app/LoadPriiloader).
4. Unzip the LoadPriiloader `.zip` file and copy the apps folder to your SD Card or USB Drive.
5. Visit [this site](https://garyodernichts.github.io/priiloader-patch-gen/) to generate a Priiloader patch that will fix a timestamp issue.
6. Follow the instructions on the page then copy the result.
7. On your SD Card or USB Drive, traverse to `apps/priiloader` and open `hacks_hash.ini`
8. Paste the patch from step 6 at the bottom of the `hacks_hash.ini` Save the file and proceed to `Step 9`
9. Launch `Priiloader`.
10. Follow the installation steps.
11. Launch `Load Priiloader`
12. Using your Wii Remote, go to `System Menu Hacks`.
13. Enable `Fix NWC24iSetUniversalTime` and `Always enable WiiConnect24 for vWii`. Feel free to enable others.
14. Scroll down to `save settings` and press A, then press B to go back to the main menu of Priiloader.
15. Return to the system menu.

</br>

<div id="wii"></div>

### Section I - Patching WADs

> [If you want to see detailed instructions on how to install the WADs, click here!](#section-ii---installing-wads)


1. Visit the [WiiLink Patcher releases page](https://github.com/WiiLink24/WiiLink24-Patcher/releases) and download the correct patcher for your operating system.
2. On Windows, run `WiiLink_Patcher_Windows_v1.X.X.exe`. <br>
On MacOS, right click the `WiiLink_Patcher_macOS_v1.X.X` file in Finder and click Open. <br>
On Linux, open a Terminal, type `bash ` (space included), then drag the file onto the Terminal window. It should look like this: `bash /path/to/WiiLink_Patcher_Linux-<arch>_v1.X.X`

> **For Linux Users:** Replace `<arch>` with either `x64` or `arm64` depending on your system architecture.

3. Choose your installation setup:
    - Press `1` for `Express Install Setup`. Follow the steps below:
        1. Follow the on-screen instructions to select which versions of the available channels you would like.
        2. At the `Insert SD Card / USB Drive (if applicable)` step, press `1` to begin patching.
    - Press `2` for `Custom Install Setup`. Follow the steps below:
        1. Follow the on-screen instructions to select which channels to install.
        2. At the `Insert SD Card / USB Drive (if applicable)` step, press `1` to begin patching.
4. It may take a moment for the patcher to download the files to your SD Card or USB Drive.
5. Once it's done, you can safely close the patcher. All of the files are ready on your SD Card.
6. If it did not copy everything automatically to your SD Card or USB Device, copy the `WAD` and `apps` folder next to the `WiiLink Patcher` file to your SD Card or USB Device.

### Section II - Installing WADs

1. Put your SD card or USB drive in your Wii.
2. Launch the Homebrew Channel on your Wii.
3. Launch yawmME (YAWM ModMii Edition).
4. Press `A` to select your source device, which defaults to `Wii SD Card`.
5. If your Wii is not a Japanese region, install `WiiLink SPD (Wii).wad` or `WiiLink SPD (vWii).wad`(Depending on console) before anything else. This is required so that we know your email address to send files.
6. Highlight all other WADs with `WiiLink` in the name and press + to select them. When all of them are selected, press A twice to install the WADs.

    - If you have previously installed the RiiConnect24 versions of the Forecast Channel and the Nintendo Channel, installing WiiLink's will overwrite them.

7. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

### Section III - Adding your Personal Information to the Address Information settings (SPD)

<l class="notice generic fullwidth">WiiLink never stores your personal data. For more information on what is used, read our [Privacy Policy](/privacy-policy).</l>

<l class="notice info fullwidth">Adding your Personal Information to the Address Information Settings will allow the Photo Prints Channel to send images to your email that you created using it, and the Food Channel to deliver the Food to your House.</l>

<l class="notice warn fullwidth"> You are responsible for entering your correct Address Information. Failure to do so may result in Emails and/or Orders not succeeding. </l>

## Photo Prints Channel

1. Launch the Photo Prints Channel from your Wii's home menu.
2. On the bottom right, press `Address Settings` and then `Yes`.
3. Click on `Email Address` within the settings and type in your email address. (make sure you **put it in correctly** or it **will not work!**)
4. Press `OK` and then `Done`.
5. Once you are in the SPD main menu, choose `Digicam` in the `Choose Channel` menu. After you’ve done that, it should work!

## Food Channel

1. Launch the Food Channel from your Wii's home menu.
2. In the Delivery Address, Press the `Change Address Information` button in the main menu.
3. Replace the Placeholder info with the Following:

* `Your First and Last Name`
* `Your Phone Number`
* `Your City`
* `Your Home Address`
* `Your Zip Code`

(Make Sure you **Put it in Correctly** or it **Will not Work!**)

4. Press `Ok` and then `Done`
5. Once you are in the SPD main menu, choose `Demae` in the `Choose Channel` menu.
6. When you return to the Food Channel via `SPD`, It will display your information that you put in and will give a confirmation box, Once you Double Check and everything is correct, Click on Yes.  After you’ve done that, it should work!

### For PAL (European Wiis)<br>
<l class="notice warn fullwidth">In Wii Settings please set TV Resolution to 60 HZ (480p/480i). You can find this in `Screen -> TV Resolution` If you do not, a pink bar will appear at the bottom of the screen obscuring vision. </l>

