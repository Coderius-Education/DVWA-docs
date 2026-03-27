---
sidebar_position: 2
sidebar_label: 'Medium en High'
doc_id: dvwa_tutorial/authorization_bypass/medium
---

# Medium en High
Start `DVWA` en ga naar de challenge `Authorization bypass`. Zorg dat je `DVWA Security` op `medium` hebt staan.
Ben je vergeten hoe dit moet? Ga dan naar de [cheatsheet](../../docs/cheatsheet).

Laten we eerst `Network Tools` in je browser eens wat beter bekijken:

<iframe width="920" height="517" src="https://www.youtube.com/embed/e1gAyQuIFQo" title="Inspect Network Activity - Chrome DevTools 101" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Het probleem snappen
- Log op DVWA in met gebruikersnaam `gordonb` en wachtwoord `abc123`
- Ga in je browser naar `http://localhost/DVWA/vulnerabilities/authbypass/`
- Welke foutmelding zie je bij `Network activity` (zie video hierboven)?

## Voorkennis
Om deze opdracht te kunnen voltooien, heb je wat voorkennis nodig:
- **Het dataformaat JSON** (JavaScript Object Notation): Een formaat dat veel wordt gebruikt voor het uitwisselen van informatie tussen digitale systemen
Bekijk dit filmpje om te leren hoe dit formaat werkt:

<iframe width="560" height="315" src="https://www.youtube.com/embed/cj3h3Fb10QY?si=Z-dwudhjEVD9VcEb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- **De basis van het HTTP protocol**, en dan met name de GET en POST methods, en hoe je met een POST data naar een website kunt versturen
Bekijk dit filmpje om te leren over HTTP GET en POST:

<iframe width="560" height="315" src="https://www.youtube.com/embed/tkfVQK6UxDI?si=A3hcptGkAyD2gOIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- **De command-line "browser" cURL**: hiermee kun je via de command line een URL opvragen, maar ook een POST sturen. Vanuit de 'developer tools' kun je
een netwerk request met Copy As cURL kopiëren en daarna in je bash shell gebruiken en aanpassen:

![Copy as cURL command](copy-as-curl.png)

Dit filmpje laat zien hoe je met cURL een POST request kunt maken:

<iframe width="560" height="315" src="https://www.youtube.com/embed/nApQ6qN4jzs?si=4E89GaOpHwbw9A6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Hierna kun je verder met de opdracht.

## De opdracht
Probeer de foutmelding die je kreeg bij 'Het probleem snappen' te omzeilen. De bedoeling is om met een 'gewone' gebruiker die
geen `admin` rechten heeft toch de gegevens van andere gebruikers aan te passen. Door een fout in de DVWA website is dit nog steeds mogelijk.

De fout zit hem in deze 2 pagina's van de DVWA web applicatie:

```
vulnerabilities/authbypass/get_user_data.php 
vulnerabilities/authbypass/change_user_details.php
```

- Bekijk deze pagina's eens in je webbrowser.
- Bij de eerste pagina zal je de user-data zien in een formaat dat je misschien bekend voorkomt
- Bij de tweede pagina is het mogelijk om diezelfde data terug te sturen en zo de gebruikersgegevens aan te passen.

Probeer met cURL de `change_user_details.php` pagina zo aan te roepen dat je de gegevens van een andere gebruiker aanpast.
(Bijvoorbeeld de achternaam). Als basis gebruik je het cURL commando die je met `copy as cURL` hebt gemaakt.
Om er een POST van de maken met JSON data, heb je 2 extra parameters nodig:

`-X POST`: Om een POST request te maken<br/>
`-d '{}'`: Om data (in dit geval in JSON formaat) te sturen naar de pagina.

Als het is gelukt, krijg je van de change_user_details pagina het volgende terug:

```
{"result": "ok"}
```
