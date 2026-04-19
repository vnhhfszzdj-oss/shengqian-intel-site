/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Dvld-7Qp.mjs';
import 'kleur/colors';
import { s as siteData, $ as $$Layout, a as $$Header } from '../chunks/siteData_COAmZfs4.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { articles, categories, about } = siteData;
  const localCovers = {
    // 旧文章
    "daily-essentials": "/shengqian-intel-site/images/daily-essentials.jpg",
    "rental-kitchen": "/shengqian-intel-site/images/rental-kitchen.jpg",
    "happiness-under-50": "/shengqian-intel-site/images/happiness-under-50.jpg",
    "weekly-takeout": "/shengqian-intel-site/images/weekly-takeout.jpg",
    "coffee-deals": "/shengqian-intel-site/images/coffee-deals.jpg",
    "platform-savings": "/shengqian-intel-site/images/platform-savings.jpg",
    "weekly-dinners": "/shengqian-intel-site/images/weekly-dinners.jpg",
    "grocery-list": "/shengqian-intel-site/images/grocery-list.jpg",
    "budget-dishes": "/shengqian-intel-site/images/budget-dishes.jpg",
    "rental-waste": "/shengqian-intel-site/images/rental-waste.jpg",
    "small-habits": "/shengqian-intel-site/images/small-habits.jpg",
    "low-cost-happiness": "/shengqian-intel-site/images/low-cost-happiness.jpg",
    "monthly-ledger": "/shengqian-intel-site/images/monthly-ledger.jpg",
    "weekly-spending": "/shengqian-intel-site/images/weekly-spending.jpg",
    "budget-template": "/shengqian-intel-site/images/budget-template.jpg",
    // 新文章
    "pingti-qingdan": "/shengqian-intel-site/images/pingti-qingdan.jpg",
    "yirenshi-wancan": "/shengqian-intel-site/images/yirenshi-wancan.jpg",
    "zufang-xiaojiadian": "/shengqian-intel-site/images/zufang-xiaojiadian.jpg",
    "yuexin5000-cunqian": "/shengqian-intel-site/images/yuexin5000-cunqian.jpg",
    "kanqilaihengui": "/shengqian-intel-site/images/kanqilaihengui.jpg",
    "yuexin3000-haowu": "/shengqian-intel-site/images/yuexin3000-haowu.jpg",
    "pingtaiduibi-riyongpin": "/shengqian-intel-site/images/pingtaiduibi-riyongpin.jpg",
    "kuaishou-wancan-10min": "/shengqian-intel-site/images/kuaishou-wancan-10min.jpg",
    "banjia-shengqian-gonglue": "/shengqian-intel-site/images/banjia-shengqian-gonglue.jpg",
    "yizhou-huaxiao-fupan": "/shengqian-intel-site/images/yizhou-huaxiao-fupan.jpg",
    "shuang11-bikeng": "/shengqian-intel-site/images/shuang11-bikeng.jpg",
    "yueguang-cunqian": "/shengqian-intel-site/images/yueguang-cunqian.jpg",
    "5yuan-wancan": "/shengqian-intel-site/images/5yuan-wancan.jpg",
    "jijianshenghuo": "/shengqian-intel-site/images/jijianshenghuo.jpg",
    "yinxing-zhichu": "/shengqian-intel-site/images/yinxing-zhichu.jpg"
  };
  const coverImages = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=1200&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
    "https://images.unsplash.com/photo-1482049016gy-729317b4f?w=1200&q=80"
  ];
  function getCover(slug) {
    if (localCovers[slug]) return localCovers[slug];
    let hash = 0;
    for (let i = 0; i < slug.length; i++) hash = slug.charCodeAt(i) + ((hash << 5) - hash);
    return coverImages[Math.abs(hash) % coverImages.length];
  }
  const featuredSlugs = ["daily-essentials", "weekly-takeout", "rental-waste"];
  const featuredArticles = articles.filter((a) => featuredSlugs.includes(a.slug));
  const latestArticles = articles.filter((a) => !featuredSlugs.includes(a.slug));
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<section class="py-14 sm:py-20 px-5"> <div class="max-w-3xl mx-auto text-center"> <p class="text-warm-500 text-sm font-medium mb-4 tracking-wider uppercase">生活省钱指南</p> <h1 class="text-3xl sm:text-4xl font-bold text-ink-800 leading-snug mb-5">
把日子过舒服<br class="sm:hidden">也把钱花明白
</h1> <p class="text-ink-400 text-base sm:text-lg leading-relaxed max-w-lg mx-auto"> ${about.missionTitle} </p> </div> </section>  <section class="pb-16 px-5"> <div class="max-w-3xl mx-auto"> <h2 class="text-sm font-medium text-ink-300 mb-6 tracking-wider uppercase">编辑精选</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-5"> ${featuredArticles.map((article) => renderTemplate`<article class="group"> <a${addAttribute(`/shengqian-intel-site/article/${article.slug}`, "href")} class="block"> <div class="overflow-hidden rounded-2xl mb-4"> <img${addAttribute(getCover(article.slug), "src")}${addAttribute(article.title, "alt")} class="w-full aspect-[4/3] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" loading="lazy"> </div> <div class="px-0.5"> <span class="text-xs font-medium text-warm-500 bg-warm-50 px-2.5 py-0.5 rounded-full"> ${article.tag} </span> <h3 class="text-base font-bold text-ink-800 mt-2 leading-snug group-hover:text-warm-600 transition-colors line-clamp-2"> ${article.title} </h3> </div> </a> </article>`)} </div> </div> </section>  <section class="pb-20 px-5"> <div class="max-w-2xl mx-auto"> <div class="flex items-center justify-between mb-8"> <h2 class="text-sm font-medium text-ink-300 tracking-wider uppercase">最新文章</h2> <span class="text-xs text-ink-300">共 ${latestArticles.length} 篇</span> </div> <div class="space-y-14"> ${latestArticles.map((article) => renderTemplate`<article class="group"> <a${addAttribute(`/shengqian-intel-site/article/${article.slug}`, "href")} class="block"> <div class="overflow-hidden rounded-3xl mb-5"> <img${addAttribute(getCover(article.slug), "src")}${addAttribute(article.title, "alt")} class="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" loading="lazy"> </div> <div class="px-1"> <div class="flex items-center gap-3 mb-3"> <span class="text-xs font-medium text-warm-500 bg-warm-50 px-3 py-1 rounded-full"> ${article.tag} </span> <span class="text-xs text-ink-300">${formatDate(getDate(article.slug))}</span> <span class="text-xs text-ink-300">${article.readTime}</span> </div> <h2 class="text-xl sm:text-2xl font-bold text-ink-800 mb-3 leading-snug group-hover:text-warm-600 transition-colors"> ${article.title} </h2> <p class="text-ink-400 leading-relaxed text-sm sm:text-base line-clamp-2"> ${article.summary} </p> </div> </a> </article>`)} </div> </div> </section>  <section class="py-16 bg-white border-t border-cream-200"> <div class="max-w-3xl mx-auto px-5"> <h2 class="text-sm font-medium text-ink-300 mb-8 tracking-wider uppercase text-center">省钱专题</h2> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4"> ${categories.map((cat) => renderTemplate`<a${addAttribute(`/shengqian-intel-site/category/${cat.slug}`, "href")} class="group text-center p-5 rounded-2xl bg-cream-100 hover:bg-warm-50 transition-colors"> <div class="text-2xl mb-2">${cat.emoji}</div> <div class="text-sm font-medium text-ink-700 group-hover:text-warm-600 transition-colors">${cat.title}</div> </a>`)} </div> </div> </section>  <footer class="py-12 bg-cream-100 border-t border-cream-200"> <div class="max-w-3xl mx-auto px-5 text-center"> <p class="text-sm text-ink-300 mb-2">🥡 抠门精小晨</p> <p class="text-xs text-ink-300/70">© 2026 抠门精小晨. 生活可以节俭，但不需要尶。</p> </div> </footer> ` })}`;
}, "/Users/jingchen/shengqian-site-v2/src/pages/index.astro", void 0);

const $$file = "/Users/jingchen/shengqian-site-v2/src/pages/index.astro";
const $$url = "/shengqian-intel-site";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
