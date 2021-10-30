# Instalando o OpenCore em um Computador Antigo

No momento, não há suporte oficial para instalações do Windows baseadas em MBR/Herdado, mas existem planos para isso. No entanto, isso não deve acontecer em breve: [Add MBR loading tool to OpenCore](https://github.com/acidanthera/bugtracker/issues/912) (em inglês).

Atualmente, existem duas alternativas:

* Converter a unidade do Windows para GPT (isso significa que terá que iniciar com o OpenCore todas as vezes).
* Encadear o rEFInd, que possui suporte a MBR.

Para o último:

1. [Configure o rEFInd](https://www.rodsbooks.com/refind/installing.html).
2. Adicione o caminho do rEFInd na opção BlessOverride (`\EFI\refind\refind_x64.efi`).
3. Inicie o OpenCore.
4. Selecione o rEFInd.
5. Selecione o Windows.

![](../images/duet-md/blessoverride.png)
