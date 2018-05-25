var insert = true;
function brTagFinder() {

    //inserts imgs
    if (insert == true) {
        // Gets <br /> tags
        var brTags = document.getElementsByTagName("br");

        //Inserting image to <br /> elements
        for (var i = 0; i < brTags.length; i++) {

            // Creates an image
            var Img = document.createElement("img");
            Img.src = browser.extension.getURL("../icons/br.png");
            Img.className = "brTag";

            insertBefore(Img, brTags[i]);
        }
        console.log("%cSlash" + "%cOn " + "%cbrTag Finder" + "%c :" + "%c Found " + brTags.length + "%c <br /> tags.", 'color: red;', 'color:gray;', 'font-style: italic;');

        insert = false;
        if (brTags.length == 0) {
            browser.runtime.sendMessage({ message: "No BR" });
            insert = true;
        }
    }
    
    //removes imgs
    else {
        var brImgs = document.getElementsByClassName("brTag");
        while (brImgs.length > 0) {
            brImgs[0].parentNode.removeChild(brImgs[0])
        }
        insert = true;
    }
}
function insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}
browser.runtime.onConnect.addListener(brTagFinder);