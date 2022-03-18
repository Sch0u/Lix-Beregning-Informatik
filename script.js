function calculateLIX(){
    var inputTxt = document.getElementById("inputTxt").value;

    // Word count
    var wordCount = inputTxt.split(" ").length;
    if(wordCount.length < 1){
        wordCount --;
    }
    document.getElementById("word-count").innerHTML = wordCount

    // Full stop count
    var fullStopCount = inputTxt.match(/[.]/gm);
    fullStopCount = checkNull(fullStopCount);
    document.getElementById("stop-count").innerHTML = fullStopCount;

    // Long word count
    var longCount = inputTxt.match(/(\s|^)\S{6}/gm);
    longCount = checkNull(longCount);
    document.getElementById("long-count").innerHTML = longCount;


    /*** Calculate LIX ***/ 
    var lixNumber = Math.round((wordCount / fullStopCount) + (longCount * 100 / wordCount));
    if(lixNumber == 'Infinity'){
        lixNumber = 0;
    }
    document.getElementById("lix-number").innerHTML = lixNumber;

    highlightDiff(lixNumber)
}

function checkNull(obj){
    if(obj == null){
        obj = 0;
    } else{
        obj = obj.length;
    }

    return obj;
}

function highlightDiff(number){
    removeHighlight();
    if(number > 55){
        document.getElementById("veryDiff").style.fontWeight = 'bold';
    } else if(number >= 45 && number < 54){
        document.getElementById("highDiff").style.fontWeight = 'bold';
    } else if(number >= 35 && number < 45){
        document.getElementById("midDiff").style.fontWeight = 'bold';
    } else if(number >= 25 && number < 35){
        document.getElementById("lowDiff").style.fontWeight = 'bold';
    } else {
        document.getElementById("beginDiff").style.fontWeight = 'bold';
    }
}

function removeHighlight(){
    var paragraphs = document.getElementsByClassName('fact-box')[0].children[0].children;
    for(i = 1; i < paragraphs.length; i++){
        paragraphs[i].style.fontWeight = '';
    }
}