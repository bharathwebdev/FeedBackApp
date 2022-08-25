const GitHubReducer=(state,action)=>{
        switch(action.type){
            case 'GET_USERS':
                 return {
                     ...state,
                     users:action.payload,
                     loading:false,
                }
            case 'SET_LOADING':
                return {
                    ...state,loading:true,
                }
            case 'CLEAR_USERS':
                return{
                    ...state,
                    users:[]
                }
            case 'GET_USER_AND_REPO':
                return {
                    ...state,
                    user:action.payload.user,
                    repos:action.payload.repo,
                    loading:false,

                }
          
            default:
                return state
        }

}
export default GitHubReducer;