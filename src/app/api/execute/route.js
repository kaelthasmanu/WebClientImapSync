import { NextResponse } from 'next/server';
import { spawn } from 'node:child_process'

function runImapsync(args) {
    return new Promise(async (resolve, reject) => {
        try {
            const imapsync = spawn('imapsync', args);

            imapsync.stdout.on("data", data => {
                console.log(`stdout: ${data}`);
            });

            const stderrData = [];

            imapsync.stderr.on("data", data => {
                console.log(`stderr: ${data}`);
                stderrData.push(data);
            });

            imapsync.on('error', (error) => {
                console.log(`error: ${error.message}`);
                reject(new Error("Error"));
            });

            imapsync.on("close", code => {
                console.log(`child process exited with code ${code}`);
                if (stderrData.length > 0 || code === 161 || code === 101) {
                    console.error(`Error!!!: ${stderrData.join("")}`);
                    reject(new Error("Error"));
                } else {
                    resolve("Success");
                }
            });
        } catch (error) {
            console.error(`Error in process: ${error.message}`);
            reject(error);
        }
    });
}


export async function POST(request) {
    const bodyText = await request.text();
    const bodyJson = JSON.parse(bodyText);
    try {
        await runImapsync([
            '--host1', 'correo.umcc.cu',
            '--user1', bodyJson["user"],
            '--password1', bodyJson["pass"],
            '--host2', 'mail.umcc.cu',
            '--user2', bodyJson["user"],
            '--password2', bodyJson["pass"]
        ]);
        return NextResponse.json({message: "Success"})
    } catch (error) {
        return NextResponse.json({ message: "Error" });
    }
}
