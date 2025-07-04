
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector(".main-content");
    const links = document.querySelectorAll(".profile-sidebar ul li a");
    const linkItems = document.querySelectorAll(".profile-sidebar ul li");

    async function loadPage(page) {

        const response = await fetch(page);

        if(!response.ok) {
            throw new Error("Problem with fetching data");
        }

        const data = await response.text();

        mainContent.innerHTML = data;

    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.getAttribute("data-page");
            loadPage(`/Dynamic/login/View/profile/${page}.php`)
            
        })
    })


    loadPage("/Dynamic/login/View/profile/profile-info.php");
})

