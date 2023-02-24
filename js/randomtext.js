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
    ]
        document.getElementById("randomGreet").innerHTML = (randomtext(options));
        
}

fpRandomText()