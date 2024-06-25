



        
        let header_menu = document.getElementById('menu');
        let section_menu = document.getElementById('header');
        let fechar_menu = document.getElementById('closed-menu');

        header_menu.addEventListener('click', ()=>{
            section_menu.classList.add('open-header-menu');


        })

        fechar_menu.addEventListener('click', ()=>{
            section_menu.classList.remove('open-header-menu');
            

        })


        