const tittle = document.querySelector(".tittle");
const color = document.querySelector('.color');

const submit = document.querySelector('.submit');
const textArea = document.querySelector('#textarea')
const right = document.querySelector('.right');

color.addEventListener('click', () =>{
    textArea.style.backgroundColor = color.value;
})

color.value = '#cfeb34';

let val = 0;
submit.addEventListener('click', (event) => {
    let count = 0;
    event.preventDefault();
    let note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
    <h3 class='noteTittle'>${tittle.value.toUpperCase}</h3>
    <textarea name="textArea" id="noteTextArea" cols="30" rows="10" style ='background-color:${color.value}'>${text.value}</textarea>
    <span class='close'><i class='material-icons'>close</i></span>
    <span id='edit'><i class='material-icons'>edit</i></span>
    
    `

})