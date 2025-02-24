function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', function() {
    const text = document.querySelector('#text');
    text.hidden = !text.hidden;
  });
};
