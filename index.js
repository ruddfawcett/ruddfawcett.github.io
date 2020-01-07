var h2s = document.getElementsByTagName('h2');
function lastOfLine(obj) {
  var last = obj;

  if (last.nextElementSibling) {
    while (Math.abs(last.nextElementSibling.getBoundingClientRect().top - obj.getBoundingClientRect().top) < 2) {
      last = last.nextElementSibling;

      if (!last.nextElementSibling) {
        return last;
      }
    }
  }

  return last;
}

for (i in h2s) {
  h2s[i].onclick = function() {
    document.body.style.background = 'black';
    this.classList.add('active');
    var last = lastOfLine(this);

    var div = document.createElement('div');
    div.setAttribute('class', 'row spotlight');

    div.appendChild(iframe);

    if (last.nextSibling) {
      this.parentNode.insertBefore(div, last.nextSibling);
    }
    else {
      this.parentNode.appendChild(div);
    }

    for (i in h2s) {
      h2s[i].onclick = null;
    }
  };
}
