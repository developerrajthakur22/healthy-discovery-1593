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
        //check(data.products)
        filtering(data.products)
        
    })
	.catch(err => console.log(err));

let cartdata = JSON.parse(localStorage.getItem("cart")) || []    

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

     div.addEventListener("click", ()=>{
        cartdata.push(element)
        localStorage.setItem("cart", JSON.stringify(cartdata))
     })

     document.querySelector(".products").append(div)
     });
    
     //total product count
     document.getElementById("count").innerText = "(" + data.length + ")"

    }
     //filter part
     function filtering(data){
      
        //filter by price
        let price = document.querySelectorAll(".priceInp input")

        for(let i = 0; i < price.length; i++){
           price[i].addEventListener("change", ()=>{
           
            document.querySelector(".products").innerHTML = "";

           let pricefilter = data.filter((element)=>{
                  if(element.price < Number(price[i].value)){
                    return element
                  }
              })
              check(pricefilter)
           })
         }
         
        //  filter by gender
        let genderC = document.querySelectorAll(".categoryinp input")

         for(let i = 0; i < genderC.length; i++){
            genderC[i].addEventListener("change", ()=>{

           document.querySelector(".products").innerHTML = "";
           
           let genderfilter = data.filter((element)=>{
             if(element.gender == genderC[i].value){
                 return element
             }
           })
           check(genderfilter)
           if(genderC[i].value=="all"){
            check(data)
           } 
            })
         }

        //low to high filter
        
         document.querySelector(".high").addEventListener("click", ()=>{
              
              document.querySelector(".products").innerHTML = "";
              
              let n = data.length
              for(let i = 0; i < n; i++){
                for(let j = 0; j < n-i-1; j++){
                    if(data[j].price> data[j+1].price){
                        let temp = data[j].price
                        data[j].price = data[j].price
                        data[j+1].price = temp
                    } 
                }  
            }
             check(data)
            })
         
          //high to low filter
         document.querySelector(".low").addEventListener("click", ()=>{
            document.querySelector(".products").innerHTML = "";
              
            let n = data.length
            for(let i = 0; i < n; i++){
              for(let j = 0; j < n-i-1; j++){
                  if(data[j].price> data[j+1].price){
                      let temp = data[j].price
                      data[j].price = data[j].price
                      data[j+1].price = temp
                  } 
              }  
          }
           let temp = []
           for(let i = 0; i < data.length; i++){
               temp.push(data[data.length-1-i])
           }
           check(temp)

         })

         ///by default this will run if none of filter is selected
        check(data)
     }
     
