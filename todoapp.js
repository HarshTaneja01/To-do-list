let inp = document.querySelector("input");
let btn = document.querySelector("#add");
let ol =  document.querySelector("ol");
let body = document.querySelector("body");

function listadd(){
    if (inp.value.trim() === "") {
    alert("Please enter a task");
    return;
}
    let li = document.createElement("li");
    let btn2 = document.createElement("button");
    btn2.innerText = "Delete";
    btn2.classList.add("delete");
    li.innerText = inp.value;
    ol.append(li);
    li.append(btn2);
    inp.value = "";

    btn2.addEventListener("click", function(){
        li.remove();
    });
}

btn.addEventListener("click" , listadd)
window.addEventListener("keypress" , function (event) {
    if(event.keyCode === 13){
        listadd();
    }    
})
 
