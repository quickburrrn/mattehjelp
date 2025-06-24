'use server'
import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.DATABASE_URL!);

console.log(process.env.DATABASE_URL!);

export async function POST(req: Request) {
    const body = await req.json();
    const { email } = body;

    try {
        await sql`INSERT INTO emails (email) VALUES (${email})`;
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err: unknown) {
        console.error('Error:', err);
        if (err instanceof Error) {
            console.error('DB error:', err.message);
            return new Response(JSON.stringify({ error: 'Error' }), { status: 500 });
        } else {
            console.error('Unknown error', err);
            return new Response(JSON.stringify({ error: 'noe idea what the error is' }), { status: 500 });
        }
    }
}