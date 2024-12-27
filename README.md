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
- **git checkout -b seconbranch** {created and switched to a new branch "seconbranch"}
- **git branch** {displays all the branches}
  
     *now making changes in mybranch (done staging and commiting)*
 
- **git push origin seconbranch** {pushed the changes/file to the githubLearning repository(origin) for seconbranch branch in github}

created a pull request and merged the seconbranch with the master 
