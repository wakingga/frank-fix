import { NextResponse } from "next/server";

const FRANKFURTER_API_URL = "https://api.frankfurter.app/latest";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const from = searchParams.get("from") || "EUR";
    const to = searchParams.get("to") || "CHF";

    try {
        const response = await fetch(`${FRANKFURTER_API_URL}?from=${from}&to=${to}`, {
            // Revalidate every hour, rate doesn't change wildly minute-by-minute
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`Frankfurter API returned ${response.status}`);
        }

        const data = await response.json();
        const rate = data.rates[to];

        return NextResponse.json({ rate, from, to, date: data.date });
    } catch (error) {
        console.error("Rate fetch error:", error);
        return NextResponse.json(
            { error: "Failed to fetch exchange rate" },
            { status: 500 }
        );
    }
}
