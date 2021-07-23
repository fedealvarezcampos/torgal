const nextImages = require('next-images');

(module.exports = {
    i18n: {
        locales: ['es'],
        defaultLocale: 'es',
    },
}),
    nextImages({
        esModule: true,
    });
