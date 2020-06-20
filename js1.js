const requestURL = 'https://fantasy.espn.com/apis/v3/games/ffl/seasons/2020/segments/0/leagues/6403729';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
    const teams = jsonObject['teams'];
    for (let i = 0; i < teams.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p');
      let image = document.createElement('img')
      
      p.setAttribute('style', 'white-space: pre;');

  h2.textContent = teams[i].id + ' ' + teams[i].nickname;
  p.textContent ="More content " + teams[i].location + ' ' + '\r\n' +"More content2 " + teams[i].abbrev;

   
  
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(image);
  
  document.querySelector('div.cards').appendChild(card);
  
  
    }

  });


 


