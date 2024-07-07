module.exports = {
    reactStrictMode: true,
    // Add other configurations here
    webpack: (config, { isServer }) => {
      // Asset Modules Configuration
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf|js)$/,
        include: /node_modules\/swiper/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        type: 'asset',
      });
  
      return config;
    },

  };