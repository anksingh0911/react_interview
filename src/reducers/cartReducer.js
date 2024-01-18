export const cartReducer=(state , action)=>{
  switch (action.type){
    case "add_to_cart":
      return {...state, cart: [{...action.payload,qty:1}, ...state.cart]};
    case "remove_from_cart":
        return {...state, cart: state.cart.filter(pdt=> pdt.id !== action.payload?.id)}
    
    case "change_quantity":
        return {...state, 
          cart: state.cart.filter((pdt)=>  pdt.id === action?.payload?.id ? (pdt.qty = action.payload.qty) : pdt.qty)}
    default:
      break
  }
}