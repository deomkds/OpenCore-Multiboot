# Instalando e Utilizando os Utilitários do BootCamp

[[toc]]

Uma função interessante do OpenCore é a habilidade de contornar completamente a BIOS e usar o painel de preferências Disco de Inicialização para trocar entre sistemas operacionais. O problema acontece quando tentamos inicar o Windows e não temos nenhuma maneira de configurar a opção de inicialização de volta para o macOS. É aí que os Utilitários do BootCamp entram.

* Observação: este guia não cobrirá a criação do instalador do Windows, apenas a instalação dos drivers do BootCamp.
  * Exemplo da criação de um instalador do Windows: [Build a Bootable Windows ISO](https://www.freecodecamp.org/news/how-make-a-windows-10-usb-using-your-mac-build-a-bootable-iso-from-your-macs-terminal/) (em inglês).
  * Lembrete: o Windows **PRECISA** ser baseado em GPT/GUID. O OpenCore não iniciará instalações herdadas.
* Observação 2: usar o Utilitário de BootCamp no macOS apagará o arquivo `EFI/BOOT/BOOTx64.efi` da partição EFI, mas ele é necessário para iniciar o OpenCore. E o OpenCore não suporta instalações em MBR então o utilitário é inútil para nós.

## Preparações

Para começar, precisaremos do seguinte:

* Windows já instalado.
  * PRECISA ser em UEFI/GPT.
* [Brigadier](https://github.com/corpnewt/brigadier)
  * Para baixar os drivers do BootCamp.
* Injeção de SMBIOS habilitada.
  * Já que os drivers possuem verificação de SMBIOS.
* Configure [Bootstrap.efi](/post-install/multiboot/bootstrap.md)
  * É opcional, mas pode ajudar a aliviar dores de cabeça quando o Windows apaga o `BOOTx64.efi` que o OpenCore usa.

## Instalação

Para instalar, basta baixar o [Brigadier](https://github.com/corpnewt/brigadier) e executar o `Brigadier.bat` para Windows ou o `Brigadier.command` para macOS. Se a SMBIOS usada no momento tiver problemas com o BootCamp ou você quiser baixar arquivos para outra SMBIOS, basta adicionar o argumento `--model {SMBIOS}` no final:

```
cd /caminho/do/Brigadier
brigadier.bat --model MacPro7,1
```

* **Observação**: versões antigas do Instalador do BootCamp (6.0) não suportam APFS. Será necessário escolher uma nova SMBIOS que o teria integrado (como iMac 19,1 ou MacPro7,1) ou, após a instalação, atualizar seu software de BootCamp. Veja abaixo para obter mais detalhes sobre solução de problemas: [O Instalador do Windows Não Enxerga Unidades em APFS](#o-instalador-do-windows-não-enxerga-unidades-em-apfs).

![Exemplo de uso do comando no Brigadier.](../images/bootcamp-md/extension.png)

Depois, você encontrará os drivers do BootCamp na pasta:

* Windows:

```
caminho\do\Brigadier\BootCamp-{versões}
```

* macOS:

```
caminho/do/Brigadier/BootCamp-{versões}/WindowsSupport.dmg
```

Usuários de macOS precisarão, então, expandir o arquivo `WindowsSupport.dmg` e colocá-lo em algum lugar que o Windows possa acessar.

![](../images/bootcamp-md/done.png)

Então navegue até a pasta `bootcamp-{versão}\BootCamp` e execute o `Setup.exe`:

![](../images/bootcamp-md/location.png)

Uma vez que tudo tiver terminado, você terá a troca pelo BootCamp. Deverá haver um pequeno ícone do BootCamp na barra do relógio que permite selecionar qual unidade iniciar.

* Observações: para aqueles que não precisam dos drivers que o BootCamp fornece, é possível excluir o seguinte:
  * `$WinPEDriver$`: **NÃO APAGUE** a pasta em si, apenas os drivers que ela contém.
    * Usuários de placas Wi-Fi da Apple (ou Fenvi) desejarão manter o seguinte:
      * `$WinPEDriver$/BroadcomWireless`
      * `$WinPEDriver$/BroadcomBluetooth`
      * `$WinPEDriver$/AppleBluetoothBroadcom`
  * `BootCamp/Drivers/...`
    * **NÃO APAGUE** a pasta `BootCamp/Drivers/Apple`.
    * Usuários de placas Wi-Fi da Apple (ou Fenvi) desejarão manter o seguinte:
      * `BootCamp/Drivers/Broadcom/BroadcomBluetooth`

## Solução de Problemas

* [Impossível Encontrar a Unidade do Windows/BootCamp no Seletor](#impossível-encontrar-a-unidade-do-windowsbootcamp-no-seletor)
* [Erro "Você não pode alterar o disco de inicialização para o disco selecionado"](#erro-você-não-pode-alterar-o-disco-de-inicialização-para-o-disco-selecionado)
* [Iniciar o Windows Resulta em Tela Azul ou o Linux Trava](#iniciar-o-windows-resulta-em-tela-azul-ou-o-linux-trava)
* [Erro ao Iniciar o Windows: `OCB: StartImage failed - Already started`](#erro-ao-iniciar-o-windows-ocb-startimage-failed---already-started)
* [O Instalador do Windows Não Enxerga Unidades em APFS](#o-instalador-do-windows-não-enxerga-unidades-em-apfs)

## Impossível Encontrar a Unidade do Windows/BootCamp no Seletor

É preciso lembrar que instalações herdadas do Windows (MBR, não UEFI) não são suportadas no OpenCore. A maioria das instalações hoje em dia são baseadas em UEFI, no entanto aquelas feitas com o Assistente de BootCamp pelo macOS não são UEFI, então será necessário encontrar outras maneiras de criar um instalador (o Google é seu amigo). Isso também significa que partições MBR ou híbridas também estarão quebradas e será necessário formatar a unidade de destino com o Utilitário de Disco.

Agora, vamos à solução de problemas:

* Certifique-se de que a opção `Misc -> Security -> ScanPolicy` está configurada para `0` de forma a exibir todas as unidades e partições.

Se os *bootloaders* do Windows e o OpenCore estiverem na mesma unidade, será necessário adicionar uma entrada `BlessOverride`:

```
Misc -> BlessOverride -> \EFI\Microsoft\Boot\bootmgfw.efi
```

* **Observação**: a partir da versão 0.5.9 do OpenCore, isso não é mais necessário. O OpenCore deve encontrar essa entrada automaticamente.

![](../images/win-md/blessoverride.png)

## Erro "Você não pode alterar o disco de inicialização para o disco selecionado"

Isso é comumente causado por:

* Drivers de NTFS de terceiros (tipo Paragon).
* Configuração de partições irregular na unidade do Windows. Mais especificamente, significa que a partição EFI não é a primeira partição.
* O BitLocker está habilitado.

Para corrigir o primeiro, desabilite ou desinstale esses drivers.

Para corrigir o segundo, é preciso habilitar esta *quirk*:

* `PlatformInfo -> Generic -> AdviseWindows -> True`

![](../images/bootcamp-md/error.png)

Para corrigir o terceiro, será necessário abrir mão da criptografia do BitLocker.

## Iniciar o Windows Resulta em Tela Azul ou o Linux Trava

Isso se deve a problemas de alinhamento. Certifique-se de que a opção `SyncRuntimePermissions` está habilitada nos firmwares que suportam MATs. Verifique nos logs se o firmware suporta Memory Attribute Tables (visto geralmente em firmwares de 2018 e mais novos).

Em placas-mãe Z390 e mais novas, também será necessário habilitar a opção `ProtectUefiServices` para garantir que os patches do OpenCore sejam aplicados corretamente.

Se o firmware do seu computador for mais antigo (2013 ou mais velho), habilite a opção `ProtectMemoryRegions`.

Devido a variações de firmwares entre fabricantes, será necessário testar uma combinação dessas 3 *quirks* e ver qual funciona melhor.

Código de Erro Comum do Windows:

* `0xc000000d`

## Erro ao Iniciar o Windows: `OCB: StartImage failed - Already started`

Isso se deve ao OpenCore se confundir ao tentar iniciar o Windows e acidentalmente pensar que está iniciar o OpenCore. Isso pode ser evitado movendo o Windows para uma unidade separada *ou* adicionar um caminho de unidade personalizado na opção `BlessOverride`. Leia o [Configuration.pdf](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf) (em inglês) e a seção [Impossível Encontrar a Unidade do Windows/BootCamp no Seletor](#impossível-encontrar-a-unidade-do-windowsbootcamp-no-seletor) para obter mais detalhes.

## O Instalador do Windows Não Enxerga Unidades em APFS

* Drivers de BootCamp desatualizados (geralmente a versão 6.0 virá com o Brigadier, enquanto o Utilitário de BootCamp no macOS fornece versões mais novas, como a 6.1). Você pode tentar aliviar esses problemas atualizando para a versão mais recente usando o atualizador de softwares da Apple ou selecionando uma SMBIOS mais novas no Brigadier (use o argumento `--model iMac19,1`) e ao executar o Brigadier.

Para o último, será necessário executar o seguinte (substituia `filename.msi` pelo arquivo `.msi` de instalação do BootCamp):

```
msiexec.exe /x "c:\filename.msi"
```
