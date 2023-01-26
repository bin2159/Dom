// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)
// var headerTitle = document.getElementById('header-title')
// headerTitle.style.fontFamily="Fantasy"
// let header = document.getElementById('main-header')
// header.style.border='solid 4px black'
// let title = document.getElementById('title')
// title.style.color='green'
// let list=document.getElementsByClassName('list-group-item')
// list[2].style.backgroundColor='green'
// for(let i=0;i<list.length;i++){
//     list[i].style.fontWeight='bold'
// }
// let li=document.getElementsByTagName('li')
// li[2].style.backgroundColor='green'
// for(let i=0;i<li.length;i++){
//     li[i].style.fontWeight='bold'
//}
// let list=document.getElementsByClassName('list-group-item')
// list[1].style.backgroundColor='green'
// list[3].hidden='hidden'
// let queli =document.querySelectorAll('.list-group-item')
// for(let i=0;i<queli.length;i++){
//     queli[i].style.color='green'
// }
// let quel=document.querySelectorAll('.list-group-item:nth-child(odd)')
// for(let i=0;i<quel.length;i++){
//     quel[i].style.backgroundColor='coral'
// }

 
//Traversing the DOM
var itemList= document.querySelector('#items')
//parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='#f4f4f4'
// console.log(itemList.parentNode.parentNode)

//parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='#f4f4f4'

//childNode
// console.log(itemList.childNodes)

//children
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor='green'

//firstChild
// console.log(itemList.firstChild)

//firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent='Hello 1'

//lastChild
// console.log(itemList.lastChild)

//lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent='Hello 4'

//nextSibling
// console.log(itemList.nextSibling)

//nextElementSibling
// console.log(itemList.nextElementSibling)

//previousSibling
// console.log(itemList.previousSibling)

//previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color='green'

//createElement
let newDiv=document.createElement('div')

//Add class
newDiv.className='hello'

//Add id
newDiv.id='hello1'

//Add attr
newDiv.setAttribute('title','Hello Div')

//create text node
var newDivText = document.createTextNode('Hello world')

//Add text to div
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1=document.querySelector('header h1')

console.log(newDiv)

newDiv.style.fontSize='30px'

container.insertBefore(newDiv,h1)

newDiv.style.fontSize='20px'
var ul=document.querySelector('div .list-group')
var item1 = document.querySelector('ul .list-group-item')
 ul.insertBefore(newDiv,item1)