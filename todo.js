var text_box = document.getElementById("text_box");
var todolist = document.getElementById("todolist");

function btnadd(){
    var lists = document.createElement("li");
    lists.setAttribute("class" , "linethrough");
    lists.innerHTML = '<span class="displayspan"> <span class="alignvertical"> <input class="checkbox_style" type="checkbox">' + text_box.value + ' </span> <span> <button class="closebtn" style = "background-color : red; color : white; padding : 5px; border-radius : 100%;" onclick = "btnrem(event)"> X </button> </span> </span>';

    var closestyle = lists.querySelector(".closebtn");
    closestyle.style.margin = "0";
    closestyle.style.alignSelf = "center";

    var displayspan = lists.querySelector(".displayspan");
    displayspan.style.display = "flex";
    displayspan.style.justifyContent = "space-between";
    displayspan.style.width = "100%";

    var alignvertical = lists.querySelector(".alignvertical");
    alignvertical.style.display = "inline-flex";
    alignvertical.style.alignItems = "center";

    var checkbox = lists.querySelector(".checkbox_style");
    var linethrough = lists.querySelector(".linethrough");
    checkbox.addEventListener('change' , () => {
        if(this.checked){
            linethrough.style.textDecoration = "line-through";
        }
        else{
            linethrough.style.textDecoration = "none";
        }
    });

    todolist.append(lists);
    text_box.value = "";
}

function btnrem(event){
    event.target.parentElement.parentElement.parentElement .remove();
}
