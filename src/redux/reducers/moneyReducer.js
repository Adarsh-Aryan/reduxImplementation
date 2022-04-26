

const initialState={
    balance:10
}


export const moneyReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'DEPOSIT':
            
            return{
                balance:state.balance + action.payload
            }

        case 'WITHDRAW':
            return{
                balance: state.balance - action.payload<=0?0:state.balance - action.payload
            }
    
        default:
            return state
    }
}