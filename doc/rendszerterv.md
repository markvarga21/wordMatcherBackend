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
* Szemléltető folyamatábra:<br>
![Folyamatábra](./resources/folyamatabra.png)
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
![Paired page](./resources/pairedPage.png)

* Menü hierarchiák:
    * Fő oldal:
        * Feladat
![Main page](/doc/resources/mainPage.png)
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
* A webes alkalmazásunkban nem lesz használva külön backend, hiszen az adatok manipulálására JavaScript-et fogunk használni.
  * Továbbá, az alkalmazás kicsi mérete nem indokolja külön backend megírását
* A weboldal tehát alapvetően HTML-et fog használni az elemek összefűzésére, CSS-t az elemek stilizálására, végezetül pedig JavaScript-ek az előbbiekben is említett elemek illetve az adatok manipulálására (ez tölti be úgymond a backend szerepét)
  * Ennek a hármasnak köszönhetően, ha minimálisan is, szét fogjuk tudni választani az alkalmazás modelljét, annak nézetétől és úgymondd a kontrollerétől (MVC architekturális minta)
---
## 9. Adatbázis terv
* A szavak tárolására MySQL adatbázis rendszert fog használni a rendszer
* Tekintve, hogy az alkalmazás kis méretű, az adatbázis szerver lokálisan fog működni, a XAMPP eszközt használva.
* Az alkalmazás kihelyezése után, nagy eséllyel egy nagyobb szolgáltatót fog használni az alkalmazás, az adatbázis szerver host-olására.
* Az webalkalmazás egyetlen táblát fog használni, mivel mérete nem indokolja több tábla használatát.
* Az adatbázis eljárások között szerepelni fog szavak felvitele, illetve törlése az adatbázisból.
  * A fentieken kívül pedig, le lesznek kérve, illetve filterezve is lehetnek a rekordok.
* Az adatbázis modelljének diagrammja a következő képpen néz ki:<br>
![Adatbázismodell](./resources/adatbazisModell.png)
---
## 10. Implementációs terv
* Mint azt fentebb is említve lett, az alkalmazásunk JSF-et fog használni a backend illetve a frontendhez is
  * Ebből következik, hogy az implementáció az MVC (vagyis *Model View Controller*) architekturális mintát fogja használni
* Ezen kívül pedig, a függőségek kezelésére a Spring Boot-ot keretrendszert fogjuk használni ami nem csak a DI-ra (*Dependency Injection*), de IoC-re (*Inversion of Control*) is rendkívül alkalmas.
  * Előbbi lehetővé teszi az web alkalmazás későbbi skálázását, bővítését
* Alkalmazásunk továbbá 3 különböző réteget fog tartalmazni:
  * Perzisztenciai réteg (Repository): Itt lesz egy interfész, ami segíteni fog kommunikálni az adatbázissal a Spring Data JPA-nak köszönhetően
  * Üzleti logika réteg (Service): Itt lesznek ellenőrizve pl. a szavak, illetve egyéb bemenetek
    * Ehhez fog kapcsolódni még a hibakezelő réteg, ami az alkalmazás működése közben előjövő problémák/hibák kezelésére hivatott
  * Kliens réteg: Ezt a szerepet az XHTML oldalak fogják betölteni, amit a JSF segítségével használunk majd
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
* Adatbázis telepítése:
  * Fejlesztés alatt:
    * A XAMPP alkalmazást kell feltelepíteni, illetve ott felkonfigurálni a MySQL adatbázist.
  * Deploy után:
    * Nincs szükség semmilyen telepítésre, hiszen várhatóan az adatbázis szerver egy felhőszolgáltatást használva fut (például Microsoft Azure, vagy AWS).
* Szerver telepítése:
  * Nincsen szükség külön szerver telepítésére és konfigurálására, hiszen mindezt megoldjak a Spring Boot, egy beépített Tomcat szerverrel, ami minden alkalmazás indulásnál elindul automatikusan.
* Alkalmazás telepítése:
  * Fejlesztés alatt:
    * Nincs szükség telepítésre, hiszen a fejlesztő környezetből (IntelliJ IDEA) elindul minden szükséges eszköz és szolgáltatás.
  * Deploy után:
    * Az alkalmazást be kell csomagolni egy JAR állományba az adott projektkezelő keretrendszert használna (Maven vagy Gradle), amiből egy Docker image-t kell készíteni.
    * Ezután a fentebb is említett image-t ki kell telepíteni és konfigurálni egy felhőszolgáltatásba mint például Microsoft Azure vagy AWS.
    * Innentől az alkalmazásunk elérhető lesz bárhonnan a webről, csupán egy böngésző kell, hogy telepítve legyen. 
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

