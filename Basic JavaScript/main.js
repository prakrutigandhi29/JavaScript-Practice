const form1=document.querySelector("#form");
const name1=document.querySelector("#name");
const email1=document.querySelector("#email");
const msg=document.querySelector(".msg");
const list1=document.querySelector(".namelist");

form1.addEventListener("submit",onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(name1.value===''|| email1.value===''){
        msg.innerHTML="Please enter all details";
        setTimeout(()=> msg.remove(),2000); 
    }
    else{
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(
            `${name1.value} : ${email1.value}`
        ));
        list1.appendChild(li);

        name1.value='';
        email1.value='';
    }
}