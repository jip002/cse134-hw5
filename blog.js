window.addEventListener('DOMContentLoaded', init);
export default function init() {
const modal = document.querySelector("#modal");
const add = document.querySelector("#add");
const save = document.querySelector("#save");
const cancel = document.querySelector("#cancel");

const title = document.querySelector("#title");
const date = document.querySelector("#date");
const summary = document.querySelector("#summary");

localStorage.clear();
let list = getData();
console.log(localStorage);
updateMain(list);

add.addEventListener('click', e => {
    modal.showModal();
});

cancel.addEventListener('click', e => {
    modal.close();
});

save.addEventListener('click', e =>{
    let data = `Blog Title: ${title.value}<br>
                Blog Data: ${date.value}<br>
                Blog Summary: ${summary.value}<br>
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>`;
    console.log(JSON.stringify(data));
    list.push(JSON.stringify(data));
    localStorage.setItem("list", list);
    console.log(`list array size : ${list.length}`);
    updateMain(list);

    const del = document.querySelector("#delete");
    del.addEventListener("click", () => {
      remove(data, list);
      updateMain(list);
    });
    modal.close();
});



}

export function getData() {
    let arrays = JSON.parse(window.localStorage.getItem('list'));
    if(arrays == null){
      return [];
    }
    else{
      return arrays;
    }
}

  export function updateMain(list) {
    const main = document.querySelector('main');
    main.innerHTML="";
    for(let i = 0; i < list.length; i++){
      let blog = document.createElement('div');
      blog.innerHTML = JSON.parse(list[i]);
      main.appendChild(blog);
    }
  }

  export function remove(data, array) {
    for(let i = 0; i < array.length; i++){
      if(data == JSON.parse(array[i])){
        array.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("list",JSON.stringify(array));
    console.log(localStorage);
  }

  