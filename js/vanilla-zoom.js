(function (window) {

    let defineLibrary = () => ({
        init : function (galleryId) {
            console.log('setup gallery')
        }
    })

    if (typeof(vanillaZoom) == 'undefined') {
        window.vanillaZoom = defineLibrary();
    } else {
        console.log('library already defined.')
    }
})(window)