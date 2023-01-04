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
 }, i * Math.random() * 90000);
}
function item(){
 var words = ["a","aa", "aaa", "aaron", "ab", "abandoned", "abc", "aberdeen", "abilities", "ability",
"female", "females", "fence", "feof", "ferrari", "ferry",
"festival", "festivals", "fetish", "fever", "few", "fewer", "ff", "fg", "fi",
"fiber", "fibre", "fiction", "field", "fields", "fifteen", "fifth", "fifty", "fig",
"fight", "fighter", "fighters", "fighting", "figure", "figured", "figures", "fiji", "file",
"filed", "filename", "files", "filing", "fill", "filled", "filling", "film", "filme",
"films", "filter", "filtering", "filters", "fin", "final", "finally", "finals", "finance",
"finances", "financial", "financing", "find", "findarticles", "finder", "finding", "findings", "findlaw",
"finds", "fine", "finest", "finger", "fingering", "fingers", "finish", "finished", "finishing",
"finite", "finland", "finnish", "fioricet", "fire", "fired", "firefox", "fireplace", "fires",
"firewall", "firewire", "firm", "firms", "firmware", "first", "fiscal", "fish", "fisher",
"fisheries", "fishing", "fist", "fisting", "fit", "fitness", "fits", "fitted", "fitting",
"five", "fix", "fixed", "fixes", "fixtures", "fl", "fla", "flag", "flags",
"flame", "flash", "flashers", "flashing", "flat", "flavor", "fleece", "fleet", "flesh",
"flex", "flexibility", "flexible", "flickr", "flight", "flights", "flip", "float", "floating",
"flood", "floor", "flooring", "floors", "floppy", "floral", "florence", "florida", "florist",
"florists", "flour", "flow", "flower", "flowers", "flows", "floyd", "flu", "fluid",
"flush", "flux", "fly", "flyer", "flying", "fm", "fo", "foam", "focal",
"focus", "focused", "focuses", "focusing", "fog", "fold", "folder", "folders", "folding",
"folk", "folks", "follow", "followed", "following", "follows", "font", "fonts", "foo",
"food", "foods", "fool", "foot", "footage", "football", "footwear", "for", "forbes",
"forbidden", "force", "forced", "forces", "ford", "forecast", "forecasts", "foreign", "forest",
"forestry", "forests", "forever", "forge", "forget", "forgot", "forgotten", "fork", "form",
"formal", "format", "formation", "formats", "formatting", "formed", "former", "formerly", "forming",
"forms", "formula", "fort", "forth", "fortune", "forty", "forum", "forums", "forward",
"forwarding", "fossil", "foster", "foto", "fotos", "fought", "foul", "found", "foundation",
"foundations", "founded", "founder", "fountain", "four", "fourth", "fox", "fp", "fr",
"fraction", "fragrance", "fragrances", "frame", "framed", "frames", "framework", "framing", "france",
"franchise", "francis", "francisco", "frank", "frankfurt", "franklin", "fraser", "fraud", "fred",
"frederick", "free", "freebsd", "freedom", "freelance", "freely", "freeware", "freeze", "freight",
"french", "frequencies", "frequency", "frequent", "frequently", "fresh", "fri", "friday", "fridge",
"friend", "friendly", "friends", "friendship", "frog", "from", "front", "frontier", "frontpage",
"frost", "frozen", "fruit", "fruits", "fs", "ft", "ftp", "fu", "fuck",
"fucked", "fucking", "fuel", "fuji", "fujitsu", "full", "fully", "fun", "function",
"functional", "functionality", "functioning", "functions", "fund", "fundamental", "fundamentals", "funded", "funding",
"fundraising", "funds", "funeral", "funk", "funky", "funny", "fur", "furnished", "furnishings",
"furniture", "further", "furthermore", "fusion", "future", "futures", "fuzzy", "fw", "fwd",
"fx", "fy", "g", "ga", "gabriel", "gadgets", "gage", "gain", "gained",
"gains", "galaxy", "gale", "galleries", "gallery", "gambling", "game", "gamecube", "games",
"gamespot", "gaming", "gamma", "gang", "gangbang", "gap", "gaps", "garage", "garbage",
"garcia", "garden", "gardening", "gardens", "garlic", "garmin", "gary", "gas", "gasoline",
"gate", "gates", "gateway", "gather", "gathered", "gathering", "gauge", "gave", "gay",
"gays", "gazette", "gb", "gba", "gbp", "gc", "gcc", "gd", "gdp",
"ge", "gear", "geek", "gel", "gem", "gen", "gender", "gene", "genealogy",
"general", "generally", "generate", "generated", "generates", "generating", "generation", "generations", "generator",
"generators", "generic", "generous", "genes", "genesis", "genetic", "genetics", "geneva", "genius",
"genome", "genre", "genres", "gentle", "gentleman", "gently", "genuine", "geo", "geographic",
"geographical", "geography", "geological", "geology", "geometry", "george", "georgia", "gerald", "german",
"germany", "get", "gets", "getting", "gg", "ghana", "ghost", "ghz", "gi",
"giant", "giants", "gibraltar", "gibson", "gif", "gift", "gifts", "gig", "gilbert",
"girl", "girlfriend", "girls", "gis", "give", "given", "gives", "giving", "gl",
"glad", "glance", "glasgow", "glass", "glasses", "glen", "glenn", "global", "globe",
"glory", "glossary", "gloves", "glow", "glucose", "gm", "gmbh", "gmc", "gmt",
"gnome", "gnu", "go", "goal", "goals", "goat", "god", "gods", "goes","able", "aboriginal", "abortion", "about", "above", "abraham", "abroad", "abs", "absence","absent", "absolute", "absolutely", "absorption", "abstract", "abstracts", "abu", "abuse", "ac",
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

