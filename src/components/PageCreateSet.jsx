import { Outlet, Link } from "react-router-dom";

export function PageCreateSet() {
     return ( 
        <div>
            <h2>Создание сета</h2>
            <nav>
                <Link to="/admin/createset">Создать сет</Link> |{" "}
                <Link to="/admin/createcard">Создать карточку</Link>
            </nav>
            <Outlet />
        </div>
     );
}