const removeFromArray = function(array, ...items) {
    
    return array.filter(num=>!items.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
