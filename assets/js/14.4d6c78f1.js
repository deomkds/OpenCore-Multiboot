(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{322:function(o,e,t){o.exports=t.p+"assets/img/blessoverride.9430a551.png"},426:function(o,e,t){"use strict";t.r(e);var i=t(27),s=Object(i.a)({},(function(){var o=this,e=o.$createElement,i=o._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[i("h1",{attrs:{id:"dualbooting-with-windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dualbooting-with-windows"}},[o._v("#")]),o._v(" Dualbooting with Windows")]),o._v(" "),i("ul",[i("li",[o._v("MBR based Windows installs "),i("strong",[o._v("ARE NOT SUPPORTED")]),o._v(" by OpenCore at this time, you will need to convert it to GPT.")])]),o._v(" "),i("h4",{attrs:{id:"solution-1-if-windows-is-not-picked-up-automagically-add-the-following-to-your-config-plist"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#solution-1-if-windows-is-not-picked-up-automagically-add-the-following-to-your-config-plist"}},[o._v("#")]),o._v(" Solution 1: If Windows is not picked up automagically, add the following to your config.plist")]),o._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[o._v("Misc -> BlessOverride -> \\EFI\\Microsoft\\Boot\\bootmgfw.efi\n")])])]),i("ul",[i("li",[i("strong",[o._v("Note")]),o._v(": As of OpenCore 0.5.9, this no longer needs to be specified. OpenCore should pick up on this entry automatically")])]),o._v(" "),i("p",[i("img",{attrs:{src:t(322),alt:""}})]),o._v(" "),i("h4",{attrs:{id:"solution-2-to-make-windows-get-picked-up-boot-to-recovery-mode-from-within-windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#solution-2-to-make-windows-get-picked-up-boot-to-recovery-mode-from-within-windows"}},[o._v("#")]),o._v(" Solution 2: To make Windows get picked up, boot to recovery mode from within Windows")]),o._v(" "),i("ul",[i("li",[i("strong",[o._v("make sure you boot windows from OpenCore")]),o._v(" "),i("ul",[i("li",[o._v("after loading OpenCore, press space > OpenShell (make sure you have it in Tools and in the config)")]),o._v(" "),i("li",[o._v("run "),i("code",[o._v("map -r -b")])]),o._v(" "),i("li",[o._v("look for your EFI drive (usually it's in the first lines, watch out if you're a multidisk user, there might be many EFIs)")]),o._v(" "),i("li",[o._v("run "),i("code",[o._v("FSX:\\EFI\\Microsoft\\Boot\\bootmgfw.efi")]),o._v(" where X is the number of the EFI partition with windows bootloader")])])]),o._v(" "),i("li",[i("strong",[o._v("make sure that RequestBootVarRouting is set to True")])]),o._v(" "),i("li",[o._v("open CMD/PS with admin rights")]),o._v(" "),i("li",[o._v("run "),i("code",[o._v("shutdown /r /o /t 0")]),o._v(" "),i("ul",[i("li",[o._v("this will reboot your windows system immediately to Advanced Boot Menu menu")])])]),o._v(" "),i("li",[o._v("select Troubleshoot > Command Prompt")]),o._v(" "),i("li",[o._v("it will reboot to WinRE and you'll get to the Command Prompt")]),o._v(" "),i("li",[o._v("once in there\n"),i("ul",[i("li",[o._v("run "),i("code",[o._v("diskpart")])]),o._v(" "),i("li",[o._v("once loaded, send "),i("code",[o._v("list vol")])]),o._v(" "),i("li",[o._v("look for your Windows drive letter\n"),i("ul",[i("li",[o._v("it may not have the "),i("code",[o._v("C")]),o._v(" lettering, but make sure you check the size and other indicatives that points to it")]),o._v(" "),i("li",[o._v("if you cannot, just write down the mounted letters with (NTFS) filesystem then explore them one by one to check if it's your windows install")])])]),o._v(" "),i("li",[o._v("look for your EFI partition\n"),i("ul",[i("li",[o._v("it should say "),i("code",[o._v("hidden")]),o._v(" or "),i("code",[o._v("system")]),o._v(" and is usually 100-200MB (some OEM installs make it bigger as much as 500MB)\n"),i("ul",[i("li",[o._v("send "),i("code",[o._v("sel vol X")]),o._v(" where X is the EFI partition number")])])]),o._v(" "),i("li",[o._v("if you're in doubt\n"),i("ul",[i("li",[o._v("send "),i("code",[o._v("list disk")])]),o._v(" "),i("li",[o._v("identify your windows disk")]),o._v(" "),i("li",[o._v("send "),i("code",[o._v("sel disk X")]),o._v(" where X is the disk where Windows is installed on")]),o._v(" "),i("li",[o._v("send "),i("code",[o._v("list part")])]),o._v(" "),i("li",[o._v("check the partitions, usually the EFI should have 100-200MB (some OEM installs make it bigger as much as 500MB)")]),o._v(" "),i("li",[o._v("send "),i("code",[o._v("sel part X")]),o._v(" where X is the EFI partition number")])])]),o._v(" "),i("li",[o._v("either way, send "),i("code",[o._v("assign letter=S")]),o._v(" "),i("ul",[i("li",[o._v("S can be anything other than A/B/Y/X and any letter already assigned in the listing before it")])])])])]),o._v(" "),i("li",[o._v("send "),i("code",[o._v("exit")]),o._v(" to close diskpart and return to the command prompt")]),o._v(" "),i("li",[o._v("run "),i("code",[o._v("bcdboot X:\\Windows /s S: /f UEFI")]),o._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/bcdboot-command-line-options-techref-di",target:"_blank",rel:"noopener noreferrer"}},[o._v("bcdboot"),i("OutboundLink")],1),o._v(" is a utility that installs Windows bootloader in either your EFI or root system partition (of choice)")]),o._v(" "),i("li",[i("code",[o._v("X:\\Windows")]),o._v(" is a path to the Windows installation folder, where X is the mount letter of the Windows partition")]),o._v(" "),i("li",[i("code",[o._v("/s S:")]),o._v(" is the destination disk that will receive the bootloader, in our case, it's the EFI partition")]),o._v(" "),i("li",[i("code",[o._v("/f UEFI")]),o._v(" to specify the type the bootloader should be (UEFI Bootloader)")]),o._v(" "),i("li",[o._v("This will copy a new bootmgfw.efi file as well as add a new NVRAM Boot entry which hopefully will now appear on OpenCore boot menu.")])])])])]),o._v(" "),i("li",[o._v("if everything ran without any errors, type "),i("code",[o._v("exit")]),o._v(" and it should return you back to the Advanced Boot Menu (or reboot)")]),o._v(" "),i("li",[o._v("reboot and check if Windows boot entry has been added")])])])}),[],!1,null,null,null);e.default=s.exports}}]);