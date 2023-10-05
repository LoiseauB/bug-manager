import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resolve } from "../redux/actions";

const ResolveBugForm = () => {
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const bugs = useSelector(state => state.bugs);

  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(resolve(id));
  }

  return(
    <>
      <h1>Changer le status d'un bug</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Sélectionner le signalement à modifier:</label><br/>
        <select onChange={(e) => setId(e.target.value)}>
          <option default>Choisir le bug</option>
          {bugs.map((bug, index) => (
            <option value={index}>ID: {bug.id}</option>
          ))}
        </select><br/>
        <button type="submit">Changer le status</button>
      </form>
    </>
  )
};

export default ResolveBugForm;
