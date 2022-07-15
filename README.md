# Todo-List-webpack-
a simple todo list made with vanilla JS


These files are designed for webpack. The project uses localStorage to save the files. 
The bundled main.js file in the DIST folder uses index.js in the SRC folder as the entry point. 

-To run this locally, add these files to a new_directory. Type in the commandline:

mkdir new_directory
cd new_directory
npm init -y
npm install webpack webpack-cli --save-dev


-install css loader into webpack via commandline:

npm install --save-dev style-loader css-loader


-To run the program, webpack watch is setup , type in the commandline:

npm run watch
