export function makeReference(length) {
    
    let result = "";
    const smallLetter = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const allChar = num;
    //const charLength = allChar.length;
    let counter = 0;

    for(var i = 0; i < length; i++)
    result += allChar.charAt(Math.floor(Math.random() * allChar.length));

    return `${result}`;
  
    
}

export function makeUserId(length) {
    
    let result = "";
    const smallLetter = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const allChar = characters;
    const charLength = allChar.length;
    let counter = 0;

    for(var i = 0; i < length; i++)
    result += allChar.charAt(Math.floor(Math.random() * allChar.length));

    return `${result}`;
    
}

export function makeAccountNumber(length) {
    
    let result = "";
    //const smallLetter = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    //const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const allChar = num;
    //const charLength = allChar.length;
    //let counter = 0;

    for(var i = 0; i < length; i++)
    result += allChar.charAt(Math.floor(Math.random() * allChar.length));

    return `${result}`;
}

export const showReference =() => {
    for(var c = ""; c.length < 5;) c +=Math.randoma().toString(36).substr(2, 1)
}

export function randomVale(value) {
    return Math.floor(Math.random()*value)

}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export function createReference(length) {
    let str = "";
    for(var i = 0; i < length; i++) {
        let random = randomVale(characters.length);
        str += characters.charAt(random);
    }
    return str;
}