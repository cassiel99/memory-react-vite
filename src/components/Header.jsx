import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <Link to="/" className="header-title">Флеш-карточки</Link>
      <Link to="/admin" className="header-link">Создать сет</Link>
    </div>
  );
}