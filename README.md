# dep-babel-cra
a sample app that shows create-react-app with an express back-end using babel (for async await), deployable to heroku. 


## Run locally
Can run locally using the Procfile-dev file using this command
```
node_modules/.bin/nf start -j Procfile-dev
```

of add an alias to your .bashrc
```
alias nfs='node_modules/.bin/nf start -j Procfile-dev'
```

Heroku should pick up the regular Procfile on deployment. 
