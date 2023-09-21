document.addEventListener("DOMContentLoaded", function () {
    // Event listener para os links de categoria no dropdown
    document.getElementById("category-programacao").addEventListener("click", () => {
        displayFilteredVideos("Programação Web");
    });

    document.getElementById("category-design").addEventListener("click", () => {
        displayFilteredVideos("Design Gráfico");
    });

    document.getElementById("category-idiomas").addEventListener("click", () => {
        displayFilteredVideos("Idiomas");
    });

    document.getElementById("category-escritorio").addEventListener("click", () => {
        displayFilteredVideos("Pacote Office");
    });

    // Função para mostrar/ocultar o menu em telas menores
    const navToggle = document.querySelector(".navbar-toggler");
    const navList = document.querySelector("header .navbar-collapse");

    navToggle.addEventListener("click", () => {
        navList.classList.toggle("show");
    });

    // Seleciona todos os botões de dropdown
    const dropdownButtons = document.querySelectorAll('.nav-item.dropdown');

    // Função para mostrar o menu dropdown ao passar o mouse
    function showDropdownOnHover() {
        const dropdown = this.querySelector('.dropdown-menu');
        dropdown.classList.add('show');
    }

    // Função para esconder o menu dropdown quando o mouse sai
    function hideDropdownOnLeave() {
        const dropdown = this.querySelector('.dropdown-menu');
        dropdown.classList.remove('show');
    }

    // Adiciona os event listeners aos botões de dropdown
    dropdownButtons.forEach(dropdownButton => {
        dropdownButton.addEventListener('mouseenter', showDropdownOnHover);
        dropdownButton.addEventListener('mouseleave', hideDropdownOnLeave);
    });

    // Event listener para recarregar a página ao clicar em navbar-brand
    const navbarBrand = document.querySelector(".navbar-brand");
    navbarBrand.addEventListener("click", () => {
        window.location.reload();
    });
});
