const listItems = document.querySelectorAll('.item');
console.log('Number of categories: ' + listItems.length);
const items = document.querySelectorAll('ul#categories li.item');
items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const itemCount = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
