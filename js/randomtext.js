function randomtext(options)
{
    return options[Math.floor(Math.random()*options.length)];
}
/*THE FRONT PAGE */  

function fpRandomText(){
    var options = [
        "Actual website coming soon.", 
        "Actual website not coming soon.", 
        "NOW with even MORE!",
        "reads the entire tpmc wiki page in vc",
        "game ing",
        "est. 2018",
        "DXL44 REAL??????????????",
        "subscribe",
        "dxl juice",
        "Y'ALL READY TO GET FUNKY!?",
        "certified niche internet microcelebrity",
        "I guess this really is the DXL44 Website (2023)",
        "Now featuring a British rail class 44 peak", // Galactica
        "now with 200% more fruit",
        "Shoutouts to Sevis",
        "the typical floridian",
        "The REAL Totalpro64 Fanclub",
        "dxl44.github.io",
        "an excuse for me to exercise my webdev muscles",
        "girlbossing",
        "totalpro64 was here", //krypt
        "test peanut",
        "pee moment",
        "Can you hear what I'm saying?",
        "wide field",
        "live dxl reaction: 🟧", //rxw
        "get real",
        "get fake",
        "rapper 2 when",
        "how ships work 10 when",
        "beastmode when",
        "A wild website appears!",
        "im spending too much time writing all fo these.",
        "my hardest is no longer the lightning road", 
        "have you ever been to the screamroom?",
        "RUSHDOWN ASSEMBLE",
        "swag",
        "null", 
        "this one's a secret...<!--you found it! go you :)-->",
        "This is it, Fridge.",
        "Uploading dishes...",
        "mediawiki my beloved",
        "Pro tip: Jump",
        "Pro tip: Don't crash",
        "What if the spikes are the good guys?",
        "my name is jestar heart ive been watching you for a long time waiting fo",
        "you should play the synthwave trials by dxl44",
        "you should play the complextro trials by dxl44",
        "you should play the final trials by dxl44",
        "you should play electrify by dxl44",
        "shredded cheese is better than regular cheese",
        "not html or css, but a secret third thing (js)",
        "w3schools my beloved",
        "subscribe to dukemz",
        "subscribe to seanski2",
        "subscribe to terminace",
        "subscribe to minemaker0430",
        "subscribe to krypt",
        "subscribe to galactica",
        "subscribe to tacomazing",
        "heh",
        "Gee, it sure is boring around here.",
        "What if I tap?",
        "Ship part was cool",
        "Skelecube was here",
        "Gamemode switched to Creative",
        "DO NOT HANG UP.",
        "subscribe to motioniii",
        "im going to dissolve",
        "In pursuit of something different.",
        "go go go go",
        ":3",
        ">:3",
        "Wawa is peak.",
        "Obligatory 421 reference",


    ]
        document.getElementById("randomGreet").innerHTML = (randomtext(options));
        
}

fpRandomText()