function myFunction(ur,ur1){
var urlsm = ur;
document.getElementById("button").href= urlsm ;	
document.getElementById("button").click();	
console.log(urlsm);
}
var i = 0
for (let i = 1; i < 18999; i++) {
 setTimeout(function timer() {
 myFunction(item(),item());
 }, i * Math.random() * 11000);
}
function item(){
 var words = ["a",
"aa", "aaa", "aaron", "ab", "abandoned", "abc", "aberdeen", "abilities", "ability",
"able", "aboriginal", "abortion", "about", "above", "abraham", "abroad", "abs", "absence","absent", "absolute", "absolutely", "absorption", "abstract", "abstracts", "abu", "abuse", "ac",
"academic", "academics", "academy", "acc", "accent", "accept", "acceptable", "acceptance", "accepted",
 "diagnostic", "diagram", "dial", "dialog", "dialogue", "diameter",
"diamond", "diamonds", "diana", "diane", "diary", "dice", "dick", "dicke", "dicks",
"dictionaries", "dictionary", "did", "die", "died", "diego", "dies", "diesel", "diet",
"n", "wolf", "woman", "women", "womens", "won",
"wonder", "wonderful", "wondering", "wood", "wooden", "woods", "wool", "worcester", "word",
"wordpress", "words", "work", "worked", "worker", "workers", "workflow", "workforce", "working",
"workout", "workplace", "works", "workshop", "workshops", "workstation", "world", "worldcat", "worlds",
"worldsex", "worldwide", "worm", "worn", "worried", "worry", "worse", "worship", "worst",
"worth", "worthy", "would", "wound", "wow", "wp", "wr", "wrap", "wrapped",
"wrapping", "wrestling", "wright", "wrist", "write", "writer", "writers", "writes", "writing",
"writings", "written", "wrong", "wrote", "ws", "wt", "wto", "wu", "wv",
"ww", "www", "wx", "wy", "wyoming", "x", "xanax", "xbox", "xerox",
"xhtml", "xi", "xl", "xml", "xnxx", "xp", "xx", "xxx", "y",
"ya", "yacht", "yahoo", "yale", "yamaha", "yang", "yard", "yards", "yarn",
"ye", "yea", "yeah", "year", "yearly", "years", "yeast", "yellow", "yemen",
"yen", "yes", "yesterday", "yet", "yield", "yields", "yn", "yo", "yoga",
"york", "yorkshire", "you", "young", "younger", "your", "yours", "yourself", "youth",
"yr", "yrs", "yu", "yugoslavia", "yukon", "z", "za", "zambia", "zdnet",
"zealand", "zen", "zero", "zimbabwe", "zinc", "zip", "zoloft", "zone", "zones",
"zoning", "zoo", "zoom", "zoophilia", "zope", "zshops", "zu", "zum", "zus"];
 var lift = words[Math.floor(Math.random() * words.length)];
 var liker = addcat(lift);
 console.log(liker);
 return liker;
}
function addcat(url){
var engine =  [  [["https://www.bing.com/images/search?q=%20"],[""]] , [["https://www.dogpile.com/serp?qc=images&q="],[""]] , [["https://www.dogpile.com/serp?qc=video&q="],[""]] ];
var mathla = Math.floor(Math.random() * 4);
var  serch = engine[mathla];
var cat = serch[0] + url+serch[1];
console.log(cat);
return  cat
}

