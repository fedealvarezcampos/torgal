const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' *.youtube.com https://maps.googleapis.com https://tumblr.us12.list-manage.com *.vercel.app *.vercel.com;
    child-src *.youtube.com *.google.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    font-src 'self' https://fonts.gstatic.com;
    connect-src *;
`;

const securityHeaders = [
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\n/g, ''),
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
    },
];

module.exports = {
    i18n: {
        locales: ['es'],
        defaultLocale: 'es',
    },
};

module.exports = {
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
    redirects() {
        return [
            process.env.NEXT_PUBLIC_MAINTENANCE === '1'
                ? {
                      source: '/((?!maintenance).*)',
                      destination: '/maintenance/maintenance.html',
                      permanent: false,
                  }
                : null,
        ].filter(Boolean);
    },
};
