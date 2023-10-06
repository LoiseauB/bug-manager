import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const EditBugForm = () => {
  const [desc, setDesc] = useState('');
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugs);
  const navigate = useNavigate();

  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(edit(id, desc));
    navigate('/bugs');
  }
  console.log(id);

  return (
    <>
      <h1>Changer le signalement d'un bug</h1>
      <form onSubmit={handleSubmit}>
        <label>Sélectionner le signalement à modifier:</label><br/>
        <select onChange={(e) => setId(e.target.value)}>
          <option default>Choisir le bug</option>
          {bugs.map((bug, index) => (
            <option value={index}>ID: {bug.id}</option>
          ))}
        </select><br/>
        <label>Description du bug:</label><br/>
        <input type="text" onChange={(e) => setDesc(e.target.value)}/><br/>
        <button type="submit">Modifier le bug</button>
      </form>
    </>
  )
};

export default EditBugForm;
