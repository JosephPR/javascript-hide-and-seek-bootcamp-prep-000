function getFirstSelector(selector) {
  return document.querySelector(selector)
  
}

function nestedTarget() {
return document.querySelector('div .target')
}

function deepestChild() {
    var cur = document.getElementById('grand-node')
    var i = 0
    while (cur.firstElementChild) {
      i = i + 1
      cur = cur.firstElementChild
    }
    return cur
}

function increaseRankBy(n) {
    var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (var i=0;i<lis.length;i++) {
      lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
    }
}



