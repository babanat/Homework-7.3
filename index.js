function createNumber() {
    let result 
    for (let i = 0; i < 10; i++) {
    let entryField = prompt('Enter a number greater than 100');
    if (entryField < 100) continue;
    if (entryField > 100) {
    result = entryField
    break;
    }
    }
    return console.log(result)
    }
    createNumber()