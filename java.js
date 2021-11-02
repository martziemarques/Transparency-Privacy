// Marta Marques, up201808066
//JAVASCRIPT 



/*TRANSPARENCY*/



//mudar cor quando se passa o rato
/* let cor = document.querySelector("h1");

function changecolor(e) {
  console.log("changing background color¦", e.clientX, e.clientY);
/* cor.getAttribute.cor.offsetHeight */
 /*  cor.style.color = `rgba(${e.clientY},${e.clientY}, ${e.clientY}, ${e.clientX})`; 
   cor.style.color = "rgb(58, 56, 56)" */ /* `rgba(100, 100, 100, 0.5)` *//*  ;
}


cor.addEventListener("mousemove", changecolor);   */ 



//passar o cursor e mudar a cor da palavra em tons de cinzento

var div = document.querySelector("h1");
  
    div.addEventListener(
        "mousemove", function (e) {
        x = e.offsetX;
        y = e.offsetY;
        div.style.color  = `rgba(${y}, ${y}, ${y}, ${x}  )`;            //tons de cinzento
    });





//janela lado direito desaparecer quando se passa o cursor

 function tog(event) {
    this.style.opacity = event.type==="mouseenter" ? 0 : 1;
  }
  
  var btn1 = document.getElementById("window2");
  btn1.addEventListener("mouseenter", tog);
  btn1.addEventListener("mouseleave", tog); 

 


/*PRIVACY*/

// escrever a palavra PRIVACY letra por letra

let array_string = ["*","P","R","I","V","A","C","Y","*"];
        let insert = true;
        window.onload = function(){
            write();
        };
        function write() {
            let string = document.getElementById("teste").innerHTML;           //escrever
            /* console.log(string); */
            if(insert){
                string = string + array_string[string.length];
                if(string.length == array_string.length) insert =false;
            }else {
                string = string.substring(0, (string.length-1));              //quando chega ao fim da palavra voltar a fazer o string mas ao contrário
                if(string.length == 0) insert =true;
            }
        
            document.getElementById("teste").innerHTML = string;

            setTimeout(function(){ write(); }, 800);                        // velocidade entre letras
        }


    


// mudar weight e style da fonte da window com o botao

let font = true

function botao() {
        
if (font === true){                                // ao clicar uma vez muda para outros valores
    document.getElementById("window")
    .style.fontWeight = "700";
    document.getElementById("window")
    .style.fontStyle= "italic";
    
}else{                                             // ao clicar outra vez volta ao normal
    document.getElementById("window")
    .style.fontWeight = "100";
    document.getElementById("window")
    .style.fontStyle= "normal";
    
}

if (font === true){ font = false}                  //verificação
else { font = true}
        
} 




// botão "x" que fecha a janela inicial (popup)

let popup = document.querySelector(".popup");
let button = document.querySelector("span");

button.onclick = function(){
     document.querySelector(".popup").style.display="none" 
     document.querySelector(".principal").style.display="block"
     console.log(document.getElementById("inicio"))
           console.log(".popup")

  setInterval(function(){
       popup.remove()
  },100)
}



// mudar entre as duas janelas 

function myFunction() {
    var x = document.getElementById(".popup");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

document.querySelector("principal").style.display= "none";





 
 //passar o cursor e sair a caixa
 
 /*   $("#window2").on('mouseenter', function(){
      $(this).remove();

  });

  $("#window2").on('mouseleave', function(){
    $(this).remove();

});   */




















