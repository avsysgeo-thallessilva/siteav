/*function validaTelefoneNacional(telefone){
    var retorno = false;
    //cast para string
    if(typeof telefone != "string"){
    telefone = telefone.toString();
    }
    //limpa string para validacao
    telefone = telefone.replace(/\D/g,"");
    //aplica ER
    var valida = telefone.match(/^((5{2})?(\d{2})?([987])?(\d{4})(\d{4}))$/);
    if(valida){
    //prefixo e sufixo já é um telefone
        if(valida[5] && valida[6]){
        retorno = fone = valida[5]+"-"+valida[6];
        //caso celular
        if(valida[4]){
             retorno = valida[4]+fone;
        }
        if(valida[2] && valida[3] || valida[3]){
                    retorno = valida[2]+"("+valida[3]+")"+fone;
            //caso celular
            if(valida[4]){
                 retorno = valida[2]+"("+valida[3]+")"+valida[4]+fone;
            }
             if(!valida[2]){
                            retorno = "("+valida[3]+")"+fone;
                //caso celular
                if(valida[4]){
                    retorno = "("+valida[3]+")"+valida[4]+fone;
                            }
                    }
                }
        }
    }
    return retorno;
}
*/

function sendMail() {
    var link = "mailto:thallessilva@avsystemgeo.com.br"
             + "?cc=myCCthallessilva@avsystemgeo.com.br"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}

/*
let carlos = document.getElementById("carlos");
let jovem = document.getElementById("jovem");
let adamastor = document.getElementById("adamastor");
let afonso = document.getElementById("afonso");


carlos.addEventListener("teste", (e) => {
  e.preventDefault();
  console.log("button clicked");

  carlosValidation();
});
let data = {};
let acceptData = () => {
  data["text"] = jovem.value;
  console.log(data);
  createPost();
};
let carlosValidation = () => {
  if (jovem.value === "") {
    adamastor.innerHTML = "este campo precisa ser preenchido";
    console.log("failure");
  } else {
    console.log("sucesso");
    adamastor.innerHTML = "";
    acceptData();
  }
};

let createPost = () => {
  afonso.innerHTML += `
  <div>
    <p>${data.text}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  jovem.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};
let editPost = (e) => {
  jovem.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
*/