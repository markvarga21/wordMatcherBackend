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
* Scrum master: Varga József-Márk, Bódi András, Cserés Gábor
* Product owner: Varga József-Márk, Bódi András, Cserés Gábor

### Projektmunkások és felelőségek:

* Backend munkálatok:
    * Varga József-Márk, Bódi András, Cserés Gábor
         * Feladatuk a funkciók létrehozása illetve adatok tárolása
* Frontend:
    * Varga József-Márk, Bódi András, Cserés Gábor
         * Feladatuk a weboldal megjelenítése
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
* Üzleti szereplők:
    * **Felhasználó**: legyen az diák, gyermek, felnőtt vagy akár tanár/oktató is.
    * **Admin**: akinek jogosultsága van a rendszer karbantartására és szerkesztésére
    * **Tesztelők**: lehetnek akár fejlesztők (az alpha tesztelés esetében), vagy az alkalmazás béta tesztelői, akik véletlenszerűen lettek kiválasztva a felhasználói bázisból.
* Üzleti folyamatok:
    * Szópárok hozzáadása az alkalmazás elektronikus szótárához, mindezt egy külön felületen, vagy egy alert (lásd a funkcionális specifikációban a jelentését) ablakban.
    * Visszajelzés a szópárok helyes beviteléről
    * Szó-csempék húzogatása az oldal két széléről az erre előre elkészített helyekre, vagyis a weboldal körülbelüli közepére.
    * Szópárok ellenőrzése a webalkalmazás alján található gombbal.
    * Visszajelzés a szó párosítások helyességéről egy felugró ablakban, vagy a fenti szöveges sávon.
* Üzleti entitások:
    * Maga a webalkalmazás (mivel maga az alkalmazás csekély méretű)
* Szemléltető folyamatábra:
![Folyamatábra](./resource/folyamatabra.png)
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
    * A weboldalt lehessen telefonon is használni
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
    * Fejlesztő

* Rendszerhasználati esetek és lefutásaik:
    * Felhasználó(user):
        * Képes a szavakat ide-oda huzgálni
        * Letudja ellenörizni a megoldásait
        * Előröl tudja kezdeni a feladatot
        * Tud magyar-angol szópárt kivenni
        * Tud magyar-angol szópárt hozzáadni
    * Fejlesztő:
        * A fejlesztő végre tudja hajtani azokat a dolgokat mint a felhasználó
        * A weboldal kódján tud változtatni és tesztelni

* 1 - A felhasználó párosítja a szavakat 
* 2 - A done lenyomásával kap egy ablakot/szöveget amiben szerepel az, hogy a feladat hibátlan vagy hibás
![Paired page](/doc/resource/pairedPage.png)

* Menü hierarchiák:
    * Fő oldal:
        * Feladat
![Main page](/doc/resource/mainPage.png)
---
## 6. Fizikai környezet
* Az alkalmazás web platformra készül így különféle eszközökön is lehet használni ha van rajtuk böngésző
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
* A webes alkalmazásunkban a backend illetve a frontend szerepét a JSF tölti be, ami alapvetően Java alapú, illetve *.xhtml* kiterjesztésű elemeket használ úgymond egyfajta frontendre (itt tudunk hivatkozni a Java osztályokban lévő adattagokra és metódusokra/osztályokra)
* A rendszer backendje, a JSF, MySQL adatbázist fog használni, XAMPP lokális szerver host-tal.
* Ezen kívül, használva lesz még a Spring Boot keretrendszer, illetve még a Spring Core is. Mindezeket a fejlesztés és jövőbeli bővíthetőség megkönnyítése érdekében alkalmazzunk, illetve hogy megfeleljen az ipari standardoknak.
* A webalkalmazás host-olása Tomcat-tel lesz megoldva, amit a már fentebb is említett Spring Boot fog biztosítani.
* A frontend pedig a JSF-en belül lesz lefejlesztve, formoknak nevezett XHTML oldalakkal, amit a JSF átalakít nekünk használható oldallá
* A design elemek, a PrimeFaces-nek köszönhetően lesznek megvalósítva, amik esetlegesen felül lesznek írva saját, általunk megírt CSS stíluslapokkal
* Az alkalmazásban minél sűrűbben lesznek alkalmazva a SOLID alapelvek, illetve további design és architekturális minták
  * Az MVC architekturális minta például már alapból használva lesz, mivel a JSF ezt követi
* Az alkalmazásnak több rétege is lesz, az MVC-n kívül, mint például perzisztencia réteg, üzleti logika, kliens oldal (ezekről az Implementációs tervben lesz bővebben szó)
* A rendszer a Spring-nek illetve a JSF-nek köszönhetően nagyon egyszerűen lesz bővíthető, illetve karbantartható.
* A weboldal biztonságát az biztosítja, hogy nincsenek semmilyen harmadik féltől származó sütik használva, amikkel azonosítani lehetne a felhasználót, illetve nincsenek is ilyen sütik elküldve a backendtől.
  * Továbbá, mivel nem tárol az alkalmazás semmilyen felhasználói adatot explicit módon, ezért nincsenek GDPR szabályszegések sem.
---
## 9. Adatbázis terv
* A szavak tárolására MySQL adatbázis rendszert fog használni a rendszer
* Tekintve, hogy az alkalmazás kis méretű, az adatbázis szerver lokálisan fog működni, a XAMPP eszközt használva.
* Az alkalmazás kihelyezése után, nagy eséllyel egy nagyobb szolgáltatót fog használni az alkalmazás, az adatbázis szerver host-olására.
* Az webalkalmazás egyetlen táblát fog használni, mivel mérete nem indokolja több tábla használatát.
* Az adatbázis eljárások között szerepelni fog szavak felvitele, illetve törlése az adatbázisból.
  * A fentieken kívül pedig, le lesznek kérve, illetve filterezve is lehetnek a rekordok.
* Az adatbázis modelljének diagrammja a következő képpen néz ki:
![Adatbázismodell](./resource/adatbazisModell.png)
---
## 10. Implementációs terv
* Mint azt fentebb is említve lett, az alkalmazásunk JSF-et fog használni a backend illetve a frontendhez is
  * Ebből következik, hogy az implementáció az MVC (vagyis *Model View Controller*) architekturális mintát fogja használni

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

