let form=document.getElementById('form')
form.addEventListener('submit',store)
function store(event){
    event.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('tel').value
    let date=document.getElementById('date').value
    let time=document.getElementById('time').value
    let myObj={
        name:name,
        email:email,
        phone:phone,
        date:date,
        time:time
    }
    let myObj_serialized=JSON.stringify(myObj)
    localStorage.setItem('myObj',myObj_serialized)
}