export type Options = {
    /**
    Whether all words returned are lowercased.

    @default false
    */
    readonly lowercase?: boolean;

    /**
    Whether all punctuation is retained.

    @default false
    */
    readonly punctuation?: boolean;
};

/**
Extract the words from a string

@param input - Text containing words to be extracted
@param options - options to change how words are returned
@returns a list of words in the text

@example
```
import extractWords from 'extractwords';

extractWords('Good morning, how are you?');
//=> ['Good', 'morning', 'how', 'are', 'you']

extractWords("He didn't pay for his meal m'aam");
//=> ['He', "didn't", 'pay', 'for', 'his', 'meal', "m'aam"]

extractWords("17651Hello*&!(*2I'm_++`~gOOd 2");
//=> ['Hello', "I'm", 'gOOd']

extractWords('Good morning, how are you?', {lowercase: true});
//=> ['good', 'morning', 'how', 'are', 'you']

extractWords('Good Morning. how are you?', {punctuation: true});
//=> ['Good', 'Morning.', 'how', 'are', 'you?']

extractWords('I . am ... go0d 2', {punctuation: true});
//=> ['I', '.', 'am', '...', 'go0d', '2']
```
*/
export default function extractWords(input: string, options?: Options): string[];
