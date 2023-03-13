import createDataContext from "./createDataContext";
import jsonServer from "../../api/jsonServer"

const blogReducer = (state, action) => {
    //console.log(action.payload);
    switch(action.type){
        case 'add_blogpost':
            return [ ...state, { 
                    id: Math.floor(Math.random() * 99999), 
                    ...action.payload
                }
            ]
        case 'delete_blogpost':
            return state.filter(p => p.id !== action.payload)
        case 'edit_blogpost':
            return state.map(b => b.id !== action.payload.id ? b : action.payload )
        case 'get_blogposts':
            return action.payload
        default:
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        try{
            const response = await jsonServer.get("/blogposts")
            dispatch({
                type: 'get_blogposts',
                payload: response.data
            })
        } catch (err) {
            console.log(err);
        }
    }
}

const addBlogPost = (dispatch) => {
    return async (payload, callback) => {

      const response = await jsonServer.post("/blogposts", payload)
      //console.log(response.status);
       
      if (callback && response.status == 201){
        dispatch({ type: 'add_blogpost', payload }) 
        callback()
      }
      
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        const response = await jsonServer.delete("/blogposts/" + id)
        //console.log(response.status);
        if (response.status == 200) {
            dispatch({
                type: 'delete_blogpost',
                payload: id
            })
        }  
    }
}

const editBlogPost = (dispatch) => {
    return async (payload, callback) => {
        const response = await jsonServer.put('/blogposts/' + payload.id, payload)
        console.log(response.status);
        if (response.status == 200) {
            dispatch({ type: 'edit_blogpost', payload })
            if(callback) {
                callback()
            } 
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { 
        addBlogPost,
        deleteBlogPost,
        editBlogPost,
        getBlogPosts
    },
    []
)
