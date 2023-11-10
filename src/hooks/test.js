// // actionResponse("BACKGROUND_IMGS", "GET")
// //   .then((data) => {
// //     console.log(data);

// import { useEffect } from "react";
// import useSomethingData from "./useGetData";
// import { useState } from "react";

// //     if (data.imageUrls && data.imageUrls.length > 0) {
// //       const imageUrl = data.imageUrls[0];
// //       setTestImg(imageUrl);
// //     }
// //   })
// //   .catch((error) => {
// //     console.error("API 요청 중 에러 발생:", error);
// //   });

const useGetImg = () => {
  const [testImgs, setTestImgs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await actionResponse("BACKGROUND_IMGS", "GET");
      if (data && data.imageUrls.length > 0) {
        setTestImgs(data);
      }
    };

    fetchData();
  }, []);

  return testImgs;
};

export default useGetImg;

// import { useEffect, useState } from "react";
// import actionResponse from "@/utils/api";

// export const useReduce = (reducer, initialState) => {
//   const [state, setState] = useState(initialState);

//   const updateState = (action) => setState((state) => reducer(state, action));

//   const dispatch = (action) => (action instanceof Promise ? action.then(updateState) : updateState(action));

//   return [state, dispatch];
// };

// export function reduceData(state = {}, action = {}) {
//   switch (action.type) {
//     case "SHARED_USER": {
//       const { imageUrls } = action.payload;
//       state = { imageUrls };
//       break;
//     }
// case 'SHARED_FOLDER':
//   const { folder: { links } } = action.payload;
//   state = links;
//   break;
// case 'SHARED_FOLDERNAME':
//   const { folder: { name: folderName, owner } } = action.payload;
//   state = { folderName, owner }
//   break;
// case 'FOLDER_USER': {
//   const { data: [{ id, name, email, image_source: profileImg }] } = action.payload;
//   state = { id, name, email, profileImg }
//   break;
// }
// case 'FOLDER_CATEGORY': {
//   const { data } = action.payload;
//   state = data;
// }
//   break;
// case 'FOLDER_LINKS':
//   const { data } = action.payload;
//   state = data;
//   break;
//     default:
//   }
//   return state;
// }

// function useData(type) {
//   const [state, dispatch] = useReduce(reduceData, undefined);

//   useEffect(() => {
//     dispatch(getData(type));
//   }, [dispatch, type]);

//   return [state];
// }

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "BACKGROUND_IMGS": {
//       const { imageUrls } = action.payload;
//     }
//     case actionTypes.SUCCESS:
//       return { ...state, loading: false, data: action.payload };
//     case actionTypes.FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// const useGetData = (type) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     const fetchData = async () => {
//       dispatch({ type: actionTypes.REQUEST });
//       try {
//         const result = await actionResponse(type, "GET");
//         dispatch({ type: actionTypes.SUCCESS, payload: result });
//       } catch (error) {
//         dispatch({ type: actionTypes.FAILURE, payload: error.message });
//       }
//     };

//     fetchData();
//   }, [type]);

//   return state;
// };

// export default useGetData;
