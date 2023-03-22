window.onload = function() {
    const getPageLang = document.getElementsByTagName('html'); // Select html tag at top of document

    const navigatorLang = navigator.languages?.length ? navigator.languages[0] : navigator.language; // Get the language used in the user's browser
    let defineLang = navigatorLang == 'pt-BR'? navigatorLang : 'en-US'; // Checks if the language is Portuguese, otherwise sets English

    getPageLang[0].lang = defineLang; // Sets the language of the page

    Languages.init([defineLang], './i18n/', () => {
        const translateList = document.getElementsByClassName('translate'); // Selects all translatable tags in the document

        let translatableElements = [];

        for( let jumper=0; jumper < translateList.length; jumper++){ // adds each translatable element and adds it to a new list
            translatableElements.push(translateList[jumper]);
        }
        
        translatableElements.forEach(item=>{ // translates each element of the listing
            item.innerHTML = item.id.t()
        })
    });
}