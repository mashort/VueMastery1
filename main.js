Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
            //default: "You can also set default values here"
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>

                <product-details :details="details"></product-details>

                <div class="color-box"
                    v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                </div>

                <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }">Add to Cart</button>
                
                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: './assets/vmSocks-green-onWhite.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './assets/vmSocks-blue-onWhite.jpg',
                    variantQuantity: 0
                }
            ],
            cart: 0
        }
    },
    methods: {
        // The declaration of addToCart() is the ES6 way to declare an anonymous function.
        // Note that this may not work in some older browsers
        addToCart() {
            this.cart += 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index
        }
    },
    computed: {
        // Computed properties are less expensive than using a method to calculate this (every time)
        // Because Computed properties are cached (until one of their dependencies change)
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})