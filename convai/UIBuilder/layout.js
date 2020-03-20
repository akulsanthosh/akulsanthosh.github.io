function ImageCard(data) {
    let string = `
    <div class="imageCardContainer">
        <div class="image">`+
        data.image
        + `
        </div>
        <div class="sectionContainer">
            <div class="contentContainer">
                <div class="titlesContainer">
                    <div class="title">`+ data.title + `</div>
                    <div class="subtitle">`+ data.subtitle + `</div>
                </div>
                <div class="number">`+
        data.no
        + `
                </div>
            </div>
            <div class="description">
            `+
        data.description
        + `
            </div>
        </div>
    </div>
    `
    return string
}

function QuestionCard(data) {
    let string = `
    <div class="questionCardContainer">
            <div class="title">`+ data.title + `</div>
            <div class="subtitle">`+ data.subtitle + `</div>
            <div class="description">
    `+
        data.description
        + `
            </div>
    </div>
    `
    return string
}

function ContentParser(data) {
    var htmlString = ``;
    Object.keys(data).forEach(element => {
        if (data[element].type == "ImageCard") {
            htmlString = htmlString + ImageCard(data[element])
        }
        if (data[element].type == "QuestionCard") {
            htmlString = htmlString + QuestionCard(data[element])
        }
    });
    document.getElementById("card_container").innerHTML = htmlString
}

function QueryParser(data) {
    var htmlString = `<div class="queryTitle"> Queries : </div>
    <ul class="queryList">
    `;
    Object.keys(data).forEach(element => {
        htmlString = htmlString + `
        <li>`+ data[element] + `</li>`
    });
    htmlString = htmlString + `</ul>`
    document.getElementById("query_container").innerHTML = htmlString
}

ContentParser(data.content)
QueryParser(data.queries)

// card(data.content.item1)