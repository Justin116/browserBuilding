function searchBaidu() {
  var searchElement;
  searchElement = document.getElementsByClassName("searchBox")[0];
  var searchTitle;
  searchTitle = searchElement.value;
  console.log(searchTitle);
  if (window.event.keyCode == 13) {
    window.location.href = `https://www.baidu.com/#ie={inputEncoding}&wd=${searchTitle}`
  }
  
  //If searchTitle != "", unblur
  if (searchTitle != "") {
    searchElement.setAttribute('style', 'filter: blur(0)');
  }
}