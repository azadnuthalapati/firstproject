let st=""
let buttons=document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
    if(e.target.innerHTML == '='){
        st =eval(st)
        document.querySelector('input').value=st
    }
    else if(e.target.innerHTML == 'AC')
{
     st =""
        document.querySelector('input').value=st

}
   else{
    st=st+e.target.innerHTML
    document.querySelector('input').value=st
   }
})})