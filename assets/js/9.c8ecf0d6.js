(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{395:function(e,a,o){e.exports=o.p+"assets/img/msinfo.dca0625d.png"},396:function(e,a,o){e.exports=o.p+"assets/img/linuxefivar.76d4999a.png"},436:function(e,a,o){"use strict";o.r(a);var t=o(31),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"computadores-uefi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#computadores-uefi"}},[e._v("#")]),e._v(" Computadores UEFI")]),e._v(" "),t("p",[e._v("Desde a criação da UEFI, o formato padrão de mapa de partições para as unidades é o GPT ("),t("em",[e._v("GUID Partition Table")]),e._v("), que adicionou suporte a unidades com mais de 2TB de tamanho e mais de 4 partições, que eram limitações do MBR, ao mesmo tempo em que mantém a retrocompatibilidade com o MBR para computadores antigos. Se o seu computador (pré-montado) veio com Windows 8 (2012 ou posterior), então a sua unidade muito provavelmente estará particionada em GPT.")]),e._v(" "),t("p",[e._v("Geralmente, computadores de 2012 em diante que vieram com o Windows 8 tem firmware UEFI (algumas OEMS lançaram computadores com Windows 7 no mesmo período, então certifique-se de que o seu possui firmware UEFI). UEFI é um tipo de firmware distribuído recentemente (que esteve em desenvolvimento desde os anos 2000) e já estava presente em computadores Apple desde a transição para processadores Intel (mas em uma versão altamente modificada do firmware, que é chamada de EFI e não UEFI por faltar universalidade). Esse novo firmware possui alguns novos recursos como a Inicialização Segura, ajuda com inicializações mais rápidas, acesso direto a hardwares, interface gráfica com suporte a mouse, entre outras coisas. Para saber mais sobre UEFI e Inicialização Segura, leia este artigo escrito por Osy86 "),t("a",{attrs:{href:"https://osy.gitbook.io/hac-mini-guide/details/secure-boot",target:"_blank",rel:"noopener noreferrer"}},[e._v("aqui"),t("OutboundLink")],1),e._v(" (em inglês). Basicamente, uma inicialização UEFI acontece da seguinte forma:")]),e._v(" "),t("ul",[t("li",[e._v("O firmware UEFI é carregado.")]),e._v(" "),t("li",[e._v("Carrega seus drivers e serviços integrados.")]),e._v(" "),t("li",[e._v("Lê as entradas do menu de inicialização e começa a carregar a primeira entrada.\n"),t("ul",[t("li",[e._v("Se falhar, inicia a próxima.")])])]),e._v(" "),t("li",[e._v("Inicia o "),t("em",[e._v("bootloader")]),e._v(".\n"),t("ul",[t("li",[e._v("O sistema operacional é carregado depois disso.")])])])]),e._v(" "),t("p",[e._v("Geralmente, o dito "),t("em",[e._v("bootloader")]),e._v(' fica contido em algum lugar na unidade e esse "algum lugar" é chamado de '),t("strong",[e._v("partição EFI")]),e._v(". Você encontra essa partição sob diferentes nomes, como ESP ("),t("em",[e._v("EFI System Partition")]),e._v("), SYSTEM, EFI, BOOT, entre outros. É uma partição formatada em "),t("strong",[e._v("FAT32")]),e._v(" e sinalizada como "),t("strong",[e._v("EF00")]),e._v(" na MBR ou com o GUID "),t("strong",[e._v("C12A7328-F81F-11D2-BA4B-00A0C93EC93B")]),e._v(" na GPT. Esta partição geralmente contém os aplicativos EFI (como o "),t("em",[e._v("bootloader")]),e._v(" de algum SO) que são carregados no momento da inicialização pelo firmware UEFI (lembre-se disso pois é importante depois para recuperação).")]),e._v(" "),t("h1",{attrs:{id:"computadores-antigos-csm-herdados"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#computadores-antigos-csm-herdados"}},[e._v("#")]),e._v(" Computadores Antigos/CSM (Herdados)")]),e._v(" "),t("p",[e._v("Ao contrário de computadores com UEFI, computadores com firmwares herdados são mais antigos e muito mais maduros (datam desde os primeiros PCs da IBM). São certamente muito mais limitados e mais lentos do que UEFI no mesmo computador, mas possuem melhor compatibilidade com muitos sistemas operacionais (até mesmo o macOS em alguns casos raros). Computadores anteriores a 2012 geralmente possuem esse tipo de firmware (existem algumas exceções, como servidores e alguns notebooks profissionais, que podem ter UEFI também, mas não costumam ser estáveis nesse modo). O computador que geralmente vinha com uma versão do Windows mais antiga que o Windows 8 e com um disco rígido menor que 2TB. Alguns usuários de desktops nessa época ainda instalavam sistemas operacionais no modo herdado mesmo quando suas placas-mãe suportavam o padrão UEFI mais novo. Isso pode criar problemas com o "),t("em",[e._v("multiboot")]),e._v(" mais tarde.")]),e._v(" "),t("p",[e._v("Esses computadores dependem de um outro método para carregar o "),t("em",[e._v("bootloader")]),e._v(". Nele, um software chamado "),t("strong",[e._v("boot sector")]),e._v(" era geralmente gravado nos primeiros setores da unidade (formatada em MBR). Esse setor geralmente tinha de 512 a 4096 bytes de tamanho. A BIOS lia o código, o copiava para a memória e então o executava. Nesse momento, um sistema operacional ou um menu de "),t("em",[e._v("bootloader")]),e._v(" (como o GRUB2) era exibido:")]),e._v(" "),t("ul",[t("li",[e._v("BIOS inicia.")]),e._v(" "),t("li",[e._v("Lê o "),t("strong",[e._v("boot sector")]),e._v(".")]),e._v(" "),t("li",[e._v("Carrega o programa na memória.")]),e._v(" "),t("li",[e._v("Executa o programa.")]),e._v(" "),t("li",[t("em",[e._v("Bootloader")]),e._v(" aparece.\n"),t("ul",[t("li",[e._v("O sistema operacional é iniciado.")])])])]),e._v(" "),t("h1",{attrs:{id:"maiores-diferencas-entre-firmwares"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maiores-diferencas-entre-firmwares"}},[e._v("#")]),e._v(" Maiores Diferenças Entre Firmwares")]),e._v(" "),t("p",[e._v("Colocaremos as diferenças numa tabela para melhor exibi-las:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Legenda")]),e._v(" "),t("th")])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("Símbolo")])]),e._v(" "),t("td",[t("strong",[e._v("Significado")])])]),e._v(" "),t("tr",[t("td",[e._v("✅")]),e._v(" "),t("td",[e._v("Presente na maioria dos firmwares.")])]),e._v(" "),t("tr",[t("td",[e._v("❌")]),e._v(" "),t("td",[e._v("Raro, não é um padrão.")])]),e._v(" "),t("tr",[t("td",[e._v("⚠️")]),e._v(" "),t("td",[e._v("Depende, varia entre fabricantes.")])])])]),e._v(" "),t("p",[e._v("Tabela das diferenças:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Diferenças")]),e._v(" "),t("th"),e._v(" "),t("th",{staticStyle:{"text-align":"center"}}),e._v(" "),t("th",{staticStyle:{"text-align":"center"}})])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("Nome")])]),e._v(" "),t("td",[t("strong",[e._v("Em Inglês")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("strong",[e._v("UEFI")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("strong",[e._v("Herdado")])])]),e._v(" "),t("tr",[t("td",[e._v("Inicialização Rápida")]),e._v(" "),t("td",[e._v("Fast Boot")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("❌")])]),e._v(" "),t("tr",[t("td",[e._v("Seletor de Inicialização")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("❌")])]),e._v(" "),t("tr",[t("td",[e._v("Inicialização Segura")]),e._v(" "),t("td",[e._v("Secure Boot")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("❌")])]),e._v(" "),t("tr",[t("td",[e._v("Adicionar "),t("em",[e._v("bootloader")]),e._v(" sem sobrescrever outros")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("❌")])]),e._v(" "),t("tr",[t("td",[e._v("Inicia unidades maiores que 2TB")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("❌*")])]),e._v(" "),t("tr",[t("td",[e._v("Suporta Hardware Antigo")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("⚠️**")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅***")])]),e._v(" "),t("tr",[t("td",[e._v("Manutenção Fácil (gerenciar bootloaders e entradas)")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("❌")])]),e._v(" "),t("tr",[t("td",[e._v("Suporte de Sistemas Operacionais")]),e._v(" "),t("td",[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("✅")])])])]),e._v(" "),t("p",[e._v("*: Exige GPT, suportado em alguns firmwares a partir de 2006.\n**: Depende do hardware, mas o CSM deve ser possível.\n***: Depende do hardware.")]),e._v(" "),t("p",[e._v("Além do suporte a hardware antigo (os quais são raros hoje em dia), UEFI é o firmware a se usar ao fazer dual boot em computadores mais novos (2012 em diante). Mas, para usuários de firmwares herdados, existe uma maneira de obter algumas das funções da UEFI por meio do DUET (será discutido no futuro).")]),e._v(" "),t("h1",{attrs:{id:"detectando-o-tipo-de-firmware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detectando-o-tipo-de-firmware"}},[e._v("#")]),e._v(" Detectando o Tipo de Firmware")]),e._v(" "),t("h2",{attrs:{id:"sem-sistema-operacional"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sem-sistema-operacional"}},[e._v("#")]),e._v(" Sem Sistema Operacional")]),e._v(" "),t("p",[e._v("Se o seu computador:")]),e._v(" "),t("ul",[t("li",[e._v("é da época do Ivy Bridge (por volta de 2012) ou posterior")]),e._v(" "),t("li",[e._v("possui um adesivo do Windows 8")])]),e._v(" "),t("p",[e._v("então provavelmente é um computador UEFI. Tendo dito isso, não significa que placas-mãe de gerações mais antigas não suportem. No entanto, com o lançamento do Windows 8, a Microsoft padronizou as especificações de UEFI de forma que as OEMs pudessem conseguir a certificação (geralmente, se o computador for da Asus, Lenovo, HP, Dell, entre outros, estará tudo certo).")]),e._v(" "),t("p",[e._v("Mais antigo do que o exposto acima, as chances de ter uma implementação UEFI diminui e é melhor partir para a inicialização herdada.")]),e._v(" "),t("h2",{attrs:{id:"pelo-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pelo-windows"}},[e._v("#")]),e._v(" Pelo Windows")]),e._v(" "),t("p",[e._v("Pressione "),t("code",[e._v("Win + R")]),e._v(" para abrir a janela "),t("code",[e._v("Executar")]),e._v(" e digite "),t("code",[e._v("msinfo32")]),e._v(". Essa janela será exibida:")]),e._v(" "),t("p",[t("img",{attrs:{src:o(395),alt:"Janela do MSINFO32"}})]),e._v(" "),t("p",[e._v("Verifique o "),t("strong",[e._v("Modo da BIOS")]),e._v(". Poderá dizer "),t("strong",[e._v("UEFI")]),e._v(" ou "),t("strong",[e._v("Herdado")]),e._v(". Observe que isso se aplica somente ao Windows 8/10. Caso esteja utilizando o Windows 7 ou anterior, é provável que esteja executando no modo herdado.")]),e._v(" "),t("h2",{attrs:{id:"pelo-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pelo-linux"}},[e._v("#")]),e._v(" Pelo Linux")]),e._v(" "),t("h3",{attrs:{id:"metodo-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metodo-1"}},[e._v("#")]),e._v(" Método 1")]),e._v(" "),t("p",[e._v("Na maioria das distribuições Linux, é possível executar o seguinte comando:")]),e._v(" "),t("p",[t("code",[e._v("ls /sys/firmware/efi")])]),e._v(" "),t("p",[t("img",{attrs:{src:o(396),alt:"Créditos a Scooby-Chan#7971 pela imagem."}})]),e._v(" "),t("p",[e._v("Se a pasta existir, então o sistema está sendo executado no modo UEFI.")]),e._v(" "),t("h3",{attrs:{id:"metodo-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metodo-2"}},[e._v("#")]),e._v(" Método 2")]),e._v(" "),t("p",[e._v("Você também pode baixar, executar o "),t("code",[e._v("efibootmgr")]),e._v(" (disponível na maioria das distribuições) e observar o resultado:")]),e._v(" "),t("ul",[t("li",[e._v("Variáveis de entradas de inicialização:\n"),t("ul",[t("li",[e._v("O sistema está sendo executado no modo UEFI.")])])]),e._v(" "),t("li",[e._v("Mensagem de erro dizendo que variáveis EFI não são suportadas.\n"),t("ul",[t("li",[e._v("O ssitema está sendo executado no modo Herdado.")])])])]),e._v(" "),t("hr"),e._v(" "),t("h1",{attrs:{id:"e-o-macos-nisso-tudo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#e-o-macos-nisso-tudo"}},[e._v("#")]),e._v(" E o macOS Nisso Tudo?")]),e._v(" "),t("p",[e._v("O macOS exige um tratamento especial porque a Apple quer que seja assim (favorecendo seu próprio SO). Isso requer que um conjunto de regras seja seguido para instalá-lo em uma unidade.")]),e._v(" "),t("ul",[t("li",[e._v("Unidade formatada em GPT.")]),e._v(" "),t("li",[e._v("Uma partição EFI com pelo menos 200MB.")])]),e._v(" "),t("p",[e._v("Com essas duas exigências em mente, você poderia, em teoria, colocá-los em prática e tudo estaria ok. Se você entendeu o que fazer a partir dessas duas exigências e consegue fazer tudo sozinho, siga em frente. Caso contrário, fique conosco para descobrir as dicas sobre como arrumar tudo.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Situações:")]),e._v(" "),t("ul",[t("li",[e._v("Nenhum SO instalado no computador:\n"),t("ul",[t("li",[e._v("Dual boot na mesma unidade.")]),e._v(" "),t("li",[e._v("Dual boot em unidades diferentes.")])])]),e._v(" "),t("li",[e._v("SO já instalado no computador com dados existentes na unidade:\n"),t("ul",[t("li",[e._v("Computadores com suporte nativo a UEFI: converter seu SO herdado para UEFI.\n"),t("ul",[t("li",[e._v("Linux")]),e._v(" "),t("li",[e._v("Windows")]),e._v(" "),t("li",[e._v("Computadores com inicialização herdada apenas:\n"),t("ul",[t("li",[e._v("DUET")])])])])])])])]),e._v(" "),t("p",[e._v("Boa sorte e "),t("em",[t("strong",[e._v("FAÇA BACKUP DOS SEUS DADOS")])]),e._v(".")])])}),[],!1,null,null,null);a.default=s.exports}}]);