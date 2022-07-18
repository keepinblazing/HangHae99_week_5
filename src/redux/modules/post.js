import { db } from "../../shared/firebase";

import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";

//Acitons
const CREATE = "post/CREATE";
const LOAD = "post/LOAD";
const UPDATE = "post/UPDATE";
const DELETE = "post/DELETE"
// const LOADED = "post/LOADED";

const initialState = {
    
    list : []

}

//Action Creators
export function createPost(post) {
    return { type: CREATE, post};
};
export function loadPost(post_list) {
    return { type: LOAD, post_list };
};
export function loadImage(image_url) {
  return { type: LOAD, image_url};
};   
export function updatePost(post_index) {
    return { type : UPDATE, post_index}
};
export function deletePost(post_index) {
    return { type: DELETE, post_index };
};

//export function isLoaded(loaded) {
//    return { type: LOADED, loaded };
//};
  
//middleware
  
export const loadPostFB = () => {
    return async function (dispatch) {
      const post_data = await getDocs(collection(db, "posts"));
  
      let post_list = [];
  
      post_data.forEach((d) => {
        post_list.push({ id: d.id, ...d.data() });
      });
  
      dispatch(loadPost(post_list));
  };
};

export const loadImageFB = () => {
  return async function (dispatch) {
    const image_url = await getDocs(collection(db, "posts"));

    let _image_url = ""
  
    image_url.forEach((b)=> {

      _image_url.push({ id: b.id, ...b.data})
    })

    

    dispatch(loadImage(_image_url));
};
};

  
  export const addPostFB = (post) => {
    return async function (dispatch) {
      // dispatch(isLoaded(false));
      const docRef = await addDoc(collection(db, "posts"), post);
      //const _dicitonary = await getDocs(docRef);
      const post_data = { id: docRef.id, ...post };
  
      dispatch(createPost(post_data));
    };
  };
  
  export const updatePostFB = (post_id) => {
      return async function (dispatch, getState) {
          const docRef = doc(db, "posts", post_id);
          await updateDoc(docRef, {completed : true});
  
          const _post_list = getState().post_list;
          const post_index = _post_list.findIndex((d) => {
              return d.id === post_id;
          });
          dispatch(updatePost(post_index));
      };
  };
  
  //reducer
  
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "post/LOAD": {
        return { list: action._image_url };
      }
      case "post/CREATE": {
        const new_post_list = [...state.list, action.post];
        return { ...state, list: new_post_list };
      }
      case "post/UPDATE" : {
          const new_post_list = state.list.map((l, idx) => {
              if (parseInt(action.post_index) === idx){
                  return {...l, completed: true};
              }else{
                  return l;
              }
          });
          return {...state, list: new_post_list};
      };
      case "post/LOADED": {
        return { ...state, is_loaded: action.loaded };
      }
      default:
        return state;
    }
  }
  