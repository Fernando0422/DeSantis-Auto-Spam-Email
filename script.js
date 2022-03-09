$(document).ready(function(){
  //HB 1557, or the “Dont Say Gay” Bill will cause the death of hundreds and ruin the mental health of children you claim to protect. 

var causeSyn = ["begin", "create", "lead to", "make", "generate", "precipitate", "induce", "produce"]
var ruinSyn = ["destroy", "devastate", "crush", "desimate", "demolish", "deplete", "exhaust", "impoverish", "injure"]
var claimSyn = ["aledge", "proclaim", "assert", "believe", "challenge", "declare"]
var protectSyn = ["care for", "defend", "conserve", "assure"]

var sentence1 = `HB 1557, or the “Dont Say Gay” Bill will ${causeSyn[Math.floor(Math.random()*causeSyn.length)]} the death of hundreds and ${ruinSyn[Math.floor(Math.random()*ruinSyn.length)]} the mental health of children you ${claimSyn[Math.floor(Math.random()*claimSyn.length)]} to ${protectSyn[Math.floor(Math.random()*protectSyn.length)]}`


//The “protection” that you think you are providing is damaging the lives of youths throughout the state of Florida, and you will be the reason why. 

var thinkSyn = ["assume", "consider", "feel", "guess", "judge", "expect"]
var providingSyn = ["arranging", "planning"]
var damagingSyn = ["detrimental", "harmful", "injurious", "prejudicial"]
var throughout = ["all over"]
var reasonSyn = ["cause of", "case", "excuse of"]

var sentence2 = `The “protection” that you ${thinkSyn[Math.floor(Math.random()*thinkSyn.length)]} you are ${providingSyn[Math.floor(Math.random()*providingSyn.length)]} is ${damagingSyn[Math.floor(Math.random()*damagingSyn.length)]} to the lives of youths ${throughout[Math.floor(Math.random()*throughout.length)]} the state of Florida, and you will be the ${reasonSyn[Math.floor(Math.random()*reasonSyn.length)]} why`

//If you want to protect these children, then do not sign this bill into legislation. 

var wantSyn = ["need", "wish", "demand", "assume"]
var protectSyn = ["care for", "defend", "conserve", "assure"]
var signSyn = ["enact", "confirm", "endorse", "ink", "acknowledge", "authorize", "inscribe"]
var legislationSyn = ["law"]

var sentence3 = `If you ${wantSyn[Math.floor(Math.random()*wantSyn.length)]} to ${protectSyn[Math.floor(Math.random()*protectSyn.length)]} these children, then do not ${signSyn[Math.floor(Math.random()*signSyn.length)]} this bill into ${legislationSyn[Math.floor(Math.random()*legislationSyn.length)]}`

  
//You are setting a precedent regarding the treatment of LGBTQ+ youths, condemning not only your state’s children, but the children of the United States to a world of discrimination and hate. 

var settingSyn = ["putting", "placing", "putting down", "laying", "settling", "positioning"]
var precedentSyn = ["model", "example"]
var regardingSyn = ["in regards to", "with regard to", "about"]
var condemningSyn = ["damaging", "denouncing", "destroying"]
var UsSyn = ["US", "USA", "nation"]
var discriminationSyn = ["bigotry", "favortism", "inequity", "injustice", "intolerance", "prejudice", "unfairness"]
var hateSyn = ["loathe", "detest", "hatred", "resentment", "aversion", "hostility", "distaste"]

var sentence4 = `You are ${settingSyn[Math.floor(Math.random()*settingSyn.length)]} a ${precedentSyn[Math.floor(Math.random()*precedentSyn.length)]} ${regardingSyn[Math.floor(Math.random()*regardingSyn.length)]} the treatment of LGBTQ+ youths, ${condemningSyn[Math.floor(Math.random()*condemningSyn.length)]} not only your state’s children, but the children of the ${UsSyn[Math.floor(Math.random()*UsSyn.length)]} to a world of ${discriminationSyn[Math.floor(Math.random()*discriminationSyn.length)]} and ${hateSyn[Math.floor(Math.random()*hateSyn.length)]}`


//You claim to push your state into a path of the future, but this treatment toward the LGBTQ+ community sets it back decades to a point of discrimination and blatant hate. 
var claimSyn = ["aledge", "proclaim", "assert", "believe", "call for", "challenge", "declare"]
var pushSyn = ["propel", "send", "drive", "force", "jolt"]
var pathSyn = ["pathway", "track", "footpath"]
var towardSyn = ["with regard to", "respecting", "concerning, to"]
var decadesSyn = ["years"]
var discriminationSyn = ["bigotry", "favortism", "inequity", "injustice", "intolerance", "prejudice", "unfairness"]
var blatantSyn = ["glaring", "obvious", "undisguised", "unconcealed", "open", "transparent", "unmistakable", "shameless"]
var hateSyn = ["loathe", "detest", "hatred", "resentment", "aversion", "hostility", "distaste"]

var sentence5 = `You ${claimSyn[Math.floor(Math.random()*claimSyn.length)]} to ${pushSyn[Math.floor(Math.random()*pushSyn.length)]} your state into a ${pathSyn[Math.floor(Math.random()*pathSyn.length)]} of the future, but this treatment ${towardSyn[Math.floor(Math.random()*towardSyn.length)]} the LGBTQ+ community sets it back ${decadesSyn[Math.floor(Math.random()*decadesSyn.length)]} to a point of ${discriminationSyn[Math.floor(Math.random()*discriminationSyn.length)]} and ${blatantSyn[Math.floor(Math.random()*blatantSyn.length)]} hate`


//If signed into legislation, your warpath will be known world wide and set the reputation of Florida into a spiral and complete tyranny. 

var signedSyn = ["written", "inscribed", "registered", "enlisted"]
var legislationSyn = ["law", "ratification"]
var warpathSyn = ["aggression", "animosity", "antagonism", "antipathy", "bitterness", "enmity", "hatred", "estrangement", "silence", "malice"]
var knownSyn = ["acknowledged", "obvious", "recognized", "noted"]
var worldwideSyn = ["globally", "everywhere"]
var completeSyn = ["entire", "exhaustive", "full", "outright", "thorough"]
var tryannySyn = ["cruelty", "oppression"]

var sentence6 = `If ${signedSyn[Math.floor(Math.random()*signedSyn.length)]} into ${legislationSyn[Math.floor(Math.random()*legislationSyn.length)]}, your ${warpathSyn[Math.floor(Math.random()*warpathSyn.length)]} will be ${knownSyn[Math.floor(Math.random()*knownSyn.length)]} ${worldwideSyn[Math.floor(Math.random()*worldwideSyn.length)]} and set the reputation of Florida into a spiral and ${completeSyn[Math.floor(Math.random()*completeSyn.length)]} ${tryannySyn[Math.floor(Math.random()*tryannySyn.length)]}`


//Do not sign this bill into law and prove that Florida is on the right track of history
var signSyn = ["enact", "confirm", "endorse", "ink", "acknowledge", "authorize", "inscribe"]
var proveSyn = ["demonstrate"]
var rightSyn = ["correct", "positive"]
var trackSyn = ["side", "verge"]


var sentence7 = `Do not ${signSyn[Math.floor(Math.random()*signSyn.length)]} this bill into law and prove that Florida is on the ${rightSyn[Math.floor(Math.random()*rightSyn.length)]} ${trackSyn[Math.floor(Math.random()*trackSyn.length)]} of history`


  /// stuff for the emails hehe ///
  var fullLetter2 = `${sentence1}. ${sentence2}. ${sentence3}. ${sentence4}. ${sentence5}. ${sentence6}. ${sentence7}.`
    var commonAppEmails = [
    "governorron.desantis@eog.myflorida.com"]
    var caEmails = commonAppEmails.join(",")
 
   var emailLetter2 = encodeURIComponent(fullLetter2.replace("Florida Senators"))
   var emailLink2=`mailto:?bcc=${caEmails}&subject=Do Not Sign The "Dont Say Gay" Bill&body=${emailLetter2}`
  $('#commonAppEmails').attr("href", emailLink2) 

})

