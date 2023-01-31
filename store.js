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
    localStorage.setItem(myObj.email,myObj_serialized)
    let myObj_deserialized=JSON.parse(localStorage.getItem(myObj.email))
    let li=document.createElement('li')
    let deleteb=document.createElement('input')
    let edit=document.createElement('input')
    edit.type='button'
    edit.value='Edit'
    deleteb.type='button'
    deleteb.value='Delete'
    li.appendChild(document.createTextNode(myObj_deserialized.name+'----'+myObj_deserialized.email+'----'+myObj_deserialized.phone))
    li.appendChild(deleteb)
    li.appendChild(edit)
    form.appendChild(li)
    li.addEventListener('click',remove)

    function remove(e){
        if(e.target.value='Delete'){
                let item=e.target.parentElement
                console.log(item)
                form.removeChild(item)
                localStorage.removeItem(myObj.email)
        }
        
        if(e.target.value='Edit'){
            console.log(myObj)
            document.getElementById('name').value=myObj.name
            document.getElementById('email').value=myObj.email
            document.getElementById('tel').value=myObj.phone
            let item=e.target.parentElement
            form.removeChild(item)
            localStorage.removeItem(myObj.email)
        }
    }   
}



let multiply=function(x,y){
    console.log(x*y)
}

let multiplybytwo=multiply.bind(this,2)
multiplybytwo(5)