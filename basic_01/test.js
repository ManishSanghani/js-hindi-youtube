// console.log("manish")
const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve()
        console.log('Hello')
    },1000)
})

promiseOne.then(function(){
    console.log('hey')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('hehe')
        resolve()
    },1000);

}).then(function(){
    console.log("lofa ")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Mnaish",password:"123"})
    },1000)
}).then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(() => {
        const error=true;
        if(!error){
            resolve({username:"Mnaish",password:"12355"})
        }else {
            reject('error hai bhia')
        }
    },1000);
})

promiseFour.
then(function(user){
    console.log(user)
    return user.username
}).
then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error)
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        const error=true;
        if(!error){
            resolve({username:"Mnaish",password:"12355"})
        }else {
            reject('error hai bhia')
        }
    },1000);
})

async function consumePromisefive() {
  try {
      const response=await promiseFive
       console.log(response)   
  } catch (error) {
    console.log(error);
  } 
}
consumePromisefive()