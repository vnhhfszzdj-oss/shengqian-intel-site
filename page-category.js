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

function renderCategoryPage() {
  renderNav();

  const slug = getParam('slug') || 'shopping';
  const category = findCategory(slug) || findCategory('shopping');
  const featured = findArticle(category.featuredArticle);
  const articles = category.articleSlugs.map((item) => findArticle(item)).filter(Boolean);

  document.title = `${category.tag} | 抠门精小晨`;
  document.getElementById('category-tag').textContent = category.tag;
  document.getElementById('category-title').textContent = category.title;
  document.getElementById('category-description').textContent = category.description;
  document.getElementById('category-intro').textContent = category.intro;
  document.getElementById('category-meta').innerHTML = category.meta
    .map((item) => `<span>${item}</span>`)
    .join('');
  document.getElementById('category-playbook').innerHTML = category.playbook
    .map((item) => `<li>${item}</li>`)
    .join('');

  if (featured) {
    document.getElementById('category-featured').innerHTML = `
      <span class="badge">栏目精选</span>
      <p class="feature-kicker">${featured.readTime} · ${featured.priceRange}</p>
      <h3>${featured.title}</h3>
      <p>${featured.hook}</p>
      <div class="feature-checklist">
        ${featured.checklist.map((item) => `<span>${item}</span>`).join('')}
      </div>
      <p class="feature-meta">这篇适合：${featured.audience}</p>
      <a class="text-link" href="article.html?slug=${featured.slug}">查看完整文章</a>
    `;
  }

  document.getElementById('category-articles').innerHTML = articles
    .map(
      (item) => `
        <article class="feature-item reveal is-visible">
          <span class="badge">${item.tag}</span>
          <p class="feature-kicker">${item.readTime} · ${item.priceRange}</p>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="feature-checklist">
            ${item.checklist.map((meta) => `<span>${meta}</span>`).join('')}
          </div>
          <a class="text-link" href="article.html?slug=${item.slug}">进入文章页</a>
        </article>
      `
    )
    .join('');
}

renderCategoryPage();
