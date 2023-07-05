function addTarefa(){
    let tarefaEntrada = document.getElementById("tarefaEntrada");
    let tarefaLista = document.getElementById("tarefaLista");

    if (tarefaEntrada.value === "") {
        alert("Adicione uma tarefa!");
        return false;
    }

    let li = document.createElement("li");
    li.innerHTML = tarefaEntrada.value;
    tarefaLista.appendChild(li);
    tarefaEntrada.value = "";

    li.onclick = function(){
        this.classList.toggle("checked");
    }
}
