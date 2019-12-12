const products = require("./products");
const fs = require("fs");

for(i=0;i<products.length;i++){
    let currentWord = products[i].productTitle
    var ans = "";
    for(j=0;j<currentWord.length; j++){
        if(currentWord[j] === " "){
            ans += "%20"
        }
        else{ans += currentWord[j]}
    }
    fs.writeFile("data/seed/" + ans + ".html", ans + " Page", function(err){
        throw err;
    })
}
