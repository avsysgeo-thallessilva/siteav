function changeSize(element) {
    parent = element.parentNode;
    parent.classList.toggle("card-expanded-salad");
    var av = document.getElementById("button-1");
    if (av.innerHTML === "↑") {
      av.innerHTML = " ↓";
    } else {
      av.innerHTML = "↑";
    }
    var ax = document.getElementById("background");
    ax.classList.toggle("no-pad");
  }
  
  
  function showImg() {
    var x = document.getElementById("salad-img");
    x.classList.toggle("show-picture");
  }


  (function(){
  
    //"corpo" do popup 
    var msg = "Usamos cookies para melhorar sua experiência de navegação na web. Ao continuar a navegar no site concorda com a nossa política de utilização de cookies";
    var closeBtnMsg = "OK";
    var privacyBtnMsg = "Políticas de privacidade";
    var privacyLink = "Politica_de_priv.html";
    
    //Verifica os cookies
    if(document.cookie){
     var cookieString = document.cookie;
     var cookieList = cookieString.split(";");
     // se o cookie chamado OKCookie for encontrado, return
     for(x = 0; x < cookieList.length; x++){
       if (cookieList[x].indexOf("OKCookie") != -1){return}; 
     }
    }
    
    var docRoot = document.body;
    var okC = document.createElement("div");
    okC.setAttribute("id", "okCookie");
    var okCp = document.createElement("p");
    var okcText = document.createTextNode(msg); 
    
    //botão de fechar
    var okCclose = document.createElement("a");
    var okcCloseText = document.createTextNode(closeBtnMsg);
    okCclose.setAttribute("href", "#");
    okCclose.setAttribute("id", "okClose");
    okCclose.appendChild(okcCloseText);
    okCclose.addEventListener("click", closeCookie, false);
   
    //botão de políticas de privacidade
    var okCprivacy = document.createElement("a");
    var okcPrivacyText = document.createTextNode(privacyBtnMsg);
    okCprivacy.setAttribute("href", privacyLink);
    okCprivacy.setAttribute("id", "okCprivacy");
    okCprivacy.appendChild(okcPrivacyText);
    
    //ADiciona ao DOM
    okCp.appendChild(okcText);
    okC.appendChild(okCp);
    okC.appendChild(okCclose);
    okC.appendChild(okCprivacy);
    docRoot.appendChild(okC);
    
    okC.classList.add("okcBeginAnimate");
    
    function closeCookie(){
      var cookieExpire = new Date();
      cookieExpire.setFullYear(cookieExpire.getFullYear() +2);
      document.cookie="OKCookie=1; expires=" + cookieExpire.toGMTString() + ";";
      docRoot.removeChild(okC);
    }
    
  })();