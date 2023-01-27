let form=document.getElementById('form')
form.addEventListener('submit',store)
function store(event){
    event.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('tel').value
    let date=document.getElementById('date').value
    let time=document.getElementById('time').value
    localStorage.setItem('Name',name)
    localStorage.setItem('Email',email)
    localStorage.setItem('Phone',phone)
    localStorage.setItem('Date',date)
    localStorage.setItem('Time',time)
}