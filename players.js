function createTag(tagName, attrs) {
    const tag = document.createElement(tagName + "");
    for (const attr in attrs) {
        tag.setAttribute(attr + "", attrs[attr + ""] + "");
    }
    return tag;
}

function genCard(obj) {
    const name=obj.name;
    const description=obj.description;
    const type=obj.type;
    
    const card = createTag("div", {class: "card "+type, style:"width: 30%"});
    const head = createTag("h5", {class: "card-header"});
    head.innerText = name;
    card.appendChild(head);
    const cardBody = createTag("div", {class: "card-body"});
    cardBody.innerHTML = description;
    card.appendChild(cardBody);
    
    return card;
}

function genPlayer(obj) {
    const name = obj.name;
    const card = createTag("div", {class: "card"});
    const header = createTag("div", {class: "card-header", id: "heading-" + name});
    const but = createTag("button", {
        class: "btn btn-link",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#collapse-" + name,
        "aria-expanded": "true",
        "aria-controls": "collapseOne"
    });
    but.innerText = name;

    const collapse = createTag("div", {
        id: "collapse-" + name,
        class: "collapse",
        "aria-labelledby": "headingOne",
        "data-parent": "#accordion"
    });
    const collapseBody = createTag("div", {"class": "card-body", style:"display: block ruby;"});
    for (const item in obj.items) {
        const m = obj.items[item];
        collapseBody.appendChild(genCard(m));
    }
    
    collapse.appendChild(collapseBody);

    header.appendChild(but);
    card.appendChild(header);
    card.appendChild(collapse);
    return card;
}

function init() {
    const accordion = document.getElementById("accordion");
    for (const player in players) {
        accordion.appendChild(genPlayer(players[player]));
    }
}

init();