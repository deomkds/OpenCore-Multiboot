# Usando o Bootstrap.efi

[[toc]]

A partir da versão 0.5.8 do OpenCore, existe um pequeno arquivo na pasta `EFI/OC/Bootstrap` chamado `Bootstrap.efi`. Ele permite adicionar o OpenCore ao menu de inicialização do firmware e prevenir problemas nos quais o Windows ou o Linux tentam sobrescrever o arquivo `BOOTx64.efi`, o que pode acontecer durante atualizações e bloquear completamente o acesso ao OpenCore.

## Preparação

Para inicar, será necessário fazer o seguinte:

* [OpenCore 0.5.8 ou mais novo](https://github.com/acidanthera/OpenCorePkg/releases)
  * Verifique se possui `EFI/OC/Bootstrap/Bootstrap.efi`.
* Configurações do arquivo `config.plist`:
  * `Misc -> Security -> BootProtect -> Bootstrap`
  * `UEFI -> Quirks -> RequestBootVarRouting -> True`
* [OpenShell](https://github.com/acidanthera/OpenCorePkg/releases)
  * Distribuído com o OpenCore.
  * Lembre-se de adicioná-lo na pasta `EFI/OC/Tools` e na `config.plist -> Misc -> Tools`.
  * Serve mais para a solução de problemas.
  
## Inicialização

Agora que todos os pré-requisitos já foram cumpridos, é hora de iniciar! A primeira inicialização com essas configurações ligadas fez com que uma nova entrada de inicialização na BIOS (Boot9696) fosse criada. A partir de agora, toda vez que o computador for iniciado, o OpenCore atualizará a entrada, garantindo que ela estará disponível. Isso permite que o arquivo `BOOTx64.efi` possa ser removido ou sobrescrito por outros sistemas operacionais sem que o OpenCore fique inacessível.

Se nenhuma nova opção de inicialização for criada, você pode ler a seção de solução de problemas e adicioná-la manualmente. No entanto, verifique antes se as configurações acima estão corretas.
  
## Solução de Problemas

Isso é principalmente um mini-guia caso o BootProtect não funcione ou você prefira fazer manualmente.

* [Verifique Se a Entrada do Bootstrap Foi Aplicada](#verifique-se-a-entrada-do-bootstrap-foi-aplicada)
* [Removendo a Entrada do Bootstrap da BIOS](#removendo-a-entrada-do-bootstrap-da-bios)

### Verifique Se a Entrada do Bootstrap Foi Aplicada

Para aqueles que queiram verificar se a entrada foi aplicada no OpenCore, ativar os logs (veja a página **Depurando o OpenCore** no Guia do OpenCore) e verifique se existem entradas similares a estas:

```
OCB: Have existing option 1, valid 1
OCB: Boot order has first option as the default option
```

### Removendo a Entrada do Bootstrap da BIOS

A entrada do Bootstrap é protegida ao redefinir a NVRAM, portanto será necessário configurar o seguinte:

* Misc -> Security -> AllowNvramReset -> true
* Misc -> Security -> BootProtect -> None

Quando essas duas opções estiverem configuradas na `config.plist`, reinicie até o seletor do OpenCore e selecione a opção `Reset NVRAM`.
