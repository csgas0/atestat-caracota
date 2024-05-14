






KUNG-FU CHA

LUCRARE PENTRU ATESTAREA
COMPETENŢELOR PROFESIONALE






Elev: CARACOTA CRISTO
Clasa: a XII-a E
Profesor coordonator: ALINA MILEA






CONSTANŢA
2023 – 2024
 
CUPRINS
I.	MOTIVAŢIA ALEGERII TEMEI	3
II.	STRUCTURA APLICAŢIEI	4
III.	DETALII TEHNICE DE IMPLEMENTARE	6
IV.	RESURSE HARD ŞI SOFT NECESARE	9
V.	MODALITĂŢI DE UTILIZARE	9
VI.	POSIBILITĂŢI DE DEZVOLTARE	10
VII.	BIBLIOGRAFIE	11
 
I.	MOTIVAŢIA ALEGERII TEMEI

Titlul lucrării mele pentru atestarea competenţelor profesionale este „Kung-fu cha”, ales deoarece proiectul este menit să dea lectorului o privire de ansamblu asupra tot ce inseamna ceaiul din planta de ceai, Camellia Sinensis, cât și o paralelă la folosirea ceaiului în cultura noastră.
Am ales să abordez acest subiect din dorința de a explora intersecția dintre ceai și cultură, de a pune în lumină aspecte practice și spirituale și de a îmi dezvolta abilitățile și competențele în cadrul designului web prin folosirea limbajelor HTML, CSS și Javascript.

 
II.	STRUCTURA APLICAŢIEI

Proiectul este realizat cu ajutorul limbajelor HTML și CSS. Este compus din 5 pagini HTML astfel:
-	Prima pagină numită index.html, oferă informații generale despre ceai: 
 
-	A doua pagină, categorii.html (numită în „Clasificare” în meniul de navigație) prezintă informații despre categoriile și clasificarea ceaiului, concentrându-se pe cel chinezesc tradițional, împreună cu o galerie interactivă de imagini sugestive: 

-	A treia pagină,  Istorie.html, conține o scurtă istorie despre ceaiul tradițional chinezesc, alături de o hartă a provinciilor Republicii Populare Chineze și un clip video sugestiv.

-	A patra pagină, practica.html, (numită „Preparare” în meniul de navigație) rezumă procesul de „gong-fu cha”, dând detalii despre modul de preparare a ceaiului și amănunte despre echipamentul necesar, alături de imagini sugestive și un clip video explicativ.

-	A cincea pagină, romania.html (numită „În România” în meniul de navigație) oferă o imagine de ansamblu despre ce plante sunt folosite în România pentru ceai, împreună cu efectele lor. 
â 

Structura proiectului: 

 
III.	DETALII TEHNICE DE IMPLEMENTARE

Deoarece proiectul este realizat in limbajele HTML5, CSS și JAVASCRIPT, am dorit să iau în considerare principiile moderne pentru design web astfel:
-	Prima pagină HTML se numeste „index.html” iar celelalte pagini HTML sunt numite descriptiv (categorii.html, istorie.html, practică.html etc.) în funcție de informațiile găzduite, conectate printre ele prin hyperlink-uri.
-	Imaginile sunt stocate intr-un folder numit „media”, grupate pe foldere în funcție de unde sunt utilizate, fisierele CSS sunt într-un folder numit “css”, iar cele de tip Javascript în folderul numit „js”, folosite pentru codul din spatele galeriei media interactive de pe paginile categorii.html și românia.html
-	Am evitat utilizarea secventelor de cod care sunt „învechite” (deprecated) precum  <font>.
Structura paginii index.html si a styles.css:
<!DOCTYPE html>
<html>

<head>
  <title>CARACOTA CRISTO</title>
  <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>

<body>
  <div id="antet">
    <h1>Kung-fu Cha</h1>
    <br>
  </div>
  <div id="meniu">
    <a href="index.html">Acasa</a>
    <a href="categorii.html">Clasificare</a>
    <a href="Istorie.html">Istorie</a>
    <a href="practica.html">Preparare</a>
    <a href="romania.html">În România</a>
  </div>
  <div id="continut">
    <table>
      <tr>
        <td style="padding: 15px;">
          <p style="font-size: 25px;">Despre ceai</p>
          Ceaiul „adevărat” provine dintr-o singură plantă: un arbust noduros și cu aspect zgrunțuros, cu numele
          științific de „<i>Camellia sinensis</i>”, indiferent dacă un ceai este negru sau verde și diferă doar
          procedeele de
          prelucrare.<br>
          Ceaiurile din plante, făcute din ierburi precum menta și mușețelul, nu sunt, strict
          vorbind, ceai. Ele au un nume propriu - tizane - care provine din cuvântul grecesc „ptisánē” (orz măcinat,
          pisat), însă sunt folosite la fel ca infuziile plantei de ceai: pentru recreere și medicină homeopată.<br>
          Deoarece frunzele plantei <i>Camellia Sinensis</i> sunt amare și voluminoase, acestea trec printr-o
          multitudine de
          procese menite sa conserve, sa cultive și să amplifice gustul ceaiului. În general, ceaiurile sunt împărțite
          în categorii în funcție de modul acesta de prelucrare. Fiecare categorie este asemanatoare celor de vin sau de
          brânză, astfel că prezinta gust, miros și culoare diferită și specifică.
          <br>Cele 6 categorii principale de ceaiuri sunt verde, negru, alb, galben, oolong și fermentat.<br>
          <br>
          <p style="font-size: 25px;">Ceaiul în România</p>
          Deși ceaiul din <i>Camellia Sinensis</i> nu este la mare căutare, tizanele folosite în scop medicinal
          pretutindeni în
          țara noastră.
          Ceaiul din tei este cel mai popular exemplu, atât în spațiul urban cât și rural. În același timp, ceaiuri
          precum cel de sunătoare,
          menta, mușețel etc. sunt foarte populare. <br>
          Totuși, în scop recreativ, cafeaua rămâne cea mai populară băutură din țara noastră, pe lângă apa. Cafenelele
          sunt înrădăcinate în cultura urbană, iar ceaiul
          servește mai mult ca un înlocuitor atunci când este prea târziu pentru o a doua cafea.
        <td colspan="2" style> <img src="media/index/planta-ceai.jpg" width=500, height=550>
          <div id="credite">Din ierbarul „Köhler's Medizinal-Pflanzen”, de Franz Eugen Köhler</div>
      </tr>
    </table>
  </div>

  <div id=subsol>
    Copyright by CARACOTA CRISTO - clasa a XII-a E - Colegiul Naţional Pedagogic „Constantin Brătescu" Constanţa - 2024
  </div>
</body>

</html>
	body{
    background-image: url(../media/background.jpg);
    background-color:chartreuse;
    min-height: 950px;
    font-family: sans-serif;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}
#antet {
    font-family: sans-serif;
    background-color:#393737;
    color:white;
    text-align:center;
    padding:15px;
    width:90%;
    height:50%;
    float:center;
    font-size:12px;
    margin-right: auto; 
    margin-left: auto;
    margin-top: auto;
    margin-bottom:auto;
}
#meniu {
    overflow: hidden;
    background-color: #333333;
    padding:15px;
    width:90%;
    height:50%;
    margin-right: auto; 
    margin-left: auto;
    text-align: center;
  }
#meniu a {
    float:inline-block;
    color: #f2f2f2;
    text-align: center;
    padding: 10px;
    text-decoration: none;
}
#meniu a:hover{
    transition:1s;
    background-color: #44444477;
    border: 2px solid #444444;
}
#continut{
    color:white;
    background-color:#393737aa;
    padding:15px;
    width:90%;
    height:auto;
    float:center;
    margin-right: auto; 
    margin-left: auto;
    text-align: justify;
}
#tabel-img{
    text-align:center;
    padding-left:15px;
    padding-bottom: 15px;
    padding-right: 15px;
}
#img-ceai{
    text-align:center;
}
#lista{
    list-style-type: square;
}
#credite{
    font-size: x-small;
    text-align:left;
    opacity:50%;
}

td.istorie{
    vertical-align: top;
}
#youtube-video{
    text-align: center;
}
#subsol {
    color:white;
    clear:both;
    background-color: #333333;
    padding:15px;
    width:90%;
    height:50%;
    margin-right: auto; 
    margin-left: auto;
    text-align:center;
    font-family:sans-serif;
    font-size:14px;
}
#detalii-planta{
    color:white;
    padding:15px;
    width:90%;
    height:auto;
    float:center;
    margin-right: auto; 
    margin-left: auto;
    text-align: justify;
}



IV.	RESURSE HARD ŞI SOFT NECESARE

Resurse hardware:
	Procesor: 2.4 GHz
	Memorie RAM: min. 512 MB
	Capacitate HDD: min. 2 GB

Resurse software:
	Sistem de operare: Windows XP / Windows Vista / Windows 7 / MacOS
	Aplicaţii: 
	Browser web capabil să execute cod HTML5, CSS3, JS (ex. Microsoft Edge, Google Chrome, Safari, Brave, Mozilla Firefox, Opera etc.)
V.	MODALITĂŢI DE UTILIZARE
Site-ul este ușor și intuitiv de navigat folosind meniul prezent pe fiecare pagina, acestea fiind detaliate anterior:
 
 

VI.	POSIBILITĂŢI DE DEZVOLTARE

Intrucât site-ul este compus din mai multe fisiere HTML, acesta poate fi extins sau modificat cu ușurință. Poate fi îmbunătățit prin adăugarea mai multor informații despre negoțul cu ceai, istoria ceaiului in Asia, în special zona slavofonă, Africa etc, informatii despre alte tipuri de ceai (precum ceaiul din rooibos) sau echipamentele folosite (de ex. ceainice din lut, din sticla, cești cu profiluri diferite și altele) și cum înfluențează acestea gustul, mirosul si culoarea infuziei; clipuri video, extinderea galeriilor foto etc
 
VII.	BIBLIOGRAFIE

	Ierbarul „Köhler's Medizinal-Pflanzen”, de Franz Eugen Köhler et al., (1887)
	Youtube.com pentru clipuri video.
	Meileaf.com (pentru galeria foto din categorii.html)
	Budleaf.com (poze ceai)
	Teaware.house pentru pozele cu echipament pentru ceai.
	Pentru galeria foto din romania.html:
-	Eubio.ro
-	Esanatos.com
-	ferma-gradina.ro
-	nasulrosu.ro
-	linella.md
-	pepinieramontegarden.ro
-	garmudo.de
	Wikimedia.org, (poza provincii.png, original intitulată “PRC Province Population2”, modificată prin ștergerea legendei), https://creativecommons.org/licenses/by-sa/3.0/legalcode

