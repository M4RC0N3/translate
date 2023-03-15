window.onload = function() {
    Languages.init(['en_EN', 'fr_FR'], './i18n/', () => {
        const translateList = document.getElementsByClassName('str');
        let words = [];

        console.log(translateList.length);
        for( let jumper=0; jumper < translateList.length; jumper++){
            words.push(translateList[jumper]);
        }
        
        words.forEach(item=>{
            item.innerHTML = item.id.t()
        })
    });
}