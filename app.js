const products = [
    { title: 'Pink Handloom Banarasi Silk Saree',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0322/9623/9242/products/LWPS1B1PN2031701_Pink_Handloom_Banarasi_Pure_Katan_Silk_Saree_5000x.jpg?v=1616065933',
    price: '1,090.03',
    description: 'From our exclusive collection of Banarasi Craftsmen, it is a Master piece, this is a Katan Silk saree which you would love to have it in your wardrobe. This saree is a perfect occasion wear. Its an exclusive saree Handloom weaved and a fresh collection directly from weavers in Varanasi.'
    },
    { 

    title: 'Black Handloom Banarasi Pure Katan Silk Sona Roopa Meenakari Saree',
    imageUrl: 'https://cdn.shopify.com/s/files/1/0322/9623/9242/products/LWPS1B1KA1031607_Black_Handloom_Banarasi_Pure_Katan_Silk_Sona_Roopa_Meenakari_Saree_5000x.jpg?v=1615920253',
    price: '794.99',
    description: 'From our exclusive collection of Banarasi Craftsmen, it is a Master piece, this is a Katan Silk saree which you would love to have it in your wardrobe. This saree is a perfect occasion wear. Its an exclusive saree Handloom weaved and a fresh collection directly from weavers in Varanasi.'
    }
];

const productHook = document.getElementById('app');
const prodUrl = document.createElement('ul');
prodUrl.className ='product-list';
for(prod of products){
    const prodLi = document.createElement('li');
    prodLi.className = 'produc-item';
    prodLi.innerHTML =`
    <img src="${prod.imageUrl}" alt="${prod.title}" >
    <div class="product-item__content">
    <h2>${prod.title}</h2>
    <h3>${prod.price}</h3>
    <p>${prod.description}</p>
    </div>
    `;

}

