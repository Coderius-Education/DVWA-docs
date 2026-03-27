---
sidebar_position: 3
sidebar_label: 'High'
doc_id: dvwa_tutorial/brute_force/high
---

# High
Start `DVWA` en ga naar de challenge `Brute Force`. Zorg dat je `DVWA Security` op `high` hebt staan.
Ben je vergeten hoe dit moet? Ga dan naar de [cheatsheet](../../docs/cheatsheet).

## Het probleem
In de `high` versie van deze challenge is weer wat beveiliging toevoegd:

1. De `sleep(2)` uit level `medium` is vervangen door een `sleep( rand( 0, 3 ) )`
2. Bij controle van de inloggegevens wordt nu gebruik gemaakt van een CSRF token

De 2e aanpassing gooit roet in het eten: je zult merken dat als je in jouw `hydra` commando
het `securitylevel=medium` aanpast naar `securitylevel=high`, je foutieve output krijgt:

![high_error.png](high_error.png)

Dit komt omdat nu alle inlogpogingen _niet_ het woord `incorrect` bevatten, maar een CSRF foutmelding.
Hydra denkt nu dat de poging lukt, want er zit geen `incorrect` in de pagina. Dat is niet juist:
het inloggen mislukt nog steeds, maar nu door een CSRF fout.

## CSRF: Cross-Site Request Forgery
Om dit te kunnen oplossen moeten we eerst weten wat CSRF precies is. Bekijk het volgende filmpje:

<iframe width="920" height="517" src="https://www.youtube.com/embed/vRBihr41JTo?si=6M57GUNqbPtNApRv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Burpsuite
Dit probleem met het CSRF token kan helaas niet met `hydra` worden opgelost.
Hiervoor zullen we een andere tool moeten gebruiken: BurpSuite
 
- Download [Burp Suite Community Edition](https://portswigger.net/burp/communitydownload)
- Open het programma `Burp Suite Community Edition`

## Opdracht
Om het password te kunnen vinden moeten we herhaaldelijk de volgende stappen uitvoeren:
1. Het login formulier opvragen en het token hieruit halen
2. Het login formulier versturen met het zojuist opgehaalde token, de usernaam (admin) en het te proberen password

Dit kan met BurpSuite als volgt:

- Navigeer in de BurpSuite browser naar: http://localhost/DVWA/vulnerabilities/brute/
- Bekijk het filmpje voor de verdere instructies:

<iframe width="920" height="517" src="https://www.youtube.com/embed/FAzRMqNGScs?si=3zWzGj7zxVd9k0Fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Als het is gelukt zie je in BurpSuite het volgende:

![high_success.png](high_success.png)

De kolom 'incorrect' staat op 0 bij het juiste password.

> **Alternatief**: Je kunt ook een stukje Python code schrijven die dit probleem oplost!
