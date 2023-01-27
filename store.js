let form=document.getElementById('form')
form.addEventListener('submit',store)
function store(e){
    e.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('tel').value
    let myObj={
        name:name,
        email:email,
        phone:phone
    }
    let myObj_serialized=JSON.stringify(myObj)
    localStorage.setItem('myObj',myObj_serialized)
    let myObj_deserialized=JSON.parse(localStorage.getItem('myObj'))
    console.log(myObj_deserialized)
    let span=document.createElement('span')
    let li=document.createElement('li')
    let input=document.createElement('input')
    input.type='button'
    input.value='Delete'
    span.appendChild(document.createTextNode(myObj_deserialized.name+'----'+myObj_deserialized.email+'----'+myObj_deserialized.phone))
    li.appendChild(span)
    li.appendChild(input)
    form.appendChild(li)
    li.addEventListener('click',remove)
    function remove(e){
        if(e.target.value='delete'){
                let item=e.target.parentElement
                form.removeChild(item)
                localStorage.removeItem('myObj')
        }
    }   
}