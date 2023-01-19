let buton = document.querySelector("#btn");
let input = document.getElementById("input");
let list = document.querySelector(".list");
// let tik = document.querySelector(".fa-check-double");
// let del = document.querySelector(".fa-trash-can");
let box = document.querySelector(".container");

// buton.addEventListener("click", () => {
// //   console.log(input.value)
// if(input.value!==''){
//   list.innerHTML += `<li><i class="fa-solid fa-check-double"></i>${input.value}<i class="fa-regular fa-trash-can"></i></li>`;
//  input.value = "";}
//  else{}
// });

// tik.addEventListenner("click",()=>{
//     e.target.style.color="#00000"
// })
box.addEventListener("click", (e) => {
  if (e.target.id === "btn") {
    list.innerHTML += `<li><i class="fa-solid fa-check-double"></i><p>${input.value}</p><i class="fa-regular fa-trash-can"></i></li>`;
  }
  // if(e.target.className==='fa-solid fa-check-double'){}
  if (e.target.classList.contains("fa-check-double")) {
    e.target.classList.toggle("color");
    console.log(e.target);
    e.target.nextElementSibling.classList.toggle("input-value");
    console.log(e.target.nextElementSibling);
    console.log(
      e.target.parentElement.parentElement.parentElement.children[1].children[1]
    );
    e.target.parentElement.parentElement.parentElement.children[1].children[1].style.backgroundColor =
      "red";
    e.target.classList.contains("btn1");

    console.log(e.target.classList.contains("btn1"));
  }
  if (e.target.classList.contains("fa-regular")) {
    console.log(e.target.parentElement);
    e.target.parentElement.style.display = "none";
  }

  input.value = "";
});
