function getFirstSelector(selector) {
  return document.querySelector(selector)
  
}

function nestedTarget() {
return document.querySelector('div .target')
}

function deepestChild() {
  var c = document.getElementById('#grand-node').children;
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].tagName + "<br>";
  }

  document.getElementById("demo").innerHTML = txt;
}
