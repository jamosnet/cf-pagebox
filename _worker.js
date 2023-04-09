export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      //url.hostname = 'www.hicairo.com'
      //url.protocol="https";     //协议,http或https
      url.hostname="web0409lgin.eu-ddskrfhnxrqp.ondoprax.com";     //域名,不要加http或者https前缀,直接域名就好
      //url.port="5643";     //有https服务的端口
      let new_request = new Request(url, request);
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};
