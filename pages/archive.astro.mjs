/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Dvld-7Qp.mjs';
import 'kleur/colors';
import { s as siteData, $ as $$Layout, a as $$Header } from '../chunks/siteData_COAmZfs4.mjs';
export { renderers } from '../renderers.mjs';

const $$Archive = createComponent(($$result, $$props, $$slots) => {
  const { articles } = siteData;
  function getDate(slug) {
    const dates = {
      "daily-essentials": "2026-04-15",
      "rental-kitchen": "2026-04-12",
      "happiness-under-50": "2026-04-10",
      "weekly-takeout": "2026-04-18",
      "coffee-deals": "2026-04-08",
      "platform-savings": "2026-04-05",
      "weekly-dinners": "2026-04-14",
      "grocery-list": "2026-04-11",
      "budget-dishes": "2026-04-07",
      "rental-waste": "2026-04-16",
      "small-habits": "2026-04-09",
      "low-cost-happiness": "2026-04-06",
      "monthly-ledger": "2026-04-13",
      "weekly-spending": "2026-04-04",
      "budget-template": "2026-04-03"
    };
    return dates[slug] || "2026-04-01";
  }
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}\u6708${d.getDate()}\u65E5`;
  }
  function getYearMonth(dateStr) {
    const d = new Date(dateStr);
    return `${d.getFullYear()}\u5E74${d.getMonth() + 1}\u6708`;
  }
  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(getDate(b.slug)).getTime() - new Date(getDate(a.slug)).getTime();
  });
  const grouped = {};
  sortedArticles.forEach((article) => {
    const ym = getYearMonth(getDate(article.slug));
    if (!grouped[ym]) grouped[ym] = [];
    grouped[ym].push(article);
  });
  const groupKeys = Object.keys(grouped);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5F52\u6863", "description": "\u6240\u6709\u7701\u94B1\u653B\u7565\u6587\u7AE0\u5F52\u6863" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="py-14 px-5"> <div class="max-w-2xl mx-auto"> <h1 class="text-2xl sm:text-3xl font-bold text-ink-800 mb-2">文章归档</h1> <p class="text-ink-400 text-sm mb-10">共 ${articles.length} 篇省钱攻略，按时间倒序排列</p> <!-- Search --> <div class="mb-10"> <div class="relative"> <input type="text" id="search-input" placeholder="搜索文章标题或内容..." class="w-full px-4 py-3 pl-11 bg-white border border-cream-200 rounded-2xl text-sm text-ink-700 placeholder:text-ink-300 focus:outline-none focus:border-warm-300 transition-colors"> <svg class="absolute left-3.5 top-3.5 w-5 h-5 text-ink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> <!-- Groups --> <div id="archive-list" class="space-y-10"> ${groupKeys.map((ym) => renderTemplate`<section class="archive-group"${addAttribute(ym, "data-month")}> <h2 class="text-sm font-medium text-ink-300 mb-4 tracking-wider">${ym}</h2> <div class="space-y-4"> ${grouped[ym].map((article) => renderTemplate`<a${addAttribute(`/shengqian-intel-site/article/${article.slug}`, "href")} class="group block p-4 bg-white rounded-2xl border border-cream-200 hover:border-warm-200 transition-colors"${addAttribute(article.title, "data-title")}${addAttribute(article.summary, "data-summary")}${addAttribute(article.tag, "data-tag")}> <div class="flex items-center justify-between mb-2"> <span class="text-xs font-medium text-warm-500 bg-warm-50 px-2.5 py-0.5 rounded-full">${article.tag}</span> <span class="text-xs text-ink-300">${formatDate(getDate(article.slug))}</span> </div> <h3 class="font-bold text-ink-800 group-hover:text-warm-600 transition-colors text-sm sm:text-base leading-snug"> ${article.title} </h3> </a>`)} </div> </section>`)} </div> <!-- No results --> <div id="no-results" class="hidden text-center py-16"> <p class="text-ink-300 text-sm">没有找到匹配的文章</p> </div> </div> </div> <footer class="py-10 bg-cream-100 border-t border-cream-200"> <div class="max-w-3xl mx-auto px-5 text-center"> <p class="text-xs text-ink-300/70">© 2026 抠门精小晨. 生活可以节俭，但不需要尶。</p> </div> </footer>  ` })}`;
}, "/Users/jingchen/shengqian-site-v2/src/pages/archive.astro", void 0);

const $$file = "/Users/jingchen/shengqian-site-v2/src/pages/archive.astro";
const $$url = "/shengqian-intel-site/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
