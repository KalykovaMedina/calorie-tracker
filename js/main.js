function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('theme-icon');
    const isDark = html.getAttribute('data-theme') === 'dark';

    if (isDark) {
        html.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.innerText = '🌙';
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.innerText = '☀️';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const icon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (icon) icon.innerText = '☀️';
    } else {
        if (icon) icon.innerText = '🌙';
    }
});