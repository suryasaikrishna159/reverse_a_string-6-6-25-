let str=document.querySelector("input");
let output=document.querySelector("span");
let btn=document.querySelector("#btn");



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let st=str.value;
    let rev="";
    for(let i=0;i<st.length;i++){
        rev+=st[st.length-i-1];
    }
    output.innerText= " "+rev;
    
})