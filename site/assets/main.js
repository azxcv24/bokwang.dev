// Korean on/off toggle (remembered per browser) / 한국어 표시 토글
(function () {
  var btn = document.getElementById('langToggle');
  var KEY = 'hideKo';

  function apply(hide) {
    document.body.classList.toggle('hide-ko', hide);
    btn.setAttribute('aria-pressed', String(!hide));
  }

  var saved = false;
  try { saved = localStorage.getItem(KEY) === '1'; } catch (e) {}
  apply(saved);

  btn.addEventListener('click', function () {
    var hide = !document.body.classList.contains('hide-ko');
    apply(hide);
    try { localStorage.setItem(KEY, hide ? '1' : '0'); } catch (e) {}
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();
