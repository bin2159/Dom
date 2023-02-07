console.log('ticket1')
console.log('ticket2')

    const promiseWifeBringingTicket=new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('ticket3')
        },3000)
    })
    const getPopcorn=new Promise((resolve,reject)=>{resolve('popcorn')})
    const getbutter=new Promise((resolve, reject) => {
        resolve('butter')
    })
    const getColddrink=new Promise((resolve, reject) => {
        resolve('colddrinks')
    })
    const preMovie=async ()=>{
    let ticket=await promiseWifeBringingTicket
    let [popcorn,butter,coldDrink]=await Promise.all([getPopcorn,getbutter,getColddrink])
    console.log(`${popcorn}, ${butter}, ${coldDrink}`)
    return ticket
}
preMovie().then((m)=>console.log(m))
console.log('ticket4')
console.log('ticket5')




// console.log('ticket1')
// console.log('ticket2')
// const preMovie=async ()=>{
//     const promiseWifeBringingTicket=new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('ticket3')
//         },3000)
//     })
//     const getPopcorn=new Promise((resolve,reject)=>{resolve('popcorn')})
//     const getbutter=new Promise((resolve, reject) => {
//         resolve('butter')
//     })
//     const getColddrink=new Promise((resolve, reject) => {
//         resolve('colddrinks')
//     })
//     let ticket=await promiseWifeBringingTicket
//     console.log('wife: i have the tickets')
//     console.log('husband: we should go in')
//     console.log('wife:no i m hungry')
//     let popcorn=await getPopcorn
//     console.log('husband: i have some popcorn')
//     console.log('husband: we should go in')
//     console.log('wife: I need butter on my popcorn')
//     let butter=await getbutter
//     console.log('husband:i got the butter')
//     console.log('wife:then lets go')
//     console.log('husband:ok')
//     let coldDrink= await getColddrink
//     console.log('husband: i got u cold drink')
// }
// preMovie().then((m)=>console.log(m))
// console.log('ticket4')
// console.log('ticket5')