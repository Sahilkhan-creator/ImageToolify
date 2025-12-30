const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');

// Open sidebar
hamburger.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close sidebar
closeSidebar.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});￼Enter
