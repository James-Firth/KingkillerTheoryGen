var wordList = []
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                wordList = allText.split('\n');
            }
        }
    }
    rawFile.send(null);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateTheory(){
  shuffle(wordList);
  var theory = wordList[0] + " is actually "+ wordList[1];
  return theory;
}

function updateTheory(){
  document.getElementById('joke').innerHtml(generateTheory());
}

window.onload = function(){
  readTextFile("https://raw.githubusercontent.com/James-Firth/KingkillerTheoryGen/gh-pages/kkc.txt");
  updateTheory();
};
