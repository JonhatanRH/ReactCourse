

// const getImagenPromesa = () => new Promise( resolve => resolve('https://asdasd.com'));
// getImagenPromesa().then( console.log );


const getImage = async() => {

    try {
        const apiKey = 'wevSyjWtvfdKdAzS9L4HKVSWBpdEg8Gv';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
        img.src = url;
        document.body.append(img);

    } catch (error) {
        // manejo del error
        console.error(error);
    }
    
   
}

getImage();
