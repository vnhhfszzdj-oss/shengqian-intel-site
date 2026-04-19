function fillGrid(targetId, items, renderer) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = items.map(renderer).join('');
}

function makeThumb(emoji, color) {
  const hues = ['#c96d42', '#9caf88', '#d4a373', '#e7b8b1', '#a98467', '#6b8e23'];
  const bg = color || hues[(emoji || '').codePointAt(0) % hues.length];
  return `<div class="card-thumb" style="background: linear-gradient(135deg, ${bg}22 0%, ${bg}44 100%); color: ${bg};"><span>${emoji || '📄'}</span></div>`;
}

function makeStats(readTime, views) {
  return `<div class="card-stats"><span>⏱ ${readTime}</span><span>👁 ${views}</span></div>`;
}

function makeBullets(list, limit) {
  const items = (list || []).slice(0, limit || 3);
  if (!items.length) return '';
  return `<ul class="mini-bullets">${items.map((b) => `<li>${b}</li>`).join('')}</ul>`;
}

function makeExcerpt(sections, maxChars) {
  if (!sections || !sections.length) return '';
  const paras = [];
  let len = 0;
  for (const sec of sections.slice(0, 2)) {
    for (const p of sec.paragraphs || []) {
      if (len >= (maxChars || 220)) break;
      paras.push(p);
      len += p.length;
    }
  }
  return paras.map((p) => `<p>${p}</p>`).join('');
}

const pillarCards = siteData.categories.map((item) => ({
  ...item,
  emoji: item.emoji || '📖',
  href: `category.html?slug=${item.slug}`,
}));

fillGrid('pillar-grid', pillarCards, (item) => `
  <article class="pillar-card reveal">
    <div class="pillar-top">
      ${makeThumb(item.emoji)}
      <div>
        <span class="badge">${item.tag}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </div>
    <div class="pillar-meta">${item.meta.map((meta) => `<span>${meta}</span>`).join('')}</div>
    <a class="text-link" href="${item.href}">进入栏目</a>
  </article>
`);

const spotlightArticle = findArticle('weekly-dinners');
const spotlightCard = document.getElementById('spotlight-card');
if (spotlightCard && spotlightArticle) {
  spotlightCard.classList.add('reveal');
  spotlightCard.innerHTML = `
    ${makeThumb(spotlightArticle.emoji, '#c96d42')}
    <span class="badge">本周主打</span>
    <p class="feature-kicker">${spotlightArticle.tag} · ${spotlightArticle.readTime} · 👁 ${spotlightArticle.views}</p>
    <h3>${spotlightArticle.title}</h3>
    <p>${spotlightArticle.hook}</p>
    <div class="feature-checklist">
      ${spotlightArticle.checklist.map((item) => `<span>${item}</span>`).join('')}
    </div>
    <p class="feature-meta">预算参考：${spotlightArticle.priceRange}</p>
    <a class="text-link" href="article.html?slug=${spotlightArticle.slug}">去看完整文章</a>
  `;
}

const featureCards = ['daily-essentials', 'weekly-takeout', 'monthly-ledger']
  .map((slug) => findArticle(slug))
  .filter(Boolean);

fillGrid('feature-list', featureCards, (item) => `
  <article class="feature-item reveal">
    <div class="feature-top">
      ${makeThumb(item.emoji)}
      <div>
        <span class="badge">${item.tag}</span>
        ${makeStats(item.readTime, item.views)}
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        ${makeBullets(item.checklist, 3)}
      </div>
    </div>
    <a class="text-link" href="article.html?slug=${item.slug}">继续看</a>
  </article>
`);

const feedSlugs = ['weekly-dinners', 'rental-waste', 'monthly-ledger', 'weekly-takeout', 'coffee-deals', 'platform-savings'];
const feedArticles = feedSlugs.map((slug) => findArticle(slug)).filter(Boolean);

fillGrid('feed-list', feedArticles, (item) => `
  <article class="feed-article reveal">
    <div class="feed-hero">
      ${makeThumb(item.emoji)}
      <div class="feed-header">
        <span class="badge">${item.tag}</span>
        ${makeStats(item.readTime, item.views)}
      </div>
    </div>
    <h3>${item.title}</h3>
    <div class="feed-body">
      ${makeExcerpt(item.sections, 260)}
    </div>
    ${makeBullets(item.sections?.[0]?.bullets, 3)}
    <a class="text-link" href="article.html?slug=${item.slug}">阅读全文</a>
  </article>
`);

const quickSaves = [
  { tag: '午饭外卖', emoji: '🥡', title: '把工作日外卖价格压下来', description: '先看保底店、再看时段券，重点不是凑单而是少做失控决策。', meta: '工作日立刻可用', href: 'article.html?slug=weekly-takeout' },
  { tag: '买菜路线', emoji: '🥬', title: '独居买菜别按想吃什么买', description: '按蛋白质、耐放菜和主食来列一周清单，更省也更不浪费。', meta: '适合独居女生', href: 'article.html?slug=grocery-list' },
  { tag: '通勤咖啡', emoji: '☕', title: '会员和周卡别被活动反过来带着喝', description: '只把优惠绑定到你本来就会经过、也本来就会喝的场景。', meta: '适合上班族', href: 'article.html?slug=coffee-deals' },
  { tag: '月初重启', emoji: '🧮', title: '发薪后先分预算，再分快乐金', description: '先锁固定支出，再把生活费拆成周预算，执行起来轻很多。', meta: '适合预算新手', href: 'article.html?slug=budget-template' },
];

fillGrid('quick-save-grid', quickSaves, (item) => `
  <article class="quick-card reveal">
    <div class="quick-top">${makeThumb(item.emoji)}</div>
    <span class="badge">${item.tag}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <p class="quick-meta">${item.meta}</p>
    <a class="text-link" href="${item.href}">马上查看</a>
  </article>
`);

const sceneCards = [
  { tag: '独居女生', emoji: '🏠', title: '一个人住，也可以把吃住花销理顺', description: '从买菜、一周菜单、出租屋布置到月度预算，先把最容易慌的地方稳下来。', meta: ['一人食', '独居预算', '出租屋'], href: 'topic.html?slug=living-alone' },
  { tag: '租房党', emoji: '🚿', title: '空间不大，也不想让生活一直乱糟糟', description: '优先处理厨房、洗手台、玄关这些高频区域，少一点漏钱点，多一点顺手感。', meta: ['收纳清洁', '租房日常', '低成本舒适'], href: 'category.html?slug=lifestyle' },
  { tag: '上班族', emoji: '💼', title: '下班累，也能把外卖和饮品控制住', description: '把高频消费变成固定路线，减少疲惫时乱花钱的概率。', meta: ['外卖策略', '咖啡优惠', '周预算'], href: 'category.html?slug=deals' },
];

fillGrid('scene-grid', sceneCards, (item) => `
  <article class="scene-card reveal">
    <div class="scene-top">${makeThumb(item.emoji)}</div>
    <span class="badge">${item.tag}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <div class="scene-meta">${item.meta.map((meta) => `<span>${meta}</span>`).join('')}</div>
    <a class="text-link" href="${item.href}">按场景进入</a>
  </article>
`);

const recipes = ['grocery-list', 'weekly-dinners', 'budget-dishes']
  .map((slug) => findArticle(slug))
  .filter(Boolean);

fillGrid('recipe-list', recipes, (item) => `
  <article class="recipe-item reveal">
    <div class="recipe-top">
      ${makeThumb(item.emoji)}
      <div>
        <small>${item.tag} · ${item.priceRange}</small>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        ${makeBullets(item.checklist, 3)}
      </div>
    </div>
    <a class="text-link" href="article.html?slug=${item.slug}">查看文章</a>
  </article>
`);

fillGrid('topic-grid', siteData.topics, (item) => `
  <article class="topic-card reveal">
    <div class="topic-top">${makeThumb(item.emoji || '📚')}</div>
    <span class="badge">专题企划</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <div class="topic-meta">${item.highlights.map((meta) => `<span>${meta}</span>`).join('')}</div>
    <a class="text-link" href="topic.html?slug=${item.slug}">进入专题</a>
  </article>
`);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
