import $ from 'jquery';
import List from './list/List';
import Cart from './shpCat/cart';

export default class App{
    constructor(id) {
        this.$el = $(`#${id}`);
    };

    initList() {
        let list = new List(this);
        list.init();
    };

    initCart() {
        let cart = new Cart(this);
        cart.init();
    };

    init() {
        this.initList();
        this.initCart();
    };
}