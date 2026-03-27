---
sidebar_position: 1
sidebar_label: 'Low'
doc_id: dvwa_tutorial/brute_force/low
hide_table_of_contents: true
---

# Low
Start `DVWA` en ga naar de challenge `Brute Force`. Zorg dat je `DVWA Security` op `low` hebt staan.
Ben je vergeten hoe dit moet? Ga dan naar de [cheatsheet](../../docs/cheatsheet).

## Installatie
Open `kali-linux` op `WSL` en draai het volgende commando:

```powershell
sudo apt install hydra wordlists && sudo gunzip /usr/share/wordlists/rockyou.txt.gz
```


## Handmatig proberen
1. Ga naar http://localhost/DVWA/vulnerabilities/brute/.
2. Probeer in te loggen met een willekeurige usernaam/password combinatie
3. In de adresbalk zul je zien dat de usernaam en het password (!) te zien zijn
4. Je kunt deze aanpassen om een snelle tweede (of 3e, 4e..) poging te doen
5. Handmatig proberen duurt lang.. Dat kan handiger! 

## PHP Session ID
1. Navigeer naar http://localhost/DVWA/vulnerabilities/brute/
2. Druk op F12 om de browser "inspector" weer te geven
3. Kies bovenin het tabje "Application"
4. Navigeer in het menu aan de linkerkant naar "Cookies" -> "http://localhost"
5. Hier staat een cookie met de naam `SESSION_ID`. Bewaar de "value", deze heb je later nodig

## USERVELDNAAM en PASSWORDVELDNAAM
Bekijk de HTML paginabron van de DVWA brute force login pagina.
Zoek de namen van de input velden in het HTML formulier op waarin de gebruikersnaam en het wachtwoord worden ingevuld.
Kies de waardes van de `name` attributen.
Dit zijn de waardes van `USERVELDNAAM` en `PASSWORDVELDNAAM`.

## FOUTMELDING
Welk bericht krijg je te zien als het niet lukt om in te loggen? Kies één woord uit dit bericht als waarde voor `FOUTMELDING`

## Commando invullen
Kopieer onderstaand commando en vervang: `USERVELDNAAM`, `PASSWORDVELDNAAM`, `SESSION_ID` en `FOUTMELDING`. Verander alleen die vier onderdelen. Draai vervolgens het commando.
```
hydra -l admin -P /usr/share/wordlists/rockyou.txt -m '/DVWA/vulnerabilities/brute/:USERVELDNAAM=^USER^&PASSWORDVELDNAAM=^PASS^&Login=Login:H=Cookie:PHPSESSID=SESSION_ID;security=low:F=FOUTMELDING' localhost http-get-form
```

Als het goed gaat, zie je:

![succes](low_success.png)

> ⚠️ **_Let op:_** Als er meer dan 1 resultaat verschijnt (dus meerdere kloppende passwords) is je commando niet goed! Er is maar 1 werkend password.
