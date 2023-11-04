---
title: Installation guide
icon: fa-solid fa-download
pubDate: 2023-09-24
description: Get up-to-date instructions on how to install all of our services!
heroImage: "../../img/guidebg-1.png"
---
## What you need

- An SD Card or USB Drive
- A Wii with an Internet Connection
- A Windows, Mac, or Linux Computer
- [WiiLink Patcher](https://github.com/WiiLink24/WiiLink24-Patcher)

## Instructions

### vWii (Wii U) ONLY
> If you are on vWii and are downloading the Forecast Channel, these steps are required. Otherwise, skip to Section I.


1. Download `Priiloader_v0_10RC3.zip` from [here](https://github.com/DacoTaco/priiloader/releases/tag/0.10.0-RC3)
2. Unzip `Priiloader_v0_10RC3.zip` and copy the apps folder to your SD Card or USB Drive.
3. Download `LoadPriiloader.zip` from [here](https://cdn.discordapp.com/attachments/1078842520420765819/1131340628895219895/LoadPriiloader.zip).
4. Unzip `LoadPriiloader.zip` and copy the apps folder to your SD Card or USB Drive.
5. Visit [this site](https://garyodernichts.github.io/priiloader-patch-gen/) to generate a Priiloader patch that will fix a timestamp issue.
6. Follow the instructions on the page then copy the result.
7. On your SD Card or USB Drive, traverse to `apps/priiloader` and open `hacks_hash.ini`
8. Paste the patch from step 6 at the bottom of the `hacks_hash.ini` Save the file and proceed to Section I.

### Section I - Patching WADs

> [If you want to see detailed instructions on how to install the WADs, click here!](YAWMModMiiEdition)


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
6. If it did not copy everything automatically to your SD Card or USB Device, copy the `WAD` and `apps` folder next to `WiiLinkPatcher.bat` to your SD Card or USB Device.
7. Put your SD card or USB drive in your Wii.
8. Launch the Homebrew Channel on your Wii.
9. Launch yawmME (YAWM ModMii Edition).
12. Press `A` to select your source device, which defaults to `Wii SD Card`.
13. If your Wii is not a Japanese region, install `WiiLink SPD (Wii).wad` or `WiiLink SPD (vWii).wad`(Depending on console) before anything else. This is required so that we know your email address to send files.
14. Highlight all other WADs with `WiiLink` in the name and press + to select them. When all of them are selected, press A twice to install the WADs.
    - If you have previously installed the RiiConnect24 versions of the Forecast Channel and the Nintendo Channel, installing WiiLink's will overwrite them.

15. After they are successfully installed, press the HOME Button to exit back to the Homebrew Channel.

> The following steps are only if you are on vWii (Wii U). If you are not, proceed [to Section II](#section-ii---adding-your-email-to-the-address-information-settings-spd).


16. Launch `Priiloader`.
17. Follow the installation steps.
18. Launch `Load Priiloader`
19. Using your Wii Remote, go to `System Menu Hacks`.
20. Enable `Fix NWC24iSetUniversalTime` and `Always enable WiiConnect24 for vWii`. Feel free to enable others.
21. Scroll down to `save settings` and press A, then press B to go back to the main menu of Priiloader.
22. Return to the system menu.

### Section II - Adding your email to the Address Information settings (SPD)

> Adding your email to the Address Information Settings will allow Photo Prints Channel to send images to your email that you created using it.

1. Launch Photo Prints Channel from your Wii's home menu.
2. On the bottom right, press `Address Settings` and then `Yes`.
3. Click on `Email Address` within the settings and type in your email address. (make sure you **put it in correctly** or it **will not work!**)
4. Press `OK` and then `Done`.
5. Once you are in the SPD main menu, choose `Digicam` in the `Choose Channel` menu. After you’ve done that, it should work!

For PAL (European Wiis)<br>
> In Wii Settings please set TV Resolution to 60 HZ (480p/480i). You can find this in `Screen -> TV Resolution` If you do not, a pink bar will appear at the bottom of the screen obscuring vision.

