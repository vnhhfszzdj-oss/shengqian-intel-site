function renderArchiveNav() {
  const nav = document.getElementById('nav-links');
  if (!nav) return;

  nav.innerHTML = siteData.nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('');
}

function renderArchiveHero() {
  const archiveData = siteData.archive || {};
  const title = document.getElementById('archive-status-title');
  const text = document.getElementById('archive-status-text');

  if (title) {
    title.textContent = archiveData.statusTitle || '先把骨架搭稳，再慢慢把内容填深。';
  }

  if (text) {
    text.textContent = archiveData.statusText || '现在这页像一个站内目录，后续可以继续扩展为按专题、标签、时间线整理的完整归档系统。';
  }
}

function renderArchiveOverview() {
  const target = document.getElementById('archive-overview');
  if (!target) return;

  const articleCount = siteData.articles.length;
  const categoryCount = siteData.categories.length;
  const topicCount = siteData.topics.length;
  const readTimeCount = siteData.articles.reduce((total, article) => {
    const minutes = Number.parseInt(article.readTime, 10) || 0;
    return total + minutes;
  }, 0);
  const archiveData = siteData.archive || {};
  const nextSteps = (archiveData.nextSteps || []).map((item) => `<li>${item}</li>`).join('');

  target.innerHTML = `
    <article class="quick-card reveal is-visible">
      <span class="badge">当前内容量</span>
      <h3>${categoryCount} 个栏目 · ${articleCount} 篇文章 · ${topicCount} 个专题</h3>
      <p>${archiveData.statusText || '现在这版已经把站内核心骨架补齐：可以按栏目找，也可以按生活场景和专题一路往下读。'}</p>
      <p class="quick-meta">粗略阅读总量约 ${readTimeCount} 分钟，适合按需挑读，不必一次看完。</p>
    </article>
    <article class="note-card reveal is-visible archive-next-card">
      <p class="card-kicker">接下来会补什么</p>
      <h3>${archiveData.statusTitle || '先把骨架搭稳，再慢慢把内容填深。'}</h3>
      <ul>${nextSteps}</ul>
    </article>
  `;
}

function renderArchiveGroups() {
  const target = document.getElementById('archive-groups');
  if (!target) return;

  target.innerHTML = siteData.categories
    .map((category) => {
      const articles = category.articleSlugs
        .map((slug) => findArticle(slug))
        .filter(Boolean)
        .map(
          (article) => `
            <li>
              <a class="text-link" href="article.html?slug=${article.slug}">${article.title}</a>
              <p class="archive-meta">${article.readTime} · ${article.priceRange}</p>
              <p>${article.summary}</p>
            </li>
          `
        )
        .join('');

      return `
        <section class="archive-group">
          <div class="section-heading align-left">
            <p class="eyebrow">${category.tag}</p>
            <h2>${category.title}</h2>
            <p>${category.description}</p>
          </div>
          <div class="archive-group-body">
            <div class="archive-pills">${category.meta.map((item) => `<span>${item}</span>`).join('')}</div>
            <a class="button button-secondary" href="category.html?slug=${category.slug}">进入栏目</a>
            <ul class="archive-list">${articles}</ul>
          </div>
        </section>
      `;
    })
    .join('');
}

function renderArchiveTopics() {
  const target = document.getElementById('archive-topics');
  if (!target) return;

  target.innerHTML = siteData.topics
    .map((topic) => {
      const linkedArticles = topic.articleSlugs
        .map((slug) => findArticle(slug))
        .filter(Boolean)
        .map((article) => `<li><a class="text-link" href="article.html?slug=${article.slug}">${article.title}</a></li>`)
        .join('');

      return `
        <article class="topic-card reveal is-visible">
          <span class="badge">专题企划</span>
          <h3>${topic.title}</h3>
          <p>${topic.description}</p>
          <div class="topic-meta">${topic.highlights.map((item) => `<span>${item}</span>`).join('')}</div>
          <ul class="archive-topic-list">${linkedArticles}</ul>
          <a class="text-link" href="topic.html?slug=${topic.slug}">进入专题</a>
        </article>
      `;
    })
    .join('');
}

renderArchiveNav();
renderArchiveHero();
renderArchiveOverview();
renderArchiveGroups();
renderArchiveTopics();
