document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const newsContent = document.querySelector('.news-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        newsContent.innerHTML = tab.textContent === 'Current Events' ? '<p>No post to display</p>' : '<p>No post to display</p>';
      });
    });
  });
  