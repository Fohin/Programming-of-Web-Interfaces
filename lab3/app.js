"use strict";

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const searchOption = document.querySelector(".search");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
searchOption.addEventListener("input", searchTodo);

//Functions
function addTodo(event) {

    //Prevent form from submitting
    event.preventDefault();

    //Validation
    if(!validateTodo()) return;

    //Create todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create date of completed task
    const completedDate = document.createElement("div");
    completedDate.innerText = "";
    completedDate.classList.add("completed-date");
    todoDiv.appendChild(completedDate);

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Create complete-btn
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Create trash-btn
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append todo DIV to list
    todoList.append(todoDiv);

    //Clear Todo input value
    todoInput.value = "";
} 

//Delete - JQuery
$(".todo-list").on("click", function(event){
    const item = event.target;

    if(item.classList[0] === "trash-btn" && confirm("This item will be permanently deleted, do you still want to do this?")){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        $(".todo-list").on("transitionend", function(){
        //todo.addEventListener("transitionend", function(){
            todo.remove();
        });
    }
}) 


function deleteCheck(event) {
    const item = event.target;

    //Delete in JS
    //if(item.classList[0] === "trash-btn" && confirm("This item will be permanently deleted, do you still want to do this?")){
     //   const todo = item.parentElement;
     //   //Animation
    //    todo.classList.add("fall");
     //   todo.addEventListener("transitionend", function(){
     //       todo.remove();
     //   });
   // }

    //Check
    if(item.classList[0] === "complete-btn"){

        const todo = item.parentElement;
        todo.classList.toggle("completed");

        const todoDate = item.parentElement.firstChild;
        const todoText = item.parentElement.children[1];

        if(todo.classList.contains("completed")){

            const date = new Date();
            const month = date.getMonth() +1;
            const year =  date.getFullYear();
            const day = date.getDate(); 
            const hour = date.getHours();
            const minute = date.getMinutes();
            const sec = date.getSeconds();
            todoDate.innerText = `${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}:${sec < 10 ? "0" + sec : sec} ${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;
            todoDate.style.display = "flex";
            todoText.style.textDecoration = "line-through";
        }
        else{
            todoDate.style.display = "none";
        }        
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function searchTodo(event){
    const searchByValue = searchOption.value;
    const todoElements = todoList.childNodes;

    
    if(searchByValue === null || searchByValue === "")
    {
        todoElements.forEach(function(todo){
            todo.style.display = "flex";
        });
        return;
    }

    todoElements.forEach(function(todo){
        const todoText = todo.children[1].innerText;   
        if(todoText.includes(searchByValue)){
            todo.style.display = "flex";               
        }
        else{
            todo.style.display = "none";
        }
    });
}


function validateTodo() {
    const x = todoInput.value;
    if (x === "" || x === null) {
      alert("This field can not be blank!");
      return false;
    }
    return true;
  }

