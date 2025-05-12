const ekleButon = document.getElementById("yer");
const girdi = document.getElementById("yeni");
const liste = document.getElementById("liste");

let notlar = [];

ekleButon.addEventListener("click", () => {
  const metin = girdi.value.trim();
  if (metin !== "") {
    notlar.push(metin);
    girdi.value = "";
    listeyiGoster();
  }
});

function listeyiGoster() {
  liste.innerHTML = "";

  for (let i = 0; i < notlar.length; i++) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = notlar[i];

    
    span.addEventListener("click", () => {
      li.classList.toggle("done");
    });

    const silBtn = document.createElement("button");
    silBtn.textContent = "Delete";
    silBtn.classList.add("delete-btn");

    silBtn.addEventListener("click", () => {
      notlar.splice(i, 1); 
      listeyiGoster();     
    });

    li.appendChild(span);
    li.appendChild(silBtn);
    liste.appendChild(li);
  }
}