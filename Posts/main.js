let box = document.querySelector("#box")

async function getData() {
  let respone = await fetch("https://jsonplaceholder.typicode.com/POSTS",{method:"GET"});
  let data = await respone.json();
  console.log(data);
  for (let i = 0; i < data.length; i++) {
      box.innerHTML+=createLi( data[i].id, data[i].title )
  }
}
getData();

function createLi(id, title) {
  return ` <ul><li id="id">${id} <span id="title">${title}</span> </li> </ul>`;
}
