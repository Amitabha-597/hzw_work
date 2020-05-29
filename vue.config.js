module.exports={
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        open: true,
        hotOnly: false,
        proxyTable:{
            '/api': {
                    target: 'http://101.200.201.238:62519', //你要访问的服务器域名
                    changeOrigin: true, //允许跨域
                    pathRewrite: {
                        '^/': ''
                    }
                }
        }
      },
}