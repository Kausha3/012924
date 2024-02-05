window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createEditButton(row, col) {
  let btn = document.createElement("button");
  btn.innerHTML = "Edit text";
  btn.onclick = function() {
    let newText = prompt("Enter new text for Cell (" + row + ", " + col + ")", "");
    if (newText !== null && newText !== "") {
      this.parentNode.previousSibling.textContent = "Cell (" + row + ", " + col + ") " + newText;
    }
  };
  return btn;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createEditButton(i, 0));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}
