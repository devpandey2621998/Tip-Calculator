let button=document.getElementById('button');
button.addEventListener('click',function(){
    let Bill=document.getElementById('bill').value;
    let Tip=document.getElementById('tp').value;
    let Np=document.getElementById('np').value;
    if(Bill=== "" || Bill === '0'){
        alert("Please enter the Bill amount");
        return;
    }
    if(Np=== "" || Np === '0'){
        alert("Please enter the Number Of People");
        return;
    }
    let Tpp=document.getElementById('tpp').value=((Bill*Tip)/(100*Np));
    document.getElementById('topp').value=((Bill/Np)+Tpp);
})
