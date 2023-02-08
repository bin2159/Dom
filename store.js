let form=document.getElementById('form')
form.addEventListener('submit',store)
function store(e){
    e.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let phone=document.getElementById('tel').value
    let Obj={
        name:name,
        email:email,
        phone:phone
    }
    
    axios.post('https://crudcrud.com/api/be71afd7996a400d8b945a5a88b6e263/data',Obj)
        .then((res)=>{
            console.log(res)
            showOnScreen(Obj)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML+'<h4>Something Went Wrong</h4>'
            console.log(err)
        })
}
getitem()
function getitem(){
    axios.get('https://crudcrud.com/api/be71afd7996a400d8b945a5a88b6e263/data')
    .then((res)=>{
        console.log(res)
        for(let i=0;i<res.data.length;i++){
            showOnScreen(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}
    // let myObj_serialized=JSON.stringify(myObj)
    // localStorage.setItem(myObj.email,myObj_serialized)
    // let myObj_deserialized=JSON.parse(localStorage.getItem(myObj.email))
    function showOnScreen(myObj){
        let li=document.createElement('li')
        let deleteb=document.createElement('input')
        let edit=document.createElement('input')
        edit.type='button'
        edit.value='Edit'
        deleteb.type='button'
        deleteb.value='Delete'
        li.appendChild(document.createTextNode(myObj.name+'----'+myObj.email+'----'+myObj.phone))
        li.appendChild(deleteb)
        li.appendChild(edit)
        form.appendChild(li)
        li.addEventListener('click',remove)
        function remove(e){
            if(e.target.value='Delete'){
                    let item=e.target.parentElement
                    console.log(item)
                    axios.delete(`https://crudcrud.com/api/be71afd7996a400d8b945a5a88b6e263/data/${myObj._id}`)
                    .then((res)=>{
                        console.log(res)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                    form.removeChild(item)
            }
            
            if(e.target.value='Edit'){
                console.log(myObj)
                document.getElementById('name').value=myObj.name
                document.getElementById('email').value=myObj.email
                document.getElementById('tel').value=myObj.phone
                let item=e.target.parentElement
                axios.delete(`https://crudcrud.com/api/be71afd7996a400d8b945a5a88b6e263/data/${myObj._id}`)
                    .then((res)=>{
                        console.log(res)
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
                    form.removeChild(item)
            }
        } 
    }
        




