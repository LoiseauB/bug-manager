import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <p>Bug Manager 🪳</p>
      <Link to="/bugs">Liste des bugs</Link>
      <Link to="/bugs/create">Signaler un bug</Link>
      <Link to="/bugs/resolve">Changer le status d'un signalement</Link>
      <Link to="/bugs/edit">Modifier un signalement</Link>
      <Link to="/bugs/delete">Supprimer un signalement</Link>
    </nav>
  )
};

export default Navbar;
