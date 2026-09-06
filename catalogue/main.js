/* Composition. Everything on the page is set from WORKS in apps.js:
   the contents, the entries, and the index at the back. */

(function () {
  "use strict";

  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ── contents ───────────────────────────────────────────────────────── */

  function tocItem(w) {
    return (
      '<li><a href="#' + w.slug + '">' +
        '<span class="toc__line">' +
          '<span class="toc__numeral">' + w.numeral + "</span>" +
          '<span class="toc__leader"></span>' +
          '<span class="toc__folio">' + w.folio + "</span>" +
        "</span>" +
        '<span class="toc__title">' + esc(w.title) + "</span>" +
        '<span class="toc__sub">' + esc(w.subtitle) + "</span>" +
      "</a></li>"
    );
  }

  document.getElementById("toc").innerHTML = WORKS.map(tocItem).join("");

  /* ── the entries ────────────────────────────────────────────────────── */

  function entry(w) {
    var materials = w.materials.map(function (m) {
      return "<li>" + esc(m) + "</li>";
    }).join("");

    var links = (w.links || []).map(function (l) {
      return "<dt>" + esc(l.kind) + "</dt><dd>" +
        '<a class="imprint__link" href="' + esc(l.href) + '" target="_blank" rel="noopener">' +
        esc(l.label) + "</a></dd>";
    }).join("");

    return (
      '<article class="entry" id="' + w.slug + '" data-numeral="' + w.numeral +
        '" data-title="' + esc(w.title) + '" data-folio="' + w.folio + '">' +
        '<div class="entry__grid">' +
          '<aside class="entry__margin">' +
            '<span class="entry__numeral">' + w.numeral + "</span>" +
            '<span class="entry__date">' + esc(w.date) + "</span>" +
            '<span class="margin__label">Materials</span>' +
            '<ul class="margin__list">' + materials + "</ul>" +
            '<span class="margin__label">Folio</span>' +
            "<span>" + w.folio + "</span>" +
          "</aside>" +

          '<div class="entry__body">' +
            '<h2 class="entry__title">' + esc(w.title) + "</h2>" +
            '<p class="entry__subtitle">' + esc(w.subtitle) + "</p>" +
            '<p class="entry__materials-inline">' + w.materials.map(esc).join(" &middot; ") + "</p>" +

            '<div class="entry__text">' +
              w.body.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") +
            "</div>" +

            '<ul class="notes">' +
              w.notes.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") +
            "</ul>" +

            '<dl class="imprint">' + links +
              "<dt>Location</dt><dd>" + esc(w.imprint.path) + "</dd>" +
              "<dt>To run</dt><dd>" + esc(w.imprint.run) + "</dd>" +
            "</dl>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  var ornament = '<div class="ornament" aria-hidden="true">&#8258;</div>';

  document.getElementById("works").innerHTML = WORKS.map(entry).join(ornament);

  /* ── index of methods ───────────────────────────────────────────────── */

  var terms = {};
  WORKS.forEach(function (w) {
    (w.index || []).forEach(function (t) {
      (terms[t] = terms[t] || []).push(w);
    });
  });

  document.getElementById("backindex").innerHTML = Object.keys(terms)
    .sort(function (a, b) { return a.localeCompare(b); })
    .map(function (t) {
      var refs = terms[t].map(function (w) {
        return '<a href="#' + w.slug + '" title="' + esc(w.title) + '">' + w.numeral + "</a>";
      }).join(", ");
      return (
        "<li>" +
          '<span class="backindex__term">' + esc(t) + "</span>" +
          '<span class="backindex__leader"></span>' +
          '<span class="backindex__refs">' + refs + "</span>" +
        "</li>"
      );
    }).join("");

  /* ── running head: shows whichever entry you are reading ────────────── */

  var runner = document.getElementById("runner");
  var chapterEl = document.getElementById("runnerChapter");
  var folioEl = document.getElementById("runnerFolio");
  var cover = document.querySelector(".cover");

  function setRunner(numeral, title, folio) {
    chapterEl.textContent = numeral ? numeral + " · " + title : title;
    folioEl.textContent = folio || "";
  }
  setRunner("", "Contents", "");

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        runner.classList.toggle("is-visible", !e.isIntersecting);
      });
    }, { rootMargin: "-30% 0px 0px 0px" }).observe(cover);

    var reading = [];
    var track = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var i = reading.indexOf(e.target);
        if (e.isIntersecting && i === -1) reading.push(e.target);
        if (!e.isIntersecting && i > -1) reading.splice(i, 1);
      });
      if (!reading.length) return;
      var top = reading.slice().sort(function (a, b) {
        return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
      })[0];
      setRunner(top.dataset.numeral, top.dataset.title, top.dataset.folio);
    }, { rootMargin: "-48px 0px -55% 0px" });

    document.querySelectorAll(".entry").forEach(function (el) { track.observe(el); });

    var back = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setRunner("", e.target.id === "index" ? "Index of Methods" : "Contents", "");
      });
    }, { rootMargin: "-40% 0px -40% 0px" });
    ["contents", "index"].forEach(function (id) { back.observe(document.getElementById(id)); });
  } else {
    runner.classList.add("is-visible");
  }

  /* ── paper / night ──────────────────────────────────────────────────── */

  var toggle = document.getElementById("themeToggle");

  function prefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function current() {
    return document.documentElement.getAttribute("data-theme") ||
      (prefersDark() ? "night" : "paper");
  }
  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    toggle.textContent = theme === "night" ? "Paper" : "Night";
    toggle.setAttribute("aria-label", "Switch to " + (theme === "night" ? "paper" : "night") + " setting");
  }

  try {
    var saved = localStorage.getItem("catalogue-theme");
    if (saved === "night" || saved === "paper") apply(saved);
  } catch (err) { /* private window, blocked storage — the default is fine */ }

  toggle.textContent = current() === "night" ? "Paper" : "Night";

  toggle.addEventListener("click", function () {
    var next = current() === "night" ? "paper" : "night";
    apply(next);
    try { localStorage.setItem("catalogue-theme", next); } catch (err) {}
  });

  /* Arriving on a deep link: the entries are composed here, so the browser may
     have looked for the anchor before it existed. Put the reader on it. */
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      addEventListener("load", function () {
        var behavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        target.scrollIntoView();
        document.documentElement.style.scrollBehavior = behavior;
      });
    }
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
