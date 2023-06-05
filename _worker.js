/*
 * @Author: rx-ted
 * @Date: 2023-06-05 16:39:14
 * @LastEditors: rx-ted
 * @LastEditTime: 2023-06-05 16:39:21
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
  