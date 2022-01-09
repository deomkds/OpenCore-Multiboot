(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{351:function(e,o,a){e.exports=a.p+"assets/img/blessoverride.9430a551.png"},456:function(e,o,a){"use strict";a.r(o);var i=a(31),r=Object(i.a)({},(function(){var e=this,o=e.$createElement,i=e._self._c||o;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"dualboot-com-o-windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dualboot-com-o-windows"}},[e._v("#")]),e._v(" Dualboot com o Windows")]),e._v(" "),i("ul",[i("li",[e._v("Instalações do Windows baseadas em MBR "),i("strong",[e._v("NÃO SÃO SUPORTADAS")]),e._v(" pelo OpenCore nesse momento. Será necessário converte-la para GPT.")])]),e._v(" "),i("h4",{attrs:{id:"solucao-1-se-o-windows-nao-for-encontrado-automagicamente-adicione-as-seguintes-informacoes-na-config-plist"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#solucao-1-se-o-windows-nao-for-encontrado-automagicamente-adicione-as-seguintes-informacoes-na-config-plist"}},[e._v("#")]),e._v(" Solução 1: Se o Windows não for encontrado automagicamente, adicione as seguintes informações na "),i("code",[e._v("config.plist")])]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("Misc -> BlessOverride -> \\EFI\\Microsoft\\Boot\\bootmgfw.efi\n")])])]),i("ul",[i("li",[i("strong",[e._v("Observação")]),e._v(": A partir do OpenCore 0.5.9, não é mais necessário especificar isso. O OpenCore deve encontrar essa entrada automaticamente.")])]),e._v(" "),i("p",[i("img",{attrs:{src:a(351),alt:""}})]),e._v(" "),i("h4",{attrs:{id:"solucao-2-para-fazer-com-que-o-windows-seja-encontrado-inicie-no-modo-de-recuperacao-a-partir-do-windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#solucao-2-para-fazer-com-que-o-windows-seja-encontrado-inicie-no-modo-de-recuperacao-a-partir-do-windows"}},[e._v("#")]),e._v(" Solução 2: Para fazer com que o Windows seja encontrado, inicie no modo de recuperação a partir do Windows")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Certifique-se de iniciar o Windows pelo OpenCore")]),e._v(" "),i("ul",[i("li",[e._v("Após carregar o OpenCore, pressione Barra de Espaço e selecione a opção "),i("code",[e._v("OpenShell")]),e._v(" (certifique-se de tê-lo na pasta "),i("code",[e._v("Tools")]),e._v(" e adicionado na "),i("code",[e._v("config.plist")]),e._v(").")]),e._v(" "),i("li",[e._v("Execute "),i("code",[e._v("map -r -b")]),e._v(".")]),e._v(" "),i("li",[e._v("Procure pela sua unidade EFI (geralmente aparece nas primeiras linhas, mas tome cuidado caso você seja um usuário de várias unidades, pois pode haver várias EFIs).")]),e._v(" "),i("li",[e._v("Execute "),i("code",[e._v("FSX:\\EFI\\Microsoft\\Boot\\bootmgfw.efi")]),e._v(" onde X é o número da partição EFI que contém o "),i("em",[e._v("bootloader")]),e._v(" do Windows.")])])]),e._v(" "),i("li",[i("strong",[e._v("Certifique-se de que "),i("code",[e._v("RequestBootVarRouting")]),e._v(" está configurado para "),i("code",[e._v("True")])])]),e._v(" "),i("li",[e._v("Abra o Prompt de Comando com permissões de Administrador.")]),e._v(" "),i("li",[e._v("Execute "),i("code",[e._v("shutdown /r /o /t 0")]),e._v(".\n"),i("ul",[i("li",[e._v("Isso reiniciará o Windows imediatamente para o Menu de Inicialização Avançado.")])])]),e._v(" "),i("li",[e._v("Selecione Solução de Problemas > Prompt de Comando.")]),e._v(" "),i("li",[e._v("O computador reiniciará para o WinRE e o Prompt de Comando se abrirá.\n"),i("ul",[i("li",[e._v("Execute o "),i("code",[e._v("diskpart")]),e._v(".")]),e._v(" "),i("li",[e._v("Uma vez carregado, digite "),i("code",[e._v("list vol")]),e._v(".")]),e._v(" "),i("li",[e._v("Procure pela letra da unidade do Windows.\n"),i("ul",[i("li",[e._v("Pode não usar a letra "),i("code",[e._v("C:")]),e._v(", mas certifique-se de verificar o tamanho e outros indicativos de que é a unidade/partição certa.")]),e._v(" "),i("li",[e._v("Caso não consiga, anote as letras de unidades montadas que estejam usando o sistema de arquivos NTFS e então explore uma a uma para encontrar sua instalação do Windows.")])])]),e._v(" "),i("li",[e._v("Procure pela sua partição EFI.\n"),i("ul",[i("li",[e._v("Deverá dizer "),i("code",[e._v("hidden")]),e._v(" ou "),i("code",[e._v("system")]),e._v(" e ter entre 100 e 200MB (algumas OEMs criam EFIs de até 500MB).\n"),i("ul",[i("li",[e._v("Digite "),i("code",[e._v("sel vol X")]),e._v(", substituíndo X pelo número da partição EFI.")])])]),e._v(" "),i("li",[e._v("Caso esteja em dúvida:\n"),i("ul",[i("li",[e._v("Digite "),i("code",[e._v("list disk")]),e._v(".")]),e._v(" "),i("li",[e._v("Identifique a unidade do Windows.")]),e._v(" "),i("li",[e._v("Digite "),i("code",[e._v("sel disk X")]),e._v(", substituindo X pelo número da unidade onde o Windows está instalado.")]),e._v(" "),i("li",[e._v("Digite "),i("code",[e._v("list part")]),e._v(".")]),e._v(" "),i("li",[e._v("Verifique as partições, pois geralmente a EFI deve ter entre 100 e 200MB (algumas OEMs criam EFIs de até 500MB).")]),e._v(" "),i("li",[e._v("Digite "),i("code",[e._v("sel part X")]),e._v(", substituindo X pelo número da partição EFI.")])])]),e._v(" "),i("li",[e._v("De qualquer forma, digite "),i("code",[e._v("assign letter=S")]),e._v(".\n"),i("ul",[i("li",[e._v('A letra "S" pode ser qualquer letra, desde que não seja A, B, Y, X ou qualquer outra letra que já esteja atribuída na listagem.')])])])])]),e._v(" "),i("li",[e._v("Digite "),i("code",[e._v("exit")]),e._v(" para fechar o "),i("code",[e._v("diskpart")]),e._v(" e retornar para o Prompt de Comando.")]),e._v(" "),i("li",[e._v("Execute "),i("code",[e._v("bcdboot X:\\Windows /s S: /f UEFI")]),e._v(".\n"),i("ul",[i("li",[i("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/bcdboot-command-line-options-techref-di",target:"_blank",rel:"noopener noreferrer"}},[e._v("bcdboot"),i("OutboundLink")],1),e._v(" (em inglês) é um utilitário que instala o "),i("em",[e._v("bootloader")]),e._v(" do Windows na EFI ou na partição raíz do sistema (à sua escolha).")]),e._v(" "),i("li",[i("code",[e._v("X:\\Windows")]),e._v(" é o caminho da pasta de instalação do Windows, onde X é a letra atribuída para a partição do Windows.")]),e._v(" "),i("li",[i("code",[e._v("/s S:")]),e._v(" é a unidade de destino que receberá o "),i("em",[e._v("bootloader")]),e._v(". Nesse caso, é a partição EFI.")]),e._v(" "),i("li",[i("code",[e._v("/f UEFI")]),e._v(" para especificar o tipo de "),i("em",[e._v("bootloader")]),e._v(" que deve ser instalado ("),i("em",[e._v("bootloader")]),e._v(" UEFI).")]),e._v(" "),i("li",[e._v("Isso copiará um novo arquivo "),i("code",[e._v("bootmgfw.efi")]),e._v(" assim como adicionar uma nova entrada de inicialização na NVRAM.")])])])])]),e._v(" "),i("li",[e._v("Se tudo correr sem nenhum erro, digite "),i("code",[e._v("exit")]),e._v(" para retornar ao Menu de Inicialização Avançada (ou reiniciar).")]),e._v(" "),i("li",[e._v("Reinicie e veja se o Windows aparece no seletor do OpenCore.")])])])}),[],!1,null,null,null);o.default=r.exports}}]);