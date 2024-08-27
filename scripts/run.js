const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let clicks = 0;

document.querySelector("html").addEventListener("click", 
	() => { if (++clicks > 3) alert("Ouch! Stop poking me!"); }
);

const img = document.querySelector("img");
img.onclick = () => {
  const src = img.getAttribute("src");
  if (src == "images/one.jpg") {
    img.setAttribute("src", "images/two.jpg");
  } else {
    img.setAttribute("src", "images/one.jpg");
  }
}

let btn  = document.querySelector("button");
let head = document.querySelector("h1");

function setUserName() {
  const name = prompt("Enter your name: ");
  if (!name) {
    setUserName();
  } else {
    localStorage.setItem("name", name);
    head.textContent = `New name, ${name}`;
    console.log('New name:', name);
  }  
}

btn.onclick = () => { setUserName(); };

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  head.textContent = `Previous name, ${storedName}`;
}
