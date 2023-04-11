export const initialState={
    form:[],
    edit:[]
}

export const stateReducer = (state,action) => {
    console.log("state",state,"action",action)
    switch(action.type){
    case "ARRAY" :
    return{
        ...state,
        form: action.payload,
    };       
    case "EDIT" :
        return{
          ...state,
          edit:action.payload,
        }
    default:{
        return state;
    }
    }
    
}