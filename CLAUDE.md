# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a CoP (Community of Practice) presentation demo project for Claude AI, showcasing various Claude Code CLI features and capabilities. The project includes an Express.js server that serves a web interface for executing demonstration scripts linked to a Keynote presentation.

## Development Commands

```bash
# Start presentation and demo server (opens Keynote + starts Express server)
npm run start

# Test demonstration scripts
npm run cop-test

# Install dependencies
npm install
```

## Architecture

### Core Components

**CoP-server.js**: Express server (port 5000) that dynamically generates HTTP endpoints from `package.json` scripts prefixed with "cop-". Cross-platform terminal launching for macOS/Windows/Linux via AppleScript, CMD, or common Linux terminals.

**Package.json Script System**: The server automatically exposes any npm script starting with "cop-" as HTTP endpoints. When accessed, these endpoints both run the script and open it in a new terminal window for interactive demonstration.

### HTTP Request Flow
1. HTTP GET to `/cop-*` endpoint
2. Server spawns terminal window with script execution 
3. Server runs script in current process to capture output
4. Browser displays captured output and auto-closes after 1 second
5. Terminal window remains open for interactive demonstration

### Demo Script Categories

**Configuration Display Scripts**: Open configuration files in IntelliJ IDEA
- `cop-claude-*-show`: Display various `.claude/` configuration files

**Interactive Demo Scripts**: Execute Claude commands to demonstrate features
- `cop-claude-bashes-run`: Background process demonstration via `.claude/demo_process.sh`
- `cop-claude-commands-run`: Custom command execution from `.claude/commands.json`
- `cop-claude-mcp-run`: MCP server integration demonstration
- `cop-claude-hooks-run`: Hook trigger demonstration via file editing
- `cop-claude-security-run`: Security feature demonstration

### Configuration Structure

The `.claude/` directory contains demonstration configurations:
- `commands.json`: Custom command definitions
- `hooks.json`: Event-driven automation hooks  
- `mcp_settings.json`: Model Context Protocol server settings
- `security_settings.json`: Security and permission configurations
- `bash_examples.sh` & `demo_process.sh`: Demonstration scripts

## Platform Support

The server handles terminal launching across platforms:
- **macOS**: AppleScript + Terminal.app
- **Windows**: CMD with new window spawning
- **Linux**: Attempts common terminals (gnome-terminal, konsole, xterm)

## Important Resources

- MCP Servers Repository: https://github.com/modelcontextprotocol/servers
- Atlassian MCP Integration: https://www.atlassian.com/platform/remote-mcp-server  
- CodeRabbit CLI: https://www.coderabbit.ai/