npm init -y
npm i typescript

Transpilamos: node_modules/.bin/tsc index.ts

"build": "tsc" -> Transpilacion manual
"watch": "tsc -w" -> Transpilacion automatica
"start": "node ./dist/index.js" ->ejecucion de codigo transpilado
