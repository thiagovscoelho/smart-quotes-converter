/*	Function to convert text with "Straight" quotes to “Typographic” quotes

		Usage: text=smartQuotes(text);

	Text might typically come from a form’s text area. For example, if

		the form has id="form"
		the button has name="convert"
		the textarea has name="text"

	you can use:

		window.onload=function() {
			var form=document.getElementById('form');
			form['convert'].onclick=function() {
				form['text'].value=smartQuotes(form['text'].value);
				return false;
			};
		};

	======================================================================== */

	function smartQuotes(text) {
		/*	Explanation of the Regular Expressions

			A quote bounds a word.
			So an opening quote is itself after a non-boundary; a space before a quote is not yet the beginning of a word
			A closing quote is after the end of a word, ie a boundary
			Need some way to allow some straight quotes
			RegEx /(^|\B)(')\b/g = (Start or Not WordBoundary) (Quote) WordBoundary / global (all)
		-------------------------------------------------------------------- */

		text=text.replace(/(^|\B)(')\b/g,'‘');		//	Replace opening '
		text=text.replace(/(^|\B)(")\b/g,'“');		//			opening "
		text=text.replace(/'/g,'’');				//			closing '
		text=text.replace(/"/g,'”');				//			closing "

		return text;
	}

