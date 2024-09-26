let fontSize = document.querySelector(".tree").style.fontSize;
setFontSize(fontSize);

document.querySelector("#fontSize").addEventListener("input", (e) => { setFontSize(e.target); });

document.querySelector("#fontSize").addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    // esc key pressed
    const isNotCombinedKey = !(event.ctrlKey || event.altKey || event.shiftKey);
    if (isNotCombinedKey) {
      // Escape key pressed without ctrl or alt or shift keys
      setFontSize(1);
    }
  }
});

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function setFontSize(el) {
  fontSize = el.value;
  if (!isNumber(fontSize) || fontSize < 0.5) {
    fontSize = 1;
  }
  document.querySelector(".tree").style.fontSize = fontSize + 'em';
}

function expandTree() {
  var checkboxes = document.querySelector(".tree").getElementsByTagName("input");
  for (var i = 0; i < checkboxes.length; ++i) { checkboxes[i].checked = "checked"; }
  console.log("expanded " + checkboxes.length + "tree nodes");
}

function collapseTree() {
  var checkboxes = document.querySelector(".tree").getElementsByTagName("input");
  for (var i = 0; i < checkboxes.length; ++i) { checkboxes[i].checked = ""; }
  console.log("Collapsed " + checkboxes.length + "tree nodes");
}

/*
window.onload = () => {
  createList(data);
  markupArray.push("</ul>");
  $("#list").html(markupArray.join(""));
};
*/

dataSource = {
  id: 1,
  name: "Lao Lao",
  title: "general manager",
  children: [
    { id: 2, name: "Bo Miao", title: "department manager" },
    {
      id: 3,
      name: "Su Miao",
      title: "department manager",
      children: [
        { id: 4, name: "Tie Hua", title: "senior engineer" },
        {
          id: 5,
          name: "Hei Hei",
          title: "senior engineer",
          children: [
            { id: 6, name: "Pang Pang", title: "engineer" },
            { id: 7, name: "Xiang Xiang", title: "UE engineer" },
          ],
        },
      ],
    },
    { id: 8, name: "Yu Jie", title: "department manager" },
    { id: 9, name: "Yu Li", title: "department manager" },
    { id: 10, name: "Hong Miao", title: "department manager" },
    { id: 11, name: "Yu Wei", title: "department manager" },
    { id: 12, name: "Yu Tie", title: "department manager" },
  ],
};

// https://stackoverflow.com/questions/6692538/generate-unordered-list-from-json-data

var jsonObj = {
  "labels": [{
    "labelFont": "35pt Calibri", "labelLocation": { "x": 0.1483, "y": 0.75 }, "labelText": "fluffer"
  },
  { "labelFont": "35pt Calibri", "labelLocation": { "x": 0.666, "y": 0.666 }, "labelText": "nutter" }
  ]
}; //some json to display

var listEl = document.getElementById('JSONunorderedList');
makeList(jsonObj, listEl);

function makeList(jsonObject, listElement) {
  for (var i in jsonObject) {
    console.log("processing: " + i.toString());
    // iterate through the array or object
    // insert the next child into the list as a <li>
    var newLI = document.createElement('li');

    if (jsonObject[i] instanceof Array) {
      newLI.innerHTML = i + ": ARRAY";
      newLI.className = "arrayOrObject"; //add a class tag so we can style differently
    }
    else if (jsonObject[i] instanceof Object) {
      newLI.innerHTML = i + ": OBJECT";
      newLI.className = "arrayOrObject"; //add a class tag so we can style differently
    }
    else
      newLI.innerHTML = i + ': ' + jsonObject[i];

    listElement.appendChild(newLI);
    //insert a <ul> for nested nodes

    if (jsonObject[i] instanceof Array || jsonObject[i] instanceof Object) {
      var newUL = document.createElement('ul');
      //newUL.innerHTML=i;
      listElement.appendChild(newUL);
      makeList(jsonObject[i], newUL);
    }
  }
}
