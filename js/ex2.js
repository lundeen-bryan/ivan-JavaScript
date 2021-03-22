/*=============================================
=            Function wait til pg loads       =
=============================================*/
document.addEventListener('DOMContentLoaded', function () {
  convert_celsius();
  best_students();
  fill_course_values();
  new_shopping_list();
});

/*=============================================
=            Section Exercise 2               =
=============================================*/
// challenge 1
function convert_celsius() {
  const CEL_1 = document.getElementById('celsius_1').innerHTML;
  const CEL_2 = document.getElementById('celsius_2').innerHTML;
  const CEL_3 = document.getElementById('celsius_3').innerHTML;
  const FAH_1 = (9 * CEL_1) / 5 + 32;
  const FAH_2 = (9 * CEL_2) / 5 + 32;
  const FAH_3 = (9 * CEL_3) / 5 + 32;
  document.getElementById('fahr_1').innerHTML = FAH_1;
  document.getElementById('fahr_2').innerHTML = FAH_2;
  document.getElementById('fahr_3').innerHTML = FAH_3;
}

// challenge 2
let classification = [
  'John Hill',
  'Mary Jane',
  'Gary Vee',
  'Paricia Mills',
  'Helen Hall',
  'Paul Green',
];

function best_students() {
  let students = classification.splice(3, 4);
  document.getElementById('best_students').innerHTML = students;
}

// challenge 3
var course = {
  title: 'Learn to Code in Python 3',
  categories: ['programming', 'technology', 'python'],
  '5_stars_reviews': 420,
  '4_stars_reviews': 80,
  '3_stars_reviews': 33,
  '2_stars_reviews': 20,
  '1_stars_reviews': 4,
};

function fill_course_values() {
  const title = course.title;
  const category = course.categories[0];
  const fiveStar = course['5_stars_reviews'];
  const fourStar = course['4_stars_reviews'];
  const threeStar = course['3_stars_reviews'];
  const twoStar = course['2_stars_reviews'];
  const oneStar = course['1_stars_reviews'];
  document.getElementById('course_title').innerHTML = title;
  document.getElementById('main_category').innerHTML = category;
  const totalReviews = fiveStar + fourStar + threeStar + twoStar + oneStar;
  const fiveStarPercent = Math.floor((fiveStar / totalReviews) * 100);
  document.getElementById('reviews_5_stars').innerHTML = fiveStarPercent + '%';
}

var shoppingList = [
  'Milk',
  'Butter',
  'Juice',
  'Bread',
  'Beer',
  'Rice',
  'Potatoes',
  'Chocolate',
];

function new_shopping_list() {
  let newItems = 'Cheese and eggs';
  let lastItem = shoppingList.pop();
  shoppingList.unshift(lastItem);
  newList = shoppingList.push(newItems);
  document.getElementById('new_list').innerHTML =
    'shoppingList = ' + shoppingList;
}
