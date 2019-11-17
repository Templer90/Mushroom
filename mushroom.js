let type = "Magic8Ball";

function init() {
    const but = document.getElementById("dropdownMenuButtonList");
    const defaultLineCallback = (line) => {
        return line[0] + '<br>' + line[1];
    };
    
    for (const s in data) {
        const b = document.createElement("button");
        b.setAttribute("class", "dropdown-item");
        b.setAttribute("type", "button");
        b.setAttribute('onClick', "changeType('" + s + "');");
        b.innerHTML = s;
        but.appendChild(b);

        const current = data[s];
        if ((typeof (current) === 'object') && (typeof (current.spreadsheet) === 'string')) {
            handleClientLoad(current.spreadsheet, function (response) {
                let callback = defaultLineCallback;
                if (typeof (current.lineCallback) === 'function') {
                    callback = current.lineCallback;
                }
                
                let values = response.result.values;
                let arr = [];
                for (let i = 1; i < values.length; i++) {
                    arr[i-1] = callback(values[i]);
                }

                data[s] = arr;
            });
        }
    }
    changeType(type);
}

function changeType(t) {
    let but = document.getElementById("dropdownMenuButton");
    but.innerHTML = t;
    type = t;
    main();
}

function main() {
    let index = Math.floor(Math.random() * data[type].length);
    let div = document.getElementById("effect");
    let element = data[type][index];
    let dat = {
        text: "debugText",
        func: () => {}
    };

    if (typeof (element) == 'object') {
        dat = element;
    } else if (typeof (element) == 'string') {
        dat.text = element;
    }

    div.innerHTML = dat.text;
    let ret = dat.func(dat);
    if (typeof (ret) !== 'undefined') {
        div.innerHTML = ret;
    }
}


init();
main();