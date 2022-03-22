const buttonAdd = document.querySelector('.btn')

buttonAdd.addEventListener('click', () => {
    addNewNote()
})




function addNewNote() {
    let note = document.createElement("div");
    note.classList.add(`note`);
    note.innerHTML += `
        <div class="navigation ">
        <textarea class = 'title'>Title...</textarea>
        <button class = 'del'><i class="fas fa-trash-alt " ></i></button>
        </div>
        <textarea class = 'text'>...</textarea>`;
    document.querySelector('.notes').appendChild(note);
    const deleteBtn = note.querySelector('.del')
    deleteBtn.addEventListener('click', () => {
        deleteBtn.classList.add('delete')
        note.remove()
    });
}