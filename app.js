import express from 'express';

let app = express();

app.use( express.static('views') );


app.listen( 3000, () => {
    console.log('running')
} )
