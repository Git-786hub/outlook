function append(){
let data=JSON.parse(localStorage.getItem("products")) || [];

let box=document.getElementById("all_products");

box.innerHTML=null;

data.forEach(function(ele,index){
    let div=document.createElement("div");

    let img=document.createElement("img");
    img.innerText=ele.image;

    img.setAttribute("id","img")
    let type=document.createElement("p");
    type.innerText=el.type;

    let Desc=document.createElement("p");
    Desc.innerText=ele.Desc;

    let price=document.createElement("p");
    price.innerText=ele.price;

   

    let btn=document.createElement("button");
    btn.innerText="Remove";

    btn.addEventListener("click",function(){
            removeitem(index);
    })

    div.append(img,type,Desc,price,btn);
    box.append(div);

});

}
append();

function Remove(index){
  console.log(index)
  data.splice(index,1)
  localStorage.setItem("product",JSON.stringify(data))    
  window.location.reload();
}