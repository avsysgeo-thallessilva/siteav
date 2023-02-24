
function sendMail() {
    var link = "mailto:thallessilva@avsystemgeo.com.br"
             + "?cc=myCCthallessilva@avsystemgeo.com.br"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value)
    ;

    window.location.href = link;
}
