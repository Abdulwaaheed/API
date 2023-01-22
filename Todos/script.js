let box = document.querySelector("#box");
let falseBtn = document.querySelector("#false");
let trueBtn = document.querySelector("#true")
let allBtn = document.querySelector("#all")
async function getData() {
  let respone = await fetch("https://jsonplaceholder.typicode.com/todos", {method: "GET",});
  let data = await respone.json();
  console.log(data);
  for(let i=0;i<data.length;i++){
    createLi(data[i].id,data[i].title)
  }

  falseBtn.addEventListener("click", () => {
    box.innerHTML=""
    let falseCom = data.filter((item) => item.completed == false);
    for (let i = 0; i < falseCom.length; i++) {
      createLi(falseCom[i].id, falseCom[i].title);
    }
  }); 
  trueBtn.addEventListener("click", () => {
    box.innerHTML=""
    let trueCom = data.filter((item) => item.completed == true);
    for (let i = 0; i < trueCom.length; i++) {
      createLi(trueCom[i].id, trueCom[i].title);
    }
  });

allBtn.addEventListener("click",()=>{
  box.innerHTML=""
  for(let i=0;i<data.length;i++){
    createLi(data[i].id,data[i].title)
  }
})

}
getData();

function createLi(id, title) {
  box.innerHTML+= ` <ul>
  <li id="id">${id} 
   <span id="title">${title}</span>  
  
  </li> 
  </ul>`;
}
