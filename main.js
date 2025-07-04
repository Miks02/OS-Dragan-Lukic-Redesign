

const html = document.querySelector('html');
const body = document.querySelector('body');



//Fetch API za ucitavanje Header i Footer elemenata na svakoj stranici bez ponavljanja koda

function loadHTML(selector, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;


            const sidebar = document.querySelector(".mobile-navbar");

            function showSidebar() {
                sidebar.style.right = '0';
            }

            function hideSidebar() {
                sidebar.style.right = '-100%';
            }

          
            document.getElementById('menu-icon').addEventListener('click', showSidebar);
            document.getElementById('navbar-close').addEventListener('click', hideSidebar);

            const header = document.querySelector('.header');
            const navbarElements = document.querySelectorAll('.header .navbar li a');

            
const heroObserver = new IntersectionObserver((entries => {
    
    if(entries.length === 0) {
        header.classList.add('header-default')
        
    }
    else {
        entries.forEach(entry => {
            if(!entry.isIntersecting)
            {
                header.classList.add('header-default')    
                header.classList.add('colored-navbar')
                
            }
            else
            {
                console.log(entry);
                header.classList.remove('header-default');
                header.classList.remove('colored-navbar');
                
            }
        })
    }
    
}), {threshold: 0.1})

const heroSections = document.querySelectorAll('.hero-section');

if(heroSections.length == 0)
{
    header.classList.add('header-default');   
    header.classList.add('colored-navbar')

}
else
    heroSections.forEach(heroSection => heroObserver.observe(heroSection))  

        })
        .catch(error => console.error('Greška pri učitavanju:', error));
}



loadHTML('.header-container', '/header.html');
loadHTML('.footer-container', '/footer.html');



//Scroll animations

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            console.log(`Element: ${entry.target}, Is intersecting: ${entry.isIntersecting}, Intersection Ratio: ${entry.intersectionRatio}`);
            
            
        } 
       
    })
    
}, {root: null, threshold: 0.27, rootMargin: "0px"}
);

const hiddenElements = document.querySelectorAll('.hidden');

if(hiddenElements.length > 0)
    hiddenElements.forEach(el => elementObserver.observe(el));

// Funkcije za meni sa karticama na pocetnoj strani koje preusmeravaju korisnika na izabranu stranicu;

const blogBtn = document.getElementById("blogBtn");
const upisBtn = document.getElementById("upisBtn");
const ucenjeBtn = document.getElementById("ucenjeBtn");
const stampaBtn = document.getElementById("stampaBtn");

blogBtn.addEventListener('click', () => {
    window.location.href = "/Dynamic/blog-index.php";
    
})

upisBtn.addEventListener("click", () => {
    window.location.href = "/navbar/Родитељи/Упис првака.html";
})

ucenjeBtn.addEventListener("click", () => {
    window.location.href = "index.php";
})

stampaBtn.addEventListener("click", () => {
    window.location.href = "index.php";
})


// Deo koda koji omogucava funkcionalnost popup prozora na odredjenim stranicama;

let popupWindow = document.querySelector('.popup-wrapper');
let linkImg = document.querySelector('.link-img');
const closeIcon = document.querySelector('#popup-close');

/* linkImg.addEventListener('click', e => {
    popupWindow.style.display = 'block';
    
}) */

closeIcon.addEventListener('click', e => {
    popupWindow.style.display = 'none';
})



const cards = document.querySelectorAll('.card-wrapper .card');
const popupWrapper = document.querySelector('.popup-wrapper');
const popupModals = document.querySelectorAll('.popup-window');

cards.forEach(card => {
    card.addEventListener('click', () => {

        popupModals.forEach(popupModal => {
            popupModal.style.display = 'none';
        })

        const popupID = `popup${card.id.replace('card', '')}`;
        const popup = document.getElementById(popupID);


        if (popup) {
            popup.style.display = 'block'; 
            popupWrapper.style.display = 'block'; 
            console.log('Otvoren modal:', popupID);
        } 
        else {
            console.log('Modal nije pronađen:', popupID);
            console.log(popupID)
        }
    });
});

popupWrapper.addEventListener('click', () => {
    popupWrapper.style.display = 'none'; 
    document.querySelectorAll('.popup-window').forEach(popup => {
        popupWrapper.style.display = 'none';
        popup.style.display = 'none'; 
    });
});


