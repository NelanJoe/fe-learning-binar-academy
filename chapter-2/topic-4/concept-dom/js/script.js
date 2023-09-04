const initApp = () => {
  const app = document.getElementById("app");
  app.innerHTML = "Hello, app";
  app.style.color = "pink";
  app.style.backgroundColor = "blue";

  // Paragraphs
  const paragraphs = document.getElementsByClassName("paragraph");
  paragraphs[0].innerText = "ini adalah paragraph pertama";
  paragraphs[0].style.color = "red";
  paragraphs[1].style.color = "green";
  paragraphs[2].style.color = "blue";

  // Changes style color after 5 seconds
  setTimeout(() => {
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "black";
    }
  }, 5000);

  // DOM manipulation
  const title = document.createElement("h1");
  title.textContent = "Hello, World";

  document.body.append(title);

  setTimeout(() => {
    paragraphs[2].remove();
  }, 7000);
};

document.addEventListener("DOMContentLoaded", initApp);
