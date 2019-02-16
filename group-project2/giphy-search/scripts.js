const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
var data = "";

// make an initial request
request.open('GET', 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g&limit=15', true);

request.onload = function() {
  data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    var arr = data.data;

    for (let i = 0; i < arr.length; i++) {
      var eachGif = arr[i].images.fixed_width.url;

      const p = document.createElement('p');
      const img = document.createElement('img');
      img.setAttribute('src', eachGif);
      container.appendChild(p);
      p.appendChild(img);
    }
  } else {
    console.log('error');
  }
  
}

request.send();

// make a search request
function onSearch() {
  var keyword = document.getElementById("search").value;

  var request = new XMLHttpRequest();
  request.open('GET', `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&rating=g&q=${keyword}`, true);
  console.log(request);
  request.onload = function() {
    data = JSON.parse(this.response);
    console.log(data);

    const p = document.createElement('p');
    const img = document.createElement('img');
    var eachGif = data.data[0].images.fixed_width.url;
    img.setAttribute('src', eachGif);
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(p);
    p.appendChild(img);
  }

  request.send();
}

