"use strict";
const d = document;
const listEl = d.getElementById('list');
const textValue = d.getElementById('task');
const toastSuccess = d.querySelector('.success');
const toastError = d.querySelector('.error');

function newElement() {
    if (textValue.value !== '') {
        // Toast success message
        $(".success").toast("show");

        // Create task element
        let liEl = d.createElement('li');
        liEl.textContent = textValue.value;
        listEl.appendChild(liEl);

        // Create close element
        let spanEl = d.createElement('span');
        spanEl.textContent = 'x';
        spanEl.classList.add('close');
        liEl.appendChild(spanEl);
        textValue.value = '';
    } else {
        // Toast error message
        $(".error").toast("show");
    }

    const listItem = d.querySelectorAll('#list li');
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].onclick = function () {
            this.classList.toggle('checked');
        }
    }
    const closeEl = d.querySelectorAll('span.close');
    for (let i = 0; i < closeEl.length; i++) {
        closeEl[i].onclick = function () {
            this.parentElement.remove();
        }
    }
}