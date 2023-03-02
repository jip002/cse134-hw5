

window.addEventListener('DOMContentLoaded', init);
export default function init() {
const alert_modal = document.querySelector("#alert_modal");
const ok = document.querySelector("#OK");
const alert = document.querySelector("#alert");

const confirm = document.querySelector("#confirm");
const confirm_modal = document.querySelector("#confirm_modal");
const cancel = document.querySelector("#cancel");
const ok2 = document.querySelector("#ok2");

const prompt = document.querySelector("#prompt");
const prompt_modal = document.querySelector("#prompt_modal");
const ok_prompt = document.querySelector("#ok_prompt");
const cancel_prompt = document.querySelector("#cancel_prompt");
const input = document.querySelector("#input");

const output = document.querySelector("#output");

alert.addEventListener('click', e => {
    alert_modal.showModal();
});

ok.addEventListener('click', e => {
    alert_modal.close();
});

confirm.addEventListener('click', e => {
    var choice;
    confirm_modal.showModal();
    /*output.innerHTML = `The value returned by the confirm method is : (${choice})`;*/
});

ok2.addEventListener('click', e => {
    confirm_modal.close();
    output.innerHTML = `Confirm result : true`;
});

cancel.addEventListener('click', e => {
    confirm_modal.close();
    output.innerHTML = `Confirm result : false`;
});

prompt.addEventListener('click', e => {
    console.log("aa");
    prompt_modal.showModal();
});

ok_prompt.addEventListener('click', e => {
    prompt_modal.close();
    output.innerHTML = `OK, so now is ${input.value}`;
    
});

cancel_prompt.addEventListener('click', e => {
    prompt_modal.close();
    output.innerHTML = "Nothing entered!";
});

}