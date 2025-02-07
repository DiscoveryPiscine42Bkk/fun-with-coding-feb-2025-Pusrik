var ft_list = document.getElementById("ft_list");

function AddToDo(){
    let todo = prompt("ToDo's Name");
    if (todo.length > 0){
        let p = document.createElement("p");
        let text = document.createTextNode(todo);
        p.appendChild(text);
        addDelete(p)
        ft_list.appendChild(p);
        saveToCookie();
    }
}

function addDelete(list){
    list.addEventListener("click", removeToDo);
}

function removeToDo(){
    if (confirm("you want to remove that TO DO.")){
        this.remove()
        saveToCookie();
    }
}

function loadFromCookie(){
    if (document.cookie == ''){
        saveToCookie();
    }
    ft_list.innerHTML = JSON.parse(document.cookie)["ft_list"];
}

function saveToCookie(){
    document.cookie = JSON.stringify({"ft_list" : `${ft_list.innerHTML}`})
}

window.onload = function(){
    ft_list = document.getElementById("ft_list");
    loadFromCookie();
    document.querySelectorAll("#ft_list > p").forEach( list => addDelete(list))
}