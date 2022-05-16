const findEncryptedWord = (s) => {
    let middle = Math.floor(s.length/2);

    if(s.length <= 1) {
        return s;
    }

    middle = s.length % 2 === 0 ? middle - 1 : middle;

    return s[middle] + findEncryptedWord(s.slice(0, middle)) + findEncryptedWord(s.slice(middle+1, s.length));
}

const enc = findEncryptedWord('facebook');

console.log(enc);