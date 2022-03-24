/* Criando a função */
const insertCrew= (event)=> {
  event.preventDefault(); /* Previne que a página recarregue e que os dados sejam inseridos na Url da página */

/* acessando as informações do documento pelo elemento ID na Div  */
  const crewList = document.getElementById("box-character");
/* acessando as informações do documento(input) de Nome, Patente e Imagem */
  const inputName = document.querySelector("[data-form-name]");
  const inputPatent = document.querySelector("[data-form-patent]");
  const inputImage = document.querySelector("[data-form-img]");

  /* acessando os valores inseridos nos input e seus valores */
  const nameValue = inputName.value;
  const patentValue = inputPatent.value;
  const imageValue = inputImage.value;
  
  /* criando a nova Div que vai ser responsavel por receber o novo conteúdo inserido no HTML */
  const crewMember = document.createElement("div");
/* criando conteúdo que vai ser inserido */
  const content = 
  ` <div id="btn-all" class="box-image">
    <div class="text-character">
    <h2>${nameValue}</h2>
    <img class="character"
    src="${imageValue}">
    <p>${patentValue}
    </p>
  </div>
</div>`;

/* inserindo todo conteudo no HTML */
crewMember.innerHTML = content;
/* inserindo no dom os dados HTML e tornando os mesmos filhos na Div box-character na linha 6 */
crewList.appendChild(crewMember);
/* Tranformando os valores introduzidos pelo usuario em HTML para criar nosso novo tripulante */
nameValue.innerHTML = "";
patentValue.innerHTML = "";
imageValue.innerHTML = "";
};
/* acessando o botão do nosso formulário */
const newCrewMember = document.querySelector("[data-form-btn]");
/* inserindo o evendo do usuario que ao clicar no botão vai inserir um novo tripulante */
newCrewMember.addEventListener("click", insertCrew);

/* inserindo o evendo do usuario que ao clicar no botão vai remover um novo tripulante */
const deleteCrewMember = document.querySelector('[data-form-btn-delete]');
deleteCrewMember.onclick = function () {
    document.getElementById('btn-all').remove(); 
};

/* É isso */