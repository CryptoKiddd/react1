// დავალება 1 

const arr = [1, 3, 5, -7, 9, -13, 33, 12];
const positiveNum = arr.filter((arr) => arr > 0 );
const firstNum = 0;
const sumOfArr = arr.reduce((previousValue, currentValue) =>    previousValue + currentValue,
    firstNum
);

console.log(sumOfArr);

// დავალება 2


const nameArr = ['ani', 'mariami', 'tatia', 'nino', 'ani', 'tatia', 'tamuna', 'tatia', 'ana', ]
const firstValue = {};
const result = nameArr.reduce((tally, name) => {
    tally[name] = (tally[name] || 0) + 1 ;
    return  tally;
}, firstValue);
console.log(result);


// დავალება 3

class car {
    constructor(brand,model, speed,motion){
        this.brand = brand ; 
        this.model = model;
        this.speed = speed;
        this.motion = 'The car is not moving';
    }
    get checkMotion(){
        if (this.speed > 0){
            this.motion = 'the car is moving'
        }
    }

    get accelerate (){
        this.speed
    }
}

const myCar = new car('nissan', 'march' , 100,   );
console.log(myCar.checkMotion);

//  დავალება 4

function addAsync(x, y){
    Promise = new Promise((resolve,reject) =>{
    if(x = Number, y = Number){
       return resolve('Resolve')
    }else {
       return reject('reject')
    }
    
}
)
}




addAsync(22,33)


// ბოლო 2 დავალება ვერ დავწერე საფიქრალად დროც არ მქონდა თუ მოვასწარი 12 მდე კიდევ ვცდი თუარადა მაინც ჯერ ამას ავტვირთავ