var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        // The declaration of addToCart() is the ES6 way to declare an anonymous function
        // - Note that this may not work in some older browsers
        addToCart() {
            this.cart += 1
        },
        updateProduct: function (variantImage) {
            this.image = variantImage
        }
    }
})