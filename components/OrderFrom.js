app.component('order-form', {
    props: {
        cart: {
            type: Array,
            required: true
        }
    },
    template: /*html*/
    `<div id="modal">
        <div class="backdrop" @click="hideOrderForm"></div>
        <div class="modalBody">
        <div class="formContainer" id="orderForm">
            <h1>Complete the form below and hit submit</h1>
            <form class="orderForm" @submit.prevent="onSubmit">
            <ul>
                <li>
                <input
                    type="text"
                    v-model="name"
                    class="fieldStyle fieldSplit alignLeft"
                    placeholder="Name"
                />
                <input
                    type="text"
                    v-model="phone"
                    class="fieldStyle fieldSplit alignRight"
                    placeholder="Phone no."
                />
                </li>
                <input
                    type="hidden"
                    v-model.number="total"
                    class="fieldStyle fieldSplit alignRight"
                />
                </li>
                <li>
                <textarea
                    v-model="address"
                    class="fieldStyle"
                    placeholder="Address"
                ></textarea>
                </li>
                <li>
                <input type="submit" value="Submit" />
                </li>
            </ul>
            </form>
        </div>
        </div>
    </div>`,
    
});