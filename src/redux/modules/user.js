// import { db } from "../../shared/firebase";
// import { collection, getDocs } from "firebase/firestore";

// //Action

// const LOGIN = "user/LOGIN"; //로그인

// //Action creator

// export function login(user_data) {
//     return { type: LOAD, user_data };
// }


// //

// export const loginFB = () => {
//     return async function (dispatch) {
//       const post_data = await getDocs(collection(db, "posts"));
//       let post_list = [];
  
//       post_data.forEach((d) => {
//         post_list.push({ id: d.id, ...d.data() });
//       });
//       dispatch(loadPost(post_list));
//     };
//   };  