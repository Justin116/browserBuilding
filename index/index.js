// Set background color while the button is clicked

var icon = document.querySelectorAll('.iconBackground')
var svg = document.querySelectorAll('.icon')
console.log(icon);
console.log(svg);


for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener('click', function (e) { //给所有按钮添加监听事件，监听点击事件
    console.log('所点击元素', this);
    console.log('所点击元素的子元素', this.children[0]); //所点击元素的子元素

    e.stopPropagation() //清除事件冒泡/捕获

    clearAllColor()
    // 被点击的元素背景色改变
    this.style.backgroundColor = '#fff'
    this.children[0].style.fill = '#000'
  })
}

for (let i = 0; i < svg.length; i++) {
  svg[i].addEventListener('click', function (e) { //给所有按钮添加监听事件，监听点击事件
    e.stopPropagation() //清除事件冒泡/捕获
    console.log('所点击元素', this);
    console.log('所点击元素的父元素', this.parentNode); //所点击元素的父元素

    clearAllColor()
    // 被点击的图片
    this.style.fill = '#000'
    this.parentNode.style.backgroundColor = '#fff'
  })
}


// 清除所有颜色
function clearAllColor () {
  for (let i = 0; i < icon.length; i++) {
    icon[i].style.backgroundColor = ''
  }
  for (let i = 0; i < svg.length; i++) {
    svg[i].style.fill = ''
  }
}

function searchBaidu() {
  var searchElement;
  searchElement = document.getElementsByClassName("searchBox")[0];
  var searchTitle;
  searchTitle = searchElement.value;
  if (window.event.keyCode == 13) {
    window.open(`https://github.com/search?q=${searchTitle}`);
    window.open(`https://www.baidu.com/#ie={inputEncoding}&wd=${searchTitle}`);
  }

  // If searchTitle != "", unblur
  if (searchTitle != "") {
    searchElement.setAttribute('style', 'filter: blur(0)');
  }

  // Check style and set href
}