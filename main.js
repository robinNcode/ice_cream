const app = Vue.createApp({
    data() {
        return {
            variants: [
                { id: 1, name: 'Vanilla', price: 150},
                { id: 2, name: 'Chocolate', price: 200},
                { id: 3, name: 'Strawberry', price: 110},
                { id: 4, name: 'Orange', price: 90},
                { id: 5, name: 'Lemon', price: 30}
            ],
            cart: [],
        }
    },
    methods: {
        addToCart(variantId){
            this.cart.push(this.variants.find(variant => variant.id === variantId));
        },
        removeFromCart(variantId){
            position = this.cart.findIndex(variant => variant.id === variantId);
            // To remove the item from the cart ...
            this.cart.splice(position, 1);
        }
    },
    computed: {
        cartTotal(){
            return this.cart.reduce((total, variant) => total + variant.price, 0);
        }
    }
});