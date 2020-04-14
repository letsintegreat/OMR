function forward() {
    var nQues = document.getElementById("nques").value;
    OMR = document.getElementById("OMR");
    document.getElementById("ini").innerHTML = "";
    let i;
    for(i = 1; i < nQues; i++) {
        OMR.innerHTML += "<form class=\"acres\"> <span>Question "+ i +"</span><br><label class=\"after\"> <input class=\"with-gap\" type=\"radio\" onclick=\"ResRec(this)\" name=\"" + i + "\" value=\"A\">A </label><label class=\"after\"><input  class=\"with-gap\" type=\"radio\" onclick=\"ResRec(this)\" name=\"" + i + "\" value=\"B\"> B</label><label class=\"after\"><input class=\"with-gap\" type=\"radio\" onclick=\"ResRec(this)\" name=\"" + i + "\" value=\"C\"> C</label><label class=\"after\"><input class=\"with-gap\" type=\"radio\" onclick=\"ResRec(this)\" name=\"" + i + "\" value=\"D\"> D</label><br>"
        
    }
}
