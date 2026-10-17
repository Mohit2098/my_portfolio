(function(){
  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById('yr').textContent = new Date().getFullYear();

  /* ---------- theme toggle ---------- */
  var tgl = document.getElementById('tgl'), tc = document.getElementById('tc');
  function paint(t){
    root.setAttribute('data-theme', t);
    tgl.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    tc.setAttribute('content', t === 'dark' ? '#0c0e1f' : '#f7f8ff');
  }
  paint(root.getAttribute('data-theme'));
  tgl.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.classList.add('themed');
    paint(next);
    try{ localStorage.setItem('theme', next); }catch(e){}
    setTimeout(function(){ document.body.classList.remove('themed'); }, 500);
  });

  /* ---------- scroll progress + sticky nav ---------- */
  var bar = document.getElementById('bar'), nav = document.getElementById('nav');
  function onScroll(){
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
    nav.classList.toggle('stuck', scrollY > 20);
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- scroll reveal with stagger ---------- */
  var rv = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(!e.isIntersecting) return;
      var el = e.target, sibs = el.parentElement.querySelectorAll(':scope > .rv');
      var i = Array.prototype.indexOf.call(sibs, el) % 3;
      el.style.transitionDelay = (i * 110) + 'ms';
      el.classList.add('in');
      setTimeout(function(){ el.style.transitionDelay = ''; }, 1100);
      rv.unobserve(el);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.rv').forEach(function(el){ rv.observe(el); });

  // line draw for process and timeline
  var dr = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); dr.unobserve(e.target); } });
  }, { threshold: .25 });
  ['steps','tl'].forEach(function(id){ var el = document.getElementById(id); if(el) dr.observe(el); });

  /* ---------- active nav link ---------- */
  var links = document.querySelectorAll('.menu a'), map = {};
  links.forEach(function(a){ map[a.getAttribute('href').slice(1)] = a; });
  var nv = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting && map[e.target.id]){
        links.forEach(function(l){ l.classList.remove('on'); });
        map[e.target.id].classList.add('on');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['home','about','projects','process','experience','services'].forEach(function(id){
    var el = document.getElementById(id); if(el) nv.observe(el);
  });
  var top = document.getElementById('top');
  if(top) new IntersectionObserver(function(es){
    if(es[0].isIntersecting){ links.forEach(function(l){ l.classList.remove('on'); }); map.home.classList.add('on'); }
  }, { threshold: .5 }).observe(top);

  /* ---------- mobile hamburger ---------- */
  var burger = document.getElementById('burger'), menu = document.getElementById('menu');
  function setMenu(open){
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  burger.addEventListener('click', function(){ setMenu(!menu.classList.contains('open')); });
  menu.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
  addEventListener('keydown', function(e){ if(e.key === 'Escape') setMenu(false); });
  addEventListener('resize', function(){ if(innerWidth > 980) setMenu(false); });
  document.addEventListener('click', function(e){
    if(!nav.contains(e.target)) setMenu(false);
  });

  if(reduce) return;

  /* ---------- typing roles ---------- */
  var words = ['WordPress','WooCommerce','Next.js','Payload CMS','React','PHP and MySQL'];
  var out = document.getElementById('type'), wi = 0, ci = words[0].length, del = true;
  function tick(){
    var w = words[wi];
    if(del){ ci--; } else { ci++; }
    out.textContent = w.slice(0, ci);
    var wait = del ? 45 : 85;
    if(!del && ci === w.length){ del = true; wait = 1600; }
    else if(del && ci === 0){ del = false; wi = (wi + 1) % words.length; wait = 300; }
    setTimeout(tick, wait);
  }
  setTimeout(tick, 2200);

  /* ---------- count up ---------- */
  var yrs = document.getElementById('yrs');
  if(yrs){
    var to = +yrs.getAttribute('data-to'); yrs.textContent = '0';
    setTimeout(function(){
      var n = 0, t = setInterval(function(){ n++; yrs.textContent = n; if(n >= to) clearInterval(t); }, 220);
    }, 900);
  }

  /* ---------- cursor glow + card tilt + magnetic buttons (mouse only) ---------- */
  if(window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches){
    var cur = document.getElementById('cursor');
    addEventListener('mousemove', function(e){
      cur.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
      cur.classList.add('on');
    }, { passive: true });
    document.addEventListener('mouseleave', function(){ cur.classList.remove('on'); });

    document.querySelectorAll('.card').forEach(function(c){
      c.addEventListener('mousemove', function(e){
        var r = c.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        c.style.setProperty('--ry', (x * 8) + 'deg');
        c.style.setProperty('--rx', (-y * 8) + 'deg');
      });
      c.addEventListener('mouseleave', function(){
        c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg');
      });
    });

    document.querySelectorAll('.btn,.hire').forEach(function(b){
      b.addEventListener('mousemove', function(e){
        var r = b.getBoundingClientRect();
        b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .18) + 'px,' + ((e.clientY - r.top - r.height / 2) * .28) + 'px)';
      });
      b.addEventListener('mouseleave', function(){ b.style.transform = ''; });
    });
  }
})();