# O que é multiboot?

Multiboot é a presença de múltiplos sistemas operacionais capazes de serem inicializados a partir do mesmo dispositivo e presentes fisicamente nesse dispositivo. Você pode até dizer "é óbvio!", mas algumas pessoas não sabem que só é possível inicializar apenas **um SO** por vez. Ao contrário do que acontece na virtualização, no multiboot, os sistemas operacionais *NÃO* são carregados todos ao mesmo tempo. Em vez disso, é preciso desligar um sistema antes de iniciar o outro. O multiboot pode ser feito em qualquer computador, seja real ou virtual, desde que o firmware consiga iniciar todos os sistemas operacionais.

Aqui está uma forma de visualizar a diferença entre multiboot e virtualização:

![Multiboot à esquerda.  |  Virtualização à direita.](../images/mbvm.png)

Agora que você entendeu a diferença, existem algumas coisas que é preciso saber em relação ao multiboot. Principalmente:

* Particionamento de Unidades
* Localização do *Bootloader*
  * Herdado
  * UEFI
* Seleção de *Bootloader*
  * Herdado
  * UEFI
* Configuração do *Bootloader*

Mas, antes de fazer qualquer coisa

# FAÇA BACKUP DOS SEUS DADOS
