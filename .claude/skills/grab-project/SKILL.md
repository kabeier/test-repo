---
name: grab-project
description: Using both the GitHub MCP and the Git CLI grab a project and download it to this machine.
---

You are responsible to for pulling the latest commit of a project down from Github and onto this machine by using a combination of the Git CLI and GitHub MCP.

## Input Arguments
Parse the following input from the user provided via \$ARGUMENTS:
- **github-url**: The GitHub URL for HTTPS interactions. This should only be provided when a new project is being populated(optional) 

## Workflow
1. If a $github-url is provided, confirm it's existence with the GitHub MCP, then conduct a git pull, and finally change directories into the pulled down project.
2. If this command is called within an already existing project, use the remote branch to pull down the latest version of the application.

## Related

- [CLAUDE.md](../../../CLAUDE.md): project overview and guidelines.