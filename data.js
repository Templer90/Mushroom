//    {text:"text der angezeigt werden soll", func:()=>{alert("LOL");}},

var data={
    Mushrooms:[
        "Toad",
    ],
    Things:[
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
    Percent:[
        {
            text:"Irrelevant",
            list:["Around %p","~ %p", "Definitly %p", "Less then %p", "More then %p", "%p +/- 10%", "Close to %p", "%p%", "%p"],
            func:(obj)=>{
                let p = Math.random()*100;
                let i=Math.floor(Math.random()*obj.list.length);
                return obj.list[i].replace("%p",p.toFixed(2));
            }
        }
    ],
    Magic8Ball:[
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
    ]
}