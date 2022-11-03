/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.html$/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: "html-loader",
                    options: {
                        esModule: true,
                    },
                },
            ],
        });
        return config;
    },
};

module.exports = nextConfig;
