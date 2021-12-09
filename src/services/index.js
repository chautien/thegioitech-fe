import client from "./client";

class Service {
    constructor(uri) {
        this.uri = uri
    }
    
    getProduct() {
        const url = this.uri;
        return client.get(url);
    }

    getProductDetail(id) {
        const url = this.uri;
        return client.get(url + id);
    }   
}

export const productService = new Service('/api/product/')

class OrderService {
    constructor(uri) {
        this.uri = uri
    }

    order(data) {
        const url = this.uri;
        return client.post(url, data)
    }
}

export const orderService = new OrderService('/api/order/')
