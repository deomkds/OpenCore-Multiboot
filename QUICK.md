# Guia Rápido Sem Besteira

Ok, se você já tem experiência com particionamento e inicialização de múltiplos SOs, aqui está o que você está procurando:

* ***FAÇA BACKUP DOS SEUS DADOS***: isso pode facilmente se tornar uma operação destrutiva.
* O macOS requer:
  * Partição EFI (ESP) de, no mínimo, 200MB.
  * Unidade formatada em GPT.
  * Computador UEFI (ou usar o DUET em computadores antigos, distribuído com o OpenCorePkg).
* O OpenCore deve preferivelmente ser copiado para a partição EFI da mesma unidade.
  * Certifique-se de executar o script `BootInstall.command` **caso esteja usando um computador antigo sem UEFI**.
  * É preferível que a partição EFI esteja **no início da unidade** ao fazer o dualboot com o Windows (leia o arquivo de configuralção do OpenCore).
* Não importa se você já tem coisas na unidade:
  * É possível converter a unidade para GPT (caso seja MBR) e criar uma partição EFI com *flag* hex `EF00` (por exemplo, usando o gdisk ou o gparted e escolhendo o tipo `efi`<sup>(será exibida assim que a partição for formatada, caso ainda não esteja.)</sup>)
  * Altere a EFI existente para **200MB** (o Windows geralmente limita a ESP a 100MB em novas instalações, enquanto que algumas distribuições Linux possuem tamanhos menores ou maiores, mas menos de 200MB em geral).
    * Recomendação: certifique-se de que a ESP é um pouco maior, uns 210MB ou algo próximo, para eliminar a diferença entre de base na contagem de bytes entre macOS, Linux e Windows (múltiplos de 1024 (base 2) em vez de múltiplos de 1000 (base 10) e vice-versa).
  * O Windows 10 1709 e mais novos possuem um utilitário chamado `mbr2gpt` para converter a unidade de inicialização do Windows para GPT:
    * Faça isso para fazer o dualboot do Windows 10 com o macOS na mesma unidade independente do modo de boot:
      * Para computadores antigos, o acesso ao Windows será perdido até instalar o OpenCore e iniciá-lo a partir dele.
      * Computadores UEFI iniciarão automaticamente quando a conversão ocorrer desde que o firmware esteja configurado para o modo UEFI.
    * Esse utilitário pode dizer que não é capaz de converter a configuração por algum motivo, mas você pode tentar manualmente:
      * Preparando um instalador do Windows 10 num pendrive.
      * Usando uma distribuição Linux para:
        * converter a unidade para gpt (gdisk).
        * criar uma nova partição com a *flag* hex `EF00` ou o tipo `efi` (gparted).
          * Certifique-se de que ela tenha 200MB para o macOS.
          * Você pode criar outra partição para o macOS no caminho.
          * É preferível que a EFI esteja no início da unidade (exigência do OpenCore).
      * Iniciar o instalador do Windows:
        * Crie uma letra de unidade para a partição EFI e para a partição do Windows usando o `diskpart` (procure no Google por "criar letra de unidade diskpart")
        * Execute `bcdboot C:\Windows /s S: /f UEFI` (trocando `C:` e `S:` pelas letras de unidade que foram criadas para o Windows e a partição EFI respectivamente, leia o manual do bcdboot)
      * Inicie o Windows e torça para que nada tenha quebrado.
  * Caso esteja usando Linux, são os mesmos passos mencionados anteriormente (basta criar uma partição EFI de 200MB e reserver um lugar para colocar o macOS)
* Certifique-se de que a unidade não possui erros de S.M.A.R.T..
* NÃO mantenha múltiplas partições EFI na mesma unidade, é **PRECISO** ter somente **UMA** partição EFI por unidade.
* A ordem de instalação dos SO **não influencia em nada**:
  * No entanto, o Windows pode ser um pé no saco, então instalá-lo depois do macOS pode ser desafiador. O Linux não tem esses problemas.
  * Caso você tropece nas frescuras do Windows:
    * Inicie o instalador do Windows.
    * Formate a partição onde você quer que o Windows seja instalado para NTFS (como de praxe).
    * Siga o restantes desse guia no [TenForums](https://www.tenforums.com/tutorials/84331-apply-windows-image-using-dism-instead-clean-install.html#Part2) (em inglês).
      * Você não precisa das partições MSR e Recovery, e você não poderá criá-las quando houver coisas já instaladas na unidade (culpe o instalador do Windows).
        * A FAZER: uma maneira de criar um Recovery do Windows de forma separada. Não foi possível encontrar nenhum guia sobre como fazer isso de forme que o Windows a reconhecesse nativamente. Caso você conheça algum guia ou saiba como fazer, abra [um PR](https://github.com/deomkds/OpenCore-Multiboot/) ou [um problema](https://github.com/deomkds/bugtracker) constando suas ideais.

Agora que você possui toda essa informação, boa sorte com o restante. No entanto, caso não esteja seguro, siga o caminho mais longo, pois ele possui mais explicações e detalhes sobre como fazer tudo isso.
