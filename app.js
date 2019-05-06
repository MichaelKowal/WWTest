$('#sentenceIn').on('input', function (evt) {
    $('#outputs').empty();

    let sentence = evt.target.value;

    //only show results if there is anything in the box
    if (sentence.length === 0) {
        return;
    }

    let words = getWords(sentence);

    //call methods in any order
    wordCount(words);
    reversedSentence(words);
    noVowels(sentence);
    oneOfEach(sentence);
});

//remove all the spaces, making sure not to have empty strings between double spaces
function getWords(sentence) {
    return sentence.split(' ').filter(function (word) {
        return word !== '';
    });
}

//return count of number of words(space separated things)
function wordCount(words) {
    return $('<li>').text('Word count: ' + words.length).appendTo('#outputs');
}

//return sentence with the words in reverse order
function reversedSentence(words) {
    let str = '';
    words.reverse();
    for(let i of words){
        str += i + ' ';
    }
    return $('<li>').text('Reversed string: ' + str).appendTo('#outputs');
}

//remove all vowels from the sentence
function noVowels(sentence) {
    sentence = sentence.replace(/[aeiouAEIOU]/ig, '');
    return $('<li>').text('No vowels: ' + sentence).appendTo('#outputs');
}

//only show the first occurrence of each character
function oneOfEach(sentence) {
    let unique = [];
    sentence = sentence.split('');
    for(let i = 0; i < sentence.length; i++) {
        if(!unique.includes(sentence[i])) {
            unique.push(sentence[i]);
        }
    }
    let newSentence = unique.join('');
    return $('<li>').text('No duplicates: ' + newSentence).appendTo('#outputs');
}
