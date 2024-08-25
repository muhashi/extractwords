# extractwords

>  Extract the words from a string 

## Install

```sh
npm install extractwords
```

## Usage

```js
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

## API

### extractWords(input, options?)

#### input

Type: `string`

Text containing words to be extracted.

#### options

Type: `object`

##### lowercase

Type: `boolean`\
Default: `false`

Whether all words returned are lowercased.

##### punctuation

Type: `boolean`\
Default: `false`

Whether all punctuation is retained.
