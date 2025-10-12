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