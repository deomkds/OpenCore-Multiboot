# Multiboot com o OpenCore

Olá! Parece que você está tentando instalar o macOS e mais algum sistema operacional no seu computador, mas não quer bagunçar o outro sistema operacional ou o macOS no caminho. Aqui, você será guiado através dos vários passos necessários para tal, sem afetar muito os sistemas operacionais já configurados.

## Tipos de Firmware

O multiboot é afetador fortemente pelo tipo de firmware do seu computador. Este guia abordará os dois tipos conhecidos, que são:

* UEFI
* Legacy/CSM/BIOS

As diferenças são mínimas uma vez que estiver usando o OpenCore, mas também pode ser um pouco difícil no último caso. Este guia abordará os seguintes elementos:

1. O que é multiboot e como ele funciona?
2. Particionando vs Separando Unidades
3. UEFI
   1. Uma unidade para todos os sistemas.
   2. Unidades diferentes para sistemas diferentes.
4. Legacy (também referido como legado, antigo, BIOS etc.)
   1. Uma unidade para todos os sistemas.
   2. Unidades diferentes para sistemas diferentes.
5. Solução de Problemas
6. Dicas e Truques

### Aviso Importantíssimo

Não somos responsáveis por dispositivos *brickados*, discos rígidos mortos, guerra termonuclear, ou sua demissão por ter tido um *kernel panic* e perdido seu trabalho. Você é o único responsável por ler tudo com bastante cuidado antes de tentar qualquer coisa. Faça suas pesquisas e peça ajuda caso tenha questionamentos ou problemas antes de tentar coisas aleatórias que você viu na internet simplesmente porque "se está na internet é verdade". Caso você faça isso, VOCÊ e somente você está escolhendo, por conta própria, seguir coisas aleatórias na internet. Se VOCÊ apontar o dedo para nós por estragar seu computador, NÓS riremos de você.

Agora que tiramos isso do caminho, você está pronto para começar. Boa sorte!
