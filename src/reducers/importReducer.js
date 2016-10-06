const initialState={
    id:'ds',
    regexp:'',
    type:'',
    score:1,
    author:'kl',
    createdAt:'monday'
}

export default function(state=initialState, action){
    switch(action.type){
        case 'SEND_DATA_TO_DB':
            return {...state, ...action.payload}
        default:
            return state;
    }
}

