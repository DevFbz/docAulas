const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const styles = getComputedStyle(document.body);
const backgroundColor = styles.backgroundColor;

for (let p of ps) {
  p.style.color = "#ffff";
  p.style.backgroundColor = backgroundColor;
  console.log(p);
}
