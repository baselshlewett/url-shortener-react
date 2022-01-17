import { useState } from 'react';
import { postShortenUrl } from './Url.service';

import classes from './ShortenTabForm.module.css';

const ShortenTabForm = (props) => {
    const [ url, setUrl ] = useState("http://example.com");
    const [ shortenedUrl, setShortenedUrl ] = useState("");

    const handleShortenUrl = (event) => {
        event.preventDefault();
        handleShortenedUrlChange(url);
        postShortenUrl(url).then(data => {
            handleShortenedUrlChange(data.shortUrl);
        });
    }

    const handleUrlInputChange = (event) => {
        setUrl(event.target.value);
    }

    const handleCopyButton = (event) => {
        event.preventDefault();
        navigator.clipboard.writeText(shortenedUrl);
    }

    const handleShortenedUrlChange = (url) => {
        setShortenedUrl(url);
    }

    return (
        <div className="container">
            <form className="w-100" onSubmit={handleShortenUrl}>
                <div className="mb-3 w-100">
                    <label htmlFor="longUrlInput" className="form-label">Enter your full URL here to shorten it:</label>
                    <input type="url" className={"form-control " + classes.urlFormInput} value={url} id="longUrlInput" onChange={handleUrlInputChange} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Shorten</button>
            </form>

            <form className="pt-5 w-100" onSubmit={ event => event.preventDefault() }>
                <div className="input-group mb-3 w-100">
                    <input type="text" className={"form-control " + classes.urlFormInput} readOnly={true} value={shortenedUrl} onChange={handleShortenedUrlChange} placeholder="Short url" />
                    <button className="btn btn-outline-primary" type="button" onClick={handleCopyButton}>Copy</button>
                </div>
            </form>
        </div>
    );
}

export default ShortenTabForm;