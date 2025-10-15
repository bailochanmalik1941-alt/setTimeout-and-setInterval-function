const a = async (word) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(word);
        }, 1000);
    })
}

(
    async () => {
        let word = await a("BUTTERFLY");
        console.log(word);
        word = await a("cocrose");
        console.log(word);
    }

)();


//Q:/write a program using promise.all() inside an async and await  to await 3 promises compare its results with the case where we await these promise one by one
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hello every body")
        }, 3000)
        resolve("iam a engineering student");
    })

}
let p2 = async () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("hello every body")
        }, 44000)
        resolve("iam a engineering student");
    })

}

let p3 = async () => {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            console.log("hello every body")
        }, 321000)
        resolve("iam a engineering student");
    })

}
let c = async () => {
    let a = p1()
    let b = p2()
    let d = p3()
    let promise_all = await promise.all([a, b, d]);
    console.log(promise_all);



}
// let promise_all = promise.all([a, b, c])
// promise_all.then(value)=> {
//     console.log(value)
// }
