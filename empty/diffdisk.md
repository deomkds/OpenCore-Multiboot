# Dualboot em Unidades Diferentes

Como essa parte é a mais fácil de todas, não será preciso estender demais:

* Instale o macOS em uma das unidades.
* Instale o outro sistema em outra unidade.
* Instale/copie o OpenCore para a partição EFI da unidade que contém o macOS.
* Pronto.

Coisas a se observar:

* O Windows pode ser um pé no saco quando a configuração possui mais de uma unidade (ele fica doido quando vê muitas partições EFI em muitas unidades).
* Caso isso afete você, desative/desconecte todas as outras unidades e instale o Windows normalmente.
  * Em notebooks, isso pode ser um problema. É possível instalar o Windows manualmente seguindo [este guia no TenForums](https://www.tenforums.com/tutorials/84331-apply-windows-image-using-dism-instead-clean-install.html) (em inglês).
  * Certifique-se de escolher a unidade correta.
* Você ainda pode consultar as outras situações caso queira fazer dualboot de mais de um sistema em algumas das unidades.
* Certifique-se de que o OpenCore está na mesma unidade do macOS para facilitar a solução de problemas e para obter uma configuração mais limpa.
