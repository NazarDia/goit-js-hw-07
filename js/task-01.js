const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(category => {
  const firstElementText = category.firstElementChild.textContent;
  console.log(`Category: ${firstElementText}`);
  const lastElement = category.lastElementChild;
  console.log(`Elements: ${lastElement.children.length}`);
});
