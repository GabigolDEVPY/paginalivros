function pesquisarLivros() {
    const objetivo = document.getElementById("objetivo").value;
    const resultado = document.getElementById("resultado");
    
    let livros = "";

    switch(objetivo) {
        case "web":
            livros = `
                <h3>Livros recomendados para Desenvolvimento Web:</h3>
                <ul>
                    <li><strong>"HTML e CSS: Design e Construção de Websites" - Jon Duckett</strong></li>
                    <li><strong>"JavaScript e JQuery: Desenvolvimento de Websites Interativos" - Jon Duckett</strong></li>
                    <li><strong>"Eloquent JavaScript" - Marijn Haverbeke</strong></li>
                </ul>
            `;
            break;
        case "python":
            livros = `
                <h3>Livros recomendados para aprender Python:</h3>
                <ul>
                    <li><strong>"Python para Desenvolvedores" - Luiz Eduardo Borges</strong></li>
                    <li><strong>"Python Crash Course" - Eric Matthes</strong></li>
                    <li><strong>"Automate the Boring Stuff with Python" - Al Sweigart</strong></li>
                </ul>
            `;
            break;
        case "algoritmos":
            livros = `
                <h3>Livros recomendados para Algoritmos e Lógica de Programação:</h3>
                <ul>
                    <li><strong>"Entendendo Algoritmos" - Aditya Bhargava</strong></li>
                    <li><strong>"Algoritmos: Teoria e Prática" - Thomas H. Cormen</strong></li>
                    <li><strong>"Lógica de Programação" - André Luiz Villar Forbellone</strong></li>
                </ul>
            `;
            break;
        case "mobile":
            livros = `
                <h3>Livros recomendados para Desenvolvimento Mobile:</h3>
                <ul>
                    <li><strong>"Kotlin Programming: The Big Nerd Ranch Guide" - Josh Skeen</strong></li>
                    <li><strong>"Android Programming for Beginners" - John Horton</strong></li>
                    <li><strong>"Flutter para Desenvolvimento de Aplicativos Móveis" - Fábio Vedovelli</strong></li>
                </ul>
            `;
            break;
        default:
            livros = "<p>Por favor, selecione um objetivo para ver os livros recomendados.</p>";
    }

    resultado.innerHTML = livros;
    resultado.classList.add('visible');
}

function scrollToSection() {
    document.getElementById('main-section').scrollIntoView({ behavior: 'smooth' });
}
