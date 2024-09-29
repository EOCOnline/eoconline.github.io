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


function setFontSize(el) {
  fontSize = el.value;
  if (!isNumber(fontSize) || fontSize < 0.5) {
    fontSize = 1;
  }
  document.querySelector(".tree").style.fontSize = fontSize + 'em';
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function expandTree() {
  var checkboxes = document.querySelector(".tree").getElementsByTagName("input");
  var len = checkboxes.length;
  for (var i = 0; i < len; i++) {
    checkboxes[i].checked = "checked";
  }
  console.log("Expanded all " + checkboxes.length + " nodes.");
}

function collapseTree() {
  var checkboxes = document.querySelector(".tree").getElementsByTagName("input");
  var len = checkboxes.length;
  for (var i = 0; i < len; i++) {
    checkboxes[i].checked = "";
  }
  console.log("Collapsed all " + checkboxes.length + " nodes.");
}

// {{ now.UnixNano }} to create a unique ID



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

async function readJSONFile(file) {
  return new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.onload = event => {
      resolve(JSON.parse(event.target.result))
    };
    fileReader.onerror = (error => reject(error));
    fileReader.readAsText(file);
  });
}

async function fileChange(file) {
  readJSONFile(file).then(json => makeList(json, document.getElementById('JSONunorderedList')));
}
