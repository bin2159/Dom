let form=document.getElementById('form')
form.addEventListener('submit',store)

axios.get('https://crudcrud.com/api/6a87fc873b074d4083fd02b324fa7743/data')
.then((res)=>{
    console.log(res)
    for(let i=0;i<res.data.length;i++){
        showOnScreen(res.data[i])
    }
})
.catch((err)=>{
    console.log(err)
})

function store(e){
    e.preventDefault()
    let price=document.getElementById('price').value
    let dish=document.getElementById('dish').value
    let table=document.getElementById('table').value
    let obj={
        price:price,
        dish:dish,
        table:table
    }
    axios.post('https://crudcrud.com/api/6a87fc873b074d4083fd02b324fa7743/data',obj)
    .then((res)=>{
        console.log(res)
        showOnScreen(obj)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function showOnScreen(obj){
    let li=document.createElement('li')
    let deleteb=document.createElement('input')
    deleteb.type='button'
    deleteb.value='Delete'
    li.appendChild(document.createTextNode(`      ${obj.price}----${obj.dish}----${obj.table}`))
    li.appendChild(deleteb)
    li.addEventListener('click',remove)
    if(obj.table=='table1'){
        let table=document.getElementById('table01')
        table.appendChild(li)
    }
    if(obj.table=='table2'){
        let table=document.getElementById('table02')
        table.appendChild(li)
    }
    if(obj.table=='table3'){
        let table=document.getElementById('table03')
        table.appendChild(li)
    }
    function remove(e){
        if(e.target.value='delete'){
            let item=e.target.parentElement
            let table=item.parentElement
            axios.delete(`https://crudcrud.com/api/6a87fc873b074d4083fd02b324fa7743/data/${obj._id}`)
            .then((res)=>{
                console.log(res)
                table.removeChild(item)
            })
        }

    }
}