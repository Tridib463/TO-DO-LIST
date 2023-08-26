//Declaring the object inside the array 
const todoList = [{
  name:'',
  duedate:'',
  duetime:''
}];




//rendering(displaying) the Html code  
function renderHTML()
{
   delete_once();
   let todolistHTML = '';
   for(let i=0;i<todoList.length;i++)
   {
      const todo = todoList[i];
      const name = todo.name;
      const duedate = todo.duedate;
      const duetime = todo.duetime;
      const html = 
      `<div>${name}</div>
      <div>${duedate}</div>
      <div>${duetime}</div>
      <button class="delete">DELETE</button>`;
      todolistHTML +=html;
   }
   
   document.querySelector('.js-todo-list').innerHTML = todolistHTML;

   document.querySelectorAll('.delete').forEach((deletebutton, i) =>
   {
      deletebutton.addEventListener('click' , () =>  //delete when clicking the button
      {
         todoList.splice(i, 1);
         renderHTML();
      })
   })
}

document.querySelector('.add_todo_button').addEventListener('click',addTodo);




//inserting the updated user input inside the array
 function addTodo()
 {
    const input_ele = document.querySelector('.nameinput');
    const name = input_ele.value ;

    const input_date = document.querySelector('.dateinput');
    const date = input_date.value;

    const input_time = document.querySelector('.timeinput');
    const time = input_time.value;
    if(name!='' && date!='' && time!='')
    {
      todoList.push({
         name:name,
         duedate:date,
         duetime:time
       });
    }

   
    renderHTML();
   //  input_ele.value = '';
   //  input_date.value = '';
   //  input_time.value = '';

 }

 //removing the first empty object of the array (I dont have any idea why this bug is happening)
 let saidHello = false;
   function sayHello() 
   {
      let previousFirstElementOfTheArray = todoList.shift();
      saidHello = true;
   }
   function delete_once() 
   {
   if (!saidHello) sayHello();
   }


