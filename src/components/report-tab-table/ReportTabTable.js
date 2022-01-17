import TableRow from './table-row/TableRow';

import { useState, useEffect } from 'react';
import { getShortenUrl, deleteShortenUrl } from '../shorten-tab-form/Url.service';

const ReportTabTable = (props) => {
    const [ urls, setUrls ] = useState([]);

    useEffect(() => {
        loadUrlsReport();
    }, []);

    const loadUrlsReport = () => {
        getShortenUrl().then(data => {
            setUrls(data);
        });
    }

    const handleDelete = (urlId) => {
        deleteShortenUrl(urlId);
        const newUrlsArray = urls.filter(url => url._id !== urlId);
        setUrls(newUrlsArray);
    }

    return (
        <div className="container table-responsive w-100">
            <table className="table table-striped w-100">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Original URL</th>
                        <th scope="col">Short URL</th>
                        <th scope="col">Visits</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                {urls.length > 0 &&
                    <tbody>
                         {urls.map((url) => {
                            return <TableRow data={url} handleDelete={handleDelete} key={urls._id} />;
                        })}
                    </tbody>
                }
            </table>
        </div>
    );
}

export default ReportTabTable;