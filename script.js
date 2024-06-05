// Criar promises
const myPromise = new Promise((resolve, reject) => {
    const nome = 'Leonardo'
    if(nome == 'Leo'){
        resolve('usuário encontrado')
    } else {
        reject('usuário não encontrado')
    }
})

myPromise.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log("Algo aconteceu: " + error)
})

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
    const nome = 'Leo'
    if(nome == 'Leo'){
        resolve('usuário encontrado')
    } else {
        reject('usuário não encontrado')
    }
})

myPromise2.then((data)=>{
    return data.toUpperCase();
}).then((stringModified)=>{
    console.log(stringModified)
})

//Resolvendo varias promises com all() - vai levar em consideração o termo de maior promise para ser resolvido
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('P1 OK!')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    console.log('P2 OK!')
})


const p3 = new Promise((resolve, reject) => {
    console.log('P3 OK!')
})

const resolveAll = Promise.all([p1,p2,p3]).then((data)=>{
    console.log(data)
})


//Resolvendo várias promises com Race - Respeita o tempo individual de cada promise
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('P4 OK!')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    console.log('P5 OK!')
})


const p6 = new Promise((resolve, reject) => {
    console.log('P6 OK!')
})

const resolveRace = Promise.race([p1,p2,p3]).then((data)=>{
    console.log(data)
})

//Fetch API - API GitHub

const username = 'ruansilva149'

fetch('https://api.github.com/users/'+username, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json'
    },
}).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data.name)
}).catch((erro) => {
    console.log(error)
})