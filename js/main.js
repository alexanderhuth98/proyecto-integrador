const cardProducts = document.querySelectorAll(".card--product")


cardProducts.forEach(cardProduct =>{
    let valor = cardProduct.querySelector(".card__counter");
    const botones = cardProduct.querySelectorAll(".button");
    let contador = 0;
    const img = '<img src="./images/icons/cart3 (1).svg" alt="cart">'

    botones.forEach(boton => {

        boton.addEventListener("click", ()=>{
            if(boton.classList.contains("button__add")){
                contador++;
                valor.innerHTML = img + contador
        
            }else if(boton.classList.contains("button__remove") && contador>0){
                contador--;
                valor.innerHTML = img + contador
            }else{
                contador = 0
                valor.innerHTML = img + contador
            }
           
        })
        
        })
        


      
  















})








