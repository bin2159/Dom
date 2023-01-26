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
//var itemList= document.querySelector('#items')


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
// let newDiv=document.createElement('div')

//Add class
// newDiv.className='hello'

//Add id
// newDiv.id='hello1'

//Add attr
// newDiv.setAttribute('title','Hello Div')

//create text node
// var newDivText = document.createTextNode('Hello world')

//Add text to div
// newDiv.appendChild(newDivText)

// var container = document.querySelector('header .container')
// var h1=document.querySelector('header h1')

// console.log(newDiv)

// newDiv.style.fontSize='30px'

// container.insertBefore(newDiv,h1)

// newDiv.style.fontSize='20px'
// var ul=document.querySelector('div .list-group')
// var item1 = document.querySelector('ul .list-group-item')
//  ul.insertBefore(newDiv,item1)



//var button=document.getElementById('button').addEventListener('click',buttonClick)
//function buttonClick(e){
    // console.log('buttonClicked')
    // document.getElementById('header-title').textContent='Changed'
    // document.querySelector('#main').style.backgroundColor='#f4f4f4'
   
    //console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)
    
    //var output=document.getElementById('output')
    // console.log(output)
    // output.innerHTML='<h3>'+e.target.id+'</h3>'
    
    // console.log(e.type)

    // console.log(e.clientY)
    // console.log(e.clientX)

    // console.log(e.offsetX)
    // console.log(e.offsetY)

    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)

//}




// var button=document.getElementById('button')
// var box=document.getElementById('box')

// button.addEventListener('click',runEvent)
// button.addEventListener('dbclick',runEvent)
// button.addEventListener('mousedown',runEvent)
// button.addEventListener('mouseup',runEvent)

// box.addEventListener('mouseenter',runEvent)
// box.addEventListener('mouseleave',runEvent)

// box.addEventListener('mouseover',runEvent)
// box.addEventListener('mouseout',runEvent)

// box.addEventListener('mousemove',runEvent)

// var itemInput=document.querySelector('input[type="text"]')
// var form = document.querySelector('form')
// var select = document.querySelector('select')
// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)

// itemInput.addEventListener('focus',runEvent)
// itemInput.addEventListener('blur',runEvent)

// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('paste',runEvent)

//itemInput.addEventListener('input',runEvent)

// select.addEventListener('change',runEvent)
// select.addEventListener('input',runEvent)

// form.addEventListener('submit',runEvent)

// function runEvent(e){
//     e.preventDefault()
//     console.log('EVENT TYPE: '+e.type)

    //console.log(e.target.value)

    //document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'
    //box.innerHTML='<h3>MouseX: '+e.offsetX+ '</h3><h3>MouseY: '+e.offsetY+'</h3>'
    //document.body.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',40)'
//}

let form=document.getElementById('addForm')
let itemList=document.getElementById('items')
let filter =document.getElementById('filter')

//Form sumbit event
form.addEventListener('submit',addItem)
//Delete Item
itemList.addEventListener('click',removeItem)
//Filter Event
filter.addEventListener('keyup',filterItems)

//Add Item
function addItem(e){
    e.preventDefault()
    
    //Get input value
    let newItem = document.getElementById('item').value

    //Create new li Elemen
    let li =document.createElement('li')

    //Add class
    li.className='list-group-item'

    //Add text Node with Input value
    li.appendChild(document.createTextNode(newItem))
    
    let edit=document.createElement('button')
    edit.className='btn btn-primary btn-sm float-right'
    edit.appendChild(document.createTextNode('Edit'))

    //Create the Delete Button element
    let deletebtn= document.createElement('button')

    //Add Class
    deletebtn.className='btn btn-danger btn-sm float-right delete'

    //Append text Node
    deletebtn.appendChild(document.createTextNode('X'))
    
    li.appendChild(deletebtn)
    li.appendChild(edit)

    itemList.appendChild(li)
}

//Remove Items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li=e.target.parentElement
            itemList.removeChild(li)
        }
    }
}

