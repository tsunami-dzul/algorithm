const canGetExactChange = (targetMoney, denominations) => {
    if(targetMoney <= 0) {
        return false;
    }

    for(let i=0; i<denominations.length; i++) {
        if(targetMoney % denominations[i] === 0) {            
            return true;
        }
    }

    for(let i = 0; i < denominations.length; i++) {
        return canGetExactChange(targetMoney - denominations[i], denominations);
    }
}

const arr = [5, 10, 25, 100, 200];
const target = 94;

const resp = canGetExactChange(target, arr);
console.log(resp);