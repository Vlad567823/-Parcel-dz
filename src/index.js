import { increment } from "./modules/counter";
import { log } from "./modules/logger";

const valueEl = document.getElementById("value");
const btn = document.getElementById("inc");

btn.addEventListener("click", () => {
  const newValue = increment();
  valueEl.textContent = newValue;
  log(newValue);
});