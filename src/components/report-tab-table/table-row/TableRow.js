import { deleteShortenUrl } from "../../shorten-tab-form/Url.service";


const TableRow = (props) => {
    const data = props.data;

    const handleDelete = () => {
        props.handleDelete(data._id);
    }

    const handleEdit = () => {
        // TODO: open popup
    }

    const humanizeDate = () => {
        const date = new Date(parseInt(data.date));
        return date.toLocaleDateString();
    }

    return (
        <tr>
            <th scope="row">{humanizeDate()}</th>
            <td>
                <a href={data.longUrl} target="_blank">{data.longUrl}</a></td>
            <td>
                <a href={data.shortUrl} target="_blank">{data.shortUrl}</a>
            </td>
            <td>{data.visits}</td>
            <td>
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger ml-2" onClick={handleDelete}>Delete</button>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;