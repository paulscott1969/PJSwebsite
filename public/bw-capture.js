/* BetterWays lead capture for PJS — vanilla, runs on every page (SPA + static).
 * A non-funnel WhatsApp tap carries no identity, so we intercept it, grab name +
 * mobile (skippable), POST a proper attributed lead to the GHL inbound webhook,
 * then open WhatsApp with the details prefilled. Reuses window.pjsSource() (in the
 * page head) for the channel. Phone/email taps stay GA4-only (no identity). */
(function () {
  var WEBHOOK = 'https://services.leadconnectorhq.com/hooks/Ti4kCHtGnpmGsXyXoWfv/webhook-trigger/bfcb06d4-58f5-4c5a-83a8-7218aac8943a';

  function e164(raw) {
    var t = (raw || '').trim();
    if (t.charAt(0) === '+') return '+' + t.slice(1).replace(/\D/g, '');
    var d = t.replace(/\D/g, '');
    if (!d) return '';
    if (d.slice(0, 2) === '44') return '+' + d;
    if (d.charAt(0) === '0') return '+44' + d.slice(1);
    if (d.length === 10) return '+44' + d;
    return '+' + d;
  }
  function splitName(n) {
    var p = (n || '').trim().split(/\s+/).filter(Boolean);
    if (!p.length) return ['', ''];
    if (p.length === 1) return [p[0], ''];
    return [p[0], p.slice(1).join(' ')];
  }
  function source() { try { return window.pjsSource ? (window.pjsSource() || '') : ''; } catch (e) { return ''; } }

  function captureLead(input) {
    try {
      var nm = splitName(input.name);
      var p = new URLSearchParams(location.search);
      var payload = {
        first_name: nm[0], last_name: nm[1], phone: e164(input.phone), email: '',
        full_address: '', postcode: input.postcode || '',
        job_type: ((input.job || '').trim().slice(0, 80)) || 'Plumbing / heating enquiry', quote_value: 0,
        cta_type: input.cta || 'whatsapp', source_page: location.pathname,
        utm_source: (p.get('utm_source') || source() || 'Direct'),
        utm_medium: p.get('utm_medium') || '', utm_campaign: p.get('utm_campaign') || '',
        utm_term: p.get('utm_term') || '', utm_content: p.get('utm_content') || '',
        gclid: p.get('gclid') || '', fbclid: p.get('fbclid') || '',
        landing_page: location.pathname, referrer: document.referrer || '',
        consent: true, submitted_at: new Date().toISOString()
      };
      // GHL inbound webhooks require application/json (they reject text/plain).
      // keepalive lets the POST survive the page navigating to WhatsApp on submit.
      fetch(WEBHOOK, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true });
    } catch (e) { /* never break the WhatsApp hand-off */ }
  }

  var current = null;
  function el(id) { return document.getElementById(id); }
  function valid() {
    var n = el('bw-name').value.trim().length >= 2;
    var p = el('bw-phone').value.replace(/\D/g, '').length >= 10;
    el('bw-continue').disabled = !(n && p);
  }
  function go(capture) {
    var href = current, name = el('bw-name').value, phone = el('bw-phone').value;
    if (capture) {
      try { if (window.rvTrack) window.rvTrack('Lead', { method: 'whatsapp' }); } catch (e) {}
      captureLead({ name: name, phone: phone, cta: 'whatsapp' });
      try { var u = new URL(href); var t = u.searchParams.get('text') || 'Hi Paul.'; u.searchParams.set('text', t + '\n\nName: ' + name + '\nMobile: ' + phone); href = u.toString(); } catch (e) {}
    }
    close(); window.location.href = href;
  }
  function open(href) {
    current = href;
    el('bw-name').value = ''; el('bw-phone').value = ''; el('bw-continue').disabled = true;
    el('bw-gate').style.display = 'flex';
    setTimeout(function () { try { el('bw-name').focus(); } catch (e) {} }, 40);
  }
  function close() { var g = el('bw-gate'); if (g) g.style.display = 'none'; current = null; }

  function inject() {
    if (el('bw-gate')) return;
    var css = '#bw-gate{display:none;position:fixed;inset:0;z-index:2147483000;background:rgba(11,18,32,.55);align-items:center;justify-content:center;padding:16px;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}#bw-card{width:100%;max-width:400px;background:#fff;border-radius:20px;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,.3)}#bw-h{margin:0;font-size:20px;font-weight:800;color:#0b1220}#bw-sub{margin:8px 0 0;font-size:14px;line-height:1.5;color:#475569}#bw-gate input{display:block;width:100%;box-sizing:border-box;margin-top:10px;padding:13px 15px;border:2px solid #e2e8f0;border-radius:12px;font-size:15px;font-weight:600;color:#0b1220;outline:none}#bw-gate input:focus{border-color:#1d4ed8}#bw-continue{display:block;width:100%;margin-top:14px;padding:14px;border:0;border-radius:999px;background:#25D366;color:#fff;font-size:15px;font-weight:700;cursor:pointer}#bw-continue:disabled{opacity:.45;cursor:not-allowed}#bw-skip{display:block;width:100%;margin-top:10px;padding:6px;border:0;background:none;color:#64748b;font-size:13px;text-decoration:underline;cursor:pointer}';
    var s = document.createElement('style'); s.textContent = css; document.head.appendChild(s);
    var d = document.createElement('div'); d.id = 'bw-gate';
    d.innerHTML = '<div id="bw-card"><p id="bw-h">Send Paul your details</p><p id="bw-sub">Pop your name &amp; number in so Paul can call you straight back if WhatsApp drops — then we’ll open the chat.</p><input id="bw-name" placeholder="Full name" autocomplete="name" aria-label="Full name"><input id="bw-phone" placeholder="Mobile number" inputmode="tel" autocomplete="tel" aria-label="Mobile number"><button id="bw-continue" disabled>Continue to WhatsApp</button><button id="bw-skip">Skip — just open WhatsApp</button></div>';
    document.body.appendChild(d);
    el('bw-name').addEventListener('input', valid);
    el('bw-phone').addEventListener('input', valid);
    el('bw-continue').addEventListener('click', function () { go(true); });
    el('bw-skip').addEventListener('click', function () { go(false); });
    d.addEventListener('click', function (e) { if (e.target === d) close(); });
  }

  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var h = a.getAttribute('href') || '';
    if (h.indexOf('wa.me') === -1 && h.indexOf('api.whatsapp') === -1 && h.indexOf('whatsapp.com') === -1) return;
    if (a.hasAttribute('data-no-gate')) return;
    e.preventDefault();
    inject();
    open(a.href);
  }, true);

  // The static service/area pages capture via a quote form (form.pjs-quote) that
  // submits to WhatsApp. Grab name + phone + postcode + job on submit → GHL, then
  // let the form carry on to WhatsApp. (Honeypot 'company' filled = spam, skip.)
  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || !f.classList || f.classList.contains('pjs-quote') === false) return;
    try {
      var d = new FormData(f);
      if (((d.get('company') || '') + '').trim()) return;
      var phone = (d.get('phone') || '') + '';
      if (phone.replace(/\D/g, '').length < 10) return;
      captureLead({ name: (d.get('name') || '') + '', phone: phone, cta: 'form', postcode: (d.get('postcode') || '') + '', job: (d.get('job') || '') + '' });
    } catch (err) { /* never block the form */ }
  }, true);
})();
