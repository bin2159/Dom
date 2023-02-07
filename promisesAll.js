const posts=[
    {post:'Post1'},
    {post:'Post2'}]
const user={
    name:'bipin',
    lastActivityTime:'13th feb'
}
function getPosts(){
    setTimeout(()=>{
        let output=''
        posts.forEach((item)=>{
            output+=`<li>${item.post}`
        })
        document.body.innerHTML=output
    },1000)
}
function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post)
            resolve('createPost')
        },0)
    })
}
function updatelastactivitytime(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(`before creating post 3,user activitity =${user.lastActivityTime}`)
            user.lastActivityTime=new Date().getTime()
            console.log('after creating post4>>>>>>>>>>')
            console.log(posts)
            console.log(user.lastActivityTime)
            resolve(user.lastActivityTime)
        },0)
    })   
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
Promise.all([createPosts({post:'post3'}),updatelastactivitytime(),deletePost()]).then((ms1,ms2)=>{
    getPosts()
    console.log(ms1)
    console.log(ms2)
})