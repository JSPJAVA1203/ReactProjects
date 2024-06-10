function onClick(){
    const ul = document.getElementById("ul");
    let list="";
    const start = Date.now();
    for(let i=0;i <3000;i++){
        list += `<li>${i}</li>`;
    }
    ul.innerHTML = list;
    const end=Date.now();
    console.log(end - start+ "ms");
}