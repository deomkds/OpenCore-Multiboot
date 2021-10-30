# Computadores UEFI

Desde a criação da UEFI, o formato padrão de mapa de partições para as unidades é o GPT (*GUID Partition Table*), que adicionou suporte a unidades com mais de 2TB de tamanho e mais de 4 partições, que eram limitações do MBR, ao mesmo tempo em que mantém a retrocompatibilidade com o MBR para computadores antigos. Se o seu computador (pré-montado) veio com Windows 8 (2012 ou posterior), então a sua unidade muito provavelmente estará particionada em GPT.

Geralmente, computadores de 2012 em diante que vieram com o Windows 8 tem firmware UEFI (algumas OEMS lançaram computadores com Windows 7 no mesmo período, então certifique-se de que o seu possui firmware UEFI). UEFI é um tipo de firmware distribuído recentemente (que esteve em desenvolvimento desde os anos 2000) e já estava presente em computadores Apple desde a transição para processadores Intel (mas em uma versão altamente modificada do firmware, que é chamada de EFI e não UEFI por faltar universalidade). Esse novo firmware possui alguns novos recursos como a Inicialização Segura, ajuda com inicializações mais rápidas, acesso direto a hardwares, interface gráfica com suporte a mouse, entre outras coisas. Para saber mais sobre UEFI e Inicialização Segura, leia este artigo escrito por Osy86 [aqui](https://osy.gitbook.io/hac-mini-guide/details/secure-boot) (em inglês). Basicamente, uma inicialização UEFI acontece da seguinte forma:

* O firmware UEFI é carregado.
* Carrega seus drivers e serviços integrados.
* Lê as entradas do menu de inicialização e começa a carregar a primeira entrada.
  * Se falhar, inicia a próxima.
* Inicia o *bootloader*.
  * O sistema operacional é carregado depois disso.

Geralmente, o dito *bootloader* fica contido em algum lugar na unidade, e esse "algum lugar, é chamado de **partição EFI**. Você encontra essa partição sob diferentesnomes, como ESP (*EFI System Partition*), SYSTEM, EFI, BOOT, entre outros. É uma partição formatada em **FAT32** e sinalizada como **EF00** na MBR ou com o GUID **C12A7328-F81F-11D2-BA4B-00A0C93EC93B** na GPT. Esta partição geralmente contém os aplicativos EFI (como um *bootloader* de algum SO) que são carregados no momento da inicialização pelo firmware UEFI (lembre-se disso pois é importante depois para recuperação).

# Computadores Antigos/CSM (Herdados)

Ao contrário de computadores com UEFI, computadores com firmwares herdados são mais antigos e muito mais maduros (datam desde os primeiros PCs da IBM). São certamente muito mais limitados e mais lentos do que UEFI no mesmo computador, mas possuem melhor compatibilidade com muitos sistemas operacionais (até mesmo o macOS em alguns casos raros). Computadores anteriores a 2012 geralmente possuem esse tipo de firmware (existem algumas exceções, como servidores e alguns notebooks profissionais, que podem ter UEFI também, mas não costumam ser estáveis nesse modo). O computador que geralmente vinha com uma versão do Windows mais antiga que o Windows 8 e com um disco rígido menor que 2TB. Alguns usuários de desktops nessa época ainda instalavam sistemas operacionais no modo herdado mesmo quando suas placas-mãe suportavam o padrão UEFI mais novo. Isso pode criar problemas com o *multiboot* mais tarde.

Esses computadores dependem de um outro método para carregar o *bootloader*. Esse software é geralmente gravado nos primeiros setores da unidade (formatada em MBR) chamado de **boot sector**. Esse setor geralmente tem de 512 a 4096 bytes de tamanho. A BIOS lê o código, o copia para a memória e então o executa. Nesse momento, um sistema operacional ou um menu de *bootloader* (como o GRUB2) é exibido:

* BIOS inicia.
* Lê o **boot sector**.
* Carrega o programa na memória.
* Executa o programa.
* *Bootloader* aparece.
  * O sistema operacional é iniciado.

# Maiores Diferenças Entre Firmwares

Colocaremos as diferenças numa tabela para melhor exibi-las:

| Legenda |   |
| ------- | - |
| **Símbolo** | **Significado** |
| ✅ | Presente na maioria dos firmwares. |
| ❌ | Raro, não é um padrão. |
| ⚠️ | Depende, varia entre fabricantes. |

| Diferenças                                          |              |          |            |
| -                                                   | -            | :-:      | :-:        |
| **Nome**                                            | **Original** | **UEFI** | **Herdado** |
| Inicialização Rápida                                | Fast Boot    | ✅       | ❌         |
| Seletor de Inicialização                            | -            | ✅       | ❌         |
| Inicialização Segura                                | Secure Boot  | ✅       | ❌         |
| Adicionar *bootloader* sem sobrescrever outros      | -            | ✅       | ❌         |
| Inicia unidades maiores que 2TB                     | -            | ✅       | ❌[^1]     |
| Suporta Hardware Antigo                             | -            | ⚠️[^2]    | ✅[^3]     |
| Manutenção Fácil (gerenciar bootloaders e entradas) | -            | ✅       | ❌         |
| Suporte de Sistemas Operacionais                    | -            | ✅       | ✅         |

[^1]: Exige GPT, suportado em alguns firmwares a partir de 2006.
[^2]: Depende do hardware, mas o CSM deve ser possível.
[^3]: Depende do hardware.

Além do suporte a hardware antigo (os quais são raros hoje em dia), UEFI é o firmware a se usar ao fazer dual boot em computadores mais novos (2012 em diante). Mas, para usuários de firmwares herdados, existe uma maneira de obter algumas das funções da UEFI por meio do DUET (será discutido no futuro).

# Detectando o Tipo de Firmware do Computador

## Sem Sistema Operacional

Se o seu computador:

* é da época do Ivy Bridge (por volta de 2012) ou posterior
* possui um adesivo do Windows 8

então provavelmente é um computador UEFI. Tendo dito isso, não significa que placas-mãe de gerações mais antigas não suportem. No entanto, com o lançamento do Windows 8, a Microsoft padronizou as especificações de UEFI de forma que as OEMs pudessem conseguir a certificação (geralmente, se o computador for da Asus, Lenovo, HP, Dell, entre outros, estará tudo certo).

Mais antigo do que o exposto acima, as chances de ter uma implementação UEFI diminui e é melhor partir para a inicialização legada.

## Pelo Windows

Pressione `Win + R` para abrir a janela `Executar` e digite `msinfo32`. Essa janela será exibida:

![Janela do MSINFO32](../images/msinfo.png)

Verifique o **Modo da BIOS**. Poderá dizer **UEFI** ou **Herdado**. Observe que isso se aplica somente ao Windows 8/10. Caso esteja utilizando o Windows 7 ou anterior, é provável que esteja executando no modo Herdado (ou Herdado, como o Windows prefere chamar).

## Pelo Linux

### Método 1

Na maioria das distribuições Linux, é possível executar o seguinte comando:

```ls /sys/firmware/efi```

![Créditos a Scooby-Chan#7971 pela imagem.](../images/linuxefivar.png)

Se a pasta existir, então o sistema está sendo executado no modo UEFI.

### Método 2

Você também pode baixar, executar o `efibootmgr` (disponível na maioria das distribuições) e observar o resultado:

* Variáveis de entradas de inicialização:
  * O sistema está sendo executado no modo UEFI.
* Mensagem de erro dizendo que variáveis EFI não são suportadas.
  * O ssitema está sendo executado no modo Herdado

---

# E o macOS Nisso Tudo?

O macOS exige um tratamento especial porque a Apple quer que seja assim (favorecendo seu próprio SO). Isso requer que um conjunto de regras seja seguido para instalá-lo em uma unidade.

* Unidade formatada em GPT.
* Uma partição EFI com pelo menos 200MB.

Com essas duas exigências em mente, você poderia, em teoria, colocá-los em prática e tudo estaria ok. Se você entendeu o que fazer a partir dessas duas exigẽncias e consegue fazer tudo sozinho, siga em frente. Caso contrário, fique conosco para descobrir as dicas sobre como arrumar tudo.

---

Próximas seções:

Situações:

* Nenhum SO instalado no computador:
  * Dual boot na mesma unidade.
  * Dual boot em unidades diferentes.
* SO já instalado no computador com dados existentes na unidade:
  * Computadores com suporte nativo a UEFI: converter seu SO herdado para UEFI.
    * Linux
    * Windows
    * Computadores com inicialização herdada apenas:
      * DUET

Boa sorte e ***FAÇA BACKUP DOS SEUS DADOS***.
