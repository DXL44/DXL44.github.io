function randomtext(options)
{
    return options[Math.floor(Math.random()*options.length)];
}
/*THE FRONT PAGE */  
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
"Now featuring a British rail class 44 “peak”" // Galactica
]
document.getElementById("randomGreet").innerHTML = (randomtext(options));
