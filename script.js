let categories = [
  { categoryId: 1, categoryName: 'Футболки' },
  { categoryId: 2, categoryName: 'Майки' },
  { categoryId: 3, categoryName: 'Носки' },
  { categoryId: 4, categoryName: 'Джинсы' },
  { categoryId: 5, categoryName: 'Брюки' },
];

let products = [
  { productId: 1, productName: 'Товар 1', categoryId: 1 },
  { productId: 2, productName: 'Товар 2', categoryId: 2 },
  { productId: 3, productName: 'Товар 3', categoryId: 3 },
  { productId: 4, productName: 'Товар 4', categoryId: 4 },
  { productId: 5, productName: 'Товар 5', categoryId: 5 },
  { productId: 6, productName: 'Товар 6', categoryId: 1 },
  { productId: 7, productName: 'Товар 7', categoryId: 2 },
  { productId: 8, productName: 'Товар 8', categoryId: 3 },
  { productId: 9, productName: 'Товар 9', categoryId: 4 },
  { productId: 10, productName: 'Товар 10', categoryId: 5 },
  { productId: 11, productName: 'Товар 11', categoryId: 1 },
  { productId: 12, productName: 'Товар 12', categoryId: 2 },
  { productId: 13, productName: 'Товар 13', categoryId: 3 },
  { productId: 14, productName: 'Товар 14', categoryId: 4 },
  { productId: 15, productName: 'Товар 15', categoryId: 5 },
  { productId: 16, productName: 'Товар 16', categoryId: 1 },
  { productId: 17, productName: 'Товар 17', categoryId: 2 },
  { productId: 18, productName: 'Товар 18', categoryId: 3 },
  { productId: 19, productName: 'Товар 19', categoryId: 4 },
  { productId: 20, productName: 'Товар 20', categoryId: 5 },
  { productId: 21, productName: 'Товар 21', categoryId: 1 },
  { productId: 22, productName: 'Товар 22', categoryId: 2 },
  { productId: 23, productName: 'Товар 23', categoryId: 3 },
  { productId: 24, productName: 'Товар 24', categoryId: 4 },
  { productId: 25, productName: 'Товар 25', categoryId: 5 }
];

let activeCategoryId = 2;

getCategories()
setActiveCategory(activeCategoryId)

let categoriesItems = document.querySelectorAll('.products__category');
categoriesItems.forEach(category => {
  category.addEventListener('click', () => {
    let activeCategoryId = category.getAttribute('category-id');
    setActiveCategory(activeCategoryId);
  })
})

function getCategories() {
  let categoriesBlock = document.querySelector('.products__categories');
  categories.forEach(category => {
    let categoriesItem = document.createElement('li');
    categoriesItem.innerHTML = category.categoryName;
    categoriesItem.className = 'products__category';
    categoriesItem.setAttribute('category-id', category.categoryId);
    categoriesBlock.append(categoriesItem);
  })
}

function setActiveCategory(id) {
  let categoriesItems = document.querySelectorAll('.products__category');
  let activeCategory = document.querySelector(`[category-id='${id}']`);
  categoriesItems.forEach(category => {
    category.classList.remove('products__category_active');
  })
  activeCategory.classList.add('products__category_active');
  getProducts(id);
}

function getProducts(category) {
  let productsBlock = document.querySelector('.products__list');
  let activeProducts = products.filter(product => product.categoryId === +category);
  productsBlock.innerHTML = ''
  activeProducts.forEach(product => {
    productsBlock.insertAdjacentHTML('beforeend', `<li class="product">
          <img class="product__img" src="https://rrstatic.retailrocket.net/test_task/tovar.jpg" alt="product-${product.productId}">
          <span class="product__title">${product.productName}</span>
        </li>`)
  })
}