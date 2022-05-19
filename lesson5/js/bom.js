const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

if (input.value != " ") {
    button.addEventListener("click", () => {

        const listItem = document.createElement("li");
        listItem.textContent = input.value;
    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        list.appendChild(listItem);
        listItem.append(deleteBtn);

        deleteBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });

    input.value = " ";

    input.focus();
    });
}