import { NextResponse, NextRequest } from "next/server"

export async function GET(req: NextRequest): Promise<NextResponse> {

    const { searchParams } = new URL(req.url);
    const pos = searchParams.get('from');
    const mailId = searchParams.get('mail_id');
    const cssId = searchParams.get('css_id');
    const imageId = Date.now() % 20;

    console.log(`
        pos: ${pos}
        ${mailId ? `mid: ${mailId}` : ''}
        ${cssId ? `cid: ${cssId}` : ''}
        iid: ${imageId}
        f-ip: ${req.headers.get('x-forwarded-for')}
        ua: ${req.headers.get('user-agent')}
    `);

    return NextResponse.redirect('https://app3.suitesting.dev/assets/1.jpg');
}
