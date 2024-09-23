let div1 = document.getElementById("div1").getBoundingClientRect().top;
let div2 = document.getElementById("div2").getBoundingClientRect().top;
let div3 = document.getElementById("div3").getBoundingClientRect().top;
document.getElementById("part1").addEventListener("click", () => {
  window.scroll(0, div1);
});
document.getElementById("part2").addEventListener("click", () => {
  window.scroll(0, div2);
});
document.getElementById("part3").addEventListener("click", () => {
  window.scroll(0, div3);
});
