import Swup from 'https://unpkg.com/swup@4?module';
console.log('init swup');
const swup = new Swup({
  animateHistoryBrowsing: false,
  linkSelector: 'a[href]',
  containers: ['#swup'],
  cache: false,
  scroll: false,
});
