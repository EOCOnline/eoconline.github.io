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

[{
  "SponsorID": 382,
  "SponsorName": "Test Name",
  "MonthEndReport": true,
  "AccountingManager": "Me",
  "UnboundProperties": [], "State": 16
}]

jsonObj =
{
  name: "FEMA.Gov_Home",
  url: "/",
  meta: "FEMa _meta",
  children: [
    {
      name: "ES",
      url: "/es",
      meta: "Spanish_meta",
      children: []
    },
    {
      name: "Emergency Managers",
      url: "/emergency-managers",
      meta: "Emergency Manager information",
      children: []
    }
  ]
};


buildTree(jsonObj, document.getElementById('unorderedList'));
var listItemHTML = "";
var listLog = "";
var expandedByDefault = false;

/// <summary>
/// Create an HTML unordered list of items from a JSON object
/// Recurse through the JSON object, building up an HTML string to display, appending them to the treeElement.
/// </summary>
function buildTree(o, treeElement) {

  for (var i in o) {
    if (Boolean(o[i]) && typeof (o[i]) == "object") {

      if (listItemHTML != "") {
        // Output list item we've been building up before processing children
        console.log(listLog);
        listLog = "";

        var uniqueID = Math.floor(Math.random() * 1000000).toString();
        var newLI = document.createElement('li');

        var newInput = document.createElement('input');
        newInput.type = "checkbox";
        newInput.id = "c" + uniqueID;
        newInput.checked = expandedByDefault;

        var newLabel = document.createElement('label');
        newLabel.className = "tree_label";
        newLabel.htmlFor = "c" + uniqueID;
        newLabel.innerHTML = DOMPurify.sanitize(listItemHTML);  //NOTE: Needed?!
        listItemHTML = "";

        treeElement.appendChild(newLI);
        treeElement.appendChild(newLabel);
        treeElement.appendChild(newInput);
      }

      var newUL = document.createElement('ul');
      treeElement.appendChild(newUL);
      console.group("children of " + i.name)
      buildTree(i.children, newUL);
      console.groupEnd()

    } else {
      listLog += i + ': ' + o[i] + "; ";
      listItemHTML += i + ': ' + o[i] + "; ";
    }
  }
}

function traverse2(o) {
  for (var i in o) {
    if (Boolean(o[i]) && typeof (o[i]) == "object") {
      console.log(i + " (object) is " + o[i]);
      console.group(i.toString());
      traverse2(o[i]);
      console.groupEnd();
    } else {
      console.log(i + ":  " + o[i]);
    }
  }
}

//const object = {a: 1, b: 2, c: 3 };
//for (const property in object) {console.log(`${property}: ${object[property]}`);}

function traverse(jsonObj) {
  if (jsonObj !== null && typeof jsonObj == "object") {
    Object.entries(jsonObj).forEach(([key, value]) => {
      // key is either an array index or object key
      console.log("traversing: " + key + " : " + value.toString());
      console.group(value.toString());
      traverse(value);
      console.groupEnd();
    });
  }
  else {
    // jsonObj is a number or string
    console.log("Got # or $: " + jsonObj.toString());
  }
}

function traverse0(o) {
  debugger;
  for (var i in o) {
    //console.log("processing: " + i, o[i]);
    if (!!o[i] && typeof (o[i]) == "object") {
      console.log("Obj:" + i, o[i]);
      traverse(o[i]);
    } else {
      console.log(i, o[i]);
    }
  }
}



function makeListOrig(jsonObject, treeElement) {
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

    treeElement.appendChild(newLI);
    //insert a <ul> for nested nodes

    if (jsonObject[i] instanceof Array || jsonObject[i] instanceof Object) {
      var newUL = document.createElement('ul');
      //newUL.innerHTML=i;
      treeElement.appendChild(newUL);
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
      buildTree(json, document.getElementById('unorderedList'));
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
