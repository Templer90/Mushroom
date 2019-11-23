let type = "Magic8Ball";

function init() {
    const dropdownList = document.getElementById("dropdownMenuButtonList");
    const defaultLineCallback = (line) => {
        return line[0] + "<br>" + line[1];
    };
    
    for (const datum in data) {
        const entry = datum + "";
        const listEntry = document.createElement("button");
        listEntry.setAttribute("class", "dropdown-item");
        listEntry.setAttribute("type", "button");
        listEntry.addEventListener("click", () => {
            changeType(entry);
        });
        listEntry.innerHTML = entry;
        dropdownList.appendChild(listEntry);

        const current = data[entry];
        if ((typeof (current) === "object") && (typeof (current.spreadsheet) === "string")) {
            handleClientLoad(current.spreadsheet, (response) => {
                let callback = defaultLineCallback;
                if (typeof (current.lineCallback) === "function") {
                    callback = current.lineCallback;
                }

                let values = response.result.values;
                let arr = [];
                for (let i = 1; i < values.length; i++) {
                    arr[i - 1] = callback(values[i]);
                }

                data[entry] = arr;
            });
        }
    }
    changeType(type);
}

function changeType(t) {
    function call_Pre_Post(func) {
        if ((typeof (data[type]) == "object")) {
            if ((typeof (data[type][func]) === "function")) {
                data[type][func](data[type]);
            }
        }
    }
    
    let button = document.getElementById("dropdownMenuButton");
    button.innerHTML = t;
    
    call_Pre_Post("postFunc");
    type = t;
    call_Pre_Post("preFunc");

    main();
}

function main() {
    let div = document.getElementById("effect");
    if (typeof (data[type].func) !== "undefined") {
        data[type].func(data[type], div);
        return;
    }

    let index = Math.floor(Math.random() * data[type].length);
    let element = data[type][index];
    
    let dat = {
        text: "debugText",
        func: () => {}
    };

    if (typeof (element) == "object") {
        dat = element;
    } else if (typeof (element) == "string") {
        dat.text = element;
    }

    div.innerHTML = dat.text;
    let ret = dat.func(dat);
    if (typeof (ret) !== "undefined") {
        div.innerHTML = ret;
    }
}


init();
main();