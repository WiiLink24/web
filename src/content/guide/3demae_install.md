---
title: Food Channel Installation
pubDate: "2021-01-29"
---
> **NOTE: You no longer need to pay $1 to get and use Food Channel (Domino's), it's completely *free!***

> Food Channel (Domino's) currently is only available in the United States and Canada. More regions are being looked at and considered in the future. If you're outside the US or Canada, use **Food Channel (Standard)**.

I've written this temporary guide to help people properly install Food Channel (Domino's) from the WiiLink Patcher, as the current guide (for now) is outdated, and I figured it might help some people who had tried following the existing guide but found dead links.

## 1. Getting Started
To begin, you'll need to download the latest version of the **WiiLink Patcher**, available [**here**](https://github.com/WiiLink24/WiiLink24-Patcher/tree/csharp-ver). Download the version in the **README** for your operating system.

Next, when you launch the patcher, and begin the setup process, you'll see this screen. In order to gain access to the Food Channel (Domino's) channel, you'll need select `1. English Translation` as the service is only available in North America.

![](https://i.imgur.com/wfSKwFc.png)

Next, you'll see this screen, asking which version of Food Channel you want, so you'll want to pick `2. Domino's (US and Canada only)`

![](https://i.imgur.com/xZfUCZv.png)

After that, you can go through the rest of the process, but once you reach this step, be sure to pick the correct console platform you're installing this on, as it will matter when using the app.

> If you're installing this on Dolphin Emulator, please be aware that Food Channel (Domino's) will not work on the default Dolphin NAND, you will **need** to dump a NAND from your real Wii console. Then you can install your NAND on Dolphin by going to `Tools => Manage NAND => Import BootMii NAND Backup`.

![](https://i.imgur.com/zkj7kB1.png)

## 2. Registering your Console ID

Once you've finished the setup process, you'll need to head over to our [**Discord server**](https://discord.gg/WiiLink) to register your Wii's console ID.

The patcher bundles our `Get Console ID` Homebrew app that you can use to get your system's console ID, which will be used to register to allow access to Food Channel (Domino's).

Once you retrieve your console ID, you'll need to head over to the `#dominos-chat` channel on our Discord server, and type this command `/dominos [console ID]`, of course, replacing the `[console ID]` part with your actual console ID.

**Make sure** that you write the correct console ID the first time, as you won't be able to re-register, but if you need to re-register, please ask one of our staff in the server, and we'll try to help you out.

## 3. Installing Food Channel (Domino's) on your Wii

Once you've registered your console ID, you can now install **Food Channel (Domino's)** on your Wii!

To do this, you'll need to go to the Homebrew Channel, and launch **Wii Mod Lite**, which the patcher also bundles in for you, and go to the **WAD Manager** menu. Once you find `Demae Channel (English).wad`, you'll want to press `-` on it, and do a full uninstall, this is to fully clean up and remove any remnants of Demae Channel if you previously had the **Standard** version of it installed.

Once you do that, press `+` on the same WAD, and install it, and it should install without any issues.

In order to be able to order food and have it delivered to your address properly, you'll also **need** to install the `WiiLink_SPD (Wii).wad` or `WiiLink_SPD (vWii).wad`, depending on which console platform you selected earlier.

Just press `+` on it as well to also install it.

## 4. Using Food Channel (Domino's)

If you previously had the **Standard** version of **Food Channel** installed, you'll need to delete your existing save data, as the save data is not compatible between the two versions.

To do that, go to your Wii Settings, and go to Data Management, and select the **Food Channel** save data, and delete it.

After you do that, you should be able to launch **Food Channel (Domino's)**, and it should work without any issues.

Lastly, don't forget to set up your info with SPD, by selecting on `Change Address Information`, so your orders go to the right place!

![](https://i.imgur.com/KSbTfyd.png)

***Happy ordering!***

> If you still encounter any issues using the channel, first look back at the guide and see if you missed anything, and if you still have any issues by then, please join our [Discord server](https://discord.gg/WiiLink) and create a support thread in the `dominos-support` forum.
</br>

___

#### Written by [PablosCorner](https://github.com/PablosCorner) (Last updated: 3/10/2023)