const initialState = { products: [], analysedStock:{total: 0, category: 0, outOfStock: 0, value: 0} };

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter((p,i) => i !== action.payload) };
    case 'EDIT_PRODUCT':
      return { 
        ...state, 
        products: state.products.map((p,i) => i === action.payload?.index ? action.payload?.editData : p)
      };
      case 'DISABLE_PRODUCT':
      return { 
        ...state, 
        products: state.products.map((p,i) => {
            if(i !== action.payload){
              return p
            } else {
              return {...p, disabled: !p?.disabled ? true : false}
            }
          })
      };
      case 'ANALYZE_DATA':
        let analysedStock = {...initialState.analysedStock};
        let category = [];
        state.products.forEach(item=>{
            if(item?.disabled){
      analysedStock['outOfStock']++;
            } else{
      analysedStock['total']++;
      analysedStock['value'] +=Number(item.value.replace('$',''));
      category = [...category,item.category]
            }
          });
          analysedStock['category'] = Array.from(new Set(category)).length
        return{
            ...state,
            analysedStock : {...analysedStock}
           
        }
    default:
      return state;
  }
}