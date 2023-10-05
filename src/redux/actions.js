export const create = desc => ({
  type: 'CREATE_BUG',
  payload:{desc}
});

export const deleteBug = id =>( {
  type: 'DELETE_BUG',
  payload: {id}
});

export const edit = (id, desc) =>({
  type: 'EDIT_BUG',
  payload:{
    id,
    desc
  }
});

export const resolve = id => ({
  type: 'RESOLVE_BUG',
  payload: {id}
});
