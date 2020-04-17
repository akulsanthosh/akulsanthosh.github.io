
function createBoards(data) {
    string = ``
    url = 'https://akuls.com/markdown/'
    Object.keys(data).forEach(element => {
        string = string + `<a href="` + url + element + `/` + `"> ` + element + `</a><br>`
    })
    document.getElementById("board").innerHTML = string
}

function setup(data) {
    createBoards(data)
}

setup(data)