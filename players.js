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
    const name = obj.name;
    const description = obj.description;
    const type = obj.type;

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

function genPlayer(obj) {
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

    const name = obj.name;
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
    createLI("item", name, nav, true);
    createLI("magic", name, nav);
    createLI("Weapons", name, nav);

    const tabPaneContend = createTag("div", {class: "tab-content", id: "Tab" + name + "-Contend"}, collapseBody);
    createPane("item", name, obj.items, tabPaneContend, true);
    createPane("magic", name, obj.magic, tabPaneContend);
    createPane("Weapons", name, obj.attacks, tabPaneContend);
    
    return card;
}

function init() {
    const accordion = document.getElementById("accordion");
    for (const player in players) {
        accordion.appendChild(genPlayer(players[player]));
    }
}

init();