---
title: Food Channel
pubDate: 2024-12-23
description: Get up-to-date instructions on how to install the Food Channel!
icon: lucide:utensils
---
<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Requirements</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
  <a href="#troubleshooting-questions" style="text-decoration:none;">
  <div style="font-family:system-ui; font-size:15px; padding:5px 10px; border-radius:80px; border:2px solid var(--border-color); background-color: var(--bg-color-tertiary);">Skip to Troubleshooting and Questions</div>
  </a>
</div>
<div style="display:flex; gap:13px; margin-top:10px;background-color:var(--bg-color-tertiary); border:2px solid var(--border-color); align-items:center; justify-content:space-between; padding:35px 20px 30px 20px; border-radius:12px; flex-wrap:wrap; position:relative;"><h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-sd-card"></i> SD Card or USB Drive</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-globe"></i> Internet Connection</h4> <h4 style="font-size:17px; font-family:system-ui; padding:10px; border:0px solid #00000060; border-radius:8px;"><i class="fa-solid fa-desktop"></i> Windows, Mac, Linux, or Android Device</h4><div style="height:40px; border-radius:8px;  position:relative;">
<a href="https://github.com/WiiLink24/WiiLink24-Patcher/releases"><button type="button" style="height:50px; padding-left:28px; padding-right:28px; border-radius:12px 4px 4px 12px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><i class="fa-solid fa-download"></i> WiiLink Patcher</button></a>
<a href="https://github.com/AyeItsHarry/WiiLinkPatcherAndroid#getting-started"><button type="button" style="height:50px; padding-left:18px; padding-right:18px; border-radius:4px 12px 12px 4px; color:white !important; transform:translate(0, -8px); font-family:system-ui;" class="btn1 btn btn-success"><i class="fa-brands fa-android"></i></button></a>
</div></div>
</div></div>
</br>
<div style="display: flex; gap:8px; align-items: center;">
  <h5 style="font-family: system-ui; font-size:20px;">Which service will you be using?</h5>
  <hr style="flex-grow: 1; border: none; opacity:0.1; border-top: 2px solid var(--color); margin-left: 10px">
</div>
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));  margin-bottom:100px; gap:5px; flex-wrap:nowrap; position:relative;">
<div style="width:100%; height:40px; margin-top:5px; position:relative;">
<a href="#dominos"><button type="button" style="width:100%; height:70px; color:white !important; font-family:system-ui; border-radius:12px 4px 4px 12px;" class="btn1 btn btn-primary">Domino's</button></a>
</div>
<div style="width:100%; height:40px; margin-top:5px; position:relative;">
<a href="#justeat"><button type="button" style="width:100%; height:70px; color:white !important; font-family:system-ui; border-radius:4px 4px 4px 4px;" class="btn1 btn btn-danger">JustEat (in development)</button></a>
</div>
<div style="width:100%; height:40px; margin-top:5px; position:relative;">
<a href="#fakeordering"><button type="button" style="width:100%; height:70px; color:white !important; font-family:system-ui; border-radius:4px 12px 12px 4px;" class="btn1 btn btn-warning">Fake Ordering</button></a>
</div>
</div>

<i id="dominos"></i>

## Installation Guide (Domino's)

<l class="notice warn fullwidth">You cannot use the default Dolphin NAND with Domino's ordering. You must create your own NAND dump following [this guide](https://wii.hacks.guide/bootmii), then import it into Dolphin by going to the toolbar and clicking `Tools -> Manage NAND -> Import BootMii NAND Backup`. </l>

### Section I - Getting Started
</br>

1. Download the latest version of the WiiLink Patcher for your operating system.
2. Launch the patcher and begin the Express Setup process.
3. Once you get to the WiiLink channels language selection screen, select `1. English Translation` in order to gain access to the Food Channel (Domino's) channel.
4. Next, you’ll be asked which version of Food Channel you want. Pick `2. Domino's (US and Canada only)`.
5. After that, you can go through the rest of the process, but once you reach the final step, be sure to pick the correct console platform you’re installing this on, as it will matter when using the app.

### Section II - Linking your WiiLink Account

<l class="notice info fullwidth"> Following the creation of WiiLink Accounts, you must now create and link a WiiLink Account to use Domino's food ordering. You can do this by following the steps [here](/guide/accounts#linking-your-console). </l>

### Section III - Installing WADs

You will now install the Food Channel and Address Settings channels.

1. Put your SD card or USB drive in your Wii.

2. After registering your console ID, go to the Homebrew Channel and launch **YAWM ModMii Edition**.

3. In the WAD Manager menu, locate `Food Channel (Domino's) [English] (WiiLink).wad`.

4. Also locate `WiiLink Address Settings.wad`.

5. Select both WADs by pressing `+` on each one.

6. Press `A` to install the selected WADs.

<l class="notice info fullwidth"> If you happen to get `Error -1022/Error -1029` when installing `Food Channel (Domino's) [English] (WiiLink).wad`, uninstall the channel by selecting the WAD with `-` and pressing `A`. Then, re-install the WAD. </l>

### Section IV - Setting your address information

> WiiLink never stores your personal data. For more information on what is used, read our [Privacy Policy](/privacy-policy).

<l class="notice warn fullwidth"> You are responsible for entering your correct address information. Failure to do so may result in orders not succeeding. </l>

In this section you will be setting your address information. This is required for proper usage of Food Channel (Domino's). 

1. Launch the Food Channel from the Wii Menu.

2. If you have not previously set your address information, a prompt telling you to set it will appear. Press the `Address Info` button. 
Otherwise, click the `Change Address Information` button in the main menu.

3. Now you are in the Address Information menu. Press the arrows to traverse screens. Here you will enter your data. When you are finished, click the `Done` button and then `Demae`.<br><br>
![imgcaroussel](/img/guide/spd-1.png)
![imgcaroussel](/img/guide/spd-2.png)

### Section V - Placing an order

<l class="notice info"> This section requires you to have cash to pay for your meal. </l>

If you have used the standard version of the Food Channel before, go to <br>`Wii Menu settings` -> `Data Management` -> `Save Data` -> `Wii`, then find the <br>Food Channel icon and click "Erase" to delete the existing save data.

### If you have previously placed an order, skip to step 4.

1. Launch the Food Channel from the Wii Menu

2. Follow the on-screen instructions, then click `Order` in the main menu.<br><br>
![img2](/img/guide/success.png)<br><br>

3. You will now be prompted to select your region. Be sure to select your residing country correctly. Failure to do so will result in restaurants failing to load. You will then be prompted to select your state/province, then city. If your city is not on the list, you can select any one as it does not matter.<br><br>
![img2](/img/guide/country-setup.png)<br><br>

4. Click the `Pizza` button. This will load all the restaurants in your area. The first restaurant in the list is the one closest to you.

5. Click `See Menu` to list the different menu categories. Click the category you would like, then select a food item. In the item screen, you can add toppings and adjust quantity.

6. After adding a food item, you will be brought to the basket. To add a food item, scroll to the bottom and select `Add Order`. To proceed to checkout, click `Next`.

7. Review your order throughly before placing the order. When you are ready, click the big green `Order` button.<br><br>
![img2](/img/guide/order.png)<br><br>

8. If no error appeared, your order was placed successfully! To track your order, simply visit the Domino's Tracker for your region and enter the phone number you entered in the Address Information menu.

***Happy ordering!***
___
<l class="notice info fullwidth"> If you need help for anything regarding this tutorial, please join the [WiiLink Discord Server](https://discord.gg/wiilink). </l>

<l class="notice warn fullwidth"> Currently, only the USA and Canada are supported for Dominos on the Food Channel. </l>

<i id="fakeordering"></i>

## Installation Guide (Fake Ordering)

Simply install the channel and run it, adding fake information in the Address Information menu when prompted.

___
<i id="troubleshooting-questions"></i>

## Troubleshooting & Questions

### "I got error -1022/-1029 when installing the Food Channel/SPD WAD! What do I do?"

> Using your favorite WAD manager, uninstall the Food Channel/SPD, and install again. For many, this means going to the location the WAD is located, and pressing the - (minus) button on your Wii remote, and pressing A to uninstall. Then, install the WAD again.

### "I'm getting an error message when adding food to my basket! What do I do?"

> Please try erasing save data for the Demae Channel, and setting it up again! Let us know in #support-text if you continue to experience issues.

### "How do I pay for my order on the Food Channel?"

> The Food Channel only supports pay-on-delivery, where you will have to pay in either cash or card, to the delivery driver. You cannot input your card details into the Food Channel or Address Information menu.

### Does WiiLink save my address when using Food Channel?

> No, we cannot see your address. The only time we ever receive it is when you place an order, where it is sent straight to the provider (e.g. Dominos), not us.
