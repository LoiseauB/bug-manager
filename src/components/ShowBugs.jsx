import { useSelector } from "react-redux"

const ShowBugs = () => {
  const bugs = useSelector(state => state.bugs);
  console.log(bugs)
  return(
    <>
    <h1>Liste des bugs signalés</h1>

    <ul>
      {bugs.map(bug => (
        <li>ID: { bug.id }
          <ul>
            <li>description: { bug.desc }</li>
            <li>status: { bug.resolved ? '✅' : '🚨' }</li>
          </ul>
        </li>
      ))}
      </ul>
    </>
  )
};

export default ShowBugs;
