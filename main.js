window.addEventListener('DOMContentLoaded', init);
export default function init() {
    const intro = document.querySelector(".introduction");
    const skill = document.querySelector("#skill");
    const modal = document.querySelector("#modal");
    const close = document.querySelector("#close");

    intro.addEventListener('click', e =>{
        if(intro.style.backgroundColor != "rgb(181, 226, 244)"){
            intro.style.backgroundColor = "rgb(181, 226, 244)"
        }
        else{
            intro.style.backgroundColor = "rgb(212, 244, 222)";
        }
    });

    skill.addEventListener('click', e =>{
        modal.showModal();
    });

    close.addEventListener('click', e =>{
        modal.close();
    });

}
