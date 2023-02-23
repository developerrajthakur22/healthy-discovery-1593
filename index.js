let name = localStorage.getItem("name");
console.log(name)

let Username = "WELCOME GUEST";
if(name==null){
    let Username = "WELCOME GUEST";
}else{
    Username = name;
}

document.getElementById("loginname").innerText = Username;



