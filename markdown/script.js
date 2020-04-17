var markdown = document.getElementById("markdown")

function createBoards(data) {
    string = ``
    Object.keys(data).forEach(element => {
        string = string + `<a href="javascript:void(0)" onclick="createSteps('` + element + `')"> ` + element + `</a><br>`
    })
    document.getElementById("board").innerHTML = string
}

function createSteps(board) {
    string = ``
    Object.keys(data[board]).forEach(element => {
        string = string + `<a href="javascript:void(0)" onclick="createMarkdown('` + board + `','` + data[board][element] + `')"> ` + element + `</a><br>`
    })
    document.getElementById("step").innerHTML = string
    createMarkdown(board, data[board]['step1.md'])
}

function createMarkdown(board, data) {
    url = 'https://akuls.com/markdown/data/' + board + '/' + data
    fetch(url)
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

}

function setup(data) {
    createBoards(data)
    // createSteps(data["board1"])
    // createMarkdown("board1", data["board1"]["step1.md"])
}

setup(data)