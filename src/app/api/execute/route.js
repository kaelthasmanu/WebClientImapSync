import { NextResponse } from 'next/server';
import { spawn } from 'node:child_process'

export async function GET(request) {
    const ls = spawn("ls", ["-la"]);
    let value = 0
    
    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
        value = 1
    });

    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
        value = 0
    });

    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
        value = 0
    });

    ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
        value = 0
    });

    if (ls.exitCode === null) {
        console.log('Process is still active.');
      } else {
        console.log(`Process has exited with code ${ls.exitCode}.`);
      }
      
    if(value === 0){
        return NextResponse.json({message: "Success"})
    }
    else{
        return NextResponse.json({message: "Error"})
    }
    
}

export async function POST(request) {
    const ls = spawn("ls", ["-la"]);
    let value = 0
    
    ls.stdout.on("data", data => {
        console.log(`stdout: aaaaa${data}`);
        value = 1
    });

    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
        value = 0
    });

    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
        value = 0
    });

    ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
        value = 0
    });

    if (ls.exitCode === null) {
        console.log('Process is still active.');
      } else {
        console.log(`Process has exited with code ${ls.exitCode}.`);
      }
      
    if(value === 0){
        return NextResponse.json({message: "Success"})
    }
    else{
        return NextResponse.json({message: "Error"})
    }
    
}