function traverse(o) {
  for (var i in o) {
    if (Boolean(o[i]) && typeof (o[i]) == "object") {
      console.log(i + " (object) is " + o[i]);
      console.group(i.toString());
      traverse(o[i]);
      console.groupEnd();
    } else {
      console.log(i + ":  " + o[i]);
    }
  }
}


function traverse2(jsonObj) {
  if (jsonObj !== null && typeof jsonObj == "object") {
    Object.entries(jsonObj).forEach(([key, value]) => {
      // key is either an array index or object key
      console.log("traversing: " + key + " : " + value.toString());
      console.group(value.toString());
      traverse2(value);
      console.groupEnd();
    });
  }
  else {
    // jsonObj is a number or string
    console.log("Got # or $: " + jsonObj.toString());
  }
}
