import { getRandomColor } from "./utils";

const initApp = () => {
  const button = document.createElement("button");
  button.className = "button";
  button.textContent = "Изменить цвет страницы";

  button.addEventListener("click", () => {
    document.body.style.backgroundColor = getRandomColor();
  });

  document.body.append(button);
  console.log("app init");
};

export default initApp;
