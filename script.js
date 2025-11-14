
const sections = document.querySelectorAll('section');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(30px)';
  revealOnScroll.observe(section);
});

document.getElementById('participation-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const city = document.getElementById('city').value;
  const format = document.getElementById('format').value;
  const quantity = parseInt(document.getElementById('quantity').value, 10);

  if (!city || !format || !quantity || quantity <= 0) {
    alert('Пожалуйста, заполните все поля корректно.');
    return;
  }

  const pricePerTree = 10;
  const totalCost = quantity * pricePerTree;

  document.getElementById('result').innerHTML = `
    <p>Город: ${city}</p>
    <p>Формат: ${format}</p>
    <p>Количество саженцев: ${quantity}</p>
    <p>Общая стоимость: ${totalCost} рублей</p>
  `;
});

function participate(actionType) {
  alert(`Вы выбрали участие в акции: ${actionType}. Свяжитесь с нами для дальнейших шагов.`);
}