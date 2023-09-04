const initApp = () => {
  const bgColor = document.querySelector(".bg-color");
  const textColor = document.querySelector(".text-color");

  bgColor.addEventListener("change", (e) => {
    document.body.style.backgroundColor = e.target.value;
  });
  textColor.addEventListener("change", (e) => {
    document.body.style.color = e.target.value;
  });
};

document.addEventListener("DOMContentLoaded", initApp);
