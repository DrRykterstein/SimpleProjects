// initialise global variables
const submit = document.getElementById('submit');
const inputName = document.getElementById('input-name');
const inputDate = document.getElementById('input-date');
const inputAmount = document.getElementById('input-amount');
const inputFields = document.getElementsByClassName('input-item');
const tempRowCells = document.getElementsByClassName('temp-data');
const table = document.querySelector('.table');
const cross = document.createElement('span');
const total = document.querySelector('.total-number');
let totalSum = 0;


// attach event listener to submit button
submit.addEventListener('click', main);

function main() {
    if (inputName.value === '' || inputDate.value === '' || inputAmount.value === '') {
        alert('You must fill in the name, date and amount fields.');
    } else {
        removeTempRow(); addExpense();
    }

    function removeTempRow() {
        const tempRow = document.querySelector('.temp-row');
        tempRow.style.display = 'none';
    }

    function addExpense(item) {
        let newRow = table.insertRow();
        let newDataName = newRow.insertCell();
        let newDataDate = newRow.insertCell();
        let newDataAmount = newRow.insertCell();
        let newDataDelete = newRow.insertCell();
        newRow.className = 'new-row';
        newDataName.className = 'new-data';
        newDataDate.className = 'new-data';
        newDataAmount.className = 'new-data amount';
        newDataDelete.className = 'new-data cross';

        // initialise input text nodes
        let inputNameTextNode = document.createTextNode(inputName.value);
        let inputDateTextNode = document.createTextNode(inputDate.value);
        let inputAmountTextNode = document.createTextNode(inputAmount.value);
        let crossTextNode = document.createTextNode('\u00D7');

        // iterate over table data and append corresponding text node
        const data = document.querySelectorAll('.new-data');
        let amountNumber = parseFloat(inputAmount.value);
        
        for (item of data) {
            switch(true) {
                case item === newDataName:
                    item.appendChild(inputNameTextNode);
                    break;
                case item === newDataDate:
                    item.appendChild(inputDateTextNode);
                    break;
                case item === newDataAmount:
                    item.appendChild(inputAmountTextNode);
                    totalSum += amountNumber;
                    total.innerHTML = `£${(Math.round(totalSum * 100) / 100).toFixed(2)}`;
                    break;
                case item === newDataDelete:                   
                    item.appendChild(cross.appendChild(crossTextNode));
                    item.onclick = () => {
                        newRow.style.display = 'none';
                        totalSum -= amountNumber;
                        total.innerHTML = `£${(Math.round(totalSum * 100) / 100).toFixed(2)}`;
                    }
                    break;
            }
        }
    }
}