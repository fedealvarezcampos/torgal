const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.youtube.com https://maps.googleapis.com https://tumblr.us12.list-manage.com *.vercel.app *.vercel.com;
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
		key: 'Access-Control-Allow-Origin',
		value: '*.googleapis.com *.vercel.app *.vercel.com https://maps.googleapis.com https://tumblr.us12.list-manage.com https://vitals.vercel-insights.com/v1/vitals',
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
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: securityHeaders,
			},
		];
	},
	images: {
		domains: ['laixiqmqvlibjrxmykxq.supabase.in'],
	},
};
