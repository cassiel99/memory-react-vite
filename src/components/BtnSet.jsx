import { Link } from "react-router-dom";
import "./BtnSet.css";

export function BtnSet({ name, id }) {
    return (
        <Link to={`/set/${id}`} state={{ set: name }} className="btn-set">
            {name}
        </Link>
    );
}