# Nodejs Backend for Dashboard

This is a basic Node application that Express and MongoDB for database.

### Tools Used

- Node
- Express
- MongoDB

### Installing

clone the repo

```
git clone https://github.com/surksharathi/Dashboard_Backend.git
```

install node modules

```
npm install
```

## Folder Structure

After creation, your project should look like this:

```
Dashboard_Backend/
    node_modules/
    public/
    app/
    	dashboard/
               controller.js
               model.js
               repository.js
               router.js
        index.js/
    config/
          environments/
          index.js
          mongoose.js
    middlewared/
               ....
    utilities/
             ...
    index.js
    .gitignore
    package.json
    README.md
```

## Run the project

```
nodemon index.js

OR

node index.js
```
