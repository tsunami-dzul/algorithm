// const logestCommonPrefix = (strs) => {
//     let prefix = strs;
//     let lastStr;

//     for(let i=0; i<strs.length; i++) {
//         if(lastStr !== undefined) {
//             prefix = [];

//             for(let j=0; j<lastStr.length; j++) {
//                 if(lastStr[j] === strs[i][j]) {
//                     prefix.push(lastStr[j]);
//                 } else {
//                     break;
//                 }
//             }
//         }

//         lastStr = strs[i];
//     }

//     return prefix.join('');
// }

// const logestCommonPrefix = (strs) => {
    // let lastPrefixFound = strs[0];

    // for(let i=1; i<strs.length; i++) {
    //     let currentPrefix = '';

    //     for(let j=0; j<lastPrefixFound.length; j++) {            
    //         if(lastPrefixFound[j] === strs[i][j]) {
    //             currentPrefix += strs[i][j];
    //         } else {
    //             lastPrefixFound = currentPrefix;

    //             break;
    //         }
    //     }
    // }

    // return lastPrefixFound;
// }

const logestCommonPrefix = (strs) => {
    return strs.reduce((lastPrefix, currentPrefix) => {
            let prefix = '';

            for(let i=0; i<lastPrefix.length; i++) {
                if(lastPrefix[i] === currentPrefix[i]) {                    
                    prefix += lastPrefix[i];
                } else {
                    break;
                }
            }

            return prefix;
    });
};

const strs = ["flower","flower","flower","flower"];

const result = logestCommonPrefix(strs);

console.log(result);
