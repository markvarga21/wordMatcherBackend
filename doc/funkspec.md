# **Funkcionális specifikáció**
## 1. A rendszer céljai és nem céljai.
* Az alkalmazásunk célja közé tartoznak a következők:
    * Játékos nyelvtanulás
    * Innovatív megoldás
    * Dekoratív design
    * Responszív felület
* Az alkalmazásunknak nem célja hogy:
    * Más platformokon müködjön
    * Több oldalt is kezeljen
    * További nyelvek használjon
---
## 2. Jelenlegi helyzet leírása
* A megrendelő szeretné ha a nyelvtanulás minél hatékonyabb, modernebb és innovatívabb lenne. Azt szorgalmazza, hogy legyenek ilyen csempeszerű elemek, amiket lehessen ide-oda húzogatni, s azokat a legvégén ellenőrizni lehessen például egy gomb segítségével. Ha jó a megoldás, akkor ezt jelzi a felhasználónak (legyen gyerek vagy felnőtt) egy adott módon, s ha nem helyes szintúgy jelzi. 
---
## 3. Vágyálom rendszer leírása
* A rendszerünk, mint azt fentebb is említettem, csempéknek (angolul *tiles*) nevezett elemeket fog használni a szavak párosításához, amiket be tud húzni előre meghatározott helyekre. A felhasználó továbbá ellenőrizni is tudja a válaszainak a helyességét egy gombra kattintva az oldal alján, ami különböző algoritmusokkal ellenőrzi a válasz/párosítás helyességét. A felhasználói felület egy alert-et használva fog megbizonyosodni válasza helyességéről, avagy annak helytelenségéről. A kimenet függvényében lehetősége lesz újrarendezni a kártyákat és azt újból ellenőriztetni a rendszerrel a gomb újboli lenyomásával.
---
## 4. A rendszerre vonatkozó külső megszorítások: pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása
* A rendszernek/alkalmazásnak a következő megszorításokat kell tartalmaznia:
    * Nem szabad hogy felhasználó adatokat tároljon.
    * Tiltott a felhasználó azonosítására alkalmas sütik használata.
    * Innovatív technológiákat kell használnia, ami lehetőleg minden modern böngészőben működik
---
## 5. Jelenlegi üzleti folyamatok modellje
* A jelenlegi oktatási rendszer nem használja ki a 21. századi technológiákat az oktatásban azért, hogy a tanulók számára az oktatás és a tanulás interaktívabb és reszponzívabb legyen. A diákok nagy része nem hajlandó a régi módszerek szerint tanulni ezért néhány oktatási intézmény alternatív megoldás után keres. A diákok könyvekből tanulnak és ha ellenőrizni szeretnék, hogy mennyi szó maradt meg akkor ezt otthon szokták megtenni egy külön papíron vagy nem is szokták magukat ellenőrizni. Ez rengeteg nyomtatási kiadást jelent illetve sok elhasznált lapot.
---
## 6. Igényelt üzleti folyamatok modellje
* Azért hogy egyszerűbbé tegyük a diákok angol tanulását, létrehozunk egy programot ami a mai kornak megfelelő és a legtöbb böngészőn megfelelően tud megjelenni illetve futni. A diákoknak sokkal egyszerűbb lesz a tanulás hiszen a program segítségével egyszerre tanulhatnak illetve ellenőrizhetik a tudásukat addig amíg nem érzik úgy, hogy a megtanult szavak jól mennek és a tudásuk biztos. Illetve a diákoknak nem kell a könyvet elővenniük és azt átlapozva előkeresniük az adott szavakat és így ha esetleg iskolában hagyják a könyveiket akkor is tudnak tanulni. Illetve ha esetleg új szavakat szeretne megtanulni azt fel tudja vinni a rendszerbe a akár, és ez által a diákok új szavakat is fognak tudni majd tanulni.
---
## 7. Követelménylista
|    Modul    |      ID     |           Név          |   V.   |                                                 Kifejtés                                                      |
| :---        |    :----:   |          :---:         | :---:  |                                                  :---:                                                        |
| Jogosultság |      K1     | Jogosultsági szintek   |  1.0   |                     Felhasználó/vendég: feladat teljesítése ; Admin: Új szavak bevitele                       |
| Jogosultság |      K2     |       Admin felület    |  1.0   |   Felület az admin fiókkal rendelkező felhasználó számára. Tartalmaz egy felületet az új szavak beviteléhez   |
| Feladattípus|      K3     |          Teszt         |  1.0   |                         Teszthez hasonló feladat. Hibás, hibátlan a teszt kitöltés                            |

---
## 8. Használati esetek
* Felhasználó: A felhasználó vagy a vendég kitöltheti a tesztet vagy azt akár újra is kezdheti. Illetve az ellenőrzéssel megtudhatják hogy jól vagy rosszul töltötték ki a tesztet. 
Admin:Az admin ugyan úgy kitöltheti a tesztet vagy előröl kezdheti. Illetve ha kitölti a tesztet akkor megkaphatja ő is a választ, hogy jól vagy rosszul van kitöltve. Ez által az admin le tudja tesztelni a programot, hogy az megfelelően működik e. Vagyis az admin a felhasználó szerepkörével rendelkezik. Illetve ha nem elég a szavak száma akkor feltud vinni pár új magyar-angol szót a rendszerbe vagyis tudja bővíteni a szótárat egy külön kis panel segítségével ahova beírhatja a magyar szót és annak az angol megfelelőjét és egy gomb segítségével fel töltheti a szótárba.
---
## 9. Megfeleltetés, hogyan fedik le a használati esetek a követelményeket

---
## 10. Képernyő tervek

---
## 11. Forgatókönyvek

---
## 12. Funkció – követelmény megfeleltetés

---
## 13. Fogalomszótár