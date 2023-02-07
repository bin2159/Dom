console.log('ticket1')
console.log('ticket2')
const promiseWifeBringingTicket=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('ticket3')
    },3000)
})
const getPopcorn = promiseWifeBringingTicket.then((t)=>{
    console.log('wife: i have the tickets')
    console.log('husband: we should go in')
    console.log('wife:no i m hungry')
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    })
})
const getbutter=getPopcorn.then((t)=>{
    console.log('husband: i have some popcorn')
    console.log('husband: we should go in')
    console.log('wife: I need butter on my popcorn')
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
    })
})
const getColddrink=getbutter.then((t)=>{
    console.log('wife:i need cold drink also')
    console.log('husband:here u go')
    return new Promise((resolve, reject) => {
        resolve(`${t} coldDrink`)
    })
})
getColddrink.then((t)=>{
    console.log(t)
})
console.log('ticket4')
console.log('ticket5')