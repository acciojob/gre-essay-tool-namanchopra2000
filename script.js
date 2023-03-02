
// alert()
	var r = document.getElementById('evaluatedText');

 function countWords(e) {
             var text = e.target.value;
	        const numWords = text.split(" ").length;
            document.getElementById('wordCount').innerHTML = numWords;
        }
r.addEventListener('input' , countWords);