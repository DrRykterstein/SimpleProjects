const submit = document.getElementById('submit');
const input = document.getElementById('input');
const itemList = document.getElementById('item-list');

// add list item upon click
submit.addEventListener('click', todo);

function todo() {
    // create list item and input text node
    const li = document.createElement('li');
    const inputTextNode = document.createTextNode(input.value);
    li.className = 'list-item';

    // append input value onto list item
    li.appendChild(inputTextNode);

    if (input.value === '') {
        alert("You cannot add an empty item");
    } else {
        setTimeout(() => {
            itemList.appendChild(li); // append list item onto ordered list
        }, 100);
    }

    // create cross icon and cross text node
    const cross = document.createElement('span');
    const crossTextNode = document.createTextNode('\u00D7');
    cross.className = 'cross';

    // append cross element onto list item
    cross.appendChild(crossTextNode);
    li.appendChild(cross);

    // delete list item when cross is clicked
    cross.onclick = () => {
        setTimeout(() => {li.style.display = 'none'}, 100);
    }
}

// SEPARATE SOLUTION FOR REMOVING LIST ITEM THAT WAS NOT FUNCTIONAL

// // iterate over list items and delete if cross is clicked
// const crossList = document.getElementsByClassName('cross');

// for (let i = 0; i < crossList.length; i++) {
//     crossList[i].onclick = () => {
//         console.log("cross was clicked");
//         li.style.display = 'none';
//     }
// }