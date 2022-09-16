# **Funkcionális specifikáció**
## 1. A rendszer célja
* A rendszer célja, hogy a felhasználó gyakorolhassa az angol nyelvet, hiszen ez a mai világban már nélkülözhetetlen <br>
mivel ez a legjobban beszélt nyelv, és a legtöbb cég, vállalat angol. Fontos, hogy a felhasználó<br>
könnyen el tudjon igazodni a felületeken ezért minimális felhasználói<br>
felületet kap az alkalmazás. A tanár szerepkörrel rendelkező felhasználók<br>
tölthetik fel az angol és magyar szópárokat a feladatba.  A rendszer csak webes felületen lesz elérhető. <br>
Az már nem cél, hogy Androidos, vagy IOS eszközön fusson, mert arra külön rendszert kell, hogy fejlesszünk.<br>
 A megoldásra a felhasználó pontszámot kap.
---
## 2. Projektterv
### Projektszerepkörök, felelősségek:
* Scrum master: Varga József-Márk
* Product owner: Varga József-Márk

### Projektmunkások és felelőségek:

* Backend munkálatok:
    * Varga József-Márk, Bódi András, Cserés Gábor Feladatuk a funkciók létrehozása illetve adatok tárolása

* Frontend:
    * Varga József-Márk, Bódi András, Cserés Gábor Feladatuk a weboldal megjelenítése

### Ütemterv:

|          Funkció        |Feladat|Prioritás|Becslés|Aktuális becslés|Eltelt idő|Hátralévő idő|
|          :----:         |:----: |  :----: | :----:|     :----:     |  :----:  |    :----:   |
|Követelmény specifikáció |       |0	    |7      |7               |7		|       0     |
|Funkcionális specifikáció| 	  |0	    |7	    |7		     |7		|	0     |
|       Rendszerterv      | 	  |0        |7      |7		     |7		|	0     |
|         Frontend        | 	  |2   	    |7      |7	       	     |0		|	7     |
|         Backend         | 	  |2	    |7      |7		     |0		|	7     |
---
## 3. Üzleti folyamatok modellje

---
## 4. Követelmények
* Funkcionális követelmények:
    * Felhasználó tudja a szavakat mozgatni, hogy az angol szót a magyar megfelelőjével tudja párosítani
    * Felhasználó csak a kijelölt helyre tudja mozgatni a szavakat
    * Egy gomb segítségével tudja ellenőrizni a felhasználó, a megoldásait
    * Ellenőrző gomb lenyomásával pedig az oldal meg mondja, hogy a megoldás hibátlan vagy hibás
    * Egy másik gombbal pedig előröl tudja kezdeni a szavak húzgálását
    * Legyen egy külön felület ahol angol-magyar szavakat lehet a rendszerbe bevinni még
    * Lehessen szavakat kivenni
    * A weboldal a legtöbb böngészőt támogassa
    * A weboldalt lehessen telefonon is használni, illetve különböző képernyőkhöz tudjon igazodni
    * Egyszerűen legyen kezelhető az oldal	

* Nem funkcionális követelmények:
    * Felhasználók adatait ne tárolhassák el, illetve felhasználó ne tárolhasson adatokat
    * Felhasználót ne lehessen azonosítani

* Törvényi előírások, szabványok:
    * GDPR-nek való megfelelés.
---
## 5. Funkcionális terv
* A webalkalmazásunknak az a célja, hogy az embereket segítsük az angol szavak tanulásában. 
* Rendszerszerepkörök:
    * Felhasználó(user)

* Rendszerhasználati esetek és lefutásaik:
    * Felhasználó(user):
        * Képes a szavakat ide-oda huzgálni
        * Letudja ellenörizni a megoldásait
        * Előröl tudja kezdeni a feladatot
        * Tud magyar-angol szópárt kivenni
        * Tud magyar-angol szópárt hozzáadni
 
* 1 - A felhasználó párosítja a szavakat 
* 2 - A done lenyomásával kap egy ablakot amiben szerepel az hogy a a feladat hibátlan vagy hibás
![Paired page](/doc/resource/pairedPage.png)

* Menü hierarchiák:
    * Fő oldal:
        * Feladat
![Main page](/doc/resource/mainPage.png)
---
## 6. Fizikai környezet
* Az alkalmazás web platforma készül így különféle eszközökön is lehet használni ha van rajtuk böngésző
* Operációs rendszer független
* Nincsenek megvásárolt komponenseink
* Van tűzfal a hálózaton és minden portot is engedélyez

* Fejlesztési környezet:
    * Intellij Idea
    * Git
---
## 7. Absztrakt domain modell
* JSF-et fogunk használni, mert az egyszerűbb, mint  a HTML, CSS, Javasript.


---
## 8. Architekturális terv

---
## 9. Adatbázis terv

---
## 10. Implementációs terv

---
## 11. Tesztterv
* Egy alkalmazás készítésekor nagyon fontos szerepet töltenek be a teszttervek.<br>
A teszttervek segítségével tudunk különféle funkciók helyes működéséről meggyőződni,<br>
 és a különféle üzleti szolgáltatások hitelesítéséről is.<br>
A szoftver kiadása előtt 2 tesztet kell végrehajtani, melyek az alpha illetve beta tesztek.

* Alpha teszt
    * Fejlesztő csapat fogja elvégezni.
    * Ezen teszt során azt vizsgáljuk, hogy az alkalmazás hogyan reagál különboző böngészői környezetekben,<br>
     és az adott funkciók működőképesek-e.
    * Ha azt látjuk, hogy az előző feltételek megfelelnek, akkor sikeres volt az alpha teszt, és jöhet majd a beta teszt.

* Beta teszt
    * A beta tesztet a fejlesztő csapattól független, kívülálló személyek fogják elvégezni.
    * Ennek a tesztnek az a célja, hogy a felhasználóktól visszajelzést kapjanak a <br>
    fejlesztők az alkalmazás működésével kapcsolatban.

* Amennyiben hibás működésbe ütköznek a felhasználók, akkor egy tesztelési naplóban <br>
felvezetik a tapasztalataikat, és azt visszaküldik a fejlesztőknek, a fejlesztők pedig megoldják a hibát.

* Tesztelésre használt eszközök
Böngészők: Google Chrome , Mozilla Firefox, Microsoft Edge <br>
Operációs rendszer: Windows 10 

---
## 12. Telepítési terv

---
## 13. Karbantartási terv
* Az alkalmazás folyamatos üzemeltetése és karbantartása, mely <br>
magában foglalja a programhibák kijavítását, a belső igények változása miatti <br>
módosításokat, valamint a környezeti feltételek változása miatt <br>
megfogalmazott program-, és állomány módosítási igényeket is. <br>
A szoftveren havonta szeretnénk karbantartásokat végezni, ezen felül bármilyen <br>
felhasználói hibajelentés után azonnali helyreállítás jön. A szoftveren évente nagyobb<br>
 frissítések, módosítások fordulhatnak elő. <br>
Idő elteltével új kategóriákat kell hozzáadni az apphoz, hogy fent tartsuk az <br>
érdeklődési szintet.

