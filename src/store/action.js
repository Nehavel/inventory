// import axios from 'axios';
export const deleteProduct = (index) =>async(dispatch)=> {dispatch({ type: 'DELETE_PRODUCT', payload: index })};
export const editProduct = (payload) =>async(dispatch)=> { dispatch({ type: 'EDIT_PRODUCT', payload: payload })};
export const disableProduct = (index) =>async(dispatch)=> {dispatch ({ type: 'DISABLE_PRODUCT', payload: index })};
export const analyzeProduct = (index) =>async(dispatch)=> {dispatch ({ type: 'ANALYZE_DATA' })};
export const fetchProducts = () => async (dispatch) => {
 // const response = await axios.get('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
  const d = [
    {
        "name": "Bluetooth",
        "category": "Electronic",
        "value": "$150",
        "quantity": 5,
        "price": "$30"
    },
    {
        "name": "Edifier M43560",
        "category": "Electronic",
        "value": "0",
        "quantity": 0,
        "price": "$0"
    },
    {
        "name": "Sony 4k ultra 55 inch TV",
        "category": "Electronic",
        "value": "$1190",
        "quantity": 17,
        "price": "$70"
    },
    {
        "name": "Samsumg 55 inch TV",
        "category": "Electronic",
        "value": "$600",
        "quantity": 50,
        "price": "$12"
    },
    {
        "name": "samsumg S34 Ultra",
        "category": "phone",
        "value": "$0",
        "quantity": 0,
        "price": "$0"
    }
];
  dispatch({ type: 'SET_PRODUCTS', payload: d });
};