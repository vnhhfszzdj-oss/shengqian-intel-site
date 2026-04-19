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

function renderTopicGuide(topic) {
  const guideTitle = document.getElementById('topic-guide-title');
  const guideText = document.getElementById('topic-guide-text');
  const fitList = document.getElementById('topic-fit-list');
  const stepList = document.getElementById('topic-starter-steps');

  if (guideTitle) {
    guideTitle.textContent = topic.guideTitle || '这组内容适合谁';
  }

  if (guideText) {
    guideText.textContent = topic.guide || '';
  }

  if (fitList) {
    fitList.innerHTML = (topic.fitFor || []).map((item) => `<li>${item}</li>`).join('');
  }

  if (stepList) {
    stepList.innerHTML = (topic.starterSteps || []).map((item) => `<li>${item}</li>`).join('');
  }
}

function renderTopicPage() {
  renderNav();

  const slug = getParam('slug') || 'living-alone';
  const topic = findTopic(slug) || findTopic('living-alone');
  const articles = topic.articleSlugs.map((item) => findArticle(item)).filter(Boolean);

  document.title = `${topic.title} | 抠门精小晨`;
  document.getElementById('topic-title').textContent = topic.title;
  document.getElementById('topic-description').textContent = topic.description;
  document.getElementById('topic-intro').textContent = topic.intro;
  document.getElementById('topic-highlights').innerHTML = topic.highlights
    .map((item) => `<span>${item}</span>`)
    .join('');

  renderTopicGuide(topic);

  document.getElementById('topic-articles').innerHTML = articles
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

renderTopicPage();
