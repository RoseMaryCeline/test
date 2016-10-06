const initialState={
    regexp:'',
    type:'',
    score:1,
    id:null
};

export default function(state=initialState, action) {
    switch(action.type){
        case 'FORM_UPDATE_FIELD':
          return {...state, ...action.payload}
        case 'FORM_EDIT_ITEM':
            return {...action.payload};
        case 'FORM_CLEAR_ITEM':
         return initialState;
        default:
            return state;
    }
}
