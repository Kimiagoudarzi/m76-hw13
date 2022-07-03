const API_URL = "https://62ab6beda62365888bdc2f11.mockapi.io/Hw13";
const row = document.querySelector(".tr-1");
const tBody = document.querySelector(".tbody");
document.addEventListener("DOMContentLoaded", readInfo());

// call
function readInfo(){
    fetch(`${API_URL}`)
    .then(response => response.json())
    .then((data) =>{
        console.log(data);
    });
}
// siteID
let sit = [];
response.forEach((el)=>{
    sit.push(el.SiteId);
});
let mainSit = sit.filter((item,pos) =>{
    return sit.indexOf(item) == pos;
})
// projectId
let pro = [];
response.forEach((el) => {
    pro.push(el.ProjectId);
});
let mainPro = pro.filter((item,pos) =>{
    return pro.indexOf(item) == pos;
});

mainSit.forEach((element)=>{
    let ele = document.createElement("td");
    ele.dataset.id = response.Id;
    ele.innerText = element;
    ele.className = "id";
    ele.setAttribute("rowSpan","2");
    row.appendChild(ele);
});

let rows = [];
mainPro.forEach((project) => {
    rows.push({
      mainSit: response.filter((item) => item.ProjectId === project),
    });
});
console.log(rows);

let tar1 = [];
let tar2 = [];
let tar3 = [];

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < 7; j++) {
    if (tar1.length < 7) {
      tar1.push(rows[i].mainSit[j].Target);
    } else if (tar2.length < 7) {
      tar2.push(rows[i].mainSit[j].Target);
    } else if (tar3.length < 7) {
      tar3.push(rows[i].mainSit[j].Target);
    }
  }
}
// console.log(tar1);
// console.log(tar2);
// console.log(tar3);


mainPro.forEach((element) => {
    let column = document.createElement("tr");
    let ele = document.createElement("td");
    ele.dataset.id = response.Id;
    ele.innerText = element;
    ele.className = "id";
    ele.setAttribute("colSpan", "2");
    column.appendChild(ele);
    tBody.appendChild(column);
})