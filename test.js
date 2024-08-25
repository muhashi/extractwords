import test from 'ava';
import extractWords from './index.js';

test('Throws when given number', t => {
    t.throws(() => {
        extractWords(123);
    }, {
        instanceOf: TypeError,
        message: 'Expected a string, got number',
    });
});

test('Splits sentence into words', t => {
    const words = extractWords('Hello how are you');
    t.deepEqual(words, ['Hello', 'how', 'are', 'you']);
});

test('Returns empty array for empty string', t => {
    const words = extractWords('');
    t.deepEqual(words, []);
});

test('Returns single word', t => {
    const words = extractWords('Good');
    t.deepEqual(words, ['Good']);
});

test('Handles punctuation at the end of sentence', t => {
    const words = extractWords('Hello, I am good.');
    t.deepEqual(words, ['Hello', 'I', 'am', 'good']);
});

test('Handles sentence with apostrophes', t => {
    const words = extractWords("Tests, now with 'apostrophes'");
    t.deepEqual(words, ['Tests', 'now', 'with', 'apostrophes']);
});

test('Handles sentence with various punctuation and special characters', t => {
    const words = extractWords('    Birds      chirping ,   in the   MOrning!*@&\r@and\n\t172I/.<>?<love`"it');
    t.deepEqual(words, ['Birds', 'chirping', 'in', 'the', 'MOrning', 'and', 'I', 'love', 'it']);
});

test('Handles sentence with contractions and apostrophes', t => {
    const words = extractWords("He didn't pay for his burger m'aam");
    t.deepEqual(words, ['He', "didn't", 'pay', 'for', 'his', 'burger', "m'aam"]);
});

test('Handles lowercase option', t => {
    const words = extractWords('Hello, how are you?', {lowercase: true});
    t.deepEqual(words, ['hello', 'how', 'are', 'you']);
});

test('Handles mixed case input with lowercase option', t => {
    const words = extractWords('HeLLo, HOW arE you?', {lowercase: true});
    t.deepEqual(words, ['hello', 'how', 'are', 'you']);
});

test('Handles mixed case input without lowercase option', t => {
    const words = extractWords('HeLLo, HOW arE you?', {lowercase: false});
    t.deepEqual(words, ['HeLLo', 'HOW', 'arE', 'you']);
});

test('Handles punctuation option', t => {
    const words = extractWords("Tests, now with 'apostrophes'", {punctuation: true});
    t.deepEqual(words, ['Tests,', 'now', 'with', "'apostrophes'"]);
});

test('Handles numbers and punctuation', t => {
    const words = extractWords('Tests,0 3 n0w\n3with numb3r5', {punctuation: true});
    t.deepEqual(words, ['Tests,0', '3', 'n0w', '3with', 'numb3r5']);
});

test('Handles punctuation within words', t => {
    const words = extractWords('In the midd..le of words..', {punctuation: true});
    t.deepEqual(words, ['In', 'the', 'midd..le', 'of', 'words..']);
});

test('Handles multiple punctuation marks', t => {
    const words = extractWords('Floating    , ! punctu,ation!!', {punctuation: true});
    t.deepEqual(words, ['Floating', ',', '!', 'punctu,ation!!']);
});

test('Handles complex punctuation and contractions', t => {
    const words = extractWords("Don't do it , it 'isn't' worth it!.. ! ' '' ", {punctuation: true});
    t.deepEqual(words, ["Don't", 'do', 'it', ',', 'it', "'isn't'", 'worth', 'it!..', '!', "'", "''"]);
});

test('Handles punctuation disabled', t => {
    const words = extractWords("Floating    , ! punctu,'atio'n'!!", {punctuation: false});
    t.deepEqual(words, ['Floating', 'punctu', "atio'n"]);
});

test('Handles lowercase and punctuation options together', t => {
    const words = extractWords("Floating    , ! punctu,'atio'n'!!", {lowercase: true, punctuation: false});
    t.deepEqual(words, ['floating', 'punctu', "atio'n"]);
});

test('Handles lowercase and punctuation options', t => {
    const words = extractWords("Floating    , ! punctu,'atio'n'!!", {lowercase: true, punctuation: true});
    t.deepEqual(words, ['floating',  ',', '!', "punctu,'atio'n'!!"]);
});

test('Handles case-sensitive without punctuation', t => {
    const words = extractWords("Floating    , ! punctu,'atio'n'!!", {lowercase: false, punctuation: false});
    t.deepEqual(words, ['Floating', 'punctu', "atio'n"]);
});

test('Handles case-sensitive with punctuation', t => {
    const words = extractWords("Floating    , ! punctu,'atio'n'!!", {lowercase: false, punctuation: true});
    t.deepEqual(words, ['Floating',  ',', '!', "punctu,'atio'n'!!"]);
});
