function isDefined(thing) {
    return (thing && typeof (thing) !== "undefined");
}

function unDefined(thing) {
    return typeof (thing) === "undefined";
}

function createTag(tagName, attrs, parent) {
    const tag = document.createElement(tagName + "");
    for (const attr in attrs) {
        tag.setAttribute(attr + "", attrs[attr + ""] + "");
    }

    if (isDefined(parent)) {
        parent.appendChild(tag);
    }
    return tag;
}

function createDiv(attrs, parent) {
    return createTag("div", attrs, parent);
}


function genCard(obj, classes) {
    const name = obj.Name;
    const description = obj.Text;
    const type = obj.Type;

    if (unDefined(classes)) {
        classes = "";
    }

    const card = createDiv({class: "card " + type + " " + classes});
    const head = createTag("h7", {class: "card-header"}, card);
    head.innerText = name;

    const cardBody = createDiv({class: "card-body", style: "font-size: 0.5rem;"}, card);
    cardBody.innerHTML = description;

    return card;
}

function genPlayer(file) {
    const genID = (player, controlID) => {
        return "tab" + player + controlID
    };

    function createLI(controlID, player, nav, active) {
        const tab = createTag("li", {class: "nav-item"});
        const a = createTag("a", {
            "class": active ? "nav-link active" : "nav-link",
            "id": player + "-" + controlID + "-tab",
            "href": "#" + genID(player, controlID),
            "data-toggle": "tab",
            "role": "tab",
            "aria-controls": "nav-" + player + "-" + controlID,
            "aria-selected": active ? "true" : "false"
        });
        a.innerText = controlID;
        tab.appendChild(a);
        nav.appendChild(tab);
    }

    function createPane(controlID, player, list, tabPaneContend, active) {
        const tabPaneItem = createDiv({
            "class": "tab-pane fade show" + (active ? " active" : ""),
            "id": genID(player, controlID),
            "role": "tabpanel",
            "aria-labelledby": player + "-" + controlID + "-tab"
        }, tabPaneContend);

        let currentRow = createDiv({class: "row"}, tabPaneItem);

        let row = 0;
        let col = 0;
        const max = 2;
        for (const obj of list) {
            col++;

            let currentCol = createDiv({class: "col"}, currentRow);


            currentCol.appendChild(genCard(obj, "cardboard"));

            if (col === max) {
                col = 0;
                row++;

                currentRow = createDiv({
                    class: "row"
                }, tabPaneItem);
            }
        }

        for (let i = col; i < max; i++) {
            col++;
            createDiv({class: "col"}, currentRow);
        }
    }

    const name = file.name;
    const card = createDiv({class: "card"});
    const header = createDiv({class: "card-header", id: "heading-" + name}, card);
    const but = createTag("button", {
        "class": "btn btn-link",
        "type": "button",
        "data-toggle": "collapse",
        "data-target": "#collapse-" + name,
        "aria-expanded": "true",
        "aria-controls": "collapseOne"
    }, header);
    but.innerText = name;

    const collapse = createDiv({
        "id": "collapse-" + name,
        "class": "collapse",
        "aria-labelledby": "headingOne",
        "data-parent": "#accordion"
    }, card);
    const collapseBody = createDiv({class: "card-body"}, collapse);

    const nav = createTag("ul", {class: "nav nav-tabs", id: "Tab" + name, role: "tablist"}, collapseBody);
    let f = true;
    for (const d in file.data) {
        createLI(d + "", name, nav, f);
        f = false;
    }

    const tabPaneContend = createDiv({class: "tab-content", id: "Tab" + name + "-Contend"}, collapseBody);
    f = true;
    for (const d in file.data) {
        createPane(d + "", name, file.data[d + ""], tabPaneContend, f);
        f = false;
    }

    return card;
}

function explore(array) {
    function isDefined(x, y, a) {
        if (typeof (a[x]) === 'undefined') {
            return false;
        }
        return typeof (a[x][y]) !== 'undefined';
    }

    let found = [];
    const magicString = "Kategorie:";
    const determinedAttribute = "Name";
    for (let r = 2; r < array.length; r++) {
        for (let c = 0; c < array[r].length; c++) {
            if (array[r][c].trim().startsWith(magicString)) {
                let category = array[r][c].substring(magicString.length).trim();
                let l = 0;
                let names = [];
                let determinedIndex = 0;
                while (isDefined(r + 1, c + l, array) && (array[r + 1][c + l].trim() !== "")) {
                    names[l] = array[r + 1][c + l];

                    if (array[r + 1][c + l].trim() === determinedAttribute) {
                        determinedIndex = l;
                    }

                    l++;
                }

                let lines = [];
                let line = 0;
                let row = r + 2 + line;
                while (isDefined(row, c, array) && (array[row][c + determinedIndex].trim() !== "")) {
                    let data = {};

                    for (let i = 0; i < l; i++) {
                        data[names[i]] = typeof (array[row][c + i]) === 'undefined' ? "" : array[row][c + i].trim();
                    }

                    lines[line] = data;
                    line++;
                    row = r + 2 + line;
                }

                found[category] = lines;
            }
        }
    }

    return found;
}

const data = [];

function init() {
    const accordion = document.getElementById("accordion");
    const players = ["Player_Eric", "Player_Björn", "Player_Kevin", "Player_Marc", "Player_Martina"];
    for (const player of players) {
        handleClientLoad(player, (response) => {
            let file = {
                name: response.result.values[0][1],
                data: explore(response.result.values)
            };

            accordion.appendChild(genPlayer(file));
            data.push(file);
        });
    }
}


init();