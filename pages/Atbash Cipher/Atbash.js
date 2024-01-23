let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const reverse = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];

// Function to encrypt a message using the Atbash cipher
function encrypt(val) {
  //add your code here
  let result = [];
  //argument turns into a value
  //let input = val;
  //should make new letter val
  // let newLetter = [];

  //should make input word/phrase all uppercase
console.log(val.toUpperCase);
  //checks if value includes letter
  //val.includes(alpha);

  //checks if value has letter
  for (let j = 0; j < val.length; j++) {
    //makes the letter in val into a varible
    let currentLetter = val[j];

    //if the checked letter is >= 0, then encrypt
    if (alpha.indexOf(currentLetter) >= 0) {

      result.push(reverse[alpha.indexOf(val[j])]);


    }

  }
  result = result.join("");
  return result;
}

// Function to decrypt a message using the Atbash cipher
function decrypt(val) {
  //add your code here
  //new array for decrypt
  let original = [];
  //checks if value has letter
  for (let j = 0; j < val.length; j++) {
    //if the checked letters are >= 0, then decrypt the encrypt word
    if (alpha.indexOf(val[j]) >= 0) {
      //same as the encrypt, just switching arrays/index to do the opposite action
      original.push(alpha[reverse.indexOf(val[j])]);

    }

  }
  //makes sure that the letters in the output are together like a word/one word
  original = original.join("");
  return original;
}

// Example usage
console.log(encrypt('HELLO')); // TODO: Call the encrypt function with the message to encrypt
console.log(decrypt('SVOOL')); // TODO: Call the decrypt function with the encrypted message

//function that connects code to html using IDs
function processPhrase() {
//id for input
  let inputWord = document.getElementById('inputWord').value;
//id for encrypt function
  let encryptedWord = encrypt(inputWord);
  document.getElementById('encrypted').textContent = encryptedWord;
//id for decrypt function
  let decryptedWord = decrypt((encrypt(inputWord)));
  document.getElementById('decrypted').textContent = decryptedWord;

}