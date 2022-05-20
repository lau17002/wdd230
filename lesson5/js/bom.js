const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener("click", () => {
    if (input.value.length != 0) {
        const listItem = document.createElement("li");
        listItem.textContent = input.value;
    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        list.appendChild(listItem);
        listItem.append(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.value = "";

        input.focus();
    } else {
        alert("Please enter a Chapter!")
    }
});
    
