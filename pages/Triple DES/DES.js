//key one (k1) 36
let keyOne = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//key two (k2) 36
let keyTwo = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//key three (k3) 36
let keyThree = 'ZYXWVUTS0R1Q2P3O4N5M6L7K8J9IHGFEDCBA'

//should make letters uppercase
function match(letter, key) {

  for (let i = 0; i < letter.length; i++) {

    if (letter[i].length === key.length) {

      return key[i].toUpperCase();
    }

  }

}

//making the characters/letters uppercase
/**function match(letter, key) {

  for (let i = 0; i < letter.length; i++) {


  }

  return key.indexOf(letter.toUpperCase());
}**/

//encrypting function First Layer
function encrypt(key, val, keySet) {
  let result = '';
  //checks characters
  for (let i = 0; i < val.length; i++) {
    let currentLetter = val[i];
    //makes sure the characters are within the key
    let currentKey = keySet[i % keySet.length];
    //Changes the characters according to the key
    //gives k1, k2, or k3
    let currentKeyString = getKeyString(currentKey);
    if (match(currentLetter, currentKeyString) >= 0) {
      //encryption if true
      let layer = (match(currentLetter, currentKeyString) + currentKey) % 36;
      result += currentKeyString[layer];
    } else {
      result += currentLetter;
    }

  }
  return result;
}

//function Second Layer "Decrypting"
function decrypt(key, val, keySet) {
  let result = '';

  for (let i = 0; i < val.length; i++) {
    let currentLetter = val[i];

    let currentKey = keySet[i % keySet.length];

    let currentKeyString = getKeyString(currentKey);

    if (match(currentLetter, currentKey) >= 0) {
      //decryption if true
      let layer = (match(currentLetter, currentKeyString) - currentKey + 36) % 36;
      result += currentKeyString[layer];
    } else {
      result += currentLetter;
    }

  }
  return result;
}

//function that uses the function encrypt
function tripleDESEncrypt(keys, val) {
  //makes the val into a var
  let encryptedVal = val;
  //placing the output of function encrypt into encryptedVal
  for (let i = 0; i < keys.length; i++) {
    encryptedVal = encrypt(keys[i], encryptedVal, [1, 2, 3]);
  }
  return encryptedVal;
}

//function that uses the function decrypt
function tripleDESDecrypt(keys, val) {

  let decryptedVal = val;
  //takes away the previous key and decrypts the encrypted val
  for (let i = keys.length - 1; i >= 0; i--) {
    decryptedVal = decrypt(keys[i], decryptedVal, [1, 2, 3]);
  }
  return decryptedVal;
}

//checks if layer matches key
function getKeyString(key) {
  if (key === 1) {
    return keyOne;
  } else if (key === 2) {
    return keyTwo;
  } else if (key === 3) {
    return keyThree;
  }
}

let keys = [10, 5, 2];

let encryptVal = tripleDESEncrypt(keys, 'value');
let decryptVal = tripleDESDecrypt(keys, encryptVal);

/** 
Decrypt creates indexOf error, same for messageEN and messageDE, tripleDESEncrypt function outputs: 'value', while tripleDESDecrypt function outputs a different encryption
**/

//Testing
console.log("encryption:", encrypt(keys, 'value', [1, 2, 3]))
//console.log(decrypt(10, 'value', [1, 2, 3]))

console.log("encryptionDES:", encryptVal)
console.log("decryptionDES:", decryptVal)

//website coding
function web() {

  let inputPhrase = document.getElementById('inputPhrase').value;

  let inputKey = parseInt(document.getElementById('inputKey').value);

  let encryptTry = encrypt(keys, inputPhrase, inputKey);
  document.getElementById('encrypt').textContent = encryptTry;

  let decryptTry = tripleDESEncrypt(keys, inputPhrase);
  document.getElementById('decrypt').textContent = decryptTry;
}
