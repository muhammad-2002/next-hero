/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '/**',
          },
        ],
      },
      redirects: async ()=>
        [
            {
                source: '/about',
                destination: '/portfolio',
                permanent: true,
              },
        ]
      
};

export default nextConfig;
