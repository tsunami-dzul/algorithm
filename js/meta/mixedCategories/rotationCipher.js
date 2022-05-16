/*
  Rotational Cipher
  One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
  For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
  Given a string and a rotation factor, return an encrypted string.
  Signature
  string rotationalCipher(string input, int rotationFactor)
  Input
  1 <= |input| <= 1,000,000
  0 <= rotationFactor <= 1,000,000
  Output
  Return the result of rotating input a number of times equal to rotationFactor.
  Example 1
  input = Zebra-493?
  rotationFactor = 3
  output = Cheud-726?
  Example 2
  input = abcdefghijklmNOPQRSTUVWXYZ0123456789
  rotationFactor = 39
  output = nopqrstuvwxyzABCDEFGHIJKLM9012345678
*/

const rotationalCipher = (input, rotationFactor) => {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let cipher = '';

  for (let i = 0; i < input.length; i++) {
    if (/^[a-z]+$/.test(input[i])) {
      cipher += cipherString(input[i], rotationFactor, lowerAlphabet);
    } else if(/^[A-Z]+$/.test(input[i])) {
      cipher += cipherString(input[i], rotationFactor, upperAlphabet);
    } else if (/^[0-9]+$/.test(input[i])) {
      cipher += cipherString(input[i], rotationFactor, '0123456789');
    } else {
      cipher += input[i];
    }
  }

  return cipher;
};

const cipherString = (item, rotationFactor, alphabet) => {
  const diff = alphabet.length - alphabet.indexOf(item);
  let p = rotationFactor - diff;

  if (p >= 0) {
    if(p >= alphabet.length) {
        const remainder = p / alphabet.length;
        p = p - alphabet.length * Math.trunc(remainder);
    } 

    return alphabet[p];
  } else {
    return alphabet[alphabet.length + p];
  }
};

const resp = rotationalCipher('abcdefghijklmNOPQRSTUVWXYZ0123456789', 39);

console.log(resp);
