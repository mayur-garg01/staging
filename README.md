Git commands---------
1. Basic Git Setup & Configuration
    git --version                      # Check git version
    git config --global user.name "Your Name"
    git config --global user.email "your@email.com"
    git config --global core.editor "code --wait"   # Set default editor
    git config --list                   # Show all config

2. Repository Initialization & Cloning
    git init                            # Initialize new repo in current folder
    git clone <url>                     # Clone from remote
    git clone <url> myfolder            # Clone into custom folder

3. Basic File Operations
    git status                          # Show changes in working directory
    git add <file>                      # Add specific file
    git add .                           # Add all changes
    git reset <file>                    # Unstage file
    git diff                            # Show unstaged changes
    git diff --staged                   # Show staged changes

4. Commit Changes
    git commit -m "Message"             # Commit staged changes
    git commit -a -m "Message"          # Commit all tracked files
    git commit --amend                  # Edit last commit

5. Branching & Merging
    git branch                          # List branches
    git branch <name>                   # Create new branch
    git checkout <branch>                # Switch branch
    git switch <branch>                  # New way to switch
    git checkout -b <new-branch>        # Create + switch
    git merge <branch>                  # Merge branch into current
    git branch -d <branch>              # Delete branch
    git branch -D <branch>              # Force delete