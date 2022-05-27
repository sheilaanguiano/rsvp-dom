/* You can submit a form by htting enter or 
clicking a button, which is why is better to put 
the event handler on form
*/

const form = document.getElementById('registrar');
const input = form.querySelector('input');

form.addEventListener('submit', (e)=>{
    e.preventDefault(); //To cancel the browsers default submit behavior
   const text = input.value;
   input.value ='';
   const ul = document.getElementById('invitedList');
   const li = document.createElement('li');
   li.textContent = text;
   ul.appendChild(li); 
}); 