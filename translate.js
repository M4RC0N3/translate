window.onload = function() {
    const getPageLang = document.getElementsByTagName('html'); // Seleciona tag html no topo do documento

    const navigatorLang = navigator.languages?.length ? navigator.languages[0] : navigator.language; // Pega idioma usado no navegador do usuário
    let defineLang = navigatorLang == 'pt-BR'? navigatorLang : 'en-US'; // Verifica se o idioma é português, caso contrário define inglês

    getPageLang[0].lang = defineLang; // Define o idioma da página

    Languages.init([defineLang], './i18n/', () => {
        const translateList = document.getElementsByClassName('translate'); // Seleciona todos as tags traduzíveis do documento

        let translatableElements = [];

        for( let jumper=0; jumper < translateList.length; jumper++){ // adiciona cada elemento traduzível e adiciona em uma nova lista
            translatableElements.push(translateList[jumper]);
        }
        
        translatableElements.forEach(item=>{ // traduz cada elemento da listagem
            item.innerHTML = item.id.t()
        })
    });
}