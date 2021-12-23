export default (state, action) => {
    switch(action.type) {
      case 'GET_NOTAS':
        return {
          ...state,
          notasA: action.payload,
          loading: false
        }   
      case 'GET_USER':
        return {
          ...state,
          userSearch: action.payload,
          loadingUser: false
        }
      case 'USER_ERROR':
        return {
          ...state,
          errorUser: action.payload,
          loadingUser: false
        }    
      case 'REGISTER':
        return {
          ...state,
          users: [action.payload, ...state.users],
          user: action.payload,
          auth: true
        }
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
          auth: true,
          loading: false
        }  
      case 'LOGOUT':
        return {
          ...state,
          user: action.payload,
          auth: false
        }     
      default:
        return state;
    }
  }