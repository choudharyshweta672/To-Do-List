// let count=0;
// function addTask(){
    

//     let input=document.getElementById("taskInput");
//     let taskText=input.value;
//     let li=document.createElement("li");
//     li.innerHTML=
//     taskText+
//     '<button onclick="this.parentElement.remove()">🤬</button>';

//     document
//     .getElementById("TaskList")
//     .appendChild(li);
  

//     input.value="";
//     let taskText = input.value;

//     if(taskText==""){
//         return;
//     }
//     count++;
//     document.getElementById("counter").innerText="Tasks:"+count;

// }
// function deleteTask(button){

//     button.parentElement.remove();

//     count--;

//     document.getElementById("counter").innerText =
//     "Tasks: " + count;
//     li.innerHTML =
// taskText +
// ' <button onclick="deleteTask(this)">❌</button>';
// }
let count = 0;

function addTask(){

    let input =
    document.getElementById("taskInput");

    let taskText =
    input.value;

    if(taskText == ""){
        alert("Please Enter the task");
        return;
    }

    let li =
    document.createElement("li");

    // li.innerHTML =
    // taskText +
    // ' <button onclick="deleteTask(this)">❌</button>';
li.innerHTML =
taskText +
' <button onclick="completeTask(this.parentElement)">✔</button>' +
' <button onclick="deleteTask(this)">❌</button>';
    document
    .getElementById("taskList")
    .appendChild(li);

    count++;

    document.getElementById("counter").innerText =
    "Tasks: " + count;

    input.value = "";
    document
.getElementById("taskInput")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});
}

function deleteTask(button){

    button.parentElement.remove();

    count--;

    document.getElementById("counter").innerText =
    "Tasks: " + count;
}
function completeTask(task){
    task.classList.toggle("completed");

}