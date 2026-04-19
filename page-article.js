function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderNav() {
  const nav = document.getElementById('nav-links');
  if (!nav) return;
  nav.innerHTML = siteData.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');
}

function renderArticlePage() {
  renderNav();

  const slug = getParam('slug') || 'daily-essentials';
  const article = findArticle(slug) || findArticle('daily-essentials');
  const category = findCategory(article.category);
  const related = article.related.map((item) => findArticle(item)).filter(Boolean);

  document.title = `${article.title} | 抠门精小晨`;
  document.getElementById('article-tag').textContent = article.tag;
  document.getElementById('article-title').textContent = article.title;
  document.getElementById('article-summary').textContent = article.summary;
  document.getElementById('article-audience').textContent = article.audience;
  document.getElementById('article-readtime').textContent = article.readTime;
  document.getElementById('article-budget').textContent = article.priceRange;
  document.getElementById('back-category-link').href = `category.html?slug=${article.category}`;
  document.getElementById('back-category-link').textContent = `返回${category.tag}`;
  document.getElementById('article-checklist').innerHTML = article.checklist
    .map((item) => `<li>${item}</li>`)
    .join('');

  const body = document.getElementById('article-body');
  body.innerHTML = `
    <div class="article-intro-card">
      <p class="card-kicker">开篇判断</p>
      <p>${article.hook}</p>
    </div>
    ${article.sections
      .map(
        (section) => `
          <section class="article-section">
            <h2>${section.heading}</h2>
            ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            ${section.bullets ? `<ul class="article-bullets">${section.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>` : ''}
          </section>
        `
      )
      .join('')}
    <section class="article-section article-summary-box">
      <h2>一句话结论</h2>
      <p>${article.takeaway}</p>
    </section>
  `;

  document.getElementById('related-articles').innerHTML = related
    .map(
      (item) => `
        <article class="feature-item reveal is-visible">
          <span class="badge">${item.tag}</span>
          <p class="feature-kicker">${item.readTime} · ${item.priceRange}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <a class="text-link" href="article.html?slug=${item.slug}">继续看这篇</a>
        </article>
      `
    )
    .join('');
}

renderArticlePage();
