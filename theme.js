// Theme persistence - tries cookies, falls back to in-memory only
(function(){
  function getTheme() {
    try { var m = document.cookie.match(/(?:^|;\s*)sharn-theme=(\w+)/); if (m) return m[1]; } catch(e) {}
    return null;
  }
  function saveTheme(val) {
    try { document.cookie = 'sharn-theme=' + val + ';path=/;max-age=31536000;SameSite=Lax'; } catch(e) {}
  }

  var t = document.querySelector('[data-theme-toggle]');
  var r = document.documentElement;
  var d = getTheme() || 'dark';
  r.setAttribute('data-theme', d);

  function updateIcon() {
    if (!t) return;
    t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
    t.innerHTML = d === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  updateIcon();

  if (t) {
    t.addEventListener('click', function() {
      d = d === 'dark' ? 'light' : 'dark';
      r.setAttribute('data-theme', d);
      saveTheme(d);
      updateIcon();
    });
  }
})();
