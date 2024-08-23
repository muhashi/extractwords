import {deepEqual} from 'assert';
import words from './index.js';

deepEqual(words('Hello how are you'), ['Hello', 'how', 'are', 'you']);
deepEqual(words(''), []);
deepEqual(words('Good'), ['Good']);
deepEqual(words('Hello, I am good.'), ['Hello', 'I', 'am', 'good']);
deepEqual(words("Tests, now with 'apostrophes'"), ['Tests', 'now', 'with', 'apostrophes']);
deepEqual(words('    Birds      chirping ,   in the   MOrning!*@&\r@and\n\t172I/.<>?<love`"it'), ['Birds', 'chirping', 'in', 'the', 'MOrning', 'and', 'I', 'love', 'it']);
deepEqual(words("He didn't pay for his burger m'aam"), ['He', "didn't", 'pay', 'for', 'his', 'burger', "m'aam"]);

deepEqual(words('Hello, how are you?', {lowercase: true}), ['hello', 'how', 'are', 'you']);
deepEqual(words('HeLLo, HOW arE you?', {lowercase: true}), ['hello', 'how', 'are', 'you']);
deepEqual(words('HeLLo, HOW arE you?', {lowercase: false}), ['HeLLo', 'HOW', 'arE', 'you']);

deepEqual(words("Tests, now with 'apostrophes'", {punctuation: true}), ['Tests,', 'now', 'with', "'apostrophes'"]);
deepEqual(words('Tests,0 3 n0w\n3with numb3r5', {punctuation: true}), ['Tests,0', '3', 'n0w', '3with', 'numb3r5']);
deepEqual(words('In the midd..le of words..', {punctuation: true}), ['In', 'the', 'midd..le', 'of', 'words..']);
deepEqual(words('Floating    , ! punctu,ation!!', {punctuation: true}), ['Floating', ',', '!', 'punctu,ation!!']);
deepEqual(words("Don't do it , it 'isn't' worth it!.. ! ' '' ", {punctuation: true}), ["Don't", 'do', 'it', ',', 'it', "'isn't'", 'worth', 'it!..', '!', "'", "''"]);
deepEqual(words("Floating    , ! punctu,'atio'n'!!", {punctuation: false}), ['Floating', 'punctu', "atio'n"]);

deepEqual(words("Floating    , ! punctu,'atio'n'!!", {lowercase: true, punctuation: false}), ['floating', 'punctu', "atio'n"]);
deepEqual(words("Floating    , ! punctu,'atio'n'!!", {lowercase: true, punctuation: true}), ['floating',  ',', '!', "punctu,'atio'n'!!"]);
deepEqual(words("Floating    , ! punctu,'atio'n'!!", {lowercase: false, punctuation: false}), ['Floating', 'punctu', "atio'n"]);
deepEqual(words("Floating    , ! punctu,'atio'n'!!", {lowercase: false, punctuation: true}), ['Floating',  ',', '!', "punctu,'atio'n'!!"]);

console.log('All tests passed');
