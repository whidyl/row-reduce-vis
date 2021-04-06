
function validate(rowOp) {
    const validChars = [' ', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '-', '+', '*', 'R', 'r', '<', '>']
    if(rowOp.length < 6) {
        return {
            valid: false,
            message: `Invalid input, use syntax in as examples above`
        }
    }
    
    for (var i = 0; i < rowOp.length; i++) {
        const char = rowOp.charAt(i);
        if (!validChars.includes(char)){
            return {
                valid: false,
                message: `Invalid char: ${char}`
            }
        }
    }
    return {
        valid: true,
        message: ""
    }
}

export function apply(rowOp, matrix) {
    rowOp = rowOp.trim()

    var coeff1 = 1
    var coeff2 = 1
    var coeff3 = 1

    var row1 = 0
    var row2 = 0
    var toRow = 0

    // type can be swap, mult, or add
    var type = "const"
    
    // determine type
    for (var i = 0; i < rowOp.length; i++) {
        if (rowOp.charAt(i) === '+') {
            type="add"
        }
        if (rowOp.charAt(i) === '>') {
            if (rowOp.charAt(i - 1) === '-' && rowOp.charAt(i-2) === '<') {
                type="swap"
                break
            }
        }
    }
    console.log(type)

    //determine values
    if (type === 'swap'){
        // determine first row
        var i = 0;
        for (i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                if (rowOp.charAt(i+1) === '1') {
                    row1 = 0;
                    break;
                } else if (rowOp.charAt(i+1) === '2') {
                    row1 = 1;
                    break;
                } else if (rowOp.charAt(i+1) === '3') {
                    row1 = 2;
                    break;
                } else {
                    return { 
                        matrix: matrix,
                        error: {
                            valid: false,
                            message: "Invalid row, use R1, R2, or R3 only.`"
                        }
                    }
                }
            }
        }

        // determine second row
        i++;
        for (i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                if (rowOp.charAt(i+1) === '1') {
                    toRow = 0;
                    break;
                } else if (rowOp.charAt(i+1) === '2') {
                    toRow = 1;
                    break;
                } else if (rowOp.charAt(i+1) === '3') {
                    toRow = 2;
                    break;
                } else {
                    return { 
                        matrix: matrix,
                        error: {
                            valid: false,
                            message: "Invalid row, use R1, R2, or R3 only.`"
                        }
                    }
                }
            }
        }

        //apply operation
        var mtxCopy = [...matrix]
        mtxCopy[toRow] = matrix[row1]
        mtxCopy[row1] = matrix[toRow]
        console.log(row1)
        console.log(row2)
        return {
            matrix: mtxCopy,
            error: {
                valid: true,
                message: ""
            }
        }
    } else if (type === "const") {
        // Determine coeff1
        var i = 0
        for(i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                coeff1 = 1;
                break;
            } else if (isDigitCode(rowOp.charAt(i)) || rowOp.charAt(i) === "-") {
                var num = rowOp.charAt(i);
                i++;
                while (isDigitCode(rowOp.charAt(i)) || rowOp.charAt(i) === ".") {
                    num += rowOp.charAt(i);
                    i++;
                }
                coeff1 = parseFloat(num);
                break;
            }
        }

        i++
        // Determine toRow
        for(i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                if (rowOp.charAt(i+1) === '1') {
                    toRow = 0;
                    break;
                } else if (rowOp.charAt(i+1) === '2') {
                    toRow = 1;
                    break;
                } else if (rowOp.charAt(i+1) === '3') {
                    toRow = 2;
                    break;
                } else {
                    return { 
                        matrix: matrix,
                        error: {
                            valid: false,
                            message: "Invalid row, use R1, R2, or R3 only.`"
                        }
                    }
                }
            } 
        }
        console.log(coeff1)
        console.log(toRow)

        // apply operation
        var mtxCopy = [...matrix]
        mtxCopy[toRow][0] = matrix[toRow][0]*coeff1;
        mtxCopy[toRow][1] = matrix[toRow][1]*coeff1;
        mtxCopy[toRow][2] = matrix[toRow][2]*coeff1;
        mtxCopy[toRow][3] = matrix[toRow][3]*coeff1;

        // console.log(mtxCopy)

        return { 
            matrix: mtxCopy,
            error: {
                valid: true,
                message: ""
            }
        }
    } else if (type === "add") {
        // Determine coeff1
        var i = 0;
        for(i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                coeff1 = 1;
                break;
            } else if (isDigitCode(rowOp.charAt(i)) || rowOp.charAt(i) === "-") {
                var num = rowOp.charAt(i);
                i++;
                while (isDigitCode(rowOp.charAt(i)) || rowOp.charAt(i) === ".") {
                    num += rowOp.charAt(i);
                    i++;
                }
                coeff1 = parseFloat(num);
                break;
            }
        }

        // Determine row1
        for(i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                if (rowOp.charAt(i+1) === '1') {
                    row1 = 0;
                    break;
                } else if (rowOp.charAt(i+1) === '2') {
                    row1 = 1;
                    break;
                } else if (rowOp.charAt(i+1) === '3') {
                    row1 = 2;
                    break;
                } else {
                    return { 
                        matrix: matrix,
                        error: {
                            valid: false,
                            message: "Invalid row, use R1, R2, or R3 only.`"
                        }
                    }
                }
            } 
        }

        i+=2;
        // Determine coeff2
        for(i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                coeff2 = 1;
                break;
            } else if (isDigitCode(rowOp.charAt(i)) || rowOp.charAt(i) === "-") {
                var num = rowOp.charAt(i);
                i++;
                while (isDigitCode(rowOp.charAt(i)) || rowOp.charAt(i) === ".") {
                    num += rowOp.charAt(i);
                    i++;
                }
                coeff2 = parseFloat(num);
                break;
            }
        }

        // Determine row2
        for(i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                if (rowOp.charAt(i+1) === '1') {
                    row2 = 0;
                    break;
                } else if (rowOp.charAt(i+1) === '2') {
                    row2 = 1;
                    break;
                } else if (rowOp.charAt(i+1) === '3') {
                    row2 = 2;
                    break;
                } else {
                    return { 
                        matrix: matrix,
                        error: {
                            valid: false,
                            message: "Invalid row, use R1, R2, or R3 only.`"
                        }
                    }
                }
            } 
        }
        
        i++

        // Determine toRow
        for(i; i < rowOp.length; i++) {
            if (rowOp.charAt(i) === 'R') {
                if (rowOp.charAt(i+1) === '1') {
                    toRow = 0;
                    break;
                } else if (rowOp.charAt(i+1) === '2') {
                    toRow = 1;
                    break;
                } else if (rowOp.charAt(i+1) === '3') {
                    toRow = 2;
                    break;
                } else {
                    return { 
                        matrix: matrix,
                        error: {
                            valid: false,
                            message: "Invalid row, use R1, R2, or R3 only.`"
                        }
                    }
                }
            } 
        }
        console.log(coeff1)
        console.log(row1)
        console.log(coeff2)
        console.log(row2)
        console.log(toRow)
        // apply operation
        var mtxCopy = [...matrix]
        mtxCopy[toRow][0] = matrix[row1][0]*coeff1 + matrix[row2][0]*coeff2;
        mtxCopy[toRow][1] = matrix[row1][1]*coeff1 + matrix[row2][1]*coeff2;
        mtxCopy[toRow][2] = matrix[row1][2]*coeff1 + matrix[row2][2]*coeff2;
        mtxCopy[toRow][3] = matrix[row1][3]*coeff1 + matrix[row2][3]*coeff2;

        // console.log(mtxCopy)

        return { 
            matrix: mtxCopy,
            error: {
                valid: true,
                message: ""
            }
        }
        
    }
 

    return { 
        matrix: matrix,
        error: {
            valid: false,
            message: "Invalid input, use syntax in as examples above`"
        }
    }
}


function isDigitCode(n) {
   return(!isNaN(parseInt(n)));
}

export default validate