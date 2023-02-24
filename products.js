let name = localStorage.getItem("name");
console.log(name)

let Username = "WELCOME GUEST";
if(name==null){
    let Username = "WELCOME GUEST";
}else{
    Username = name;
}

document.getElementById("loginname").innerText = Username;

// fetching the API


fetch("products.json")
	.then((response)=>{
        return response.json()
    })   
	.then((data) =>{
        console.log(data)
        check(data.products)
    })
	.catch(err => console.log(err));

function check(data){
      
    data.forEach(element => {

     let div = document.createElement("div")
     div.classList.add("divclass")

     let img = document.createElement("img")
     img.src = element.image
     img.style.height = "430px"

     let price = document.createElement("p")
     price.innerText = "Rs " + element.price
     price.style.fontSize = "20px"
     price.style.margin = "0 auto"
     price.style.marginTop = "4px"

     let size = document.createElement("div")
     size.classList.add("size")
     let s1 = document.createElement("p")
     let s2 = document.createElement("p")
     let s3 = document.createElement("p")
     s1.innerText = 30
     s2.innerText = 32
     s3.innerText = 34
     s1.classList.add("sizeclass")
     s2.classList.add("sizeclass")
     s3.classList.add("sizeclass")
     size.append(s1,s2,s3)

     div.append(img,price,size)

     document.querySelector(".products").append(div)
     });
    
     //total product count
     document.getElementById("count").innerText = "(" +data.length+")"
}


