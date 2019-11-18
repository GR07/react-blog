const withCss = require('@zeit/next-css')


// 官方定死的操作 就得这么写
if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}


module.exports = withCss({})