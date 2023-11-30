//웹사이트 이동경로
export const navOptions = [
  {
    id: 'Home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'Product',
    label: 'Product',
    path: '/product/products', //혹시 모를 이름 중복 방지 (Product/products)
  },
  {
    id: 'Man',
    label: 'Man',
    path: '/product/man',
  },
  {
    id: 'Woman',
    label: 'Woman',
    path: '/product/woman',
  },
  {
    id: 'Chat',
    label: 'Chat',
    path: '/product/chat',
  },
];

export const adminNavOptions = [
  {
    id: 'adminListing',
    label: 'Manage All Products',
    path: '/admin-view/all-products',
  },
  {
    id: 'adminNewProduct',
    label: 'Add New Product',
    path: '/admin-view/add-product',
  },
];
