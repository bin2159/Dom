const posts=[{title:'Title one',post:'Post one',CreatedAt:new Date().getTime()},
{title:'Title two',post:'Post two',CreatedAt:new Date().getTime()}]
let interval=0
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

function createPosts(post,callback){
  setTimeout(()=>{
    posts.push({...post,CreatedAt:new Date().getTime()})
  },2000)
}
createPosts({title:'Title three',post:'Post Three'},getPosts)


function create4thPost(post,callback){
  setTimeout(()=>{
    posts.push({...post,CreatedAt:new Date().getTime()})
    callback()
},3000)

}
create4thPost({title:'Title Four',post:'Post Four'},getPosts)