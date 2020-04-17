var board = 'board1'

function createSteps() {
    string = ``
    markdown = ``
    Object.keys(data[board]).forEach(element => {
        string = string + `<a href="#` + element + `">` + element + `</a><br>`
        url = 'https://akuls.com/markdown/data/' + board + '/' + data[board][element]
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                var r = new FileReader();
                r.onload = function (e) {
                    var contents = e.target.result;
                    var convertor = new showdown.Converter(),
                        text = contents,
                        html = convertor.makeHtml(text)

                    markdown = markdown + `<a name="` + element + `">` + html + `</a>`
                    document.getElementById("markdown").innerHTML = markdown
                }
                r.readAsText(blob);

            });
    })
    document.getElementById("step").innerHTML = string

}


function setup(data) {
    // createBoards(data)
    createSteps()
    // createMarkdown("board1", data["board1"]["step1.md"])
}

setup(data)