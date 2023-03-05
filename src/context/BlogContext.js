import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    //console.log(action.payload);
    switch(action.type){
        case 'add_blogpost':
            
            return [
                ...state, 
                { 
                    id: Math.floor(Math.random() * 99999), 
                    ...action.payload
                }
            ]
        case 'delete_blogpost':
            return state.filter(p => p.id !== action.payload)
        case 'edit_blogpost':
            return state.map(b => b.id !== action.payload.id ? b : action.payload )
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return (payload) => {
      dispatch({ type: 'add_blogpost', payload })  
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({
            type: 'delete_blogpost',
            payload: id
        })
    }
}

const editBlogPost = (dispatch) => {
    return (payload) => {
        dispatch({ type: 'edit_blogpost', payload })
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { 
        addBlogPost,
        deleteBlogPost,
        editBlogPost
    },
    [{
        id: 1,
        title: "Test",
        content: "Just a test blog post"
    }]
)
