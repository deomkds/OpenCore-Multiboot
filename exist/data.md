# Em Unidades Que Contém Dados Diversos (Unidade de Dados)

Isso é bastante simples. Basicamente, abriremos espaço para uma partição EFI (caso ainda não exista) e para o macOS.

## Precauções

* FAÇA BACKUP DOS SEUS DADOS!
* Se possível, desconecte ou desative quaisquer outras unidades do sistema, já que podem interferir com o procedimento de instalação (especialmente o Windows). Mantenha somente a unidade de destino e/ou a unidade de inicialização do sistema no qual serão realizadas as operações.
* Verifique se a unidade não está corrompida ou possui setores defeituosos.
* Verifique se o computador está configurado para o modo UEFI puro, sem CSM/Legacy OS ativado.
* Garanta que há uma fonte de energia estável. Isto é, use uma tomada em vez da bateria do notebook, por exemplo.

## Situações Aplicáveis

* Uma unidade com dados que não sejam relacionados ao Windows, Linux ou macOS.
* Uma unidade que tenha sido usada por um sistema operacional, mas agora armazena apenas dados.

---

Para começar, será preciso saber que tipo de esquema de partição a unidade está usando. A maioria das unidades mais novas que possuem menos de 1TB de espaço usam MBR (algumas unidades de 1TB também) e qualquer coisa com tamanho maior usam GPT. Como vimos anteriormente, o macOS **exige** GPT e não funciona sem ele.

Observação: a primeira regra do Clube da Luta é "não fale sobre o patch de MBR". Esse patch é uma má ideia e não deveria existir mais, já que não faz o menor sentido quando a maioria dos computadores a partir de 2006 podem facilmente iniciar unidades em GPT sem muitos problemas.

## Verificando o Esquema de Partição da Unidade

#### No Windows

* Abra o Gerenciador de Discos
* Clique com o botão direito na unidade de destino e selecione a opção *Propriedades*.
  ![Gerenciador de Discos](../images/ex-data/mbvm.png)
* Acesse *Volumes* e verifique *Estilo de Partição*
  * Unidades em **MBR** exibirão:

    ![Estilo de Partição MBR](../images/ex-data/mbr_disk.png)
  * Unidades em **GPT** exibirão:

    ![Estilo de Partição GPT](../images/ex-data/gpt_disk.png)

#### No Linux

* Baixe e instale o `gdisk`, caso já ainda não esteja instalado.

* Execute `lsblk` para listar as unidades e partições e verifique os identificadores (ex.: `/dev/sda` ou `/dev/nvme0n1`) da unidade de destino que contém dados.

* Execute `sudo gdisk -l <disk_identifier>` (ex.: `sudo gdisk -l /dev/sda`).

  * Unidades em **MBR** exibirão:

    ```
    Partition table scan:
      MBR: MBR only
      BSD: not present
      APM: not present
      GPT: not present
    ```

  * Unidades em **GPT** exibirão:

    ```
    Partition table scan:
      MBR: protective
      BSD: not present
      APM: not present
      GPT: present
    ```

#### No macOS

* Execute `diskutil list` no Terminal.

* Verifique a unidade de destino:

  * Unidades em **MBR** exibirão:

    ```
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:     FDisk_partition_scheme                        *SIZE GB   diskX
    ```

  * Unidades em **GPT** exibirão:

    ```
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:      GUID_partition_scheme                        *SIZE GB   diskX
    ```

## Convertendo de MBR para GPT

**Observação**: se a unidade **já estiver em GPT, pule esta parte**.

#### Conversão Destrutiva

Este método destruirá todos os dados da unidade, criando um quadro em branco para começar. **Apenas use este método se os dados contidos na unidade não forem importantes ou um backup já tenha sido feito! SEUS DADOS SERÃO APAGADOS DEFINITIVAMENTE COM ESSE MÉTODO**.

Você pode usar qualquer ferramenta de particionamento da sua escolha para destruir os dados, ou pode simplesmente iniciar o instalador do macOS que você criou com o Guia do Opencore, selecionar a unidade e formatá-la. Veja a seção [Dualboot na Mesma Unidade](../empty/samedisk.md) para obter mais informações. Não será necessário seguir o restante desse guia caso opte por este método.

#### Conversão Não Destrutiva

Esse método possui chances maiores de manter seus dados intactos, **no entanto, isso NÃO significa que você pode deixar de fazer backups dos seus dados. FAÇA BACKUP DOS SEUS DADOS!**.

Usaremos o `gdisk` em qualquer distribuição Linux. Eu recomendo fortemente NÃO fazer essa operação na versão do `gdisk` para Windows ou macOS, pois as coisas podem dar errado, tendo em vista que a maneira como o Windows e o macOS lidam com unidades difere do Linux. Você pode usar uma distribuição Linux USB como o `gparted` (*image iso/usb image*) para fazer a manipulação ou qualquer outra distribuição que tenha em mãos (arch, Ubuntu, Fedora...).

* Baixe e instale o `gdisk` de acordo com as intruções da sua distribuição preferida.

* Execute o `lsblk` para verificar os identificadores da unidade de destino.

* Execute `sudo gdisk <identifier>` (ex.: `sudo gdisk /dev/sda`).

* Caso sua unidade esteja em MBR, será exibida esta mensagem:

  ```
  Partition table scan:
    MBR: MBR only
    BSD: not present
    APM: not present
    GPT: not present
  
  
  ***************************************************************
  Found invalid GPT and valid MBR; converting MBR to GPT format.
  THIS OPERATION IS POTENTIALLY DESTRUCTIVE! Exit by typing 'q' if
  you don't want to convert your MBR partitions to GPT format!
  ***************************************************************
  
  
  Command (? for help): 
  ```

* Digite `w` e pressione Enter/Return.

* Digite `y` para confirmar.

* Pronto.

Para aqueles que queiram fazer o caminho contrário (converter de GPT para MBR), sigam este [link](https://superuser.com/questions/1250895/converting-between-gpt-and-mbr-hard-drive-without-losing-data) (em inglês).

#### Verificação

Uma vez que a unidade tenha sido convertida, verifique novamente seguindo as intruções acima. Talvez seja necessário reiniciar o computador após a conversão para que as mudanças tenham efeito.

## Particionando a Unidade

Uma vez convertida (ou já formatada) para GPT, é hora de reparticioná-la para criar as partições do macOS e EFI caso ainda não existam.

### Verificando as Partições Existentes na Unidade

Só porque a unidade está particionada em GPT, não significa que o macOS a aceitará imediatamente. Caso não haja uma partição EFI ou ela não seja grande o suficiente, o macOS se recusará a formatar as partições em HFS+ (Mac OS Extendido (Reg. Cronológico)) ou em APFS. Uma mensagem de erro será exibida, dizendo que o `MediaKit reporta não haver espaço suficiente no dispositivo para a operação solicitada`. De qualquer forma, caso esteja usando uma unidade que contenha apenas dados comuns que não estejam relacionados a sistemas operacionais, há grandes chances de não existir uma partição EFI, então teremos que criar uma.

Tendo dito isso, ainda é preciso determinar se ela é necessária ou não.

#### No Windows

* Abra o Gerenciador de Discos.
* Verifique a unidade de destino.
  * Caso a unidade já contenha uma partição EFI: (geralmente acontece se a unidade já tiver sido formatada como GPT antes).
    ![Partição EFI](../images/ex-data/gpt_efi.png)
    * Você verá uma descrição como `(EFI SYSTEM PARTITION)`
    * Geralmente, o tamanho da partição fica entre 100MB e 500MB (mais do que isso e já é desperdício de espaço de armazenamento).
      * Caso o tamanho seja menor que 200MB, **aumente-a** para 200MB (ou um pouquinho mais).
      * Caso o tamanho seja maior que 500MB, **diminua-a** para 500MB (ou 200MB) porque é um desperdício de espaço.
      * Caso existam múltiplas partições com a *flag* `EF00`, significa que o esquema de partição não está legal. Só é necessário uma partição EFI para todo o computador (por unidade também funciona, mas não existe motivo real para ter múltiplas partições EFI, não faz sentido).
  * Caso a unidade não contenha nenhuma partição EFI:
    ![Nenhuma Partição EFI](../images/ex-data/gpt_noefi.png)

#### No Linux

* Baixe e instale o `gdisk` de acordo com as instruções da sua distribuição.

* Execute o `lsblk` para descobrir os identificadores da unidade de destino.

* Execute `sudo gdisk <identifier>` (ex.: `sudo gdisk /dev/sda`).

* Quando o `gdisk` iniciar, digite `p`.

  * Caso a unidade já contenha uma partição EFI: (geralmente acontece se a unidade já tiver sido formatada como GPT antes).

    ```
    Command (? for help): p
    Disk /dev/<identifier>: NUMBER sectors, SIZE GiB
    Model: SOME NAME     
    Sector size (logical/physical): 512/512 bytes
    Disk identifier (GUID): SOME GUID
    Partition table holds up to 128 entries
    Main partition table begins at sector 2 and ends at sector 33
    First usable sector is 34, last usable sector is 976773134
    Partitions will be aligned on 8-sector boundaries
    Total free space is 10261 sectors (5.0 MiB)
    
    Number  Start (sector)    End (sector)  Size       Code  Name
       1            2048          800767   390.0 MiB   EF00  EFI          // Estamos interessados nessa linha.
       2          800808       213967975   101.6 GiB   AF0A  
       ... // Outras partições.
    ```

    * Você encontrará uma partição com o código `EF00`, o que significa que ela está marcada para ser a partição EFI do sistema.
      * A partição EFI não precisa ser a primeira. Ela pode vir em qualquer ordem na unidade particionada. O `Code` é o que mais importa.
    * Geralmente, o tamanho da partição fica entre 100MB e 500MB (mais do que isso e já é desperdício de espaço de armazenamento).
      * Caso o tamanho seja menor que 200MB, **aumente-a** para 200MB (ou um pouquinho mais).
      * Caso o tamanho seja maior que 500MB, **diminua-a** para 500MB (ou 200MB) porque é um desperdício de espaço.
      * Caso existam múltiplas partições com a *flag* `EF00`, significa que o esquema de partição não está legal. Só é necessário uma partição EFI para todo o computador (por unidade também funciona, mas não existe motivo real para ter múltiplas partições EFI, não faz sentido).

  * Caso a unidade não contenha uma partição EFI:

    ```
    Command (? for help): p
    Disk /dev/<identifier>: NUMBER sectors, SIZE GiB
    Model: SOME NAME     
    Sector size (logical/physical): 512/4096 bytes
    Disk identifier (GUID): SOME GUID
    Partition table holds up to 128 entries
    Main partition table begins at sector 2 and ends at sector 33
    First usable sector is 34, last usable sector is NUMBER
    Partitions will be aligned on 2048-sector boundaries
    Total free space is 2669 sectors (1.3 MiB)
    
    Number  Start (sector)    End (sector)  Size       Code  Name
       1            2048       250068991   119.2 GiB   0700  peepee       // Uma partição.
       ... // Outras partições que não são EFI.
    ```

    * Não há uma partição com o código `EF00`, o que significa que deveremos criar uma.

#### No macOS

* Execute `diskutil list`

  * Opcionalmente, pode-se adicionar `diskX` substituindo o X pelo identificador da unidade alvo caso não queira ver uma lista gigante de partições e unidades. Na maioria dos casos, o identificador da unidade muda de uma inicialização para outra, então não confie muito nele.

* Verifique a listagem de unidades de destino:

  * Caso a unidade contenha uma partição EFI:

    ```
    /dev/diskX (não importa):
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:      GUID_partition_scheme                         *SIZE*     diskX      // unidade em GPT
       1:                        EFI ESP                     209.7 MB   diskXs1    // procure por esta
       2:                    FORMAT1 Part1                   *SIZE*     diskXs2    // uma partição
         ... // Outras coisas que não são TYPE: EFI
    ```

    * Vemos uma partição com `TYPE` como `EFI`, o que significa que a unidade contém uma partição EFI (e como pode ver, ela tem 200MB).
    * O tamanho dessa partição fica geralmente entre 100MB e 500MB (mais do que isso é desperdício de espaço)
      * Caso o tamanho seja menor do que 200MB, **expanda** a partição para 200MB (ou um pouquinho mais).
      * Caso o tamanho seja maior que 500MB, **diminua** a partição para 500MB (ou 200MB) pois é um desperdício de espaço.
      * Caso existam múltiplas partições `EF00`, significa que o esquema de partição está ruim. Só é necessário uma partição EFI para todo o computador (ou por disco, mas não há necessidade para múltiplas partições EFI).

  * Caso a unidade não contenha uma partição EFI:

    ```
    /dev/diskX (não importa):
       #:                       TYPE NAME                    SIZE       IDENTIFIER
       0:      GUID_partition_scheme                         *SIZE*     diskX      // unidade em GPT
       1:       Microsoft Basic Data poopoo                  128.0 GB   diskXs1    // uma partição
         ... // Outras coisas que não são TYPE: EFI
    ```

    * Não existem partições com `TYPE` como `EFI`, embora a unidade esteja em GPT, o que signigica que será preciso criar uma.

### Caso Já Exista uma Partição EFI

Parabéns, você já pode continuar com o particionamento da unidade para o macOS e seguir seu caminho. Veja a seção **Particionando para o macOS**.

### Caso Não Exista uma Partição EFI

Será preciso criar uma usando o Windows ou o Linux (o macOS é um pé no saco, não perca seu tempo).

#### No Windows

Será preciso utilizar um software de gerenciamento de unidades chamado `Minitool Partition Wizard`. Não  vou mentir, é suspeito pra cacete e meio que se parece com malware (e não fique surpreso se for). Existem outras alternativas como o `Easeus Partition Master` (que se parece muito com o MPW 🤔) e o `AOMEI Partition Assistant` (que também se parece com os outros dois ***🤔 intensifica***), e muitas outras alternativas, mas esses são os gerenciadores de unidades mais populares no Windows.

Nota do tradutor: caso você já tenha alguma desenvoltura com essas coisas de partição, esqueça esses Minitool, EASEUS ou AOMEI da vida e use o [DiskGenius](https://www.diskgenius.com). É chinês e, portanto, meio desengonçado, mas é excelente. E o melhor de tudo é que não é malware (eu acho).

##### Mas Cadê o Meu GpArTeD?

O motivo para não recomendar o GParted para manipular partições em NTFS é que ele pode corromper a partição mais facilmente do que o Windows. Eu pessoalmente não tive que lidar muito com partições NTFS corrompidas (fiz uma vez ou duas) e o Windows com certeza as conserta, mas muitos usuários reportaram partições ou dados irrecuperáveis depois de usar o GParted. Não é para culpar o programa, mas usar o Windows para lidar com seu próprio sistema de arquivos é mais seguro do que rezar para o ntfs-3g não fazer merda. Tendo dito isso, vou postar um guia usando o GParted mais abaixo, na seção `Linux`. Caso você já tenha lidado com ele, acredito que saberá o que fazer.

Nessa seção, será preciso usar o Minitool Partition Wizard (MPW daqui pra frente). As outras ferramentas são bastante similares e possuem menus bem parecidos, então dá pra seguir este guia usando elas também. Neste exemplo, particionaremos uma unidade externa, mas nada muda caso esteja usando uma unidade interna. O mesmo procedimento vale para toda e qualquer unidade.

* Baixe o ~~malware~~ gerenciador de partições da sua escolha (aqui será o MPW).

* Instale o ~~malware~~ gerenciador de partições e **fique de olho para não instalar o adware e os "apps" extras como o Chrome, o Opera ou algum antivírus suspeito.**

* Execute o aplicativo com permissões de administrador.

* Clique com o botão direito na primeira partição da unidade alvo e diminua seu tamanho para 200MB (e um pouquinho mais):
  ![Malware](../images/ex-data/mv-rsz.png)
  ![Vírus](../images/ex-data/resizing.png)

  * Observação: por causa do software mal feito, aqui estão os passos necessários para fazer tudo da forma certa:
    * mude a visualização de tamanho para **GB** ou **MB**.
    * selecione o tamanho da partição e **pressione seta para baixo** no seu teclado para reduzir o valor.
    * geralmente o Espaço Após já estará preenchido.
    * assim que alcançar o valor certo (uns 220MB), selecione a seção Espaço Não Alocado Após e **pressione seta para baixo**.
    * você verá que o Espaço Não Alocado Antes se preencherá.
  * Observação 2: mover o controle deslizante apenas criará números aleatórios e é uma porcaria, então use as setas no teclado.
  * Observação 3: eu não sei se outros softwares de particionamento são tão ruins assim (Nota do Tradutor: não são; use o [DiskGenius](https://www.diskgenius.com) se possível).

* Uma vez feito isso, clique em Apicar ou seja lá o que o software mostrar (nessa versão, fica na lista de Operações Pendentes, mas versões antigas possuem um botão dedicado no topo, então procure com cuidado já que a interface muda ao longo do tempo).

  ![Adware](../images/ex-data/applypending.png)

* **ESSE PROCESSO PODE DEMORAR DEPENDENDO DA QUANTIDADE DE DADOS QUE EXISTE NA UNIDADE E SE ELA É UM SSD OU UM DISCO ROTATIVO (HD). NÃO CANCELE EM HIPÓTESE ALGUMA, CASO CONTRÁRIO VOCÊ DESTRUIRÁ TODOS OS SEUS DADOS PARA SEMPRE. VOCÊ FOI AVISADO!**

* Agora que há **espaço vazio antes da primeira partição**, ele será usado para criar a partição EFI.

  * Devido aos gerenciadores MPW serem cuzões, criar uma partição EFI agora é uma função paga.
  * Se você tiver uma versão antiga (9 ou anterior), é possível fazer isso de graça.

* Uma vez que as operações tenham terminado:

  * Abra o CMD/PowerShell com permissões de administrador.

  * Execute o `diskpart`.

  * Execute os seguintes comandos:

    * `list disk`

      * Exibirá suas unidades. Procure pela unidade de destino com cuidado.
      * É possível verificar o número da unidade no Gerenciador de Discos, já que a numeração é a mesma.

    * `sel disk X`

      * Onde X é o número da unidade de destino.

    * `list part`

      * Exibirá as partições contidas na unidade selecionada.
      * Verifique as partições, já que isso pode ajudar a encontrar o destino.
      * Caso não seja a unidade desejada, use `sel disk X` novamente e selecione outra unidade.

    * `create partition efi`

      * Criará uma nova partição do tipo EFI.
      * Isso a esconderá no sistema e ela só poderá ser navegada com privilégios de administrador.
      * Ocupará todo o espaço liberado anteriormente.

    * `list part`

      * Você verá uma nova partição do tipo `System`.
      * O tamanho deve ser mais ou menos o que foi configurado anteriormente.

    * `format fs=fat32 label="EFI"`

      * Isso formatará a partição em FAT32 e a nomeará como "EFI".
      * Observação: **em alguns casos** o Windows retornará um erro dizendo que `O dispositivo não está pronto`. Não sei ao certo que pode ser, mas dá para corrgir:
      * Correção:
        * Volte no MPW.
        * Clique com o botão direito na partição EFI (deve também ser detectada como `EFI System Partition`) e selecione **Formatar**
        * ![trojan horse](../images/ex-data/FormatEFI.png)
        * Aperte OK.

    * Exemplo do resultado:

      ![ameaça](../images/ex-data/diskpart_output.png)

* Assim que terminar, veja a seção **Particionando para o macOS**.

#### No Linux (meu favorito)

Será preciso usar o GParted. Caso esteja usando o `parted` ou o `gpart`, se prepare para um dia triste. Vamos continuar.

* Instale o `gparted` seguindo as intruções específicas da distribuição que você usa (ou use a ISO do GParted).

* Execute o `gparted`

* Selecione a unidade de destino na lista à direita:

  ![Seleção de Unidades no GParted](../images/ex-data/gparted_list_disk.png)

* Clique com o botão direito na primeira partição e então selecione **Redimensionar/mover**

  ![Opção Redimensionar-Mover](../images/ex-data/resize_gparted.png)

* Selecione o espaço livre que precede a zona de texto e pressione **seta para cima** no teclado até alcançar o tamanho desejado e clique em Redimensionar/Mover.

  ![Menu de Redimensionamento](../images/ex-data/resize_menu_gp.png)

  * Observe que, caso tenha passado do tamanho desejado, a quantidade restante **será movida para o espaço livre posterior** à partição. Nesses casos, apenas clique no `+` na área de Novo tamanho até que o espaço após a partição seja zerado. Alterar mais do que isso fará com que o espaço antes da partição seja diminuido (lógico, né? só não bagunce muito, obrigado).

* Você verá estnotão direito na partição não alocada e selecione a opção Novo.
  ![Opção Novo](../images/ex-data/new_part_gp.png)

* Na caixa *Criar Nova Partição*, configure as seguintes opções e clique em Adicionar.

  * Nome da Partição (pode se chamar EFI, mas não é obrigatório).
  * Rótulo (pode se chamar EFI, mas não é obrigatório).
  * Sistema de Arquivos: **FAT32**
  * ![Criar Nova Partição](../images/ex-data/new_part_efi_gp.png)

* Clique no corretinho verde que fica na barra de ferramentas para aplicar as alterações e confirmá-las.
  ![Aplicar Mudanças](../images/ex-data/apply_changes_gp.png)
  ![Caixa de Confirmação](../images/ex-data/confirm_apply.png)

* **ESSE PROCESSO PODE DEMORAR DEPENDENDO DA QUANTIDADE DE DADOS QUE EXISTE NA UNIDADE E SE ELA É UM SSD OU UM DISCO ROTATIVO (HD). NÃO CANCELE EM HIPÓTESE ALGUMA, CASO CONTRÁRIO VOCÊ DESTRUIRÁ TODOS OS SEUS DADOS PARA SEMPRE. VOCÊ FOI AVISADO!**

  ![Aplicando Operações Pendentes](../images/ex-data/gp_progress.png)

* Assim que terminar, clique com o botão direito na sua partição EFI recém criada e selecione a opção "Gerenciar sinalizadores".
  ![Gerenciar sinalizadores](../images/ex-data/mng_flags.png)

* Selecione `esp` e o gparted selecionará `boot` automaticamente. Mantenha dessa forma.

  ![Sinalizadores](../images/ex-data/flags.png)

* Será aplicado instantaneamente. Verifique os sinalizadores:
  ![Verificando sinalizadores](../images/ex-data/flags_check.png)

  * Também é possivel checar pelo `gdisk`, procurando por `EF00`.

* Terminado, prossiga para **Particionando para o macOS**.
