        // Captura o evento de envio do formulário para realizar a pesquisa
        document.getElementById('send').onclick = function(event) {
            event.preventDefault(); // Previne o comportamento padrão de envio do formulário

            // Chama a função de pesquisa quando o formulário é enviado
            searchItems();
        };

        // Função que filtra os itens na classe .container-aside com base no texto inserido no campo de pesquisa
        function searchItems() {
            let result = document.getElementById('searchBox');
            let filter = result.value.toUpperCase();
            let result_aside = document.querySelector(".container-aside");
            let items = result_aside.getElementsByTagName('a');

            for (let i = 0; i < items.length; i++) {
                // Obtém o texto completo do <p> dentro do <a>
                let txtValue = items[i].getElementsByTagName('p')[0].textContent || items[i].getElementsByTagName('p')[0].innerText;
                //items[i] significa que a cada vez que i recebe 1 dentro da repetição de for, ele vai pegar o primeiro <p> da tag <a> e depois de pegar, vai continuar a contagem de for ate terminar e iniciar o if
                //('p')[0] significa que vai pegar o primeiro <p> dentro de cada repetição do for que acessa cada <a> do html, a contagem no javascript se inicia no 0, por isso se utiliza [0], com o intuitio de pegar apenas o primeiro <p> de cada tag <a>                                                                                       
                if (txtValue.toUpperCase().indexOf(filter) > -1){
                    items[i].style.display = "";
                } else {
                    items[i].style.display = "none";
                }
            }
        }

        let botao_menu = document.getElementById('btn-menu');
        let menu = document.getElementById('close');
        let fechar = document.getElementById('fechar');

        botao_menu.addEventListener('click', ()=>{
            menu.classList.add('abrir-menu');


        })

        fechar.addEventListener('click', ()=>{
            menu.classList.remove('abrir-menu');
            

        })

        
        let header_menu = document.getElementById('menu');
        let section_menu = document.getElementById('header');
        let fechar_menu = document.getElementById('closed-menu');

        header_menu.addEventListener('click', ()=>{
            section_menu.classList.add('open-header-menu');


        })

        fechar_menu.addEventListener('click', ()=>{
            section_menu.classList.remove('open-header-menu');
            

        })

        document.getElementById('video-aula').contentWindow.location.reload();

        