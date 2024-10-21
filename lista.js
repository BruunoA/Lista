function addElement() {
    let itemInput = document.getElementById('itemInput');
    let newItem = itemInput.value;

    if (newItem.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = newItem;

        let bottonDelete = document.createElement("button");
        bottonDelete.textContent = "Eliminar";
        bottonDelete.onclick = function() {
            li.remove();
        };

        li.appendChild(bottonDelete);
        document.getElementById("lista").appendChild(li);

        itemInput.value = ""; // Limpia el campo de entrada
    }else{
        console.log(addElement());

    }
}