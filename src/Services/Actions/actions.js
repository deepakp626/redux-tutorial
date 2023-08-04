import ADD_TO_CARD from '../constants';
export   const addToCard = (data)=>{
    console.log("action =",data)
    return {
        type:ADD_TO_CARD,
        data:data,
    }
}
// export  const removeToCard = (data)=>{
//     return {
//         type:"REMOVE_TO_CARD",
//         data:data
//     }
// }