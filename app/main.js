import React from 'react';
import ReactDOM from 'react-dom';
import Rss from './component';
import './styles.scss';


const xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json', false);
xhr.send();
if (xhr.status != 200) {
  console.log( xhr.status + ': ' + xhr.statusText );
} else {
  var initialData = JSON.parse(xhr.responseText);
}

// console.log(initialData.news);

ReactDOM.render(<Rss data={initialData.news}/>,document. getElementById('app'));




