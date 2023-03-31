class Product{
    // title = 'DEFAULT';
    // imageURL;
    // price;
    // description;

    constructor(title, imageURL, price, decription){
        this.title = title;
        this.imageURL = imageURL;
        this.price = price;
        this.description = decription;

    }
}

// const productList = {
//     products : [
//         new Product(
//             'boneka',
//             'https://ae01.alicdn.com/kf/H5eadae0c074e443ea879f58a9ffd06a5s/80-Cm-Ukuran-Besar-Berjalur-Mewah-Boneka-Beruang-Mainan-Kualitas-Tinggi-Cantik-Boneka-Teddy-Bear-Boneka.jpg_Q90.jpg_.webp',
//             13000,
//             'ini new product'
//         ),
//         {
//             title: 'boneka',
//             imageURL: 'https://ae01.alicdn.com/kf/H5eadae0c074e443ea879f58a9ffd06a5s/80-Cm-Ukuran-Besar-Berjalur-Mewah-Boneka-Beruang-Mainan-Kualitas-Tinggi-Cantik-Boneka-Teddy-Bear-Boneka.jpg_Q90.jpg_.webp',
//             price: 20000,
//             decription: 'ini boneka lucu kaya aku hehe'
//         },
//         {
//             title: 'coklat',
//             imageURL: '',
//             price: 10000,
//             decription: 'coklat loppe'
//         },
//         {
//             title: 'kaos',
//             imageURL: '',
//             price: 200000,
//             decription: 'kaos min yoongi'
//         }
//     ],
//     render(){
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';
//         for(const product of this.products){
//             const prodEl = document.createElement('li');
//             prodEl.className = 'product-item'
//             prodEl.innerHTML = `
//             <div>
//                 <img src = "${product.imageURL}" alt="${product.title}">
//                 <div class="product-item__content">
//                     <h2>${product.title}</h2>
//                     <h3>\Rp.${product.price}</h3>
//                     <p>${product.decription}</p>
//                     <button>nambah</button>
//                 </div>
//             </div>
//             `;
//             prodList.append(prodEl)
//         }
//         renderHook.append(prodList);
        
//     }
// }

// productList.render();

class ProductList{
    products = [
        new Product(
            'boneka',
            'https://ae01.alicdn.com/kf/H5eadae0c074e443ea879f58a9ffd06a5s/80-Cm-Ukuran-Besar-Berjalur-Mewah-Boneka-Beruang-Mainan-Kualitas-Tinggi-Cantik-Boneka-Teddy-Bear-Boneka.jpg_Q90.jpg_.webp',
            20000,
            'ini bonekuyy',
        ),
        {
            title: 'boneka',
            imageURL: 'https://i.pinimg.com/564x/0d/54/f3/0d54f3fed17ffb87a38163b55039aed1.jpg',
            price: 20000,
            description: 'ini boneka lucu kaya aku hehe'
        },
        {
            title: 'coklat',
            imageURL: 'https://i.pinimg.com/564x/5a/1e/aa/5a1eaa05c95bcf1a2f1805bdbfeebeff.jpg',
            price: 10000,
            description: 'coklat loppe'
        },
        {
            title: 'kaos',
            imageURL: 'https://i.pinimg.com/564x/9f/f8/64/9ff8643c38bc3a4195e856e472f7f2c7.jpg',
            price: 200000,
            description: 'kaos agustd'
        }
    ];
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for(const product of this.products){
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item'
            prodEl.innerHTML = `
            <div>
                <img src = "${product.imageURL}" alt="${product.title}">
                <div class="product-item__content">
                    <h2>${product.title}</h2>
                    <h3>\Rp.${product.price}</h3>
                    <p>${product.description}</p>
                    <button>nambah</button>
                </div>
            </div>
            `;
            prodList.append(prodEl)
        }
        renderHook.append(prodList);
        
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item'
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageURL}" alt="${this.product.title}">
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\Rp.${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Nambah ke Keranjang</button>
                </div>
            </div>
            `;
        return prodEl;
    }
}

const productList = {
    products : [
        new Product(
            'boneka',
            'https://ae01.alicdn.com/kf/H5eadae0c074e443ea879f58a9ffd06a5s/80-Cm-Ukuran-Besar-Berjalur-Mewah-Boneka-Beruang-Mainan-Kualitas-Tinggi-Cantik-Boneka-Teddy-Bear-Boneka.jpg_Q90.jpg_.webp',
            20000,
            'ini bonekuyy',
        ),
        {
            title: 'boneka',
            imageURL: 'https://i.pinimg.com/564x/0d/54/f3/0d54f3fed17ffb87a38163b55039aed1.jpg',
            price: 20000,
            description: 'ini boneka lucu kaya aku hehe'
        },
        {
            title: 'coklat',
            imageURL: 'https://i.pinimg.com/564x/5a/1e/aa/5a1eaa05c95bcf1a2f1805bdbfeebeff.jpg',
            price: 10000,
            description: 'coklat loppe'
        },
        {
            title: 'kaos',
            imageURL: 'https://i.pinimg.com/564x/9f/f8/64/9ff8643c38bc3a4195e856e472f7f2c7.jpg',
            price: 200000,
            description: 'kaos agustd'
        }
    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const product of this.products) {
            const productItem = new ProductItem(product)
            const prodEl = productItem.render();
            prodList.append(prodEl)
        }
        renderHook.append(prodList);
    }
}

productList.render();