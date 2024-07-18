steps log

1. change tsconfig.json change rootDir to ./src where all source code is and
   outDir to ./build where our complied code will be

2. change your package.json scripts to start and dev
   where start will be on compiled codein build folder
   and dev will be to watch for typescript changes and and on success do nodemon index.js

3. npx gitignore node will create you a gitignore for node
   add build folder in gitignore because we can replicate it after compiling src folder
