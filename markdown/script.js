var markdown = document.getElementById("markdown")

fetch('https://akuls.com/markdown/file.md')
    .then(response => response.blob())
    .then(blob => {
        var r = new FileReader();
        r.onload = function (e) {
            var contents = e.target.result;
            var convertor = new showdown.Converter(),
                text = contents,
                html = convertor.makeHtml(text)

            markdown.innerHTML = html
        }
        r.readAsText(blob);
    });
