
function sleep(ms) {
    const wakeUp = Date.now() + ms;
    while(Date.now() < wakeUp) {}
};

function normalFunc() {
    console.log('start');

    sleep(1000);

    console.log('end');
}
// normalFunc();
console.log('');

let x = 0;
const one = () => {
    console.log('1. Start');

    setTimeout(() => {
        console.log('1. 결과 확인');
        const result = 100;
        
        setTimeout(() => {
            console.log(result + 100);
        }, 1000);
    }, 2000);

    console.log('1. END');
}
// one();
console.log(x);


const two = (ms) => {
    console.log('2. Start');
    const promise = new Promise((resolve, reject) => {

        if (ms < 1000) reject('시간은 1초 이상이어야 합니다.');

        setTimeout(() => {
            resolve('2. 결과 확인')
        }, ms);
    })
    console.log('2. End');

    return promise;
}
/*
two(500)
.then( resp => {
    console.log(resp);
    return two();
}) // resolve에 주입 할 함수
.then( resp => {
    console.log(resp + 100)
    // return two()
})
.catch( error => console.error(error) ) // reject에 주입 할 함수
*/

// async - await (함수로 실행해야 함)
const syncFunc = async () => {

    try {
        const x = await two(500);
        const y = await two(x);
        console.log(x);
        console.log(y)
    } catch (error) {
        console.error(error)
    }
}

syncFunc()
