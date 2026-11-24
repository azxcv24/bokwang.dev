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

  // Build email links at runtime so the address is not in the HTML source.
  // 이메일 주소가 HTML 원본에 노출되지 않도록 브라우저에서 조합.
  document.querySelectorAll('a.email').forEach(function (a) {
    var addr = a.dataset.user + '@' + a.dataset.domain;
    a.textContent = addr;
    a.href = 'mai' + 'lto:' + addr;
  });
})();
