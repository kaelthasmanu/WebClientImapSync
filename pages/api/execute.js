/*import { spawn } from 'node:child_process'

export default (req, res) => { 
    const ls = spawn("ls", ["-la"]);

    ls.stdout.on("data", data => {
        console.log(`stdout: ${data}`);
        res.status(200).json(data);
    });

    ls.stderr.on("data", data => {
        console.log(`stderr: ${data}`);
        res.status(200).json(data);
    });

    ls.on('error', (error) => {
        console.log(`error: ${error.message}`);
        res.status(200).json(error.message);
    });

    ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
        res.status(200).json(code);
    });
  }*/

  export async function GET(request) {
    return new Response('Hello Nesxtjs')
}