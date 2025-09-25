# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a CoP (Community of Practice) presentation demo project for Claude AI, showcasing various Claude Code CLI features and capabilities. The project includes an Express.js server that serves a web interface for executing demonstration scripts linked to a Keynote presentation.

## Architecture

### Core Components

1. **CoP-server.js**: Express server that dynamically generates HTTP endpoints from package.json scripts prefixed with "cop-". Opens scripts in new terminal windows on macOS/Windows/Linux when triggered via HTTP requests.

2. **CoP.key**: Keynote presentation file containing slides about Claude AI capabilities, patterns, and practical usage.

3. **Demo Script System**: Scripts defined in package.json are automatically exposed as HTTP endpoints. The server listens on port 5000 and provides a web interface to trigger demos.

## Development Commands

```bash
# Start presentation and demo server
npm run start

# Test if cop- scripts work
npm run cop-test

# Install dependencies
npm install
```

## Demo Scripts Structure

The following demo scripts are placeholders that need implementation based on the presentation content:

- `cop-claude-bashes-show`: Demonstrate background bash processes
- `cop-claude-bashes-run`: Execute background bash examples
- `cop-claude-commands-show`: Show custom commands configuration
- `cop-claude-commands-run`: Execute custom commands
- `cop-claude-mcp-show`: Display MCP server configuration
- `cop-claude-mcp-run`: Run MCP server examples
- `cop-claude-hooks-show`: Show hooks configuration
- `cop-claude-hooks-run`: Execute hooks examples
- `cop-claude-security-show`: Demonstrate security features

## Presentation Content Mapping

The presentation covers:
- Slides 1-7: AI overview and Claude CLI introduction
- Slides 8-10: Installation, interface, and features
- Slides 12-14: Usage patterns and tool combinations
- Slides 16-18: Strengths and advantages
- Slides 20-22: Common issues and solutions
- Slides 24-26: Automation tips and approaches

## Server Behavior

When a `cop-*` script is triggered via HTTP:
1. Opens a new terminal window with the script
2. Captures and displays output in the browser
3. Auto-closes the browser tab after 1 second
4. Terminal window remains open for interactive demos

## Important Resources

- MCP Servers Repository: https://github.com/modelcontextprotocol/servers
- Atlassian MCP Integration: https://www.atlassian.com/platform/remote-mcp-server
- CodeRabbit CLI: https://www.coderabbit.ai/