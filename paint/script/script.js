const colors=document.querySelector(".colors");
const array_color=["red","blue","green","yellow","purple","black","white"]
for(let i=0;i<8;i++){
    let newcyrcle=document.createElement("div");
    newcyrcle.classList.add("cyrcle");
    if (i!=7)newcyrcle.style.backgroundColor=array_color[i];
    else {
        newcyrcle.style.backgroundImage=`url(./img/1.png)`;
        newcyrcle.style.backgroundSize="cover";
    }
    colors.appendChild(newcyrcle);
}

const colors_array=document.querySelectorAll(".cyrcle");

colors_array.forEach(element => {
    element.addEventListener("click",()=>{  
        colors_array.forEach(el=>{
            el.classList.remove("big");
        })
        element.classList.add('big')
        console.log(element.style.backgroundColor)
        box_color=element.style.backgroundColor
    })
});

const workspace=document.querySelector(".workspace");
for(let i=0;i<48;i++){
    let line =document.createElement("div");
    line.classList.add("line");
    for(let j=0;j<48;j++){
        let box=document.createElement("div");
        box.classList.add("box");
        line.appendChild(box);
    }
    workspace.appendChild(line);
}

let flag;
const array_box=document.querySelectorAll(".box")
array_box.forEach(element => {
    element.addEventListener("click",()=>{
        element.style.backgroundColor=box_color
    })
    element.addEventListener("mousedown",()=>{
        flag=true;
    })  
    document.addEventListener("mouseup",()=>{
        flag=false;
    })  
    element.addEventListener("mousemove",()=>{
        if(flag==true) element.style.backgroundColor=box_color
    })

});

colors_array[7].addEventListener("click",()=>{
    array_box.forEach(element => {
        element.style.backgroundColor="white"
    });
    colors_array[7].classList.remove("big")
});