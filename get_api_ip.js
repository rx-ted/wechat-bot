/*
 * @Author: rx-ted
 * @Date: 2023-06-05 10:24:39
 * @LastEditors: rx-ted
 * @LastEditTime: 2023-06-05 10:24:55
 */
export default {
    async fetch(request, env) {
      const url = new URL(request.url);
      url.host = "api.openai.com";
      // openai is already set all CORS heasders 
      return fetch(url, {
        headers: request.headers,
        method: request.method,
        body: request.body,
        redirect: 'follow'
      });
    }
  }
  