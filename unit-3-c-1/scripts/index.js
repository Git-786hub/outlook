//store the products array in localstorage as "products"
function pannel(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function storedata(ele) {
    ele.preventDefualt();
    let form = document.getElementById("products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;   

    console.log(storedata)
    let p1=new pannel(type,desc,price,image);

    let data=JSON.parse(localStorage.getItem("products")) || [];
    data.push(p1);

    localStorage.setItem("products",JSON.stringify(data));


    window.location.reload();

}

