addEventListener('DOMContentLoaded',()=>{ 

    const btn_menu = document.querySelector('.btn_menu')
    
    const header = document.querySelector('#header')

    const helper1 = document.querySelector('#helper1')

    const boton_info = document.querySelectorAll('.more-info-btn')
    const tec = document.querySelectorAll('.tec-img')
    const hidden = document.querySelectorAll('.hidden-message')

    if(btn_menu){   
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show') //Es un boton con dos funciones

            header.classList.toggle('fijar')
            helper1.classList.toggle('mostrar')
        })
    }     
    
    boton_info.forEach((btn, i)=>{
        btn.addEventListener('click',()=>{   
            
            btn.classList.toggle('change')

            tec[i].classList.toggle('accion')
            hidden[i].classList.toggle('accion')
            
        })
    })    
  
})