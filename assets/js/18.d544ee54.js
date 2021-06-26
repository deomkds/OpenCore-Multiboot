(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{414:function(e,t,o){"use strict";o.r(t);var i=o(27),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"quick-guide-no-bs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#quick-guide-no-bs"}},[e._v("#")]),e._v(" Quick Guide no BS")]),e._v(" "),o("p",[e._v("Ok, if you're quite experienced with how partitioning and booting multiple OSes then here are what you need to look for:")]),e._v(" "),o("ul",[o("li",[o("em",[o("strong",[e._v("BACKUP YOUR DATA")])]),e._v(", this can turn easily to a destructive operation.")]),e._v(" "),o("li",[e._v("macOS requires:\n"),o("ul",[o("li",[e._v("EFI partition (ESP) of 200MB minumum")]),e._v(" "),o("li",[e._v("GPT formatted disk")]),e._v(" "),o("li",[e._v("UEFI system (or DUET for legacy systems, comes with OpenCorePkg)")])])]),e._v(" "),o("li",[e._v("OpenCore should preferably be copied to the EFI of the same disk\n"),o("ul",[o("li",[e._v("Make sure you run the "),o("code",[e._v("BootInstall.command")]),e._v(" "),o("strong",[e._v("if you're on a legacy system")])]),e._v(" "),o("li",[e._v("the EFI partition "),o("strong",[e._v("preferably")]),e._v(" needs to be at the "),o("strong",[e._v("beginning of the disk")]),e._v(" for multibooting with Windows (read OpenCore's configuration.pdf)")])])]),e._v(" "),o("li",[e._v("It doesn't matter if you already have anything on that drive:\n"),o("ul",[o("li",[e._v("You can convert it to GPT (if it's MBR) and create an EFI partition with flag hex "),o("code",[e._v("EF00")]),e._v(" (using gdisk for example or gparted and choosing type "),o("code",[e._v("efi")]),o("sup",[e._v("(Will show up once the partition if formatted, if not already.)")]),e._v(")")]),e._v(" "),o("li",[e._v("Resize the existing EFI to "),o("strong",[e._v("200MB")]),e._v(" (windows usually limits it on a new install to 100MB, some linux distros have lower or higher sizes, but usually less than 200MB)\n"),o("ul",[o("li",[e._v("Recommendation: Make sure it's a bit bigger like 210MB or something to count of the difference in byte/bit reading on macOS/Linux/Windows. (multiples of 1024 instead of 1000 and vice-versa)")])])]),e._v(" "),o("li",[e._v("Windows 10 1709 and later have a utility called "),o("code",[e._v("mbr2gpt")]),e._v(" to convert the Windows boot disk to UEFI\n"),o("ul",[o("li",[e._v("Do this to dualboot Windows 10 and macOS on the same drive no matter what the boot mode is\n"),o("ul",[o("li",[e._v("In case of legacy system, you'll lose windows access until you install OpenCore and boot windows from it")]),e._v(" "),o("li",[e._v("UEFI systems will boot directly when the conversion happens as long as you configure your computer's firmware setup (BIOS setup) to UEFI mode")])])]),e._v(" "),o("li",[e._v("This utility may say that it cannot convert the setup for whatever reason, you can do that manually by:\n"),o("ul",[o("li",[e._v("Preparing a windows 10 USB installer")]),e._v(" "),o("li",[e._v("Using a linux distribution to:\n"),o("ul",[o("li",[e._v("convert the disk to gpt (gdisk)")]),e._v(" "),o("li",[e._v("create resize/create a new partition with hex "),o("code",[e._v("EF00")]),e._v(" or type "),o("code",[e._v("efi")]),e._v(" (gparted)\n"),o("ul",[o("li",[e._v("Make sure it's 200MB for macOS formatting")]),e._v(" "),o("li",[e._v("You can create another partition of macOS along the way")]),e._v(" "),o("li",[e._v("The EFI can preferably be at the beginning of the disk (OpenCore requirement)")])])])])]),e._v(" "),o("li",[e._v("Boot windows installer:\n"),o("ul",[o("li",[e._v("assign a letter to the EFI partition and Windows partition through "),o("code",[e._v("diskpart")]),e._v(" (google diskpart assign letter)")]),e._v(" "),o("li",[e._v("run "),o("code",[e._v("bcdboot C:\\Windows /s S: /f UEFI")]),e._v(" (with "),o("code",[e._v("C:")]),e._v(" and "),o("code",[e._v("S:")]),e._v(" being the partition letter you assigned to Windows and EFI partition respectfully, read bcdboot manual)")])])]),e._v(" "),o("li",[e._v("Boot windows and hope nothing broke")])])])])]),e._v(" "),o("li",[e._v("If you're using linux it's the same steps as earlier (just 200MB EFI partition and somewhere to put macOS on)")])])]),e._v(" "),o("li",[e._v("Make sure the disk doesn't have any S.M.A.R.T errors")]),e._v(" "),o("li",[e._v("DO NOT have multiple EFIs on the same disk, you "),o("strong",[e._v("MUST")]),e._v(" only have "),o("strong",[e._v("ONE")]),e._v(" EFI partition per disk")]),e._v(" "),o("li",[e._v("The OS Install order "),o("strong",[e._v("does not matter at all")]),e._v(" "),o("ul",[o("li",[e._v("however windows can be a bit of a bitch, so installing it after macOS can be challenging, linux doesn't pose such problems")]),e._v(" "),o("li",[e._v("If you happen to stumble on the sad windows crap you can:\n"),o("ul",[o("li",[e._v("Boot windows installer")]),e._v(" "),o("li",[e._v("Erase the partition where you want windows to be installed on to NTFS (as expected)")]),e._v(" "),o("li",[e._v("Follow the rest from this "),o("a",{attrs:{href:"https://www.tenforums.com/tutorials/84331-apply-windows-image-using-dism-instead-clean-install.html#Part2",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide over at TenForums"),o("OutboundLink")],1),e._v(" "),o("ul",[o("li",[e._v("You do NOT need MSR and Recovery, and you cannot create them when there are things already installed on the disk (blame windows installer)\n"),o("ul",[o("li",[e._v("TODO: some way of creating a separate windows Recovery, I cannot find any guide on how to do that so that Windows would recognize it natively, if you know of a guide or know how to do it, open "),o("a",{attrs:{href:"https://github.com/dortania/OpenCore-Multiboot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a PR"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"https://github.com/dortania/bugtracker",target:"_blank",rel:"noopener noreferrer"}},[e._v("an issue"),o("OutboundLink")],1),e._v(" with your ideas.")])])])])])])])])])]),e._v(" "),o("p",[e._v("Now that you have all these information, good luck with the rest. However if you're not sure, follow then the long way that has more explanations and details on how to properly do it.")])])}),[],!1,null,null,null);t.default=n.exports}}]);