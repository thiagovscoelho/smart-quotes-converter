/*	Routine to convert to “Smart” quotes as you type

		Usage: text=smartQuotes(text);

	Text might typically come from a form’s text area. For example, if

		the form has id="form"
		the button has name="convert"
		the textarea has name="text"

	you can use:
	
		var form=document.getElementById('form');
		form['convert'].onclick=function() {
			form['text'].value=smartQuotes(form['text'].value);
			return false;
		};

	======================================================================== */

	window.onload=init;
	function init() {
		var form=document.getElementById('form');
		form['text'].onkeypress=handleQuotes;		//	Smart Quotes
		insertChar(form['text']);					//	Initialise insertChar() function
	}

/*	Character Insert
	
	Code to insert a single character at the insertion point.
	Due to Legacy cross-browser differences, the very first call
	is used to initialise the function.
	============================================================ */

	var insertChar=function(element) {
		//	First call self-modifies according to browser feature
		if(element.selectionStart!==undefined) insertChar=function(element,char) {
			var start;
			element.value=element.value.substring(0,start=element.selectionStart)+char+element.value.substring(element.selectionEnd);
			element.setSelectionRange(start+1,start+1);
		};
		else insertChar=function(element,char) {	//	IE<9; element is not used
			var range;
			range=document.selection.createRange();
			range.text='\t';
				range.select();
		};
	};

/*	Handle Quote Character: attach to element.onkeypress
	------------------------------------------------------------ */
	function handleQuotes(e) {
		//	Get Event Info
			e=e||window.event;
			var target=e.target || e.srcElement;					//	text areat
			var code=e.charCode;									//	typed character
		//	Process Character

			var char;
			switch (code) {
				case 34:											//	"
				case 39:											//	'
					if(e.ctrlKey) {									//	ctrl->allow straight quotes
						insertChar(target,e.shiftKey?'"':"'");		//	insert straight quote
						return false;								//	done; do not process further
					}

					var text=target.value;
					var l=target.selectionStart;					//	get character position
					if(code==34)
						char=text.substr(l-1,1).match(/\B/)?'“':'”';
					else char=text.substr(l-1,1).match(/\B/)?'‘':'’';
					insertChar(target,char);
					return false;
				default:
					return true;									//	no action, so process further
		}
	}
