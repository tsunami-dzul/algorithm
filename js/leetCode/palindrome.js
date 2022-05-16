const palindrome = (word) => {
    let startIndex = 0;
    let endIndex = word.length - 1;
    let palindrome = [...word];

    do {
        let temp = palindrome[startIndex];

        palindrome[startIndex] = palindrome[endIndex];
        palindrome[endIndex] = temp;

        startIndex++;
        endIndex--;
    } while( endIndex > startIndex );

    return palindrome.join('') === word;
}

const palindrome2 = (word) => {
    const reversed = word.split('').reverse().join('');

    return word === reversed;
}

const word = 'radar';

const result = palindrome2(word);

console.log(result);