/*
 * @Author: rx-ted
 * @Date: 2023-06-05 20:50:31
 * @LastEditors: rx-ted
 * @LastEditTime: 2023-06-05 20:50:38
 */
import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

const OPENAI_API_HOST = "api.openai.com";

serve(async (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    return fetch(new URL("./Readme.md", import.meta.url));
  }

  url.host = OPENAI_API_HOST;
  return await fetch(url, request);
});