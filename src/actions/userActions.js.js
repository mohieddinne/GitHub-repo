const setUser = (userObj) => {
  return {
    type: 'SET_USER',
    payload: userObj
  };
};
 function setSearchText(lettre) {
  return {
    type: "SET_SEARCH_WORD",
    payload: lettre,
  };
}



export default {
  setUser,
  setSearchText
};
