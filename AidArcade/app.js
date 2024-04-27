function changeLanguage() {
    var langSelect = document.getElementById("language-select");
    var selectedLang = langSelect.value;

    if (selectedLang === "uk") {
        
        document.title = "AidArcade";
        document.getElementById("nav-link").innerHTML = "<b>Про нас</b>";
        document.getElementById("nav-link2").innerHTML = "<b>Підтримка</b>";
        document.getElementById("nav-link3").innerHTML = "<b>Зв'яжіться з нами</b>";
        document.getElementById("person-text").innerHTML = "<b>Профіль</b>"; 
        document.getElementById("sign-up").value = "Зареєструватись";
        document.getElementById("log-in").value =  "Увійти";

        document.getElementsByClassName("first-btn1")[0].value = "Отримати допомогу";
        document.getElementsByClassName("first-btn2")[0].value = "Допомогти іншим";
        
        document.getElementById("about-title").innerHTML = "Про нас";

        document.getElementById("about-name1").innerHTML = "Владислав Довбняк";
        document.getElementById("about-name2").innerHTML = "Роман Сікорський";
        document.getElementById("about-name3").innerHTML = "Юрій Бойко";
        document.getElementById("about-name4").innerHTML = "Дмитро Мартинюк";
        document.getElementById("about-name5").innerHTML = "Богдан Маньковський";

        document.getElementById("about-mission").innerHTML = "Наша місія:";
        document.getElementById("about-text").innerHTML = `
            Ми - команда розробників Go&Done, і ми працюємо над сайтом, який дозволяє людям отримувати термінову допомогу. <br>
            Допомога надається у формі безкоштовної їжі, ліків, одягу, житла або навіть психологічної підтримки. <br>
            Наш сайт може бути використаний людьми, які не можуть отримати матеріальну та нематеріальну допомогу за гроші. <br>
            Усі послуги на нашому сайті безкоштовні та доступні для кожного, хто цього потребує. <br>
            Причиною створення проекту є ситуація в нашій країні. Україна страждає від агресії Російської Федерації  <br>
            протягом трьох років.Багато наших громадян змушені залишити свої домівки і жити на відстані сотень кілометрів  <br>
            від своїх рідних міст. Саме тому ми запустили проект AidArcade, щоб полегшити життя людей, які пережили вторгнення. <br>
            Вони бачили кроваві бої, обстріли, деякі з них втратили свої домівки, деякі втратили родичів. <br>
            Наш проект допоможе нашій країні об'єднатися. Нам це дійсно потрібно зараз, оскільки ми є одна країна <br>
            і ми повинні допомагати один одному в цей важкий час. <br>
            Перемога перед нами, Слава Україні!
        `;
        document.getElementById("footer").innerHTML = "Підтримка";
        document.getElementsByClassName("footer-content-title")[0].innerHTML = "Наші соцмережі:";
        document.getElementsByClassName("subscribe-input")[0].setAttribute("placeholder", "напишіть ваш запит тут...");
        document.getElementById("subscribe-btn").value = "Надіслати запит";
        document.getElementsByClassName("footer-href")[0].innerHTML = "<a class='footer-href'href='#about'>Go&Done</a>";
        document.getElementsByClassName("copyright")[0].innerHTML = `&copy; 2024 AidArcade Безкоштовна волонтерська служба від <span><a class="footer-href"href="#about">Go&Done</a></span>`;
        document.getElementById('popup-title').innerHTML = "Ласкаво просимо до AidArcade";
        document.getElementById('reg-title').innerHTML = "Регістрація";
        document.getElementById('seeker').innerHTML = "Шукач";
        document.getElementById('helper').innerHTML = "Волонтер";
        document.getElementById("reg-phone").setAttribute("placeholder", "Введіть номер...");
        document.getElementById("reg-mail").setAttribute("placeholder", "Введіть логін...");
        document.getElementById("reg-pass").setAttribute("placeholder", "Введіть пароль...");
        document.getElementById("reg-sign").value = "Зареєструватись";
        document.getElementById("reg-log").value =  "Увійти як шукач";
        document.getElementById("popup-btn").value =  "Закрити вкладку";
        document.getElementById("popup-footer-title").innerHTML = "Ми допоможемо вам!";
        document.getElementsByClassName("footer-copyright")[0].innerHTML = `&copy; 2024 AidArcade Безкоштовна  служба від <span><a class="footer-href"href="#about">Go&Done</a></span>`;     
    } else {
        document.title = "AidArcade";
        document.getElementById("nav-link").innerHTML = "<b>About Us</b>";
        document.getElementById("nav-link2").innerHTML = "<b>Support</b>";
        document.getElementById("nav-link3").innerHTML = "<b>Contact Us</b>";
        document.getElementById("person-text").innerHTML = "<b>Account</b>";
        document.getElementById("sign-up").value = "Sign up";
        document.getElementById("log-in").value = "Log in";

        document.getElementsByClassName("first-btn1")[0].value = "Get Aid";
        document.getElementsByClassName("first-btn2")[0].value = "Help Others";

        document.getElementById("about-title").innerHTML = "About Us";
        document.getElementById("about-name1").innerHTML = "Vladyslav Dovbniak";
        document.getElementById("about-name2").innerHTML = "Roman Sikorskyi";
        document.getElementById("about-name3").innerHTML = "Yurii Boiko";
        document.getElementById("about-name4").innerHTML = "Dmytro Martyniuk";
        document.getElementById("about-name5").innerHTML = "Bogdan Mankovskyi";
        document.getElementById("about-mission").innerHTML = "Our mission:";
        document.getElementById("about-text").innerHTML = `
            We are the <b> Go&Done </b> development team, and we are working on a website that allows people to get urgent help. <br>
            The help is presented in the form of free food, medicine, clothing, housing, or even psychological support. <br>
            Our site can be used by people who are unable to receive material and non-material assistance for a fee, all <br>
            services on our site are free and can be accessed by anyone who needs it.The reason for creating the project <br>
            is the situation in our country. Ukraine has been suffering from the aggression of the Russian Federation for <br>
            three years. Many of our citizens are forced to leave their homes and live hundreds of kilometers away from their <br>
            hometowns.That's why we launched the <b> AidArcade </b> project to make life easier for people who survived the invasion. They <br>
            saw bloody battles, shelling, some of them lost their homes, some lost relatives. Our project will help our country unite. <br>
            We really need it now because we are one country and we need to help each other in this difficult time. <br>
            <b> Victory is ahead, Glory to Ukraine! </b>
        `;
        document.getElementById("footer").innerHTML = "Support";
        document.getElementsByClassName("footer-content-title")[0].innerHTML = "Our socials:";
        document.getElementsByClassName("subscribe-input")[0].setAttribute("placeholder", "write your request here...");
        document.getElementById("subscribe-btn").value = "Send request";
        document.getElementsByClassName("footer-href")[0].innerHTML = "<a class='footer-href'href='#about'>Go&Done</a>";
        document.getElementsByClassName("copyright")[0].innerHTML = `&copy; 2024 AidArcade Free Volunteer service by <span><a class="footer-href"href="#about">Go&Done</a></span>`;
        document.getElementById('popup-title').innerHTML = "Welcome to the AidArcade";
        document.getElementById('reg-title').innerHTML = "Registration";
        document.getElementById('seeker').innerHTML = "Seeker";
        document.getElementById('helper').innerHTML = "Helper";
        document.getElementById("reg-phone").setAttribute("placeholder", "Enter phone number...");
        document.getElementById("reg-mail").setAttribute("placeholder", "Enter login...");
        document.getElementById("reg-pass").setAttribute("placeholder", "Enter password...");
        document.getElementById("reg-sign").value =  "Sign up";
        document.getElementById("reg-log").value =  "Log in as seeker";
        document.getElementById("popup-btn").value =  "Close attachment";
        document.getElementById("popup-footer-title").innerHTML = "We help you!";
        document.getElementsByClassName("footer-copyright")[0].innerHTML = `&copy; 2024 AidArcade Free Volunteer service by <span><a class="footer-href"href="#about">Go&Done</a></span>`;
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var langSelect = document.getElementById("language-select");
    var links = document.querySelectorAll(".nav-link");

    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            var href = this.getAttribute("href"); 
            window.location.href = href; 
        });
    });
});

function togglePopup() {
    var popup = document.getElementById('popup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
        document.addEventListener('click', closePopupOutside);
    }
}


    document.addEventListener('DOMContentLoaded', function() {
   
    document.getElementById('sign-up').addEventListener('click', function(event) {
        togglePopup();
    });

    document.getElementById('log-in').addEventListener('click', function(event) {
        togglePopup();
    });

    document.getElementById('first-btn1').addEventListener('click', function(event) {
        togglePopup();
    });
    document.getElementById('first-btn2').addEventListener('click', function(event) {
        togglePopup();
    });
    
});


function closePopupOutside(event) {
    var popup = document.getElementById('popup');

    if (!popup.contains(event.target) && event.target.id !== 'sign-up' && event.target.id !== 'log-in' && event.target.id !== 'first-btn' && event.target.id != 'subscribe-btn') {
        popup.style.display = 'none';
        document.removeEventListener('click', closePopupOutside);
    }
}
function changeProfile() {
    var profileSelect = document.getElementById("profile-select");
    var selectedProfile = profileSelect.value;
    var selectedLang = document.getElementById("language-select").value;

    if (selectedLang === 'uk') {
        if (selectedProfile === "seek") {
            document.getElementById('reg-log').value = "Увійти як шукач";
        } else {
            document.getElementById('reg-log').value = "Увійти як волонтер";
        }
    } else {
        if (selectedProfile === "seek") {
            document.getElementById('reg-log').value = "Log in as seeker";
        } else {
            document.getElementById('reg-log').value = "Log in as helper";
        }
    }
}

window.addEventListener('DOMContentLoaded', function() {
    var bodyElement = document.body;

    if (bodyElement.offsetWidth === 990) {
        var lineElements = document.querySelectorAll('.line');
        lineElements.forEach(function(element) {
            element.parentNode.removeChild(element);
        });

        var personElement = document.getElementById('person');
        if (personElement) {
            personElement.parentNode.removeChild(personElement);
        }
    }
});

window.addEventListener('DOMContentLoaded', function() {
    var bodyElement = document.body;

    if (bodyElement.offsetWidth === 770) {
        var lineElements = document.querySelectorAll('.line');
        lineElements.forEach(function(element) {
            element.parentNode.removeChild(element);
        });

        var personElement = document.getElementById('person');
        if (personElement) {
            personElement.parentNode.removeChild(personElement);
        }
    }
});





