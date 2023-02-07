const posts=[{title:'Title one',post:'Post one',CreatedAt:new Date().getTime()},
{title:'Title two',post:'Post two',CreatedAt:new Date().getTime()}]
let interval=0
const user={
    username:'yash',
    lastActivityTime:'13th feb'
}
function updatelastactivitytime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastActivityTime=new Date.getTime()
            resolve(user.lastActivityTime)
        })
    })
}
function getPosts(){  
    clearInterval(interval)
    interval= setTimeout(()=>{
    let output=''
    posts.forEach((item)=>{
      output+=`<li>${item.title} ${item.post} -last updated ${Math.floor((new Date().getTime()-item.CreatedAt)/1000)} seconds</li>`
    })
    document.body.innerHTML=output
    getPosts()
  },1000)
}

function deletePost(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(posts.length>0){
            resolve(posts.pop())
        }else{
            reject('Array is empty now')
        }
    },1000)})
}

function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,CreatedAt:new Date().getTime()})
            const error=false
            if(!error){
                resolve()
            }
            else{
                reject('Error:Something is wrong')
            }
          },2000)
    })
}

function create4thPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post,CreatedAt:new Date().getTime()})
            const error=false
            if(!error){
                resolve()
            }
            else{
                reject('Error')
            }
        },3000)
        
    })
 
}
const fun=async ()=>{
    let cp=await createPosts({title:'Title three',post:'Post Three'})
    let cp4=await create4thPost({title:'Title Four',post:'Post Four'})
    let gp=await getPosts()
    let d1=await deletePost()
    let d2=await deletePost()
    let d3=await deletePost()
    let d4=await deletePost()
    return('success')

}
fun().then((m)=>console.log(m))


//createPosts({title:'Title three',post:'Post Three'}).then(getPosts).catch(err=>console.log(err))
// create4thPost.then(()=>{
//     getPosts()
//     deletePost().then((d)=>{
//         console.log(d)
//         getPosts()
//         deletePost().then((d)=>{
//             console.log(d)
//             getPosts()
//             deletePost().then((d)=>{
//                 console.log(d)
//                 getPosts()
//                 deletePost().then((d)=>{
//                     console.log(d)
//                     getPosts()
//                     deletePost().then(()=>{}).catch((err)=>console.log('Inside catch block',err))
//                 }).catch(err=>{console.log(err)})
//             }).catch(err=>{console.log(err)})
//         }).catch(err=>{console.log(err)})
//     }).catch(err=>{console.log(err)})
// }).catch(err=>console.log(err))



