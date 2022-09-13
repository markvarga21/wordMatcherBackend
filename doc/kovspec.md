# **Követelméy specifikáció**
## 1. Áttekintés
* A nyelvtanulás rendkívül frusztráló lehet a sok szótárral - akár papíros szótár, akár egy online szolgáltatás által biztosított szótár - illetve ha nem állnak rendelkezésünkre az előbbi eszközök. Itt jön képbe az alkalmazásunk.
* Az alkalmazás célja a játékos és grafikus módon való nyelvtanulás, azon belül is a szavak elsajátítása angol illetve magyar nyelven. A felhasználó/diák tud majd úgy nevezetet kártyákat húzogatni ide-oda. 
* A bal oldalon lennének a magyar szavas kártyák, stilizált formában, a jobb oldalon pedig esetünkben angol szavak. 
* Középen pedig ott lennének a fentebb említett szavaknak a placeholderei<sup>1</sup>, ahova lehet majd húzni a szavakat. 
---
## 2. Jelenlegi helyzet leírása
* Az oktatási rendszerekben, sajnos egyre kisebb hangsúly kapnak a nyelvtanulási lehetőségek, és ha kapnak is, az a gyerekeknek - legyenek középiskolások, vagy már fiatal felnőttek - nem imponálnak. 
* Itt jönne képbe az alkalmazásunk, ahol szintúgy megtalálja a helyét egy fiatal, de egy idősebb ember/gyerek is. 
* Egy piaci rés betöltésére ad lehetőséget az alkalmazás, hiszen ez nem egy úgymond ,,szürke,, , nem érdekes tanítási módot használ az oktatásra, hanem egy sokkal kifinomultabbat, imponálóbbat.
---
## 3. Vágyálom rendszer leírása
* Az alkalmazásnak tudni kell futnia a weben, amit bárhonnan el tudnak érni probélma nélkül, ezáltal lehetőséget adva, a fentebb említett problematika kiküszöbölésére, vagyis arra, hogy ne kelljen foglalkozni a szótárak beszerzésével, hanem csak egyszerűen le lehessen ülni a számítógép elé és tanulni.
* Továbbá mindíg és minden pillanatban elérhető kell hogy legyen, sebességben és reszponzivitásban változatlan, illetve hibamentességét meg kell hogy őrizze. 
* A rendszer lehetőséget nyújt a felhasználónak a kártyák ide-oda húzogatására, viszont csakis a megfelelő helyre, ami majd később részletezve is lesz. 
* Lenne egy külön rész az alkalmazásban, ahol a felhasználónak lehetősége van új szavak, szó-párosítások hozzáadására, hogy az alkalmazás minél tágabb szótárral/szóbázissal rendelkezhessen.
* Végül pedig, a felhasználónak lehetősége van a válaszainak, párosításainak az ellenőrzésére is, illetve az esetleges újrakezdésre is.
---
## 4. Funkcionális követelmények
* Felhasználó tudja a szavakat úgy mozgatni, hogy az angol szót a magyar megfelelőjével tudja párosítani
* Felhasználó csak a kijelölt helyre tudja mozgatni a szavakat
* Egy gomb segítségével tudja ellenőrizni a felhasználó a megoldásait
* Egy másik gombbal pedig előröl tudja kezdeni a szavak húzgálását
* Legyen egy külön felület ahol angol-magyar szavakat lehet a rendszerbe bevinni még
---
## 5. A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása
* A rendszernek/alkalmazásnak a következő megszorításokat kell tartalmaznia:
    * Felhasználók adatait ne tárolhassák el, illetve felhasználó ne tárolhasson adatokat.
    * Felhasználót ne lehessen azonosítani
    * Rendszer/alkalmazás legtöbb böngészőt támogassa
---
## 6. Jelenlegi üzleti folyamatok modellje
* A mai oktatási rendszer nem használja ki a 21. század technológia előnyeit és ezzel szemben erősen ragaszkodnak a könyv alapú oktatáshoz ami nem mindig előnyös és nem annyira interaktív vagy szórakoztató. Illetve a mai fiatalok ,felnőttek nem nagyon szeretnek könyvet venni a kezükbe, hogy tanuljanak. Viszont néhány oktatási intézmény szeretne ezen változtatni vagyis alternatív tanulási módszereket keresnek. Ennek a tanulásnak a formája elég költséges hiszen a könyv oldalakat ki kell nyomtatni ami kiadás és bizony egy idő után el is dobják ha úgy érzik nem kell.
---
## 7. Igényelt üzleti folyamatok modellje
* Online elérhető, ingyenes rendszer létrehozása
-- Webes megjelenés mind mobilról (hordozhatóság), mind pedig számítógépről
Átlátható design kialakítása a weboldalon
-- Dobozok alkalmazása
Elegáns design kialakítása
-- Letisztult , sima, de elegáns színű háttér
-- Egyszerű betűtípus és betűszín alkalmazása
A weboldalon lévő adatok szerkeszthetővé tétele/Könnyű szerkeszthetőség
-- A már felvett feladatok nevének szerkeszthetősége
-- A már nem kívánatos feladatok törölhetősége
---
## 8. Követelménylista
 |    Modul    |      ID     |           Név          |   V.   |                                                 Kifejtés                                                      |
| :---        |    :----:   |          :---:         | :---:  |                                                  :---:                                                        |
| Jogosultság |      K1     | Jogosultsági szintek   |  1.0   |                     Felhasználó/vendég: feladat teljesítése   |

---
## 9. Fogalomtár
1. Placeholder: egy olyan terület a képernyőn, ami kicsit másabb színű, és oda kell húzni a kártyákat.