# Dualboot na Mesma Unidade

Basicamente, esse cenário supõe que você só tem uma unida unidade vazia e quer instalar vários sistemas nela. *Não faz diferença se há outras unidades ou não*, já que essa seção só se preocupará com uma única unidade.

## Precauções

* FAÇA BACKUP DOS SEUS DADOS
* Se possível, desconecte ou desative quaisquer outras unidades do sistema, já que podem interferir com o procedimento de instalação (especialmente o Windows).
* Verifique se a unidade não está corrompida ou possui setores defeituosos.
* Garanta que há uma fonte de energia estável, isto é, use uma tomada em vez da bateria do notebook, por exemplo.

## Situações Aplicáveis

* Você já tem o macOS instalado.
* Você tem uma unidade vazia, sem nenhum sistema operacional instalado.

---

Para começar, é recomendado instalar os sistemas operacionais em uma unidade vazia nessa ordem (embora não faça diferença, como será comentado no futuro):

1. macOS
2. Qualquer Outro Sistema Operacional

E certifique-se de:

1. Formatar a unidade com o Utilitário de Disco do macOS.
2. NÃO formatar a segunda partição com MSDOS.
3. Ter um pendrive do OpenCore com você.

É assim que a coisa funciona:

### Enquanto Instala o macOS

1. Formate a unidade toda como GPT. Isso garantirá que o instalador do macOS crie a partição EFI de 200MB que o macOS exige. Caso contrário, não será possível formatar a partição em APFS/HFS.
   ![Utilitário de Disco no Instalador do macOS, selecione Visualizar > Todas as Unidades](../images/disku1.png)
2. Feito isso, selecione "Partições", clique em "**+**" e escolhe o tamanho das outras partições. "Formato" PRECISA ser `Mac OS Extendido` ou `APFS` (caso contrário, o macOS converterá a unidade para MBR híbrido, o que quebrará a instalação do Windows).
   ![Você pode adicionar quantas partições quiser, mas **lembre-se de seus tamanhos**](../images/disku2.png)
3. Clique em Aplicar e o deixe trabalhar:
   * OBSERVAÇÃO: em alguns versões/configurações do macOS, o Utilitário de Disco pode travar de repente e enviar você para o menu principal. NÃO ENTRE EM PÂNICO (~~isso certamente ajuda~~), apenas aguarde por alguns minutos, abra o Utilitário de Disco novamente e verifique se a formatação terminou.
4. Terminado, instale o macOS na partição de sua escolha e continue seguindo este guia.

#### Observação

* Você ainda pode fazer o descrito acima caso já tenha o macOS instalado, mas NÃO use o Assistente do BootCamp.
  * O Assistente do BootCamp adicionará drivers extras ao Windows, os quais não são necessários.

### Para os Outros

#### Windows

O Windows pode ser um pé no saco quando o quesito é instalar um segundo sistema operacional (como se fosse algum tipo de insulto ou a Microsoft simplesmente não percebe que existem outros sistemas operacionais além do Windows /s). Crie seu instalador do Windows em um outro computador usando o assistente da Microsoft ou use o [Rufus](https://rufus.ie)) (Nota do tradutor: apenas use o Rufus e evite dores de cabeça.)

Caso o Windows apresente problemas durante a instalação, ~~lembre-se que é o Windows~~ reinicie o instalador, remova as partições MSR/Recovery/Windows que o instalador criou (pode haver mais, então apenas certifique-se de não apagar o macOS ou partições de outros sistemas operacionais) e siga [este guia no TenForums](https://www.tenforums.com/tutorials/84331-apply-windows-image-using-dism-instead-clean-install.html) (em inglês) que comenta sobre como instalar o Windows manualmente usando a ferramenta `dism`.

#### Linux

O Linux pode ser bem direto, diferentemente do Windows. Distribuições Linux populares permitem personalizar o particionamento da unidade, então apenas formate a partição vazia para `ext4` (ou qualquer outro sistema de arquivos que preferir), certifique-se de escolher a partição EFI onde o Linux instalará seu próprio *bootloader* (isso NÃO deve "apagar" o OpenCore de forma alguma) e instale.

Outras distribuições (como o Arch) fariam isso de forma manual, então apenas siga o procedimento padrão do guia de iniciantes (sem formatar a EFI, ela já deverá estar em FAT32) e siga em frente. Pessoalmente, eu recomendaria não instalar outros *bootloaders* (como o systemd-boot ou o grub) para sistemas como o Arch porque o OpenCore consegue iniciar *kernels* (*kernéis*?) Linux que suportem o EFISTUB. Mas se você gosta de usar um *bootloader* separado, fique à vontade, pois não muda muita coisa.
