const bugsReducer = (state = { bugs: [] }, action) => {
  switch (action.type){
    case 'CREATE_BUG': {
      return {...state, bugs: [...state.bugs, { id: state.bugs.length + 1, desc: action.payload.desc, resolved: false }]}
    }
    case 'DELETE_BUG': {
      if (state.bugs[action.payload.id]){
        let newBugs = [...state.bugs];
        newBugs.splice(action.payload.id, 1);
        return { ...state, bugs: newBugs }
      }
      return state
    }
    case 'EDIT_BUG': {
      if (state.bugs[action.payload.id]){
        let newBugs = [...state.bugs];
        newBugs[action.payload.id]={ ...newBugs[action.payload.id], desc: action.payload.desc };
        return { ...state, bugs: newBugs }
      }
      return state
    }
    case 'RESOLVE_BUG': {
      if (state.bugs[action.payload.id]){
        let newBugs = [...state.bugs];
        newBugs[action.payload.id]= { ...newBugs[action.payload.id], resolved: !newBugs[action.payload.id].resolved };
        return { ...state, bugs: newBugs }
      }
      return state
    }
    default: return state;
  };
};

export default bugsReducer;
