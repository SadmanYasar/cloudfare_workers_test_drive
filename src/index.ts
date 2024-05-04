/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Ai } from '@cloudflare/ai'
import { Hono } from 'hono';

export type Env = {
	AI: any;
}

const app = new Hono<{ Bindings: Env }>();

app.get("/", async c => {
	const ai = new Ai(c.env.AI)
	return c.json({ message: "Hello World!" });
})

export default app;