$(function() {
    $(window).on('resize', function() {
        if(window.screen.width > 990) {
            const viewport = document.querySelector('meta[name=viewport]');
            document.querySelector('body').classList.add('desktop-page');
            document.querySelector('html').classList.add('desktop-page');
            viewport.setAttribute('content', 'width=1440,user-scalable=0');
        }
    });

    // Открытие модалки по хэшу
    if(window.location.hash) {
        let popupId = window.location.hash;
        showPopup(popupId)
    }

});
