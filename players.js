function createTag(tagName, attrs, parent) {
    const tag = document.createElement(tagName + "");
    for (const attr in attrs) {
        tag.setAttribute(attr + "", attrs[attr + ""] + "");
    }

    if (typeof (parent) !== 'undefined') {
        parent.appendChild(tag);
    }
    return tag;
}

function genCard(obj, classes) {
    const name = obj.Name;
    const description = obj.Text;
    const type = obj.Type;

    if (typeof (classes) === 'undefined') {
        classes = "";
    }

    const card = createTag("div", {class: "card " + type + " " + classes});
    const head = createTag("h7", {class: "card-header"}, card);
    head.innerText = name;

    const cardBody = createTag("div", {class: "card-body", style:"font-size: 0.5rem;"}, card);
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
            class: active ? "nav-link active" : "nav-link",
            id: player + "-" + controlID + "-tab",
            href: "#" + genID(player, controlID),
            "data-toggle": "tab",
            role: "tab",
            "aria-controls": "nav-" + player + "-" + controlID,
            "aria-selected": active ? "true" : "false"
        });
        a.innerText = controlID;
        tab.appendChild(a);
        nav.appendChild(tab);
    }

    function createPane(controlID, player, list, tabPaneContend, active) {
        const tabPaneItem = createTag("div", {
            class: "tab-pane fade show" + (active ? " active" : ""),
            id: genID(player, controlID),
            role: "tabpanel",
            "aria-labelledby": player + "-" + controlID + "-tab"
        }, tabPaneContend);
        
        let currentRow = createTag("div", {
            class: "row"
        }, tabPaneItem);
        
        let row = 0;
        let col = 0;
        let max=3;
        for (const obj in list) {
            col++;

            let currentCol = createTag("div", {
                class: "col"
            }, currentRow);
            
            // noinspection JSUnfilteredForInLoop
            currentCol.appendChild(genCard(list[obj]));

            if (col === max) {
                col = 0;
                row++;

                currentRow = createTag("div", {
                    class: "row"
                }, tabPaneItem);
            }
        }

        for (let i = col; i < max; i++) {
            col++;
            createTag("div", {class: "col"}, currentRow);
        }
    }

    const name = file.name;
    const card = createTag("div", {class: "card"});
    const header = createTag("div", {class: "card-header", id: "heading-" + name}, card);
    const but = createTag("button", {
        class: "btn btn-link",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#collapse-" + name,
        "aria-expanded": "true",
        "aria-controls": "collapseOne"
    }, header);
    but.innerText = name;

    const collapse = createTag("div", {
        id: "collapse-" + name,
        class: "collapse",
        "aria-labelledby": "headingOne",
        "data-parent": "#accordion"
    }, card);
    const collapseBody = createTag("div", {"class": "card-body"}, collapse);

    const nav = createTag("ul", {class: "nav nav-tabs", id: "Tab" + name, role: "tablist"}, collapseBody);
    let f=true;
    for (const d in file.data){
        createLI(d+"", name, nav,f);
        f=false;
    }
    
    //createLI("item", name, nav, true);
    //createLI("magic", name, nav);
    //createLI("Weapons", name, nav);

    const tabPaneContend = createTag("div", {class: "tab-content", id: "Tab" + name + "-Contend"}, collapseBody);
    f=true;
    for (const d in file.data){
        createPane(d+"", name, file.data[d+""], tabPaneContend, f);
       // createLI(d+"", name, nav,f);
        f=false;
    }
    //createPane("item", name, file.items, tabPaneContend, true);
    //createPane("magic", name, file.magic, tabPaneContend);
    //createPane("Weapons", name, file.attacks, tabPaneContend);
    
    return card;
}

const offsets = {
    name: {c: "B", r: 1, l: 1},
    magic: {c: "A", r: 5, l: 3},


    get: function(thing, array, row = 0){
        let off = this[thing];
        let ret = [];
        let col = off.c.charCodeAt(0) - "A".charCodeAt(0);

        for (let i = 0; i < off.l; i++) {
            ret[i] = array[(off.r - 1) + row][col+i];
        }

        return ret;
    }
};

function explore(array){
    function isDefined(x, y, a) {
        if (typeof (a[x]) === 'undefined') {
            return false;
        }
        return typeof (a[x][y]) !== 'undefined';
    }
    
    let found=[];
    const magicString="Kategorie:";
    for (let r = 2; r < array.length; r++) {
        let row = array[r];
        for (let c = 0; c < row.length; c++) {
            if (array[r][c].trim().startsWith(magicString)) {
                let cat = array[r][c].substring(magicString.length).trim();
                let l = 0;

                let names=[];
                while (isDefined(r + 1, c + l, array) && (array[r + 1][c + l].trim() !== "")) {
                    names[l]=array[r + 1][c + l];
                    l++;
                }

                let lines = [];
                let line = 0;
                while (isDefined(r + 2 + line, c, array) && (array[r + 2 + line][c].trim() !== "")) {
                    let data = {};
                    for (let i = 0; i < l; i++) {
                        data[names[i]] = typeof (array[r + 2 + line][c + i]) === 'undefined' ? "" : array[r + 2 + line][c + i].trim();
                    }
                    lines[line] = data;
                    line++;
                }

                found[cat] = lines;
            }
        }
    }
    
    return found;
}

const data = [];

function init() {
    const accordion = document.getElementById("accordion");
    const players = ["Player_Eric", "Player_Björn"];
    for (const player in players) {
        handleClientLoad(players[player + ""], (response) => {
            //response.result.values;
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