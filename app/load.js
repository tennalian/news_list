const loadData = function(url){
    const xhr = new XMLHttpRequest();
    var data;
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {
      console.log( xhr.status + ': ' + xhr.statusText );
    } else {
      data = JSON.parse(xhr.responseText);
    }
    return data;
};

export default loadData;
