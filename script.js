let input = document.querySelector('input')
let letters = document.querySelector('.l-count')
let words = document.querySelector('.w-count')
let sentences = document.querySelector('.s-count') 

let letterCount = 0
let wordCount = 0
let sentenceCount = 0

input.addEventListener('input', () => {
    for (let i = 0; i < input.value.length; i++) {
        if (input.value[i].toLowerCase() !== input.value[i].toUpperCase()) {
            letterCount++
        }
        if (i == 0) {
            if (input.value[i].toLowerCase() !== input.value[i].toUpperCase()) {
                wordCount++
            }
        }
        if (input.value[i - 1] == ' ' && input.value[i].toLowerCase() !== input.value[i].toUpperCase()) {
            wordCount++
        }
        if (input.value[i].toLowerCase() !== input.value[i].toUpperCase() && input.value[i+1] == '.' || input.value[i+1] == '?' || input.value[i+1] == '!' || input.value[i+1] == ':') {
            sentenceCount++

        }
    }
    letters.innerHTML = letterCount
    words.innerHTML = wordCount
    sentences.innerHTML = sentenceCount
    wordCount = 0
    letterCount = 0
    sentenceCount = 0

})
