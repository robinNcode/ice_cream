const app = Vue.createApp({
    data() {
        return {
            variants: [
                { id: 1, name: 'Vanila', price: 150},
                { id: 2, name: 'Chocolate', price: 200},
                { id: 3, name: 'Strawberry', price: 110},
                { id: 4, name: 'Orange', price: 90},
                { id: 5, name: 'Mango', price: 90}
            ],
            cart: [],
        }
    },
    methods: {
        addToCart(variantId){
            
        }
    }
});