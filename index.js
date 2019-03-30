function getFirstSelector(selector) {
  return document.querySelector(selector)
  
}

function nestedTarget() {
return document.querySelector('div .target')
}

function deepestChild() {
  var tr = document.getElementById("#grand-node");
return tr.lastChild;
}