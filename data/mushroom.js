//Liste an Zeilen
//{text:"text der angezeigt werden soll", func:()=>{}},
//{spreadsheet:"Sheet von GoogleDock", lineCallback:},
const data = {
    FreshD: [
        "Ich bin alt, ich bin bald tot, aus Grün wird Rot.",
        "Ey yo ihr Negerkinder, ey ihr stinkt so doll wie Rinder. Echt wie die Scheiße von ner Kuh, das macht mir direkt die Nase zu. Ihr seid Scheiße, ich weiß, wie ich heiße! Fresh Dumbledore!, geht in euer Ohr! Einmal rein und wieder raus, so siehts aus!",
        "Heeeyyyy yo ich bin Fresh Dumbledore, back from the Underground back for more. Ich rappe hier, ich rappe dort, ich rappe hundert mal bessaaaa als der dunkle Lord!",
        "Yoo! Post für mich, Post für mich! Ich hab Post bekomm', da freu ich mich!",
        "Vielen lieben Thank und schönen Day noch!",
        "Ey wenn hier einer unnötige Anglismen verwendet, dann bin das immer noch ich.",
        "McGonagall: Haltet mal eure Schnauzen Kinder, Fresh Dumbledore möchte wieder einen Freestyle-Rap machen!",
        "Eeeeiin Phönix is viel besser als ein Hund oder ne Katze, denn die haben nix drauf und ein Phönix, ersteht aus seiner eigenen Asche wieder auf, guck dir das an Mann!",
        "Das Witzige is, früher dachte ich, man kann alle Vögel verbrennen!",
        "Halt ma deine fette Fresse Hagrid! Natürlich macht er das, man kann einfach nich anders als dich zu beleidigen, denn du bist fett hässlich und stinkst!",
        "Wenn ihr denkt, eure Reime sind besser als meine dann hört auf diese kleine!",
        "Fresh D zu Snape: Du dreckige Bitch hast mich getötet. Und deine Mudda die hab ich gekannt, ne, die war hässlich.",
        "Ja, dass ist unser Harry Potter und er stinkt, dass macht aber garnichts denn er winkt, seinen Freunden zu die stehn dahinten und da stehst auch du!",
        "Harry Potter´s dummer Freund, dass bin auch ich, Harry Potter´s dumme Freunde sind wir wohl alle innerlich!",
        "Wenn du denkst es geht nicht mehr, kommt von irgendwo ein Fresh Dumbledore her!",
        "McGonagall: Hagrid, ist das nicht dieser hässliche, haarige Kerl?<br>Fresh Dumbledore: Sie haben fett vergessen!",
        "Harry: nehmen sie ihre Hand von meinem Knie, das ist sexuelle Belästigung<br>Dumbledore: Wenn ich jedesmal 10 cent bekommen hätte, wenn das einer sagt, wäre ich jetzt reich!",
        "Hokus Pokus Fidibus, McGonagall tanzt in meinen Videos. Ich zauber mit Raps und sag Abra Kadabra! Check mal aus wie ich als Rapstar palaver!",
        "Fresh D vs. MCV, das Battle endet nie!",
        "Ich battle dich Weg du blöde Sau, denn du bist dumm und ich bin schlau!",
        "Ey man, wo's mein Hörgerät?",
        "Harry zu MCV: Oh man erzählst du schon wieder deine ganze Lebensgeschicht? Warum erzählst du nich mal was über die Anomalie von Wasserdichte? Warum bringst du nich mal was schlaues oder nen' Witz, ey ich hab gestern zum Beispiel dreimal abgespritz!",
        "Du bewunderst mich meinen Bart, meine männlichkeit ich bin so männlich ich trag nen Kleid!",
        "Schau dir einfach diesen Fingerring an und sag mir welche andren Rapper solches Bling-Bling ham. Snape nicht! Der trägt nur Grufti-Schmuck. Auch nicht Gilderoy im 1850-Look.",
        "Fresh D v. MCV das Baddle endet nie!<br>Voldemort zu Fresh D : Stören dich deine Haare den nicht beim Kacken?"
    ],
    Things: [
        "Drunkard’s Hat<br>This straw has frayed at the edges over time. The wearer always knows the direction of the nearest alcoholic drink.",
        "Coin of Certainty<br>This silver coin is indistinguishable from other coins, except for one unique quality. When flipped, it will always land on heads.",
        "Sentinel Amulet<br>This amulet (a small carnelian carving of a hawk) gives off a faint glow whenever a gnome is within one hundred feet.",
        "Merciful Mace<br>This weapon is essentially the same as a regular mace, though old and rusty. However, it cannot reduce a creature below one hit point.",
        "Ring of Tracking<br>This ring is made of silver and mother of pearl. Once attuned, the bearer of the ring will always know its location.",
        "Peasant’s Rod<br>This rod is a gnarled oaken staff. You can use an action to present the rod and command obedience from each goat, pig, cow, or sheep that you can see within 100 feet of you. Each target must succeed on a DC 13 Wisdom saving throw or be charmed by you for 8 hours. While charmed, the beast regards you as its trusted leader. The rod can’t be used again until the next day.",
        "Arrow of the Hydra<br>This fine arrow of cedar wood and kingfisher feathers is tipped with a sharp hydra’s tooth. When you hit a target with it, the arrow deals an extra 3d6 poison damage. If you miss, the arrow lands in a DM-selected square, within 20 feet of intended target. At start of the next round, an undead skeleton claws out of the ground in that square. The skeleton acts on its own initiative, and attacks the nearest living creature until reduced to 0 hit points.",
        "Scholar’s Monocle<br>This monocle is a gold-rimmed glass monocle. While wearing this lens in a library, you have advantage on Intelligence (Investigation) checks to find relevant books and information.",
        "Apprentice’s Potion<br>After drinking this dull gray potion, you have proficiency with cook’s utensils until midnight.",
        "Scroll of Wild Magic<br>This ragged scroll has been pieced together from other scrolls. You can use an action to read it, unleashing a wild magic surge.",
        "Tavern Bracers<br>While wearing these ale-soaked leather bracers, you have proficiency with both darts and playing cards. You also gain a +2 modifier to rolls for unarmed strikes.",
        "Tome of Cat Summoning<br>By opening this aged, leather bound tome and reading it, you summon a normal cat. The cat lays upon the tome and does nothing else, but departs if removed from the tome or attacked."
    ],
    Percent: [
        {
            text: "Irrelevant",
            list: ["Around %p", "~ %p", "Definitly %p", "Less then %p", "More then %p", "%p +/- 10%", "Close to %p", "%p%", "%p"],
            func: (obj) => {
                let p = Math.random() * 100;
                let i = Math.floor(Math.random() * obj.list.length);
                return obj.list[i].replace("%p", p.toFixed(2));
            }
        }
    ],
    "Special Loot":
        {
            list: ["Mundane", "Common", "Uncommon", "Rare", "Very Rare", "Legendary"],
            data: null,
            currentRarity: "Mundane",
            preFunc: (obj) => {
                const randButton = document.getElementById("randomButton");
                randButton.setAttribute("disabled", "disabled");
                document.getElementById("effect").innerHTML = "Loading";

                const dropdownString = '<div id="rarityDropdown" class="dropdown d-inline">\n' +
                    '      <button class="btn btn-secondary dtn-sm dropdown-toggle" type="button" id="rarityDropdownButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mundane</button>\n' +
                    '      <div class="dropdown-menu" aria-labelledby="rarityDropdownButton" id="dropdownRarityButtonList"></div>\n' +
                    '</div>';

                const second = document.getElementById("buttonLine");
                second.appendChild(document.createRange().createContextualFragment(dropdownString));
                const dropdown = document.getElementById("dropdownRarityButtonList");


                for (const entry of obj.list) {
                    const b = document.createElement("button");
                    b.setAttribute("class", "dropdown-item");
                    b.setAttribute("type", "button");
                    b.addEventListener("click", () => {
                        let but = document.getElementById("rarityDropdownButton");
                        but.innerHTML = entry;
                        obj.currentRarity = entry;

                        obj.func(obj, document.getElementById("effect"));
                    });
                    b.innerHTML = entry;
                    dropdown.appendChild(b);
                }
                $(".dropdown-toggle").dropdown();

                if (obj.data !== null) {
                    randButton.removeAttribute("disabled");
                    return;
                }

                handleClientLoad("LootTable", (response) => {
                    function transpose(arr, keys) {
                        let ret = {
                            Attributes: null,
                            Gold: "0",
                            Name: null,
                            Rarity: "Common",
                            Treasure: null,
                            Type: null,
                            Weight: null
                        };
                        for (let i = 0; i < keys.length; i++) {
                            if ((typeof (arr[i]) !== "undefined") && (arr[i].trim() !== "")) {
                                ret[keys[i]] = arr[i] + "";
                            }
                        }
                        return ret;
                    }

                    function add(rarity, rest, obj) {
                        if (typeof (obj.data[rarity]) === "undefined") {
                            obj.data[rarity] = [];
                        }
                        obj.data[rarity].push(rest);
                    }

                    let data = response.result.values;
                    obj.data = [];


                    let keys = [];
                    for (let i = 0; i < data[0].length; i++) {
                        keys.push(data[0][i]);
                    }

                    for (let i = 1; i < data.length; i++) {
                        let o = transpose(data[i], keys);
                        add(o.Rarity, o, obj);
                    }

                    randButton.removeAttribute("disabled");
                    obj.func(obj, document.getElementById("effect"));
                });
            },
            postFunc: (obj) => {
                document.getElementById("randomButton").removeAttribute("disabled");
                document.getElementById("rarityDropdown").remove();
            },
            func: (obj, div) => {
                if (obj.data === null) return;

                function createRow(heading, text) {
                    const row = document.createElement("div");
                    row.setAttribute("class", "row");

                    const headingTag = document.createElement("div");
                    headingTag.setAttribute("class", "col col-3");
                    headingTag.innerHTML = heading;

                    const textTag = document.createElement("div");
                    textTag.setAttribute("class", "col");
                    textTag.innerHTML = text;

                    row.appendChild(headingTag);
                    row.appendChild(textTag);

                    return row;
                }

                let index = Math.floor(Math.random() * obj.data[obj.currentRarity].length);
                let chosen = obj.data[obj.currentRarity][index];
                const order = [
                    "Treasure",
                    "Weight",
                    "Attributes",
                    "Requirements"
                ];

                div.innerHTML = "";
                let type = (chosen["Type"] !== null && chosen["Type"] !== "Treasure") ? " a " + chosen["Type"] : "";
                let gold = (chosen["Gold"] !== "0" && chosen["Gold"] !== "0. gp") ? " (" + chosen["Gold"] + ")" : "";
                div.appendChild(createRow("Name", chosen["Name"] + gold + type));
                for (let entry of order) {
                    if (chosen[entry] == null) continue;
                    div.appendChild(createRow(entry, chosen[entry]));
                }
            }
        },
    Magic8Ball: [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ],
    Mushrooms: [
        {
            text: "Irrelevant",
            list: {
                "Fade": "Du bekommst Hunger nach mehr Pilzen.",
                "Traube": "Du kannst in absoluter Dunkelheit sehen. Direktes Licht blendet dich stark.",
                "Gras": "Du wirst ganz entspannt und locker.",
                "Kaugummi": "Du lachst sehr lange und laut über den nächsten Satz den du hören wirst. Unabhängig vom Inhalt.",
                "Troll": "Du bekommst für 1d20 min den IQ eines Trolls.",
                "Pilz": "Deine Größe erhöht sich um eine Kategorie, bis du Schaden nimmst.",
                "Tapioka": "Du kannst mit Schleim und Pudding reden, aber nicht mit Elfen.",
                "Bitter": "Alles was du vermitteln willst muss vor Sarkasmus triefen.",
                "Billiger Gin": "Du bekommst 1d6 schaden und erhältst 1d12 zeitliche Lebenspunkte.",
                "Kalk": "Du vergisst von jedem den Namen.",
                "Kerkerfras": "Du fängst an extrem zu stottern.",
                "Frischer Wein": "Du bekommst eine sehr blumige und ausgeschmückte Sprache.",
                "Unterschiedlich": "Füge die Gesinnung „chaotisch“ zu deinem Charakter hinzu.",
                "Chai": "Du kannst Heute und heute Nacht nicht schlafen.",
                "Tränen": "Du bekommst Visionen von Ereignissen die 1d10 minutes in der Zukunft liegen.",
                "Roter Pfeffer": "Einer deiner Sinne wird sehr genau.",
                "Minze": "Jede Flamme und jede Flüssigkeit die du siehst erscheint grün.",
                "Gin": "Du kannst unsichtbare Objekte und Wesen sehen.",
                "Staub": "Du bist dir sicher du wirst verfolgt.",
                "Schinken": "Du wirst schlagfertig und beleidigend.",
                "Hustensaft": "Du bekommst einen niedrigen Grad an telepathischen Fähigkeiten. Das erlaubt dir lediglich die Meinung anderer über dich zu erkennen.",
                "Haferflocken": "Du wirst unglaublich sentimental.",
                "Kamille": "Als ob der Zauber „Schlaf“ auf dir wirken würde.",
                "Nett": "Du schwitzt unkontrolliert, bis du einen anderen Pilz gegessen hast.",
                "Schlechte Literatur": "Du fängst an im Licht zu leuchten und hast das Bedürfnis oberkörperfrei herumzulaufen.",
                "Weihwasser": "Du redest wie ein Priester vor der Gemeinde.",
                "Wasser": "Du kannst keine intensiven Emotionen erleben.",
                "Hefe": "Du wirst ziemlich ungenießbar und unappetitlich für Würmer, Insekten und Spinnen.",
                "Baumwolle": "Du bist überzeugt, du hättest eine Fluggeschwindigkeit von 30.",
                "Plastik": "Für die nächsten 5 Minuten/1 Runde wirst du dir deiner Natur als D&D-Charakter bewusst.",
                "Kekse": "Du wirst sehr sehr sehr sehr freundlich.",
                "Shiitake": "1d4 Pilze wachsen auf deinem Körper. Sie geben jedem außer dir, der sie isst 1d4 Lebenspunkte.",
                "Alkohol": "Du bist betrunken.",
                "Apfelkuchen": "Du riechst und schmeckst für jeden delikat.",
                "Kaffee": "Für 10 Minuten teilst du die Sinne mit jener Kreatur, die als letztes diese Art von Pilz gegessen hat.",
                "Teig": "Du fängst an Sporen zu verteilen, die überall, wo sie landen, Pilze wachsen lassen.",
                "Papier": "Du bekommst einen unfassbaren Durst, der nicht durch normales Wasser gestillt werden kann.",
                "Fingernägel": "Das Haar auf deinem Kopf wird weiß und fängt an drei cm pro Minute zu wachsen.",
                "Ozon": "Deine Stimme erhält einen tiefen und bedrohlichen Ton.",
                "Koriander": "Du hörst Musik welche die kommenden Ereignisse ankündigt und untermalt.",
                "Salz": "Du kannst Feuchtigkeit und Nässe vor dir wahrnehmen.",
                "Rüben": "Du bekommst 1d8 Lebenspunkte für jede Stunde, die du eingegraben in Erde bist, zurück.",
                "Kalter Honig": "Du fängst an unkontrolliert dämlich zu grinsen.",
                "Soldatenfraß": "Du kannst dich nur noch im Stechschritt fortbewegen und deine Bewegungen sind zackig und präzise.",
                "Kleber": "Deine Handflächen werden sehr klebrig.",
                "Bohnen": "Du musst sehr lange, sehr ausgiebig und sehr laut furzen. Und es stinkt wie Hölle.",
                "Sojabohnen": "Keine deiner Attacken (magisch und nicht magisch) haben eine Wirkung, wenn du vorher nicht ihren Namen laut schreist.",
                "Viagra": "Du bist Paarungsbereit.",
                "Rauch": "Du kannst dich ohne Probleme durch jede Lücke quetschen.",
                "Grüne Zwiebeln": "Du kannst das Lied der Pilze hören. Würfel alle 10 min einen Save, sonst musst du mitsingen.",
                "Wassermelone": "Das nächste mal wenn du schläfst, wirst du neben einem Pilzklone von dir aufwachen.",
                "Wachspapier": "Du kannst die emotionale Bedeutung eines Gegenstandes herausfinden, indem du daran leckst.",
                "Erdbeere": "Du erlangst einen todesähnlichen Zustand für 1d10 min.",
                "Zucker": "1d12 deiner Zähne fallen aus und werden ersetzt durch Fänge.",
                "Schimmel": "Du wirst überzogen von einer Pilzschicht. Erhöhe deine Rüstung um 1 und verringere deine Geschwindigkeit auf 1.",
                "Holzkohle": "Du wirst für jede Art von Spinnen und Insekten attraktiv.",
                "Blut": "Du bekommst für jede Stunde in Dunkelheit 1d10 Lebenspunkte und für jede Stunde in Licht 1d6 Schaden.",
                "Pikant": "Deine Geschwindigkeit verdoppelt sich. Aber du musst immer die volle Distanz in gerader Linie zurücklegen.",
                "Elf": "Du wirst arrogant und behandelst andere Personen wie Untergebene.",
                "Gummi": "Du kannst bewusstlos geschlagen werden. Darüber hinaus tötet dich nur Feuer und Säure.",
                "Lippenstift": "Die nächste Person die dich anspricht willst du küssen.",
                "Schlechte Garnelen": "Dir wird übel.",
                "Hase": "Du wirst sehr vorsichtig und ängstlich.",
                "Die Wahrheit": "Du kannst nicht lügen (und magst große Hintern).",
                "Schnecke": "Du läufst nur noch halb so schnell. Dafür kletterst du mit voller Geschwindigkeit.",
                "Abenteuer": "Würfel noch dreimal und kombiniere die Effekte.",
                "Nudeln": "Alle Freunde und Feinde sehen für dich gleich aus.",
                "Geist": "Du fängst an einen cm über den Boden zu schweben.",
                "Altes Metall": "Deine Gottheit ist für 1d6 Tage Anoia (Göttin der Dinge, die in Schubladen klemmen).",
                "(Benutzte)Putzlappen": "Alles muss sauber sein, bzw. du denkst dass alles dreckig ist und geputzt werden sollte.",
                "Royal": "Deine Stimme klingt besser, dafür sieht es so aus als ob du hast einen leichten Überbiss mit Zahllücke hast. Würfle 1d4 um zu bestimmen ob du:<br>(1)Fahrad fahren<br>(2)Ausbrechen<br>(3)es alles<br>(4)einen Supersonicman aus der nächstgelegenen Person machen<br>möchtest.",
                "Cola": "Du sprichst schnell und handelst unüberlegt; scheinst aber glücklich zu sein<br>“Happiness lies within one's self, and the way to dig it out is cocaine.”― Aleister Crowley",
                "Cherry-Fresh": "Rot und grün vertauschen ihre Plätze in deiner Wahrnehmung.<br> “Ich bin alt, ich bin bald tot, aus Grün wird Rot“",
                "Fresh": "Du benutzt ab sofort unnötige Anglizismen.",
                "Schnitzel und Sauerkraut": "Alles wird eingedeutscht von dir.",
                "Zunge": "Du lispelst stark.",
                "Haarfestiger": "Deine Haare kräuseln sich.",
                "Pferd": "Du spricht wie ein stereotypischer Cowboy/Texaner.",
                "Kuh": "Du hast heißhunger auf Gras und Stroh.",
                "Salzwasser": "Du hockst dich für 1d6 minuten hin und versucht Plankton aus der Luft zu filtrieren.",
                "Gelee": "Du hast für 1d4 minuten eine Inteligenz von 1.",
                "Karotten": "Du wirst rot.",
                "Brautkleid": "Du wirst blau. Die Farbe Björn, die Farbe!",
                "Halbelf": "Schmeckt wie Diego unter den Achseln. Das weißt du und wirst es nie wieder vergessen.",
                "Milchschnitte": "Du vertauscht Links und Rechts. Und nennst 'Dexterity' nun 'Sinisterity'.",
                "Tinte": "Du hast eine schwarze Zunge.",
                "Asbest": "Du wirst für 2d4 minuten Feuerfest.",
                "Katze": "Du wirst unsichtbar wenn du Tuba spielst.",
                "Schuhe": "Du schmeckst das, was die Füße des Lebewesens berühren, was du zuletzt gesehen hast. Viel Spass.",
                "Ethanol": "Du verträgst keinen Alkohol mehr. Für 2d4 Tage.",
                "Oregano": "Du wirst für 1d6 Stunden zu 25% transparent",
                "Spinnenblut": "Fliegen sehen lecker aus.",
                "Lotus": "Du wirst für 2d4 Stunden 'True-Neutral' und bist komplett dicht."
                "Biene": "Schmeckt nach Biene, im Nachgang nach Honig. Wieso auch immer.",
                "Kupfer": "Du wirst Gold-Tan (Bodybuilder) für 3d4 Tage.",
                "Enolem": "Schmeckt nach Enolem. Deine Haarfrabe wird grünstichig und bekommmt ein Melonenmuster. <br> Das ist permanent, bis das rauswächst.",
                "Riesen-Bohnen": "Scheinriesensyndrom (Commune Falsi Giant Syndrome) <br> Je weiter jemand von dir entfernt ist, desto größer wirkst du, bis zu riesengröße bei 50 metern abstand."
            },
            func: (obj) => {
                let keys = Object.keys(obj.list);
                let i = Math.floor(Math.random() * keys.length);
                let line = keys[i];
                
                return line+"<br>"+obj.list[line];
            }
        }
    ],
};
