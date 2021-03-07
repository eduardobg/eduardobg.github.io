//Para el div de estadisticas
let animado = document.querySelectorAll(".scroll-effect")
//Para la seccion about
let animadoAbout = document.querySelectorAll(".scroll-ef-about")

var cont1=687
var cont2=13.4
var cont3=0

var h1 = document.querySelector("#code-info")
var h2 = document.querySelector("#users-info")
var h3 = document.querySelector("#money-info")

var count = true;

function mostrarScroll(){
    
    for (let index = 0; index < animado.length; index++) {
        let scrollTop = document.documentElement.scrollTop;
        let alturaAnimado = animado[index].offsetTop

        let alturaAnimadoAbout = animadoAbout[index].offsetTop

        //Condición para mostrar las estadísticas
        if (alturaAnimado - 560 < scrollTop) {
            animado[index].style.opacity=1 
            if (count) {
                let interval = setInterval(function(){
                    if(cont1>=700){
                        count=false                        
                        clearInterval(interval);                       
                    }else{
                        cont1++
                        cont2++
                        cont3++                
                        h1.innerHTML= '+ '+cont1;
                        h2.innerHTML= '+ '+cont2 + ' M.';
                        h3.innerHTML= cont3 + '%';
                    }                

                },700);   
            }
        }
        //Condición para la sección about
        if (alturaAnimadoAbout -280 < scrollTop) {
            //about_title.style.opacity=1 
            animadoAbout[index].style.opacity=1 
        }   
    }
}
window.addEventListener('scroll',mostrarScroll);