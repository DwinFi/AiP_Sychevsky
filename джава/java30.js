document.addEventListener("DOMContentLoaded", () => {

// 455.1
document.getElementById("btn4551").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "item";
  document.getElementById("ol4551").appendChild(li);
});

// 455.2
document.getElementById("btn4552").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "item";
  document.getElementById("ol4552").appendChild(li);
});

// 456
document.getElementById("btn456").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "item";
  li.addEventListener("click", () => li.textContent += "!");
  document.getElementById("ol456").appendChild(li);
});

// 457
document.getElementById("btn457").addEventListener("click", () => {
  const ul = document.getElementById("ul457");
  ul.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
  }
});

// 458
document.getElementById("btn458").addEventListener("click", () => {
  const wrap = document.getElementById("inputs458");
  const out = document.getElementById("out458");
  wrap.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const input = document.createElement("input");
    input.placeholder = `input ${i}`;
    input.addEventListener("blur", () => out.textContent = input.value);
    wrap.appendChild(input);
    wrap.appendChild(document.createElement("br"));
  }
});

// 459.1
document.getElementById("ul459-1").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") e.target.remove();
});

// 459.2
document.getElementById("btn459-2").addEventListener("click", () => {
  const parent = document.getElementById("parent459");
  if (parent.lastElementChild) parent.lastElementChild.remove();
});

// 460
document.getElementById("btn460").addEventListener("click", () => {
  const ul = document.getElementById("ul460");
  const first = document.createElement("li");
  first.textContent = "start";
  ul.insertBefore(first, ul.firstElementChild);

  const last = document.createElement("li");
  last.textContent = "finish";
  ul.appendChild(last);
});

// 461
document.getElementById("btn461").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "new";
  document.getElementById("parent461").insertBefore(
    li,
    document.getElementById("elem461")
  );
});

// 462
const elem462 = document.getElementById("elem462");

document.getElementById("btn462-before").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "!!! beforeBegin";
  elem462.insertAdjacentElement("beforeBegin", p);
});

document.getElementById("btn462-after").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "!!! afterEnd";
  elem462.insertAdjacentElement("afterEnd", p);
});

document.getElementById("btn462-afterBegin").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "!!! afterBegin";
  elem462.insertAdjacentElement("afterBegin", p);
});

document.getElementById("btn462-beforeEnd").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "!!! beforeEnd";
  elem462.insertAdjacentElement("beforeEnd", p);
});

// 463
document.getElementById("btn463").addEventListener("click", () => {
  document.getElementById("elem463").insertAdjacentHTML(
    "beforeBegin",
    `<div class="www"><p>new</p><input></div>`
  );
});

// 464
document.getElementById("btn464").addEventListener("click", () => {
  const input = document.getElementById("input464");
  document.getElementById("wrap464").appendChild(
    input.cloneNode(true)
  );
});

// 465
document.getElementById("btn465").addEventListener("click", () => {
  const e = document.getElementById("elem465");
  console.log("matches .www =", e.matches(".www"));
  console.log("nodeName =", e.nodeName);

  const e1 = document.getElementById("elem1");
  const e2 = document.getElementById("elem2");
  console.log("elem1.contains(elem2) =", e1.contains(e2));
});

});
