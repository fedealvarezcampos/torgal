const nextImages = require('next-images');

// export the module
module.exports = nextImages({
    // options
    esModule: true,
});

module.exports = {
    i18n: {
        locales: ['es'],
        defaultLocale: 'es',
    },
    env: {
        GOOGLE_MAPS_KEY: 'AIzaSyCvnrMU_chgALqHTBEGmB16Xdm1GII5yek',
    },
};
