const products = require("./products");
const fs = require("fs");

function cleanFileName(word) {
    let ans = "";
    for (j = 0; j < word.length; j++) {
        if (word[j] === " ") {
            ans += "%20"
        } else {
            ans += word[j]
        }
    }
    return ans;
}

function returnRelated(related) {
    let html = "";
    for (i = 0; i < related.length; i++) {
        var name = related[i].slice(0, related[i].length - 4)
        var imageUrl = name + ".png"
        var pdfUrl = name + ".pdf"
        var htmlString = "<div class='col-md-2 mb-3'>\n\t<a href='/static/pdfs/" + pdfUrl + "' target='_blank'><img class='related-thumbnail d-block' src='/static/img/previews/" + imageUrl + "'></a>\n</div>"
        html += htmlString
    }
    return html;
}

function returnPage(product) {
    let title = product.productTitle;
    let summary = product.summary;
    let PDF = product.pdf;
    let preview = product.preview;
    let related = product.related;
    let page = "<!doctype html> <html lang='en'> <head> <meta charset='utf-8'> <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'> <meta name='description' content=''> <meta name='author' content=''> <title>" + title + "</title> <!-- Bootstrap core CSS --> <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'> <link rel='stylesheet' href='https://use.typekit.net/xbg7zzr.css'> <link href='/static/css/cosystems.css' rel='stylesheet'> </head> <body> <div class='container bg-white'> <nav class='navbar navbar-expand-lg navbar-light bg-light fixed-top'> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar' aria-controls='navbar' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' id='navbar'> <a class='navbar-brand py-2' href='#'> <img src='/static/img/cosyslogo.png' alt='logo' height='40'> </a> <div class='navbar-nav'> <a class='nav-item mx-5 nav-link active' href='/'>Home</a> <a class='nav-item mx-5 nav-link' href='/products'>Products</a> <a class='nav-item mx-5 nav-link' href='/support'>Support</a> </div> </div> </nav> </div> <div class='container mt-5'> <div class='row'> <div class='col-md-3'> <h3 class='ml-3 mb-4'>Our Products</h3> <ul class='product-nav'> <li>PTSN Access Modules</li> <li class='indent-2'> <a href='/products/ISDN-PRI (TE & NT)'>ISDN-PRI (TE & NT)</a> </li> <li class='indent-2'> <a href='/products/R-303 (RDT & IDT)'>GR-303 (RDT & IDT)</a> </li> <li class='indent-2'> <a href='/products/V5.1 & V5.2 (AN & LE)'>V5.1 & V5.2 (AN & LE)</a> </li> <li>Data Interface Modules</li> <li class='indent-2'> <a href='/products/Frame Relay'>Frame Relay</a> </li> <li class='indent-2'> <a href='/products/Multi-link PPP'>Multi-link PPP</a> </li> <li>PSTN Access to IP Systems</li> <li class='indent-2'> <a href='/products/GR-303 to IP'>GR-303 to IP</a> </li> <li class='indent-2'> <a href='/products/V5.x to IP'>V5.x to IP</a> </li> <li> <a href='/products/PSTN Access to IP Module'>PSTN Access to IP Module</a> </li> <li>Protocol Stacks</li> <li class='indent-2'>Data Protocols</li> <li class='indent-3'> <a href='/products/Frame Relay'>Frame Relay</a> </li> <li class='indent-3'> <a href='/products/Multi-link PPP'>Multi-link PPP</a> </li> <li class='indent-3'> <a href='/products/VPN'>VPN</a> </li> <li class='indent-3'> <a href='/products/X.25'>X.25</a> </li> <li class='indent-2'>PTSN Protocols</li> <li class='indent-3'> <a href='/products/ISDN-BRI & PRI (TE & NT)'>ISDN-BRI & PRI (TE & NT)</a> </li> <li class='indent-3'> <a href='/products/GR-303 (RDT & IDT)'>GR-303 (RDT & IDT)</a> </li> <li class='indent-3'> <a href='/products/V5.1 & V5.2 (AN & LE)'>V5.1 & V5.2 (AN & LE)</a> </li> <li class='indent-2'>VoIP Protocols</li> <li class='indent-3'> <a href='/products/H.323'>H.323</a> </li> <li class='indent-3'> <a href='/products/MGCP'>MGCP</a> </li> <li class='indent-3'> <a href='/products/SIP'>SIP</a> </li> </ul> </div> <div class='col-md-4 mx-3'> <h3><b>" + title + "</b></h3> <p> " + summary + "</p> <a href='mailto:shirish@cosystems.com' class='d-block mt-4 btn-link w-100'>Contact Sales</a> </div> <div class='col-md-4'> <a href='/static/pdfs/" + PDF + "' target='_blank'><img class='preview my-2' src='/static/img/previews/" + preview + "'></a> <p class='my-1 text-muted'>Click image for specifications</p> </div> </div> <div class='row'> <div class='col-md-3'> <h4 class='mt-4'>Related Products</h4> </div> </div> <div class='row'>" + returnRelated(related) + "</div> <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'> </script> <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'> </script> <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'> </script> <script src='https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js'></script> </body> </html>"
    return page;
}

var arg = parseInt(process.argv[2]);
fs.writeFile("data/seed/" + cleanFileName(products[arg].productTitle) + ".html", returnPage(products[arg]), function (err) {
    throw err;
})