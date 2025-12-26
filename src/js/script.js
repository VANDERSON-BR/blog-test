const linkDropDown = document.querySelectorAll(".linkDropDown"); // cria lista com os elementos HTML "<a> class='dropdown'"

console.log("Script carregou!");
console.log(document.querySelectorAll(".linkDropDown"));        

//Precisa do forEach para percorrer lista (node.list) e selecionar cada elemento HTML (<a>) da minha lista 
linkDropDown.forEach((link) => {
    link.addEventListener("click", (event)=>{
        event.preventDefault(); //Evita recarregar ou redirecionar a página 
        
        //Pega o próximo elemento HTML de <a> (div class="show")
        const dropdown = link.nextElementSibling

        dropdown.classList.toggle("active");
        
        const icon = link.querySelector("i"); //seleciona i dentro de cada 

        icon.classList.toggle("fa-angle-down");
        icon.classList.toggle("fa-angle-up");

    });
})