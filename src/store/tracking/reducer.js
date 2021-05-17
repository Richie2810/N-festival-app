const initialState = {
    tracker:{}
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'tracker/success':
            return {...state, tracker:{...action.playload}}

        case 'tracker/stop':
            return {...state, tracker:{}}
        default:
            return state
    }
}