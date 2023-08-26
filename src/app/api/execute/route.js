import { NextResponse } from 'next/server';
import { spawn } from 'node:child_process'

export async function POST(request)     {
    const bodyText = await request.text();
    const bodyJson = JSON.parse(bodyText);
    const imapsync = spawn('imapsync', [
        '--host1', 'correo.umcc.cu',
        '--user1', bodyJson["user"],
        '--password1', bodyJson["pass"],
        '--host2', 'mail.umcc.cu',
        '--user2', bodyJson["user"],
        '--password2', bodyJson["pass"]
      ]);

    imapsync.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
    });

    let hasError = false;

    imapsync.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
        hasError = true;
    });

    imapsync.on('error', (error) => {
        console.log(`error: ${error.message}`);
        hasError = true;
    });

    imapsync.on("close", code => {
        console.log(`child process exited with code ${code}`);
        if (hasError) {
            return NextResponse.json({ message: "Error" });
        } else {
            return NextResponse.json({ message: "Success" });
    }
});


    
}