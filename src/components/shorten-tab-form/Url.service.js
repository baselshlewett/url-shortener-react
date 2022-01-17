const postShortenUrl = (longUrl) => {
    const data = {
        longUrl
    };

    const options = {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return fetch("http://localhost:3000/api/url", options).then(response => response.json());
}

const putShortenUrl = () => {
    console.log('updating');
}

const getShortenUrl = () => {
    return fetch("http://localhost:3000/api/url").then(response => response.json());
}

const deleteShortenUrl = (urlId) => {
    const data = {
        urlId
    };

    const options = {
        method: 'DELETE'
    };

    return fetch("http://localhost:3000/api/url/" + urlId, options).then(response => response.json());
}

export {
    postShortenUrl,
    putShortenUrl,
    getShortenUrl,
    deleteShortenUrl
};