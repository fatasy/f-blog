import { blog } from "@blog/index";
import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";

new Elysia().use(cors()).use(blog).listen(5000);
