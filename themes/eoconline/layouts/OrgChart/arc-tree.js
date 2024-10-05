document.addEventListener("DOMContentLoaded", function () {
  //console.clear();
  setFontSize(document.querySelector("#fontSize"));
});

function setFontSize(el) {
  let fontSize = el.value;
  if (!isNumber(fontSize) || fontSize < 0.5 || fontSize > 5) {
    fontSize = 1;
  }
  document.querySelector(".tree").style.fontSize = fontSize + 'em';
  document.querySelector("#fontSizeValue").innerHTML = fontSize;
  document.querySelector("#fontSize").value = fontSize;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// NOTE: Doesn't work!
function collapseLeafs() {
  var leafs = document.getElementsByClassName(".leaf");
  var len = leafs.length;
  console.log = "Collapsing all " + leafs.length + " leafs.";
  for (var i = 0; i < len; i++) {
    i.style.display = "none";
  }
  console.log("Collapsed all " + leafs.length + " leafs.");
}

// NOTE: Doesn't work!
function showLeafs() {
  var leafs = document.getElementsByClassName(".leaf");
  var len = leafs.length;
  console.log = "Displaying all " + leafs.length + " leafs.";
  for (var i = 0; i < len; i++) {
    i.style.display = "block";
  }
  console.log("Displayed all " + leafs.length + " leafs.");
}

function collapseTree() {
  var checkboxes = document.querySelector(".tree").getElementsByTagName("input");
  var len = checkboxes.length;
  for (var i = 0; i < len; i++) {
    checkboxes[i].checked = "";
  }
  console.log("Collapsed all " + checkboxes.length + " nodes.");
}

function expandTree() {
  var checkboxes = document.querySelector(".tree").getElementsByTagName("input");
  var len = checkboxes.length;
  for (var i = 0; i < len; i++) {
    checkboxes[i].checked = "checked";
  }
  console.log("Expanded all " + checkboxes.length + " nodes.");
}


var expandedByDefault = true;
var listItemHTML = "";
var listLog = "";
var listUrl = "";

/// <summary>
/// Create an HTML unordered list of items from a JSON object
/// Recurse through the JSON object, building up an HTML string to display, appending them to the treeElement.
/// </summary>
function buildTree(o, treeElement) {

  console.log("buildTree: " + o?.toString());
  // console.log("1) listItemHTML: " + listItemHTML);
  for (var i in o) {
    console.log("processing: " + i.toString());
    if (o[i] instanceof Array) {
      // console.log("got Array");
      // treeElement.appendChild(document.createComment(i + ": ARRAY"));
    }
    else if (o[i] instanceof Object) {
      // console.log("got Object");
      // treeElement.appendChild(document.createComment(i + ": OBJECT"));
    }
    else {
      console.log(i + ': ' + o[i]);
      listLog += i + '=' + o[i] + ";  ";

      switch (i) {
        case "name": listItemHTML += "<b>" + o[i] + "</b>"; break;
        case "url": listItemHTML += " (<a href='" + o[i] + "'>" + o[i] + "</a>): "; break;
        case "meta": listItemHTML += "<i> " + o[i] + "</i>"; break;
        default: listItemHTML += " [Unknown node (" + i + ")=" + o[i] + "] ";
      }
    }

    if (o[i] instanceof Object) {

      if (listItemHTML != "") {
        console.log("=== dump caches!");
        // Output list item we've been building up before processing children
        console.log(listLog);
        listLog = "";

        var uniqueID = Math.floor(Math.random() * 1000000).toString();
        var newLI = document.createElement('li');

        var newInput = document.createElement('input');
        newInput.id = "c" + uniqueID;
        newInput.type = "checkbox";
        newInput.checked = expandedByDefault;

        var newLabel = document.createElement('label');
        newLabel.htmlFor = "c" + uniqueID;
        newLabel.className = "tree_label";
        newLabel.innerHTML = DOMPurify.sanitize(listItemHTML);  //NOTE: Sanitization is not needed with trusted JSON

        // Or if last leaf (no children), add a leaf class
        if (Object.keys(o[i]).length == 0) {
          newLI.className = "leaf";
          var newSpan = document.createElement('span');
          newSpan.className = "tree_label";
          newSpan.innerHTML = DOMPurify.sanitize(listItemHTML);  //NOTE: Sanitization is not needed with trusted JSON
          newLI.appendChild(newSpan);
        }
        listItemHTML = "";

        treeElement.appendChild(newLI);

        if (Object.keys(o[i]).length > 0) {
          newLI.appendChild(newInput);
          newLI.appendChild(newLabel);
        }
        treeElement = newLI;
      }

      var newUL = document.createElement('ul');
      if (o[i] instanceof Array) {
        newUL.className = "array";
        treeElement.appendChild(newUL);
      } else if (o[i] instanceof Object) {
        // no need to create a new UL for non-arrays
        newUL = treeElement;
      }

      console.group("children ");
      buildTree(o[i], newUL);
      console.groupEnd();
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
  var json = document.getElementById('unorderedList').innerHTML;
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
  document.getElementById('unorderedList').innerHTML = '';
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
