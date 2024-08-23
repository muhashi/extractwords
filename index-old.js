const defaults = {
	lowercase: false,
	punctuation: false
};

const extractWords = (string, options = {}) => {
	options = {
		...defaults,
		...options
	};

	let words = options.punctuation ?
		string.match(/\S+/g) || [] :
		string.match(/[a-zA-Z]+('[a-zA-Z]+)?/g) || [];

	if (options.lowercase) {
		words = words.map(string => string.toLowerCase());
	}

	return words;
};

export default extractWords;
