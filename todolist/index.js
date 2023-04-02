let input = document.getElementById("input");
let listcontainer = document.getElementById("list-container");

function addtask() {
    if (input.value === '') {
        alert("you must write something here");
    }

    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
        savedata();
    }
    input.value = "";
}

listcontainer.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }


}, false);

function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showdata(){
    listcontainer.innerHTML=localStorage.getItem("data");
}

showdata();