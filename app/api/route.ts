import { NextResponse } from 'next/server';
import sampleNews from "../components/sampleNews.json";


export async function GET() {
    const newsApiRoute = "https://cryptopanic.com/api/v1/posts/?auth_token=5fda82ef699c5a66783e635119147bd82e4b62db&kind=news";

    const res = await fetch(newsApiRoute, {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
    });
    const data = await res.json();

    return NextResponse.json(data);
}