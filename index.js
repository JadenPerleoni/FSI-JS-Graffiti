
// Select some elements...
var header = document.querySelector('#page-header')
header.style.color = 'red'

// var image = document.querySelectorAll('.dog-image')
// image.style.borderRadius = '50px'


let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.border = '5px solid #555'
}

var dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.fontFamily = 'Comic Sans MS'
    dogNames[i].style.fontFamily = 'cursive'

}

var dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.fontFamily = 'Comic Sans MS'

}
var dogDesc = document.querySelectorAll('.dog-description')
for(let i = 0; i < dogDesc.length; i++){
    dogDesc[i].style.fontWeight = 'bold'

}
//adding a comment
