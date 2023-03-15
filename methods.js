

window.addEventListener('DOMContentLoaded', init);
export default function init() {
const postBtn = document.querySelector("#post");
const getBtn = document.querySelector("#get");
const putBtn = document.querySelector("#put");
const deleteBtn = document.querySelector("#delete");
const output = document.querySelector('#response');

const id = document.querySelector("#id");
const articleName = document.querySelector("#article_name");
const articleBody = document.querySelector("#article_body");

//GET
getBtn.addEventListener('click', e => {
    const xml = new XMLHttpRequest();
    xml.open('GET', 'https://httpbin.org/get');
    xml.addEventListener('load', ()=> {
        output.innerHTML = "";
        let text = document.createElement('textarea');
        text.innerHTML = xml.responseText;
        output.appendChild(text);
    });
    xml.send();
});

//POST
postBtn.addEventListener('click', e => {
    const xml = new XMLHttpRequest();
    let info = {
        id : id.value,
        article_name: articleName.value,
        article_body: articleBody.value,
        time: new Date()
    }

    xml.open('POST', 'https://httpbin.org/post');
    xml.setRequestHeader('Content-Type', 'application/json');
    xml.addEventListener('load', ()=> {
        output.innerHTML = "";
        let text = document.createElement('textarea');
        text.innerHTML = xml.responseText;
        output.appendChild(text);
    });
    xml.send(JSON.stringify(info));

});

//PUT
putBtn.addEventListener('click', e => {
    const xml = new XMLHttpRequest();
    let info = {
        id : id.value,
        article_name: articleName.value,
        article_body: articleBody.value,
        time: new Date()
    }

    xml.open('PUT', 'https://httpbin.org/put');
    xml.setRequestHeader('Content-Type', 'application/json');
    xml.addEventListener('load', ()=> {
        output.innerHTML = "";
        let text = document.createElement('textarea');
        text.innerHTML = xml.responseText;
        output.appendChild(text);
    });
    xml.send(JSON.stringify(info));
});

//DELETE
deleteBtn.addEventListener('click', e => {
    const xml = new XMLHttpRequest();
    xml.open('DELETE', 'https://httpbin.org/delete');

    xml.addEventListener('load', ()=> {
        output.innerHTML = "";
        let text = document.createElement('textarea');
        text.innerHTML = xml.responseText;
        output.appendChild(text);
    });

    xml.send();
});
}