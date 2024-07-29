let form = document.getElementById("form");
let inp = document.getElementById("inp");
let inp2 = document.getElementById("inp2");
let btn = document.getElementById("btn");
let data = document.getElementById("data");
let errorhandler = document.getElementById("errorhandler");

// Modal
let editModal = document.getElementById("editModal");
let closeModal = document.querySelector(".modal_close");
let editModalForm = document.querySelector(".edit_todo_form form");
let editInput = document.getElementById("editInput");

let baza = [];

form.addEventListener("submit", function(event){
    event.preventDefault();
    let inpValue = inp.value.trim();
    if(inpValue == ""){
        // alert("Please enter a name!");
        errorhandler.style.display = "block";
        return;
    }
    create();
});

editModalForm.addEventListener("submit", function(event){
    event.preventDefault();
    let inpValue = editInput.value.trim();
    if(inpValue == ""){
        errorhandler.style.display = "block";
        return;
    }
    updateEditeData(editInput.value, todoId)
});

function updateEditeData(editInput, id){
    const todoIndex = baza.findIndex(function(todoId){
        return todoId.id === id
    });
    baza[todoIndex].name = editInp;

    hide();
    localStorage.setItem("baza", JSON, stringify(baza))
}

function showModal(todoText, todoId){
    editModal.style.display = "block";
    editInput.value = todoText;
    editInput.dataset.todoId = todoId;
}

function hide(){
    editModal.style.display = "none";
}

function makeId(baza){
    if(!baza.length){
        return 1;
    }else{
        return baza[baza.length - 1].id + 1;
    }
}

function create(){
    console.log(baza);
    debugger;
    baza.push({
        name: inp.value,
        ball: inp2.value,
        id: makeId(baza)
    });
    debugger;
    localStorage.setItem("baza", JSON.stringify(baza));
    console.log(baza);
    read();
}

function editFc (event){
    const editId = baza.find((todoId)=>{
        return todoId.id === id;
    })
    showModal(editId.name, id);
}

function deleteFc(id){
    const idx = baza.findIndex(function(todoId){
        todoId.id === id;
    });

    baza.splice(idx, 1);
    localStorage.setItem("baza", JSON.stringify(baza));
    read();
}

function read(){
    data.innerHTML = "";
    baza.sort(function (a, b){
        return b.ball - a.ball
    })
    baza.forEach(function(item){
        data.innerHTML += `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.ball}</td>
            <td><i onclick="editFc(${item.id})"  class="fa-solid fa-file-pen"></td>
            <td><i onclick="deleteFc(${item.id})" class="fa-solid fa-trash-can"></td>
        `
    })
}

(function(){
    baza = JSON.parse(localStorage.getItem("baza")) || [];
    read();
})()    