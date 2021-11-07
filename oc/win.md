# Dualboot com o Windows

* Instalações do Windows baseadas em MBR **NÃO SÃO SUPORTADAS** pelo OpenCore nesse momento. Será necessário converte-la para GPT.

#### Solução 1: Se o Windows não for encontrado automagicamente, adicione as seguintes informações na `config.plist`:

```
Misc -> BlessOverride -> \EFI\Microsoft\Boot\bootmgfw.efi
```

* **Observação**: A partir do OpenCore 0.5.9, não é mais necessário especificar isso. O OpenCore deve encontrar essa entrada automaticamente.

![](../images/win-md/blessoverride.png)

#### Solução 2: Para fazer com que o Windows seja encontrado, inicie no modo de recuperação a partir do Windows:

* **Certifique-se de iniciar o Windows pelo OpenCore**
  * Após carregar o OpenCore, pressione Barra de Espaço e selecione a opção `OpenShell` (certifique-se de tê-lo na pasta `Tools` e adicionado na `config.plist`).
  * Execute `map -r -b`.
  * Procure pela sua unidade EFI (geralmente aparece nas primeiras linhas, mas tome cuidado caso você seja um usuário de várias unidades, pois pode haver várias EFIs).
  * Execute `FSX:\EFI\Microsoft\Boot\bootmgfw.efi` onde X é o número da partição EFI que contém o *bootloader* do Windows.
* **Certifique-se de que `RequestBootVarRouting` está configurado para `True`**
* Abra o Prompt de Comando com permissões de Administrador.
* Execute `shutdown /r /o /t 0`.
  * Isso reiniciará o Windows imediatamente para o Menu de Inicialização Avançado.
* Selecione Solução de Problemas > Prompt de Comando.
* O computador reiniciará para o WinRE e o Prompt de Comando se abrirá.
  * Execute o `diskpart`.
  * Uma vez carregado, digite `list vol`.
  * Procure pela letra da unidade do Windows.
    * Pode não usar a letra `C:`, mas certifique-se de verificar o tamanho e outros indicativos de que é a unidade/partição certa.
    * Caso não consiga, anote as letras de unidades montadas que estejam usando o sistema de arquivos NTFS e então explore uma a uma para encontrar sua instalação do Windows.
  * Procure pela sua partição EFI.
    * Deverá dizer `hidden` ou `system` e ter entre 100 e 200MB (algumas OEMs criam EFIs de até 500MB).
      * Digite `sel vol X`, substituíndo X pelo número da partição EFI.
    * Caso esteja em dúvida:
      * Digite `list disk`.
      * Identifique a unidade do Windows.
      * Digite `sel disk X`, substituindo X pelo número da unidade onde o Windows está instalado.
      * Digite `list part`.
      * Verifique as partições, pois geralmente a EFI deve ter entre 100 e 200MB (algumas OEMs criam EFIs de até 500MB).
      * Digite `sel part X`, substituindo X pelo número da partição EFI.
    * De qualquer forma, digite `assign letter=S`.
      * A letra "S" pode ser qualquer letra, desde que não seja A, B, Y, X ou qualquer outra letra que já esteja atribuída na listagem.
  * Digite `exit` para fechar o `diskpart` e retornar para o Prompt de Comando.
  * Execute `bcdboot X:\Windows /s S: /f UEFI`.
    * [bcdboot](https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/bcdboot-command-line-options-techref-di) (em inglês) é um utilitário que instala o *bootloader* do Windows na EFI ou na partição raíz do sistema (à sua escolha).
    * `X:\Windows` é o caminho da pasta de instalação do Windows, onde X é a letra atribuída para a partição do Windows.
    * `/s S:` é a unidade de destino que receberá o *bootloader*. Nesse caso, é a partição EFI.
    * `/f UEFI` para especificar o tipo de *bootloader* que deve ser instalado (*bootloader* UEFI).
    * Isso copiará um novo arquivo `bootmgfw.efi` assim como adicionar uma nova entrada de inicialização na NVRAM.
* Se tudo correr sem nenhum erro, digite `exit` para retornar ao Menu de Inicialização Avançada (ou reiniciar).
* Reinicie e veja se o Windows aparece no seletor do OpenCore.
