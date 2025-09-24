const express = require('express');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const app = express();
const PORT = 5000;

// Read package.json and get scripts
const packageJsonPath = path.join(__dirname, 'package.json');
let scripts = {};
try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  scripts = packageJson.scripts || {};
} catch (error) {
  console.error('Error reading package.json:', error);
}

// Generate GET request handlers for each script
Object.keys(scripts).forEach(scriptName => {
  if (!scriptName.startsWith('cop-')) {
    return;
  }
  app.get(`/${scriptName}`, (req, res) => {
    console.log(`Running script: ${scriptName}`);
    
    // Get the script command
    const scriptCommand = scripts[scriptName];
    
    // Prepare HTML response with auto-refresh
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache'
    });
    
    res.write(`
      <!DOCTYPE html>
      <html>
        <head><title>Running: ${scriptName}</title></head>
        <body><script>setTimeout(() => window.close(), 1000)</script></body>
      </html>
    `);
    
    // Try to open in new terminal window based on platform
    let terminalProcess;
    const platform = process.platform;
    
    if (platform === 'darwin') {
      // macOS - Open Terminal app with the script
      terminalProcess = spawn('osascript', [
        '-e', `tell application "Terminal"`,
        '-e', `do script "cd ${__dirname} && npm run ${scriptName}"`,
        '-e', `activate`,
        '-e', `end tell`
      ]);
    } else if (platform === 'win32') {
      // Windows - Open cmd in new window
      terminalProcess = spawn('cmd.exe', ['/c', 'start', 'cmd.exe', '/k', `cd /d ${__dirname} && npm run ${scriptName}`]);
    } else {
      // Linux - Try common terminal emulators
      const terminals = ['gnome-terminal', 'konsole', 'xterm'];
      for (const terminal of terminals) {
        try {
          if (terminal === 'gnome-terminal') {
            terminalProcess = spawn(terminal, ['--', 'bash', '-c', `cd ${__dirname} && npm run ${scriptName}; exec bash`]);
          } else if (terminal === 'konsole') {
            terminalProcess = spawn(terminal, ['-e', 'bash', '-c', `cd ${__dirname} && npm run ${scriptName}; exec bash`]);
          } else {
            terminalProcess = spawn(terminal, ['-e', `bash -c "cd ${__dirname} && npm run ${scriptName}; exec bash"`]);
          }
          break;
        } catch (e) {
          // Try next terminal
        }
      }
    }
    
    // Also run the script in the current process to capture output
    const [command, ...args] = scriptCommand.split(' ');
    const scriptProcess = spawn(command, args, { 
      shell: true,
      cwd: __dirname
    });
    
    scriptProcess.stdout.on('data', (data) => {
      const output = data.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      res.write(output);
    });
    
    scriptProcess.stderr.on('data', (data) => {
      const output = data.toString().replace(/</g, '&lt;').replace(/>/g, '&gt;');
      res.write(`<span class="error">${output}</span>`);
    });
    
    scriptProcess.on('close', (code) => {
      res.write(`\n\nProcess exited with code ${code}`);
      res.write(`
        </pre>
        <div style="margin-top: 20px; color: #4ec9b0;">
          Script execution completed. Check the terminal window for interactive output.
        </div>
      </body>
      </html>
      `);
      res.end();
    });
    
    scriptProcess.on('error', (error) => {
      res.write(`<span class="error">Error: ${error.message}</span>`);
      res.write(`
        </pre>
      </body>
      </html>
      `);
      res.end();
    });
  });
});

// Root endpoint to show available scripts
app.get('/', (req, res) => {
  const scriptLinks = Object.keys(scripts).map(script => 
    `<li><a href="/${script}">${script}</a> - ${scripts[script]}</li>`
  ).join('');
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Available Scripts</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        h1 { color: #333; }
        ul { line-height: 2; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .empty { color: #666; font-style: italic; }
      </style>
    </head>
    <body>
      <h1>Available NPM Scripts</h1>
      ${scriptLinks ? `<ul>${scriptLinks}</ul>` : '<p class="empty">No scripts found in package.json</p>'}
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Available scripts: ${Object.keys(scripts).length > 0 ? Object.keys(scripts).join(', ') : 'none'}`);
});