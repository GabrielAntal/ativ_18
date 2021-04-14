const fs = require('fs');
const express = require('express'); 

const app = express();


    
 app.get('/', (req, res) => {
    
    (async ()=>{
    // leitura async libera o event loop para processar outras requisicoes
        await fs.readFile('./html/basic.html', 'utf-8', (err, data) => {
            if (err) {
                res.send(err);
                return;
            } 
            res.send(data);
        });
    })();

    console.log('leitura do arquivo ');
});



app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});

console.log('End of the script');