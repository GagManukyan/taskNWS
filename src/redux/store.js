import {legacy_createStore as createStore} from "redux"
 const initalState = {
    categoriId:null,
    photos:[]
} 
 const store = createStore((state=initalState,action)=>{
   if (action.type === "getMorePhotos") {
        return {
        ...state,
        photos:[...state.photos,action.payload.photo]
        }
   }
   if (action.type === "changeCategori") {
        return {
            ...state,
            categoriId:action.payload.id
        }
   }
   if (action.type === "loadPhotos") {
    return {
        ...state,
        photos:action.payload.photos
    }
}
    return state
})
export default store

