
const randomData = [];
for(var i = 0; i < 100; i++) {
    var randomnumber = Math.floor(Math.random() * 100) + 1;
    randomData.push(randomnumber);
}

const asyncAdd = async (a,b) => {
    
    if (typeof a !== "number" || typeof b !== "number") {
      return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(a+b)
      }, 10)
    })
  }
async function asyncAddAndMeasure(inputData) {
    performance.mark('start');
    let result = 0;
    for(let i = 0; i < inputData.length; i++) {     
        let data = inputData[i];
        result = await asyncAdd(result, data);
    }
    console.log("result: " + result);
    performance.mark('end');
    performance.measure('start to end', 'start', 'end')
    let measure = performance.getEntriesByName('start to end');
    console.log("time passed: " + measure[0].duration);
  }

asyncAddAndMeasure(randomData);




