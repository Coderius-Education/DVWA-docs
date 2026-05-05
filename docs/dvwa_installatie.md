---
sidebar_position: 1
displayed_sidebar: null
---

# DVWA installeren
Je gaat nu de DVWA applicatie installeren op je Linux installatie.

## Open WSL
Zoek op je computer naar WSL en open het programma.
Je zou dit moeten zien:

![wsl](kali_linux_succes.png)

## Commando geven om te installeren
Kopieer het volgende commando (let op deze is heel lang) in je WSL Kali shell en druk op Enter:

```bash
sudo bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/IamCarron/DVWA-Script/main/Install-DVWA.sh)"
```
Tips:
- je `sudo` wachtwoord is het wachtwoord dat je hebt ingetypt bij het installeren van kali-linux op WSL.
- er volgt een lange lap tekst met installatie. Dit duurt even.
- bij `Enter SQL user:` --> druk op Enter
- bij `Enter SQL password (press Enter for no password):` --> druk op Enter

## Hoe start ik DVWA?
Kijk in de [Cheatsheet](cheatsheet) voor het opstarten, inloggen en instellen op DVWA.