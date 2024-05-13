let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("ceai-slideshow");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 } 
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    switch (slideIndex) {
        case 1: //musetel
            document.getElementById("detalii-planta").innerHTML = "Mușețelul este cunoscut pentru conținutul său ridicat de flavonoide și uleiuri volatile, care au proprietăți antiinflamatorii, antispastice și sedative.<br> Mușețelul este adesea folosit pentru a calma stomacul și tractul digestiv, ameliorând simptomele indigestiei, colicilor și inflamației intestinale. De asemenea, are efecte relaxante asupra sistemului nervos, ajutând la reducerea anxietății și a insomniei.";
            break;
        case 2: //sunatoare 
            document.getElementById("detalii-planta").innerHTML = "Principalul ingredient activ al sunătoarei este hipericina, care are proprietăți antidepresive,antiinflamatorii și antibacteriene.<br>Sunătoarea este utilizată pentru a trata depresia ușoară și anxietatea, fiind eficientă în echilibrarea  dispoziției și a stării de spirit. De asemenea, poate ajuta la reducerea inflamațiilor, a durerilor musculare și a simptomelor asociate gripei și răcelii.";
            break;

        case 3: //coada soricelului
            document.getElementById("detalii-planta").innerHTML = "Coada-șoricelului (Achillea millefolium) conține uleiuri esențiale, flavonoide, taninuri și substanțe amare, care îi conferă proprietăți antiseptice și antiinflamatorii. eaiul de coada-șoricelului este considerat a fi un remediu natural excelent pentru întărirea sistemului digestiv și a sistemului urinar.<br>Acest ceai este adesea folosit pentru a trata o varietate de afecțiuni digestive, datorită efectului său calmant și astringent. Poate ajuta la reducerea inflamației mucoaselor digestive, ameliorând astfel indigestia, flatulența și disconfortul abdominal. De asemenea, coada-șoricelului are proprietăți diuretice și poate ajuta la menținerea sănătății tractului urinar, fiind folosit uneori în tratamentul infecțiilor urinare și al pietrelor la rinichi.";
            break;

        case 4: //ghimbir

            document.getElementById("detalii-planta").innerHTML = "Ghimbirul conține gingerol și alte compuși active care îi conferă proprietăți antiinflamatorii, antioxidante și antimicrobiene. Ceaiul de ghimbir este adesea folosit și ca remediu natural pentru răceală și gripă, deoarece are proprietăți expectorante și decongestionante, ajutând la desfundarea căilor respiratorii și la ameliorarea tusei și a congestiei nazale.<br>Ceaiul de ghimbir este recunoscut pentru capacitatea sa de a stimula sistemul imunitar și de a ajuta la combaterea infecțiilor. De asemenea, este eficient în tratarea problemelor digestive, precum indigestia, balonarea și greața. Consumul regulat de ceai de ghimbir poate ajuta, de asemenea, la reducerea inflamațiilor asociate artritei și altor afecțiuni inflamatorii. De asemenea, poate contribui la îmbunătățirea circulației sanguine și la reducerea riscului de formare a cheagurilor de sânge.";
            break;

        case 5: //menta

            document.getElementById("detalii-planta").innerHTML = "Mentolul din frunzele de mentă are proprietăți antispastice, antiinflamatorii și analgezice.<br> Ceaiul de mentă este benefic pentru sănătatea sistemului digestiv, ajutând la ameliorarea indigestiei, a balonării și a durerilor abdominale. De asemenea, poate calma gâtul iritat și poate reduce simptomele răcelii și gripei.";
            break;

        case 6: //tei

            document.getElementById("detalii-planta").innerHTML = "Florile de tei conțin compuși aromatici și flavonoide, care au efecte sedative și antiinflamatorii.<br>Ceaiul de tei este utilizat pentru a induce relaxarea și a ameliora stresul și anxietatea. De asemenea, poate fi benefic în tratarea insomniei și a problemelor respiratorii, cum ar fi tusea și congestia nazală.";
            break;

        case 7: //salvie

            document.getElementById("detalii-planta").innerHTML = "Salvianolii și acidul rosmarinic din salvie au proprietăți antibacteriene, antiinflamatorii și antioxidante.<br>Ceaiul de salvie este folosit pentru a trata inflamațiile gâtului și gurii, gingivita și aftele. De asemenea, poate ajuta la reducerea transpirației excesive și la calmarea durerilor menstruale.";
            break;
    }
} 