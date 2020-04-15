var markdown = document.getElementById("markdown")

fetch('https://akuls.com/markdown/file.md')
    .then(response => response.blob())
    .then(blob => {
        console.log(blob)
    });

function readSingleFile(evt) {
    var f = evt.target.files[0];
    if (f) {
        var r = new FileReader();
        r.onload = function (e) {
            var contents = e.target.result;
        }
        r.readAsText(f);
    } else {
        alert("Failed to load file");
    }
}


var convertor = new showdown.Converter(),
    text = '#hello there',
    html = convertor.makeHtml(text)

markdown.innerHTML = html
