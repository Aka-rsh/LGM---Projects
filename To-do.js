// javascript for to-do list 

let input = document.querySelector('.bar');
let addBtn = document.querySelector('.add');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
  if (input.value.trim() !== '') {
    addBtn.classList.add('active');
  } else {
    addBtn.classList.remove('active');
  }
  storeData();
});

// Add item in a list
addBtn.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
      <p>${input.value}</p>
      <div class="item-btn">
        <i class="fa fa-pencil-square" aria-hidden="true"></i>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
    `;

    tasks.appendChild(newItem);
    input.value = '';
  } else {
    alert('Please Enter a task');
  }
  storeData();
});

// Delete item from a list
tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-circle-xmark')) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains('fa-pencil-square')) {
    e.target.parentElement.parentElement.classList.toggle('completed');
  }
  storeData();
});

function storeData(){
    localStorage.setItem("list",tasks.innerHTML);
}
function getList() {
    tasks.innerHTML = localStorage.getItem('list');
}
getList();