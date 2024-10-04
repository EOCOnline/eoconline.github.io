document.addEventListener("DOMContentLoaded", function () {
  console.clear();
  setFontSize(document.querySelector("#fontSize"));
  //traverse(jsonObj);
  console.log("========================");
  //makeListOrig(jsonObj, document.getElementById('unorderedList2'));
  console.log("========================");
  buildTree(jsonObj, document.getElementById('unorderedList'));
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
      children: [
        {
          name: "ES1",
          url: "/es1",
          meta: "Spanish1_meta",
          children: []
        },
        {
          name: "ES2",
          url: "/es2",
          meta: "Spanish2_meta",
          children: []
        }
      ]
    },
    {
      name: "Emergency Managers",
      url: "/emergency-managers",
      meta: "Emergency Manager information",
      children: []
    }
  ]
};

var listItemHTML = "";
var listLog = "";
var expandedByDefault = true;

/// <summary>
/// Create an HTML unordered list of items from a JSON object
/// Recurse through the JSON object, building up an HTML string to display, appending them to the treeElement.
/// </summary>
function buildTree(o, treeElement) {

  console.log("buildTree: " + o?.toString());
  // console.log("1) listItemHTML: " + listItemHTML);
  for (var i in o) {
    console.log("processing: " + i.toString());
    //var newLI = document.createElement('li');

    if (o[i] instanceof Array) {
      console.log("got Array");
    }
    else if (o[i] instanceof Object) {
      console.log("got Object");
      //newLI.className = "tree-Object";
    }
    else {
      console.log(i + ': ' + o[i]);
      //console.log("1) listItemHTML: " + listItemHTML);
      listItemHTML += i + '=' + o[i] + ";  ";
      //console.log("2) listItemHTML: " + listItemHTML);
    }

    //treeElement.appendChild(newLI);
    //insert a <ul> for nested nodes

    if (o[i] instanceof Object) { //o[i] instanceof Array ||

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
        listItemHTML = "";

        treeElement.appendChild(newLI);
        newLI.appendChild(newInput);
        newLI.appendChild(newLabel);
        treeElement = newLI;
      }

      var newUL = document.createElement('ul');
      treeElement.appendChild(newUL);

      console.group("children "); // + o[i]);//i.name)
      //newUL.innerHTML=i;
      buildTree(o[i], newUL);
      //buildTree(i.children, newUL);
      console.groupEnd();
    }

    //listLog += i + ': ' + o[i] + "; ";
    //listItemHTML += i + ': ' + o[i] + "; ";

    //    if (Boolean(o[i]) && typeof (o[i]) == "object") {
  }
}


function makeListOrig(jsonObject, treeElement) {
  for (var i in jsonObject) {
    console.log("processing: " + i.toString());
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
      console.group("children of " + i.name)
      makeListOrig(jsonObject[i], newUL);
      console.groupEnd();
    }
  }
}


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

/// <summary>
/// Create an HTML unordered list of items from a JSON object
/// Recurse through the JSON object, building up an HTML string to display, appending them to the treeElement.

// BUG: Doesn't descend into children objects...

/// </summary>
function buildTree2(o, treeElement) {

  console.log("buildTree: " + o?.toString());
  //console.log("1) listItemHTML: " + listItemHTML);
  for (var i in o) {
    //console.log("2) listItemHTML: " + listItemHTML);
    if (Boolean(o[i]) && typeof (o[i]) == "object") {
      //console.log("3) listItemHTML: " + listItemHTML);
      //console.log("processing object: " + i.toString());
      if (listItemHTML != "") {
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
      //console.warn(i + ': ' + o[i] + "; ");
      listLog += i + ': ' + o[i] + "; ";
      listItemHTML += i + ': ' + o[i] + "; ";
      //console.log("listItemHTML: " + listItemHTML);
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
      // makeListOrig(json, document.getElementById('unorderedList'));
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
