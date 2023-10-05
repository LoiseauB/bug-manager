import { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../redux/actions";

const CreateBugForm = () => {
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e =>{
    e.preventDefault();
    dispatch(create(desc));
    setDesc('');
  }


  return (
    <>
      <h1>Signaler un bug</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Description du bug:</label><br/>
        <input type="text" onChange={(e) => setDesc(e.target.value)}/><br/>
        <button type="submit">Signaler le bug</button>
      </form>
    </>
  )
};

export default CreateBugForm;
