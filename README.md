# githubLearning
Learned how to use git and connected local repo to github by the following commands

- **git init**  {initialized an empty repo in local}
- **touch firstFile.txt** {created a new text file named firstFile }
- **git add .** {staged the file for commit}
- **git commit -m "first commit"** {commited the file with message in local repo} *Still in local repo..............*
- **git remote add origin https://github.com/SaranyaVelu-SK/githubLearning.git** {linked remote repo to github by adding the http link with alias as origin}
- **git push origin master** {pushed the changes/file to the githubLearning repository(origin) for master branch in github}

Branching

- **git fetch** {pull all the data from origin}
- **git checkout -b newbranch** {created and switched to a new branch "newbranch"}
- **git branch** {displays all the branches}
  
     *now making changes in mybranch (done staging and commiting)*
 
- **git push origin newbranch** {pushed the changes/file to the githubLearning repository(origin) for newbranch branch in github}

created a pull request and merged the newbranch with the master 

# STAGE:

1. Staged the wrong file? Use **git restore --staged <file>** to unstage it. (**git reset HEAD <file>**)
2. Forgot to stage a file? Just run **git add <file>** again before you commit.
3. Not sure what's staged? Run **git status** to see what will be committed.

---

# COMMIT:

It records a snapshot of your files at a certain time, with a message describing what changed.

1. **git commit -m "message"** - Commit staged changes with a message
2. **git commit -a -m "message"** - Commit all tracked changes (skip staging)
3. **git log** - See commit history
4. Create an empty commit: **git commit --allow-empty -m "Start project"**
5. Use previous commit message (no editor): **git commit --no-edit**
6. Quickly add staged changes to last commit, keep message: **git commit --amend --no-edit**

__Troubleshooting Common Commit Mistakes__
- Forgot to stage a file?
If you run git commit -m "message" but forgot to git add a file, just add it and commit again. Or use **git commit --amend** to add it to your last commit.
- Typo in your commit message?
Use **git commit --amend -m "Corrected message"** to fix the last commit message.
- Accidentally committed the wrong files?
You can use **git reset --soft HEAD~1** to undo the last commit and keep your changes staged.

- To view the history of commits for a repository, you can use the **git log** command
- For a shorter view, use **git log --oneline**
- To see which files changed in each commit, use **git log --stat**

---

# STASH:

**git stash** - Stash your changes
**git stash push -m "message"** - Stash with a message
**git stash list** - List all stashes
**git stash branch <branchname>** - Create a branch from a stash
**git stash apply** - Restore your most recent stashed changes (keeps the stash in the stack)
**git stash apply stash@{n})** - Restore a specific stash from the list
**git stash pop** - Apply the latest stash and remove it from the stack
**git stash clear** - Delete all your stashes at once

uses:

- Switch branches safely: Save your work before changing branches.
- Handle emergencies: Stash your work to fix something urgent, then restore it.
- Keep your work-in-progress safe: Avoid messy commits or losing changes.

- Tracked files (both staged and unstaged) are stashed by default.
- Untracked files (new files not yet added to Git) are not stashed by default.
- To stash untracked files too, use git stash -u (or --include-untracked).

## What is a stash stack?

Each time you run git stash, your changes are saved on top of a "stack".

The most recent stash is on top, and you can apply or drop stashes from the top down, or pick a specific one from the list.

---

# HISTORY:

**git log** - Show full commit history
**git log --oneline** - Show a summary of commits
**git show <commit>** - Show details of a specific commit
**git diff** - See unstaged changes
**git diff --staged** - See staged changes

*Troubleshooting*
- Can't see your changes? Make sure you have committed your work. Uncommitted changes won't appear in the history.
- Log is too long? Use *git log --oneline* or *git log --since* to make it easier to read.
- How do I quit the log view? Press *q* to exit the log or diff view.

# BRANCH:

- Rename a branch: **git branch -m old-name new-name**
- List all branches: **git branch**
- Switch branches: **git checkout branch-name** or **git switch branch-name**
- Delete a branch (not merged): **git branch -D branch-name**
- See which branch you're on: **git status**

*TroubleShooting*
- If you don't see your changes on the main branch, remember: changes in one branch stay there until you merge them.

- When deleting a branch, make sure it's merged first. If you try to delete an unmerged branch, Git will prevent you from doing so.

- To force delete an unmerged branch, use **git branch -D branch-name.**