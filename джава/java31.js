
const $ = (sel) => document.querySelector(sel);
document.addEventListener("DOMContentLoaded", () => {
  // 466 — вывести содержимое ячеек
  const btn466 = $("#btn466");
  if (btn466) {
    btn466.onclick = () => {
      const nodes = document.querySelectorAll("#table466 td, #table466 th");
      nodes.forEach(td => console.log(td.textContent));
    };
  }
  // 467 — сумма таблицы
  const btn467 = $("#btn467");
  if (btn467) {
    btn467.onclick = () => {
      let sum = 0;
      document.querySelectorAll("#table467 td, #table467 th").forEach(td => {
        const v = Number(td.textContent);
        if (!isNaN(v)) sum += v;
      });
      const out = $("#sum467");
      if (out) out.textContent = sum;
    };
  }
  // 468 — умножить все td на 2
  const btn468 = $("#btn468");
  if (btn468) {
    btn468.onclick = () => {
      document.querySelectorAll("#table468 td").forEach(td => {
        const v = Number(td.textContent);
        if (!isNaN(v)) td.textContent = v * 2;
      });
    };
  }
  // 469 — td увеличивается на 1 по клику
  document.querySelectorAll("#table469 td").forEach(td => {
    td.addEventListener("click", () => {
      const v = Number(td.textContent);
      td.textContent = isNaN(v) ? td.textContent : v + 1;
    });
  });
  // 470 — по клику менять цвет ячейки
  document.querySelectorAll("#table470 td").forEach(td => {
    td.addEventListener("click", () => td.style.background = "red");
  });
  // 471 — сумма каждой строки в консоль
  const btn471 = $("#btn471");
  if (btn471) {
    btn471.onclick = () => {
      document.querySelectorAll("#table471 tr").forEach(tr => {
        let s = 0;
        tr.querySelectorAll("td").forEach(td => {
          const v = Number(td.textContent);
          if (!isNaN(v)) s += v;
        });
        console.log("Сумма строки:", s);
      });
    };
  }
  // 472 — добавить столбец с суммой строк
  const btn472 = $("#btn472");
  if (btn472) {
    btn472.onclick = () => {
      document.querySelectorAll("#table472 tr").forEach(tr => {
        let s = 0;
        tr.querySelectorAll("td").forEach(td => {
          const v = Number(td.textContent);
          if (!isNaN(v)) s += v;
        });
        const td = document.createElement("td");
        td.textContent = s;
        tr.appendChild(td);
      });
    };
  }
  // 473 — добавить строку
  const btn473 = $("#btn473");
  if (btn473) {
    btn473.onclick = () => {
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>новая</td><td>строка</td>";
      const table = $("#table473");
      if (table) table.appendChild(tr);
    };
  }
  // 474 — по клику менять цвет строки
  document.querySelectorAll("#table474 tr").forEach(tr => {
    tr.addEventListener("click", () => tr.style.background = "lightblue");
  });
  // 475 — суммы строк в консоль
  const btn475 = $("#btn475");
  if (btn475) {
    btn475.onclick = () => {
      document.querySelectorAll("#table475 tr").forEach(tr => {
        let s = 0;
        tr.querySelectorAll("td").forEach(td => {
          const v = Number(td.textContent);
          if (!isNaN(v)) s += v;
        });
        console.log("Сумма:", s);
      });
    };
  }
  // 476 — создать таблицу NxM
  const btn476 = $("#btn476");
  if (btn476) {
    btn476.onclick = () => {
      const N = Math.max(0, parseInt($("#n476").value || 0, 10));
      const M = Math.max(0, parseInt($("#m476").value || 0, 10));
      const table = $("#table476");
      if (!table) return;
      table.innerHTML = "";
      for (let i = 0; i < N; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < M; j++) {
          const td = document.createElement("td");
          td.textContent = "";
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
    };
  }
  // 477 — создать NxN квадрат и покрасить диагональ
  const btn477 = $("#btn477");
  if (btn477) {
    btn477.onclick = () => {
      const N = Math.max(0, parseInt($("#n477").value || 0, 10));
      const table = $("#table477");
      if (!table) return;
      table.innerHTML = "";
      for (let i = 0; i < N; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < N; j++) {
          const td = document.createElement("td");
          td.textContent = Math.floor(Math.random() * 10);
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
    };
  }
  const btn477diag = $("#btn477diag");
  if (btn477diag) {
    btn477diag.onclick = () => {
      document.querySelectorAll("#table477 tr").forEach((tr, i) => {
        const td = tr.children[i];
        if (td) td.style.background = "yellow";
      });
    };
  }
  // 478 — сумма диагонали
  const btn478 = $("#btn478sum");
  if (btn478) {
    btn478.onclick = () => {
      let sum = 0;
      document.querySelectorAll("#table477 tr").forEach((tr, i) => {
        const td = tr.children[i];
        if (td) {
          const v = Number(td.textContent);
          if (!isNaN(v)) sum += v;
        }
      });
      const out = $("#out478");
      if (out) out.textContent = sum;
    };
  }
  // 479 — поменять первую и последнюю строку
  const btn479 = $("#btn479");
  if (btn479) {
    btn479.onclick = () => {
      const table = $("#table479");
      if (!table) return;
      const first = table.querySelector("tr:first-child");
      const last = table.querySelector("tr:last-child");
      if (first && last) table.insertBefore(last, first);
    };
  }
  // 480 — поменять первый и последний столбец
  const btn480 = $("#btn480");
  if (btn480) {
    btn480.onclick = () => {
      document.querySelectorAll("#table480 tr").forEach(tr => {
        const first = tr.children[0];
        const last = tr.children[tr.children.length - 1];
        if (first && last) tr.insertBefore(last, first);
      });
    };
  }

});
