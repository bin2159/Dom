let btn=document.getElementById('btn')
let col=document.getElementById('col')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('hello')
    let amt=document.getElementById('amt').value
    let des=document.getElementById('des').value
    let cat=document.getElementById('cat').value

    let exp={
        amt:amt,
        des:des,
        cat:cat
    }
    let exp_serialized=JSON.stringify(exp)
    localStorage.setItem(exp.des,exp_serialized)
    let exp_deserialized=JSON.parse(localStorage.getItem(exp.des))
    let ul=document.createElement('ul')
    let li=document.createElement('li')
    let cbtn=document.createElement('button')
    let ebtn=document.createElement('button')
    let text=document.createTextNode(exp_deserialized.amt+'---'+exp_deserialized.des+'---'+exp_deserialized.cat)
    console.log(text)
    ebtn.type='button'
    ebtn.className='btn btn-primary btn-sm '
    ebtn.textContent='Edit'
    cbtn.type='button'
    cbtn.className='btn-close'
    cbtn.ariaLabel='Close'
    ul.className='list-group'
    li.className='list-group-item'
    ul.appendChild(li)
    li.appendChild(text)
    li.appendChild(ebtn)
    li.appendChild(cbtn)
    col.appendChild(ul)
    li.addEventListener('click',remove)
    function remove(e){
        e.preventDefault()
        if(e.target.className='btn-close'){
            let item=e.target.parentElement
            ul.removeChild(item)
            localStorage.removeItem(exp.des)
        }
        if(e.target.className='btn'){
            document.getElementById('amt').value=exp.amt
            document.getElementById('des').value=exp.des
            document.getElementById('cat').value=exp.cat
            let item=e.target.parentElement
            ul.removeChild(item)
            localStorage.removeItem(exp.des)

        }
    }
})