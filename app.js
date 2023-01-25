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
let li=document.getElementsByTagName('li')
li[2].style.backgroundColor='green'
for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold'
}