const initialState = {
    location:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'location/theLocation':
            return {...state, location:{...action.payload}}
            
        default:
        return state;
    }
  };