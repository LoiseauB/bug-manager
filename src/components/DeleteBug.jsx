import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBug } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const DeleteBug = () => {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugs);
  const navigate = useNavigate();


  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(deleteBug(id));
    navigate('/bugs');
  }

  return(
    <>
      <h1>Supprimer un signalement</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Sélectionner le signalement à supprimer:</label>
        <select onChange={(e) => setId(e.target.value)}>
          <option default>Choisir le bug</option>
          {bugs.map((bug, index) => (
            <option value={index}>ID: {bug.id}</option>
          ))}
        </select><br/>
        <button type="submit">Adieu le bug !</button>
      </form>
    </>
  )
};

export default DeleteBug;
