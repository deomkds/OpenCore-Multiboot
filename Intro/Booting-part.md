# Sistemas UEFI

Desde a criação da UEFI, o formato padrão de mapa de partições para as unidades é o GPT (*GUID Partition Table*), que adicionou suporte a unidades com mais de 2TB de tamanho e mais de 4 partições, que eram limitações do MBR, ao mesmo tempo em que mantém a retrocompatibilidade com o MBR para computadores antigos. Se o seu computador (pré-montado) veio com Windows 8 (2012 ou posterior), então a sua unidade muito provavelmente estará particionada em GPT.

Geralmente, computadores de 2012 em diante que vieram com o Windows 8 tem firmware UEFI (algumas OEMS lançaram computadores com Windows 7 no mesmo período, então certifique-se de que o seu possui firmware UEFI). UEFI é um tipo de firmware distribuído recentemente (que esteve em desenvolvimento desde os anos 2000) e já estava presente em computadores Apple desde a transição para processadores Intel (mas em uma versão altamente modificada do firmware, que é chamada de EFI e não UEFI por faltar universalidade). Esse novo firmware possui alguns novos recursos como a Inicialização Segura, ajuda com inicializações mais rápidas, acesso direto a hardwares, interface gráfica com suporte a mouse, entre outras coisas. Para saber mais sobre UEFI e Inicialização Segura, leia este artigo escrito por Osy86 [aqui](https://osy.gitbook.io/hac-mini-guide/details/secure-boot) (em inglês). Basicamente, uma inicialização UEFI acontece da seguinte forma:

- O firmware UEFI é carregado.
- Carrega seus drivers e serviços integrados.
- Lê as entradas do menu de inicialização e começa a carregar a primeira entrada.
  - Se falhar, inicia a próxima.
- Inicia o *bootloader*.
  - O sistema operacional é carregado depois disso.

Geralmente, o dito *bootloader* fica contido em algum lugar na unidade, e esse "algum lugar, é chamado de **partição EFI**. Você encontra essa partição sob diferentesnomes, como ESP (*EFI System Partition*), SYSTEM, EFI, BOOT, entre outros. É uma partição formatada em **FAT32** e sinalizada como **EF00** na MBR ou com o GUID **C12A7328-F81F-11D2-BA4B-00A0C93EC93B** na GPT. Esta partição geralmente contém os aplicativos EFI (como um *bootloader* de algum SO) que são carregados no momento da inicialização pelo firmware UEFI (lembre-se disso pois é importante depois para recuperação).

# Sistemas Antigos/CSM (Legados)

Contrary to UEFI, Legacy systems are older and much more mature (dating back to the first IBM PCs). They're certainly a lot more limited and slower than UEFI on the same system but hold better compatibility with a lot of OSes (even macOS in some rare cases). Computer pre-2012 usually have this type of firmware (some exceptions like servers and some professional laptops and so on that can also have UEFI, they're not reliable thought in that mode). The computer would usually come with a version of Windows that is older than Windows 8 with a hard drive that is less than 2TB. Some desktop users at this time would also install OSes in Legacy mode even if their motherboard supports the newer UEFI standard. This could create issues with multibooting later on.

These systems rely on another method of loading the bootloader. This piece of software is usually written in the first sectors of the disk (formatted as MBR) called **boot sector**, this sector is usually 512 or 4096 bytes big, the BIOS would then read the code, copy it to memory and then execute it, at that point an OS or Bootloader menu (like GRUB2) will show up:

* BIOS Starts up
* Reads the **boot sector**
* Loads the program into memory
* Executes the program
* Bootloader appears
  * The OS will boot now.

# Major differences between the systems

We'll put them in a table to show the main differences:

|                                                            | **UEFI**                                                     | **Legacy**                                                   |
| ---------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Fast Boot                                                  | ✅ (on most)                                                  | ❌ (only some do, not a standard)                             |
| Bootloader Chooser through the boot menu                   | ✅ (on most)                                                  | ❌ (only some do, not a standard)                             |
| Secure Boot                                                | ✅ (on most)                                                  | ❌ (only some do, not a standard)                             |
| Add a bootloader without overwriting the others            | ✅ (on most)                                                  | ❌ (only some do, not a standard)                             |
| Supporting 2TB+ boot disks                                 | ✅ (hardware dependent)                                       | ❌ (requires GPT, which is supported on some Legacy systems, 2006+) |
| Legacy Hardware Support                                    | ⚠️ (depends on which hardware, CSM switch should be possible) | ✅ (hardware dependent)                                       |
| Easier maintenance (managing bootloaders and boot entries) | ✅ (on most)                                                  | ❌ (only some do, not a standard)                             |
| OS Support                                                 | ✅                                                            | ✅                                                            |

Aside from Legacy hardware support (which is rare anyways nowadays), UEFI is the firmware to use when dual booting on newer hardware (2012+). But for legacy users, there is also a way to get some UEFI features but only through DUET (will be later discussed).

# Detecting which firmware you're using

## No OS

If your computer:

- is from Ivy Bridge era (~2012) and later
- has a Windows 8 Sticker

Then it probably has **UEFI system**, that said, it doesn't mean older generation motherboards do not, however with Windows 8 release, Microsoft standardized the UEFI specs for OEMs to get their certification (usually if you go with brand names like ASUS, Lenovo, HP, Dell... you're good to go).

Any older than the above and the chances of having a proper UEFI implementation diminishes and you're better off with a Legacy booting.

## On Windows

Open Run (Win + R) and type `msinfo32`, you will be greeted with this window:

![MSINFO32 Window](../images/msinfo.png)

Check **BIOS Mode**, it will either say **UEFI** or **Legacy**. Note that this is for Windows 8/10, if you're using Windows 7 or older, you're probably running it in Legacy mode.

## On Linux

### Method 1

On most Linux distributions, you can run 

```ls /sys/firmware/efi```

![img](../images/linuxefivar.png)

If the folder exists, then you're running in UEFI mode. (screenshot credit: Scooby-Chan#7971)

### Method 2

You can also download and run `efibootmgr` (available on most distributions) and you will either:

- Get boot entries variables
  - Your system is running UEFI
- or get an error message that EFI variables aren't supported
  - Your system is running in Legacy mode

---

# macOS in all of this

macOS requires some special treatment because Apple wants to (pampering their OS), and thus requires a set of rules to get it installed on any drive:

- GPT formatted disk
- EFI partition of at least 200MB

With these two requirements in mind, you can theoretically just make them happen and you're good to go. If you understood what to do from these requirements and can do it on your own, you're good to go, if not, stay here to get more tips and tricks on how to properly fix this.

---

Next sections:

Cases:

- No OS installed on the machine:
  - DB on same disk
  - DB on different disks
- Already installed OS or existing data in the drive
  - Systems with native UEFI support: convert your legacy booting OS to a UEFI one
    - Linux
    - Windows
    - Systems with only Legacy booting only option:
      - DUET

Good luck, and ***BACKUP YOUR DATA***.
