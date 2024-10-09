// Scrivi un programma che utilizzi un ciclo for per stampare sulla console i numeri da 1 a 10.

for (let i = 1; i < 11; i++){
    console.log(i)
}

// numeri da 1 a 10 in array vuoto

let scale = []

for (let i = 1; i<11; i++){
    scale.push(i)
}

console.log(scale)


// Scrivi un programma che calcoli la media di un array di numeri utilizzando un ciclo for.


let addiction = 0

for (let i = 0; i < scale.length; i++){
     addiction+=scale[i]
}

const media = addiction / scale.length
console.log(media)


// Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.

let numbers = [1,2,3,4,5,6,7,8,9]

let numbersAddiction =  0

for (i = 0; i < numbers.length; i++){
    numbersAddiction= numbersAddiction+numbers[i]
}

console.log (numbersAddiction)