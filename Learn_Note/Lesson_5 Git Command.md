### Upload WebdriverIO project to github

Step 1 - Install git on your system git --version

Step 2 - Goto github.com and create account and login

Step 3 - Create a new repository - Local

Step 4 - Goto VS Code and open project/folder

Step 5 - Create .gitignore file
- Search: Gitignore Template Generator
- e.g: https://www.toptal.com/developers/gitignore

Step 6 - Goto source control section & click on git icon    (note : check git is enabled from settings)

Step 7 - Give commit message & Commit the changes

Step 8 - Add remote repo (github repo)

```sh
# If github repo different from local
git fetch 
# Set tracking information for this branch <main>:
# remote 远程默认分支
git branch --set-upstream-to=<remote>/<branch> main 

# pull latest code
git pull

```

Step 9 - Push commited changes to github repo

Step 10 - Check changes on github repo

Ref - https://code.visualstudio.com/docs/sourcecontrol/overview

### Remove project from Git (version control)

Step 1 - On VS Code check git is enabled

Step 2 - Goto command palette - git close repository

Step 3 - Delete the .git folder from project folder