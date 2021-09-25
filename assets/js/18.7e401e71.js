(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{428:function(e,o,a){"use strict";a.r(o);var i=a(29),r=Object(i.a)({},(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"guia-rapido-sem-besteira"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guia-rapido-sem-besteira"}},[e._v("#")]),e._v(" Guia Rápido Sem Besteira")]),e._v(" "),a("p",[e._v("Ok, se você já tem experiência com particionamento e inicialização de múltiplos SOs, aqui está o que você está procurando:")]),e._v(" "),a("ul",[a("li",[a("em",[a("strong",[e._v("FAÇA BACKUP DOS SEUS DADOS")])]),e._v(": isso pode facilmente se tornar uma operação destrutiva.")]),e._v(" "),a("li",[e._v("O macOS requer:\n"),a("ul",[a("li",[e._v("Partição EFI (ESP) de, no mínimo, 200MB.")]),e._v(" "),a("li",[e._v("Unidade formatada em GPT.")]),e._v(" "),a("li",[e._v("Computador UEFI (ou usar o DUET em computadores antigos, distribuído com o OpenCorePkg).")])])]),e._v(" "),a("li",[e._v("O OpenCore deve preferivelmente ser copiado para a partição EFI da mesma unidade.\n"),a("ul",[a("li",[e._v("Certifique-se de executar o script "),a("code",[e._v("BootInstall.command")]),e._v(" "),a("strong",[e._v("caso esteja usando um computador antigo sem UEFI")]),e._v(".")]),e._v(" "),a("li",[e._v("É preferível que a partição EFI esteja "),a("strong",[e._v("no início da unidade")]),e._v(" ao fazer o dualboot com o Windows (leia o arquivo de configuralção do OpenCore).")])])]),e._v(" "),a("li",[e._v("Não importa se você já tem coisas na unidade:\n"),a("ul",[a("li",[e._v("É possível converter a unidade para GPT (caso seja MBR) e criar uma partição EFI com "),a("em",[e._v("flag")]),e._v(" hex "),a("code",[e._v("EF00")]),e._v(" (por exemplo, usando o gdisk ou o gparted e escolhendo o tipo "),a("code",[e._v("efi")]),a("sup",[e._v("(será exibida assim que a partição for formatada, caso ainda não esteja.)")]),e._v(")")]),e._v(" "),a("li",[e._v("Altere a EFI existente para "),a("strong",[e._v("200MB")]),e._v(" (o Windows geralmente limita a ESP a 100MB em novas instalações, enquanto que algumas distribuições Linux possuem tamanhos menores ou maiores, mas menos de 200MB em geral).\n"),a("ul",[a("li",[e._v("Recomendação: certifique-se de que a ESP é um pouco maior, uns 210MB ou algo próximo, para eliminar a diferença entre de base na contagem de bytes entre macOS, Linux e Windows (múltiplos de 1024 (base 2) em vez de múltiplos de 1000 (base 10) e vice-versa).")])])]),e._v(" "),a("li",[e._v("O Windows 10 1709 e mais novos possuem um utilitário chamado "),a("code",[e._v("mbr2gpt")]),e._v(" para converter a unidade de inicialização do Windows para GPT:\n"),a("ul",[a("li",[e._v("Faça isso para fazer o dualboot do Windows 10 com o macOS na mesma unidade independente do modo de boot:\n"),a("ul",[a("li",[e._v("Para computadores antigos, o acesso ao Windows será perdido até instalar o OpenCore e iniciá-lo a partir dele.")]),e._v(" "),a("li",[e._v("Computadores UEFI iniciarão automaticamente quando a conversão ocorrer desde que o firmware esteja configurado para o modo UEFI.")])])]),e._v(" "),a("li",[e._v("Esse utilitário pode dizer que não é capaz de converter a configuração por algum motivo, mas você pode tentar manualmente:\n"),a("ul",[a("li",[e._v("Preparando um instalador do Windows 10 num pendrive.")]),e._v(" "),a("li",[e._v("Usando uma distribuição Linux para:\n"),a("ul",[a("li",[e._v("converter a unidade para gpt (gdisk).")]),e._v(" "),a("li",[e._v("criar uma nova partição com a "),a("em",[e._v("flag")]),e._v(" hex "),a("code",[e._v("EF00")]),e._v(" ou o tipo "),a("code",[e._v("efi")]),e._v(" (gparted).\n"),a("ul",[a("li",[e._v("Certifique-se de que ela tenha 200MB para o macOS.")]),e._v(" "),a("li",[e._v("Você pode criar outra partição para o macOS no caminho.")]),e._v(" "),a("li",[e._v("É preferível que a EFI esteja no início da unidade (exigência do OpenCore).")])])])])]),e._v(" "),a("li",[e._v("Iniciar o instalador do Windows:\n"),a("ul",[a("li",[e._v("Crie uma letra de unidade para a partição EFI e para a partição do Windows usando o "),a("code",[e._v("diskpart")]),e._v(' (procure no Google por "criar letra de unidade diskpart")')]),e._v(" "),a("li",[e._v("Execute "),a("code",[e._v("bcdboot C:\\Windows /s S: /f UEFI")]),e._v(" (trocando "),a("code",[e._v("C:")]),e._v(" e "),a("code",[e._v("S:")]),e._v(" pelas letras de unidade que foram criadas para o Windows e a partição EFI respectivamente, leia o manual do bcdboot)")])])]),e._v(" "),a("li",[e._v("Inicie o Windows e torça para que nada tenha quebrado.")])])])])]),e._v(" "),a("li",[e._v("Caso esteja usando Linux, são os mesmos passos mencionados anteriormente (basta criar uma partição EFI de 200MB e reserver um lugar para colocar o macOS)")])])]),e._v(" "),a("li",[e._v("Certifique-se de que a unidade não possui erros de S.M.A.R.T..")]),e._v(" "),a("li",[e._v("NÃO mantenha múltiplas partições EFI na mesma unidade, é "),a("strong",[e._v("PRECISO")]),e._v(" ter somente "),a("strong",[e._v("UMA")]),e._v(" partição EFI por unidade.")]),e._v(" "),a("li",[e._v("A ordem de instalação dos SO "),a("strong",[e._v("não influencia em nada")]),e._v(":\n"),a("ul",[a("li",[e._v("No entanto, o Windows pode ser um pé no saco, então instalá-lo depois do macOS pode ser desafiador. O Linux não tem esses problemas.")]),e._v(" "),a("li",[e._v("Caso você tropece nas frescuras do Windows:\n"),a("ul",[a("li",[e._v("Inicie o instalador do Windows.")]),e._v(" "),a("li",[e._v("Formate a partição onde você quer que o Windows seja instalado para NTFS (como de praxe).")]),e._v(" "),a("li",[e._v("Siga o restantes desse guia no "),a("a",{attrs:{href:"https://www.tenforums.com/tutorials/84331-apply-windows-image-using-dism-instead-clean-install.html#Part2",target:"_blank",rel:"noopener noreferrer"}},[e._v("TenForums"),a("OutboundLink")],1),e._v(" (em inglês).\n"),a("ul",[a("li",[e._v("Você não precisa das partições MSR e Recovery, e você não poderá criá-las quando houver coisas já instaladas na unidade (culpe o instalador do Windows).\n"),a("ul",[a("li",[e._v("A FAZER: uma maneira de criar um Recovery do Windows de forma separada. Não foi possível encontrar nenhum guia sobre como fazer isso de forme que o Windows a reconhecesse nativamente. Caso você conheça algum guia ou saiba como fazer, abra "),a("a",{attrs:{href:"https://github.com/deomkds/OpenCore-Multiboot/",target:"_blank",rel:"noopener noreferrer"}},[e._v("um PR"),a("OutboundLink")],1),e._v(" ou "),a("a",{attrs:{href:"https://github.com/deomkds/bugtracker",target:"_blank",rel:"noopener noreferrer"}},[e._v("um problema"),a("OutboundLink")],1),e._v(" constando suas ideais.")])])])])])])])])])]),e._v(" "),a("p",[e._v("Agora que você possui toda essa informação, boa sorte com o restante. No entanto, caso não esteja seguro, siga o caminho mais longo, pois ele possui mais explicações e detalhes sobre como fazer tudo isso.")])])}),[],!1,null,null,null);o.default=r.exports}}]);