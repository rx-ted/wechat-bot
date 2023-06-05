/*
 * @Author: rx-ted
 * @Date: 2023-06-05 21:17:59
 * @LastEditors: rx-ted
 * @LastEditTime: 2023-06-05 21:18:05
 */
import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

serve(() => {
  return fetch(new URL("./Readme.md", import.meta.url));
});