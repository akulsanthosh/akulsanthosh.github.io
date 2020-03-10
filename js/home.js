

function menuBuilder(data) {
    var string = ``
    var a = 0
    Object.keys(data).forEach(element => {
        string = string + `<a href="javascript:void(0)" onclick="pageshow(` + a + `)">` + element + `</li>`
        a = a + 1
    });
    let htmlString = `
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">
        `+ string + `</div>
    `
    document.getElementById("myNav").innerHTML = htmlString;
}



function homepage(data) {
    let title = `<h1>` + data.title + `</h1>`
    let desc = `<p>` + data.description + `</p>`
    let address = `<p>` + data.address + `</p>`
    var social = ""
    Object.keys(data.social).forEach(element => {
        social = social + "<li>" + element + data.social[element] + "</li>"
    });
    let htmlString = `
        <div class="homeContainer">
        <div class="homeTitleContainer">
        <div class="title">
        `+ title + ` </div>
        <div class="desc">
        `+ desc + ` </div>
        <div class="homeLinkContainer">
        <div class="address"><b>Address :</b>
        <ul class="ulSocial"> <li>`+ address + `</li></ul> </div>
        <div class="social"> <b>Social :</b>
        <ul class="ulSocial">`+ social + `</ul>
        </div></div></div>
        <div class="homeImageContainer">
        `+ data.image + `
        </div>
        </div>
    `
    document.getElementById("main_container").innerHTML = htmlString;
}

homepage(data.Home)


function cvpage(data) {
    let linkto = `<div class="resume">` + data.title + `</div>`
    let list = data.list
    var string = ``
    Object.keys(list).forEach(section => {
        let sec = list[section]
        var item = ``
        Object.keys(sec).forEach(subsection => {
            let sub = sec[subsection]
            item = item +
                `<div class="itemContainer">
                    <div class="itemTitle">` +
                sub.title +
                `</div>
                    <div class="itemSubContainer">
                        <div class="itemSubTitle">` +
                sub.subtitle +
                `</div>
                         <div class="itemDate">` +
                sub.date +
                `</div>
                    </div>
                    <div class="itemDescription">` +
                sub.description +
                `</div>
                </div>
            `
            // console.log(item)
        });
        string = string + `
        <div class="sectionContainer">
        <div class="sectionTitle">` +
            section +
            `</div>
        <div class="sectionItems"> ` +
            item +
            `</div>
        </div>
        `
    });
    // console.log(linkto)
    let htmlString = `
    <div class="section">`
        + linkto + string +
        `</div>
    `

    document.getElementById("main_container").innerHTML = htmlString;
}

// cvpage(data.CV)

function momentspage(data) {
    var string = ``
    Object.keys(data).forEach(image => {
        let item = data[image]
        string = string + `
        <figure>
        <img src="`+ item.url + `">
        <figcaption>`+ item.title + `</figcaption>
        </figure>
        `
    });
    let htmlString = `
    <div id="columns">`
        + string +
        `</div>
    `
    document.getElementById("main_container").innerHTML = htmlString;

}

// momentspage(data.Moments)

function pageshow(option) {
    if (option == 0) {
        homepage(data.Home)
    }
    if (option == 1) {
        cvpage(data.CV)
    }
    if (option == 2) {
        momentspage(data.Moments)
    }
    closeNav()
}

function openNav() {
    menuBuilder(data)
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";

}


// function blogpage(data) {
//     let title = `<h1>` + data.title + `</h1>`

//     document.getElementById("main_container").innerHTML = title;

// }

// blogpage(data.Blog)

