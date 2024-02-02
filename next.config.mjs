/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'www.testvalley.kr'
            },
            {
                protocol:'https',
                hostname:'dvd6ljcj7w3pj.cloudfront.net'
            }
        ]
            
        
    }
};

export default nextConfig;
