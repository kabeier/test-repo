---
name: save-project
description: Save the current state of the project within Git using the Git CLI and GitHub by leveraging the Github MCP
---

Your job is to generate a new git commit for this project and push it onto its coordinated GitHub repository.

## Input Arguments

Parse the following input from the user provided via $ARGUMENTS:
- **message**: The commit message (mandatory).
- **repository-name**: The name of the GitHub repository to create if a remote repository is not already attached.

## Workflow

1. Check the current project for an existing `.git` directory. If the directory is missing, initialize a git repo within the project.
2. Ensure a GitHub Repository is attached as the Remote Branch. If this is not present or is invalid, create a new GitHub Repository using the attached GitHub MCP server (using the provided repository-name if available, or the project folder name) and attach it to the local Git.
3. Generate a commit message using the provided message argument.
4. Push the latest commit to GitHub.

## Related

- [CLAUDE.md](../../../CLAUDE.md): project overview and guidelines.