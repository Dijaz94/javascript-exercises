const sumAll = function(a, b) {
    let sum = 0
    if (a >= 0 && b >= 0 && a%1 === 0 && b%1 === 0 && typeof a === 'number' && typeof b === 'number')
    {
        let min
        let max
        if (a>b){
             max = a
             min = b
        }
        else{
             max = b
             min = a
        }
        //for (let i =min; i<=max; i++)
        //sum+=i
        sum = ((min+max)*(max-min+1))/2
    
    return sum
    }
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
