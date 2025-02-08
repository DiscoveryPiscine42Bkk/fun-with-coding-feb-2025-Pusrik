$(document).ready(function() {

    $("button").click(function(){
        let todo = prompt("ToDo's Name");
        if (todo.length > 0){
            let p = $("<p>").text(todo).on("click", removeToDo);
            $("#ft_list").append(p);
            saveToCookie();
        }
    });

    function removeToDo(){
        if (confirm("you want to remove that TO DO.")){
            $(this).remove()
            saveToCookie();
        }
    }

    function loadFromCookie(){
        if (document.cookie == ''){
            saveToCookie();
        }
        $("#ft_list").html(JSON.parse(document.cookie)["ft_list"]);
    }

    function saveToCookie(){
        document.cookie = JSON.stringify({"ft_list" : `${$("#ft_list").html()}`})
    }

    window.onload = function(){
        loadFromCookie();
        $("#ft_list > p").on("click", removeToDo);
    }
});
