const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))

    let transposed = transpose(letters);

    for (l of horizontalJoin) {
        if (l.includes(word)){
            return true;
        } 
    }
    if (transposed.includes(word)){
        return true;
    } 
    

    return false;
}

const transpose = (arr) => {
    for (let i =0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp;
        }
    }
    
    let verticalJoin = arr.map(ls => ls.join(''));
    for (let i = 0; i < verticalJoin.length ; i++) {
        if(verticalJoin[i] === '') {
            verticalJoin.splice(i,1)
        }
    }
    return verticalJoin;
}

module.exports = wordSearch;