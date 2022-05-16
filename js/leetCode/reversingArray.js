const reversingArray1 = (a) => {
    let i = 0;
    let loops = a.length-1;

    do {
        let temp = a[i];
        
        a[i] = a[i+1];
        a[i+1] = temp;

        i++;

        if(i > loops - 1) {
            i = 0;
            loops -= 1;
        };        
    } while(loops > 0);
 
    return a;
}

const reversingArray2 = (a) => {
    let left = 0;
    let rigth = a.length - 1;

    do {
        let tmp = a[left];

        a[left] = a[rigth];
        a[rigth] = tmp;

        left++;
        rigth--;
    }while(rigth > left);

    return a;
}

const a = [5,4,3,2,1];

const result = reversingArray1(a);

console.log(result);