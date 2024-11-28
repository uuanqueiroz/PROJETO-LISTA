const lista = document.getElementById("minhaLista");
const novoItemInput = document.getElementById("novoItem");

function adicionarItem() {
    const novoItem = novoItemInput.value;
    if (novoItem !== "") {
        const li = document.createElement("li"); // AQUI TO CRIANDO A PORRA LISTA E BOTANDO TUDO DENTRO. LA ELE
        //li.textContent = novoItem; ESSA CARAI DESSA FUNCAO TAVA MOSTRANDO 2 VALORES
        // E SO ATUALIZAVA UM
        // elemtno pra conter o texto do item
        const spanTextoItem = document.createElement("span");
        spanTextoItem.textContent = novoItem;
        li.appendChild(spanTextoItem);

        //possivel botao de check
        const marcar = document.createElement("input");
        marcar.type = "checkbox";
        marcar.classList.add('check');
        
    
        // Botão de apagar o item da lista
        const botaoExcluir = document.createElement("button");
        botaoExcluir.style.backgroundColor = "red";
        botaoExcluir.style.color = "black";
        botaoExcluir.style.border = "none";
        botaoExcluir.style.fontSize = "16px"
        botaoExcluir.style.borderRadius = "4px";
        botaoExcluir.style.margin = "10px";
        botaoExcluir.style.right = "50px";
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.onclick = function() {
            lista.removeChild(li);

        };

        // Botão de editar
        const botaoEditar = document.createElement("button");
        botaoEditar.style.backgroundColor = "yellow";
        botaoEditar.style.color = "black";
        botaoEditar.style.border = "none";
        botaoEditar.style.fontSize = "16px"
        botaoEditar.style.borderRadius = "4px";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = function() {
            const novoValor = prompt("Errou foi ? edita ai esta porra:");
            if (novoValor !== null && novoValor !== "") {
                spanTextoItem.textContent = novoValor;
            }
        };
        const div = document.createElement(`div`);
        div.classList.add(`botoes`)
        div.appendChild(botaoExcluir);
        div.appendChild(botaoEditar);
        div.appendChild(marcar);
        li.appendChild(div)
        lista.appendChild(li);
        
        novoItemInput.value = "";
        
        
    }
        
    }
