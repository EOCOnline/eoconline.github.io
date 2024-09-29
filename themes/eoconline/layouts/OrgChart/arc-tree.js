let fontSize = document.querySelector(".tree").style.fontSize;
setFontSize(fontSize);
let uniqueID = 0;

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

  traverse(jsonObject);

}

function traverse2(o) {
  for (var i in o) {
    if (!!o[i] && typeof (o[i]) == "object") {
      console.log(i, o[i]);
      traverse(o[i]);
    } else {
      console.log(i, o[i]);
    }
  }
}


function traverse(jsonObj) {
  if (jsonObj !== null && typeof jsonObj == "object") {
    Object.entries(jsonObj).forEach(([key, value]) => {
      // key is either an array index or object key
      console.log("traversing: " + key + " : " + value.toString());
      traverse(value);
    });
  }
  else {
    // jsonObj is a number or string
    console.log("    Got # or $: " + jsonObj.toString());
  }
}


function makeList2(jsonObject, listElement) {

  for (var i in jsonObject) {

    console.log("processing: " + i.toString());

    let name = "";
    let url = "";
    let meta = "";
    let children = false;

    if (jsonObject[i] instanceof Array) {
      console.log("Array: " + i.toString());
      name = i.toString();
      children = true;
    }






    var newLI = document.createElement('li');

    if (jsonObject[i] instanceof Array) {

      newLI.innerHTML = i + ": ARRAY";
      newLI.className = "arrayOrObject"; //add a class tag so we can style differently
    }
    else if (jsonObject[i] instanceof Object) {

      newLI.innerHTML = i + ": OBJECT";
      newLI.className = "arrayOrObject"; //add a class tag so we can style differently
    }
    else {
      newLI.innerHTML = i + ': ' + jsonObject[i];
    }

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




function makeListOrig(jsonObject, listElement) {
  for (var i in jsonObject) {

    // console.log("processing: " + i.toString());

    var newLI = document.createElement('li');

    if (jsonObject[i] instanceof Array) {
      newLI.innerHTML = i + ": ARRAY";
      newLI.className = "arrayOrObject";
    }
    else if (jsonObject[i] instanceof Object) {
      newLI.innerHTML = i + ": OBJECT";
      newLI.className = "arrayOrObject";
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
  readJSONFile(file).then(
    json => {
      console.log(json);
      makeList(json, document.getElementById('unorderedList'));
      makeListOrig(json, document.getElementById('JSONunorderedList'));
    }
  );
}
/*

function validateJson(jsonFile) {
  try {
    JSON.parse(jsonFile);
  } catch (e) {
    return false;
  }
  return true;
}

function downloadJson() {
  var json = document.getElementById('JSONunorderedList').innerHTML;
  var blob = new Blob([json], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "orgchart.json");
}

function uploadJson() {
  var file = document.getElementById('file').files[0];
  if (file) {
    fileChange(file);
  }
}

function clearJson() {
  document.getElementById('JSONunorderedList').innerHTML = '';
}

// https://ajv.js.org/guide/getting-started.html#basic-data-validation
// https://www.npmjs.com/package/ajv

// or ESM/TypeScript import
import Ajv from "ajv"
// Node.js require:
const Ajv = require("ajv")

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },
  },
  required: ["foo"],
  additionalProperties: false,
}

const data = {
  foo: 1,
  bar: "abc",
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)

*/
