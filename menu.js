
  document.querySelector('.select-field').addEventListener('click',()=>{
    document.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');

});
document.addEventListener("DOMContentLoaded", function() {
  

  const categories = [
    {
      checkbox: document.getElementById('cat1'),
      div: document.querySelector('.saladcat'),
    },
    {
      checkbox: document.getElementById('cat2'),
      div: document.querySelector('.bentocat'),
    },
    {
      checkbox: document.getElementById('cat3'),
      div: document.querySelector('.wncat'),
    },
    {
      checkbox: document.getElementById('cat4'),
      div: document.querySelector('.ddcat'),
    },
  ];
  const menuDiv = document.getElementById('m1');
  // Listen for changes in the checkbox state for all categories
  categories.forEach(category => {
    category.checkbox.addEventListener('change', function () {
      if (category.checkbox.checked) {
        category.div.style.display = 'block';
        menuDiv.style.display = 'none';
      } else {
        category.div.style.display = 'none';
        menuDiv.style.display = 'block';
      }
    });
  });
  });

  /******************contact************** */



