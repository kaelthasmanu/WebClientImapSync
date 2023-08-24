import { NextResponse } from 'next/server';
import { spawn } from 'node:child_process'

export async function GET(request) {
    const ls = spawn("ls", ["-la"]);

    ls.stdout.on("data", data => {
        console.log(`stdout: aaaaa${data}`);
        console.log('Request object:', request); // Check the structure of the Request object
        console.log('Request headers:', request.headers); // Check if headers property is defined
        return NextResponse.json({message: "asd"})
    });

    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
        console.log('Request object:', request); // Check the structure of the Request object
        console.log('Request headers:', request.headers); // Check if headers property is defined
        return NextResponse.json({message: data})
    });

    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
        console.log('Request object:', request); // Check the structure of the Request object
        console.log('Request headers:', request.headers); // Check if headers property is defined
        return NextResponse.json({message: error.message})
    });

    ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
        console.log('Request object:', request); // Check the structure of the Request object
        console.log('Request headers:', request.headers); // Check if headers property is defined
        return NextResponse.json({message: code})
    });
}