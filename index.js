export default function extractWords(input, { lowercase = false, punctuation = false } = {}) {
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof input}`);
    }

    const words = punctuation
        ? input.match(/\S+/g) || []
        : input.match(/[a-zA-Z]+('[a-zA-Z]+)?/g) || [];

    return lowercase
        ? words.map(str => str.toLowerCase())
        : words;
}
