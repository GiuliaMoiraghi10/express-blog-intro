console.log('express-blog-intro')

//Esercizio
// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto “Server del mio blog”
// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.
// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
// Testare su postman

/* Passaggi:
    - Inizializzo progetto con npm init -y
    - Aggiungo script "dev" per aggiornamenti in diretta npm run dev
    - Installo express npm i express
    - Creo server:
        - Recupero express
        - Creo istanza invocando funzione
        - Creo porta 3000 -> collego postman http://localhost:3000
    - Registro la prima rotta '/'
    - Metto server in ascolto della porta e verifico che funzioni
    - Creo variabile con array di oggetti (titolo, contenuto, immagine e tags (tags è un array di stringhe))
    - Carico img nella cartella 'public/image' e rendo cartella accessibile
    - Quando arriva una chiamata get all'url ('/'), voglio che torni un oggetto json con la lista dei post */


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})




