let box = document.querySelector("#box");

async function getData() {
  let respone = await fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "GET",
  });
  let data = await respone.json();
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    box.innerHTML += createLi(data[i].id, data[i].name, data[i].body, data[i].email);
  }
}
getData();

function createLi(id,name,body, email) {
  return ` <ul>
  <li id="id">${id} 
  <span id="names">${name}</span>  |
  <span id="names">${body}</span> |
  <span id="email">${email}</span> 
  
  </li> 
  </ul>`;
//   <span id="title">${title}</span> 
}