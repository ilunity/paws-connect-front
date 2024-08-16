/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [ 'antd', '@ant-design', 'rc-util', 'rc-pagination', 'rc-picker', 'rc-notification', 'rc-tooltip', 'antd-phone-input' ],
  webpack(config){
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true}}]
    })
    return config
  }
};

export default nextConfig;
