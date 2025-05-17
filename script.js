const inputBox = document.getElementById('input-box');
const listContainter = document.getElementById('list-container');

const addTask = ()=> {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainter.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
// check the task or delete it
listContainter.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// saves the data in the browser
function saveData() {
    localStorage.setItem("data", listContainter.innerHTML);
}
function showList(){
    listContainter.innerHTML = localStorage.getItem("data");
}
showList();