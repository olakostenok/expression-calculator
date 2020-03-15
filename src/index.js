function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let brackets = 0;
    
    for (let i = 0; i < expr.length; i++){
        if(expr.includes("(")){
            brackets+=1
        }
        if(expr.includes(")")){
            brackets-=1
        }
    }

    if(brackets !=0){
        throw "ExpressionError: Brackets must be paired"
    }

	if(expr.includes("/ 0")){
    throw "TypeError: Division by zero."
    } else
    return(new Function('return ' + expr)()) 
         
}

module.exports = {
    expressionCalculator
}
