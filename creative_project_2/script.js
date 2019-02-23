function onNowPlaying() {
  const app = document.getElementById('root');

  if (app.firstChild) {
    deleteNode();
  }

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.themoviedb.org/3/movie/now_playing?api_key=605697e1a25412f7fd596c487de75046&language=en-US&page=1');
  // console.log(request);

  request.onload = function() {
    data = JSON.parse(this.response);
    console.log(data.results);

    if (request.status >= 200 && request.status < 400) {
      let results = data.results;

      for (let i = 0; i < results.length; i++) {
        // 'div' contains each result
        const div = document.createElement('div');
        div.setAttribute('class', 'eachContent');

        // title
        const h2 = document.createElement('h2');
        let h2_t = document.createTextNode(results[i].title);

        // image
        const img = document.createElement('img');
        let eachSrc = "https://image.tmdb.org/t/p/w500/" + results[i].poster_path;
        img.setAttribute('src', eachSrc);

        // overview
        const p_overview_header = document.createElement('p');
        const p_t_overview_header = document.createTextNode('Overview');
        const p_overview = document.createElement('p');
        let p_t_overview = document.createTextNode(results[i].overview);

        // vote average and count
        const div_vote = document.createElement('div');
        const p_vote_avg_title = document.createElement('p');
        let p_t_vote_avg_title = document.createTextNode('Vote Average');
        const p_vote_avg = document.createElement('p');
        let p_t_vote_avg = document.createTextNode(results[i].vote_average);
        const p_vote_count_title = document.createElement('p');
        let p_t_vote_count_title = document.createTextNode('Vote Count');
        const p_vote_count = document.createElement('p');
        let p_t_vote_count = document.createTextNode(results[i].vote_count);

        // insert nodes
        container.appendChild(div);

        div.appendChild(h2);
        h2.appendChild(h2_t);

        div.appendChild(img);

        div.appendChild(p_overview);
        p_overview.appendChild(p_t_overview_header);
        div.appendChild(p_overview_header);
        p_overview_header.appendChild(p_t_overview);

        div.appendChild(div_vote);
        div_vote.appendChild(p_vote_avg_title);
        p_vote_avg_title.appendChild(p_t_vote_avg_title);
        div_vote.appendChild(p_vote_avg);
        p_vote_avg.appendChild(p_t_vote_avg);
        div_vote.appendChild(p_vote_count_title);
        p_vote_count_title.appendChild(p_t_vote_count_title);
        div_vote.appendChild(p_vote_count);
        p_vote_count.appendChild(p_t_vote_count);

      }
      const p = document.createElement('p');
    } else {
      console.log('error');
    }
  }
  request.send();
}

function onLatest() {
  const app = document.getElementById('root');
  
  if (app.firstChild) {
    deleteNode();
  }

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.themoviedb.org/3/movie/latest?api_key=605697e1a25412f7fd596c487de75046&language=en-US');
  // console.log(request);

  request.onload = function() {
    data = JSON.parse(this.response);
    console.log(data);

    if (request.status >= 200 && request.status < 400) {
      if (request.status >= 200 && request.status < 400) {
        // 'div' contains each result
        const div = document.createElement('div');
        div.setAttribute('class', 'eachContent');

        if (data.adult == true) {
          const h1 = document.createElement('h1');
          let h1_t = document.createTextNode("Adult Content. I am not allowed to display. Wait A Few Minutes And Try Again!!");

          container.appendChild(div);

          div.appendChild(h1);
          h1.appendChild(h1_t);
        }
        else {
          // title
          const h2 = document.createElement('h2');
          let h2_t = document.createTextNode(data.title);

          // image
          const img = document.createElement('img');
          let eachSrc = "https://image.tmdb.org/t/p/w500/" + data.poster_path;
          img.setAttribute('src', eachSrc);

          // overview
          const p_overview_header = document.createElement('p');
          const p_t_overview_header = document.createTextNode('Overview');
          const p_overview = document.createElement('p');
          let p_t_overview = document.createTextNode(data.overview);

          // vote average and count
          const div_vote = document.createElement('div');
          const p_vote_avg_title = document.createElement('p');
          let p_t_vote_avg_title = document.createTextNode('Vote Average');
          const p_vote_avg = document.createElement('p');
          let p_t_vote_avg = document.createTextNode(data.vote_average);
          const p_vote_count_title = document.createElement('p');
          let p_t_vote_count_title = document.createTextNode('Vote Count');
          const p_vote_count = document.createElement('p');
          let p_t_vote_count = document.createTextNode(data.vote_count);

          // insert nodes
          container.appendChild(div);

          div.appendChild(h2);
          h2.appendChild(h2_t);

          div.appendChild(img);

          div.appendChild(p_overview);
          p_overview.appendChild(p_t_overview_header);
          div.appendChild(p_overview_header);
          p_overview_header.appendChild(p_t_overview);

          div.appendChild(div_vote);
          div_vote.appendChild(p_vote_avg_title);
          p_vote_avg_title.appendChild(p_t_vote_avg_title);
          div_vote.appendChild(p_vote_avg);
          p_vote_avg.appendChild(p_t_vote_avg);
          div_vote.appendChild(p_vote_count_title);
          p_vote_count_title.appendChild(p_t_vote_count_title);
          div_vote.appendChild(p_vote_count);
          p_vote_count.appendChild(p_t_vote_count);
        }
      }
    } else {
      console.log('error');
    }
  }
  request.send();
}

function onPopular() {
  const app = document.getElementById('root');
  
  if (app.firstChild) {
    deleteNode();
  }

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.themoviedb.org/3/movie/popular?api_key=605697e1a25412f7fd596c487de75046&language=en-US&page=1');
  // console.log(request);

  request.onload = function() {
    data = JSON.parse(this.response);
    console.log(data.results);

    if (request.status >= 200 && request.status < 400) {
      let results = data.results;

      for (let i = 0; i < results.length; i++) {
        // 'div' contains each result
        const div = document.createElement('div');
        div.setAttribute('class', 'eachContent');

        // title
        const h2 = document.createElement('h2');
        let h2_t = document.createTextNode(results[i].title);

        // image
        const img = document.createElement('img');
        let eachSrc = "https://image.tmdb.org/t/p/w500/" + results[i].poster_path;
        img.setAttribute('src', eachSrc);

        // overview
        const p_overview_header = document.createElement('p');
        const p_t_overview_header = document.createTextNode('Overview');
        const p_overview = document.createElement('p');
        let p_t_overview = document.createTextNode(results[i].overview);

        // vote average and count
        const div_vote = document.createElement('div');
        const p_vote_avg_title = document.createElement('p');
        let p_t_vote_avg_title = document.createTextNode('Vote Average');
        const p_vote_avg = document.createElement('p');
        let p_t_vote_avg = document.createTextNode(results[i].vote_average);
        const p_vote_count_title = document.createElement('p');
        let p_t_vote_count_title = document.createTextNode('Vote Count');
        const p_vote_count = document.createElement('p');
        let p_t_vote_count = document.createTextNode(results[i].vote_count);

        // insert nodes
        container.appendChild(div);

        div.appendChild(h2);
        h2.appendChild(h2_t);

        div.appendChild(img);

        div.appendChild(p_overview);
        p_overview.appendChild(p_t_overview_header);
        div.appendChild(p_overview_header);
        p_overview_header.appendChild(p_t_overview);

        div.appendChild(div_vote);
        div_vote.appendChild(p_vote_avg_title);
        p_vote_avg_title.appendChild(p_t_vote_avg_title);
        div_vote.appendChild(p_vote_avg);
        p_vote_avg.appendChild(p_t_vote_avg);
        div_vote.appendChild(p_vote_count_title);
        p_vote_count_title.appendChild(p_t_vote_count_title);
        div_vote.appendChild(p_vote_count);
        p_vote_count.appendChild(p_t_vote_count);

      }
      const p = document.createElement('p');
    } else {
      console.log('error');
    }
  }
  request.send();
}

function onTopRated() {
  const app = document.getElementById('root');
  
  if (app.firstChild) {
    deleteNode();
  }

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.themoviedb.org/3/movie/top_rated?api_key=605697e1a25412f7fd596c487de75046&language=en-US&page=1');
  // console.log(request);

  request.onload = function() {
    data = JSON.parse(this.response);
    console.log(data.results);

    if (request.status >= 200 && request.status < 400) {
      let results = data.results;

      for (let i = 0; i < results.length; i++) {
        // 'div' contains each result
        const div = document.createElement('div');
        div.setAttribute('class', 'eachContent');

        // title
        const h2 = document.createElement('h2');
        let h2_t = document.createTextNode(results[i].title);

        // image
        const img = document.createElement('img');
        let eachSrc = "https://image.tmdb.org/t/p/w500/" + results[i].poster_path;
        img.setAttribute('src', eachSrc);

        // overview
        const p_overview_header = document.createElement('p');
        const p_t_overview_header = document.createTextNode('Overview');
        const p_overview = document.createElement('p');
        let p_t_overview = document.createTextNode(results[i].overview);

        // vote average and count
        const div_vote = document.createElement('div');
        const p_vote_avg_title = document.createElement('p');
        let p_t_vote_avg_title = document.createTextNode('Vote Average');
        const p_vote_avg = document.createElement('p');
        let p_t_vote_avg = document.createTextNode(results[i].vote_average);
        const p_vote_count_title = document.createElement('p');
        let p_t_vote_count_title = document.createTextNode('Vote Count');
        const p_vote_count = document.createElement('p');
        let p_t_vote_count = document.createTextNode(results[i].vote_count);

        // insert nodes
        container.appendChild(div);

        div.appendChild(h2);
        h2.appendChild(h2_t);

        div.appendChild(img);

        div.appendChild(p_overview);
        p_overview.appendChild(p_t_overview_header);
        div.appendChild(p_overview_header);
        p_overview_header.appendChild(p_t_overview);

        div.appendChild(div_vote);
        div_vote.appendChild(p_vote_avg_title);
        p_vote_avg_title.appendChild(p_t_vote_avg_title);
        div_vote.appendChild(p_vote_avg);
        p_vote_avg.appendChild(p_t_vote_avg);
        div_vote.appendChild(p_vote_count_title);
        p_vote_count_title.appendChild(p_t_vote_count_title);
        div_vote.appendChild(p_vote_count);
        p_vote_count.appendChild(p_t_vote_count);

      }
      const p = document.createElement('p');
    } else {
      console.log('error');
    }
  }
  request.send();
}

function onUpcoming() {
  const app = document.getElementById('root');
  
  if (app.firstChild) {
    deleteNode();
  }

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(container);

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.themoviedb.org/3/movie/upcoming?api_key=605697e1a25412f7fd596c487de75046&language=en-US&page=1');
  // console.log(request);

  request.onload = function() {
    data = JSON.parse(this.response);
    console.log(data.results);

    if (request.status >= 200 && request.status < 400) {
      let results = data.results;

      for (let i = 0; i < results.length; i++) {
        // 'div' contains each result
        const div = document.createElement('div');
        div.setAttribute('class', 'eachContent');

        // title
        const h2 = document.createElement('h2');
        let h2_t = document.createTextNode(results[i].title);

        // image
        const img = document.createElement('img');
        let eachSrc = "https://image.tmdb.org/t/p/w500/" + results[i].poster_path;
        img.setAttribute('src', eachSrc);

        // overview
        const p_overview_header = document.createElement('p');
        const p_t_overview_header = document.createTextNode('Overview');
        const p_overview = document.createElement('p');
        let p_t_overview = document.createTextNode(results[i].overview);

        // vote average and count
        const div_vote = document.createElement('div');
        const p_vote_avg_title = document.createElement('p');
        let p_t_vote_avg_title = document.createTextNode('Vote Average');
        const p_vote_avg = document.createElement('p');
        let p_t_vote_avg = document.createTextNode(results[i].vote_average);
        const p_vote_count_title = document.createElement('p');
        let p_t_vote_count_title = document.createTextNode('Vote Count');
        const p_vote_count = document.createElement('p');
        let p_t_vote_count = document.createTextNode(results[i].vote_count);

        // insert nodes
        container.appendChild(div);

        div.appendChild(h2);
        h2.appendChild(h2_t);

        div.appendChild(img);

        div.appendChild(p_overview);
        p_overview.appendChild(p_t_overview_header);
        div.appendChild(p_overview_header);
        p_overview_header.appendChild(p_t_overview);

        div.appendChild(div_vote);
        div_vote.appendChild(p_vote_avg_title);
        p_vote_avg_title.appendChild(p_t_vote_avg_title);
        div_vote.appendChild(p_vote_avg);
        p_vote_avg.appendChild(p_t_vote_avg);
        div_vote.appendChild(p_vote_count_title);
        p_vote_count_title.appendChild(p_t_vote_count_title);
        div_vote.appendChild(p_vote_count);
        p_vote_count.appendChild(p_t_vote_count);

      }
      const p = document.createElement('p');
    } else {
      console.log('error');
    }
  }
  request.send();
}

function deleteNode() {
  const app = document.getElementById('root');
  console.log(app);
  while (app.firstChild) {
    app.removeChild(app.firstChild);
  }
}