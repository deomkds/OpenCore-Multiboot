(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{400:function(e,t,n){e.exports=n.p+"assets/img/blessoverride.942bafae.png"},424:function(e,t,n){"use strict";n.r(t);var r=n(27),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"installing-opencore-on-a-legacy-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installing-opencore-on-a-legacy-system"}},[e._v("#")]),e._v(" Installing OpenCore on a legacy system")]),e._v(" "),r("p",[e._v("At the moment there is no official support for MBR/Legacy based Windows installs, there are plans though unlikely to see anything anytime soon: "),r("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/issues/912",target:"_blank",rel:"noopener noreferrer"}},[e._v("Add MBR loading tool to OpenCore"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Currently, there are 2 workarounds:")]),e._v(" "),r("ul",[r("li",[e._v("Convert Windows into a GPT based drive(this means you will have to boot with OpenCore each time)")]),e._v(" "),r("li",[e._v("Chainload rEFInd which does have support")])]),e._v(" "),r("p",[e._v("For the latter:")]),e._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"https://www.rodsbooks.com/refind/installing.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Setup rEFInd"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Add BlessOverride path for rEFInd("),r("code",[e._v("\\EFI\\refind\\refind_x64.efi")]),e._v(")")]),e._v(" "),r("li",[e._v("Boot OpenCore")]),e._v(" "),r("li",[e._v("Chain-load rEFInd")]),e._v(" "),r("li",[e._v("Select Windows")])]),e._v(" "),r("p",[r("img",{attrs:{src:n(400),alt:""}})])])}),[],!1,null,null,null);t.default=o.exports}}]);