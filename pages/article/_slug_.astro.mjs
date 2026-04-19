/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Dvld-7Qp.mjs';
import 'kleur/colors';
import { s as siteData, $ as $$Layout, a as $$Header } from '../../chunks/siteData_COAmZfs4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://vnhhfszzdj-oss.github.io");
function getStaticPaths() {
  return siteData.articles.map((article) => ({
    params: { slug: article.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const article = siteData.articles.find((a) => a.slug === slug);
  if (!article) {
    throw new Error(`Article not found: ${slug}`);
  }
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
  function getCover(slug2) {
    if (localCovers[slug2]) return localCovers[slug2];
    let hash = 0;
    for (let i = 0; i < slug2.length; i++) hash = slug2.charCodeAt(i) + ((hash << 5) - hash);
    return coverImages[Math.abs(hash) % coverImages.length];
  }
  function getViews(slug2) {
    let hash = 0;
    for (let i = 0; i < slug2.length; i++) hash = slug2.charCodeAt(i) + ((hash << 5) - hash);
    return Math.abs(hash) % 15e3 + 800;
  }
  function getDate(slug2) {
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
    return dates[slug2] || "2026-04-01";
  }
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return `${d.getFullYear()}\u5E74${d.getMonth() + 1}\u6708${d.getDate()}\u65E5`;
  }
  const relatedArticles = article.related ? siteData.articles.filter((a) => article.related.includes(a.slug)).slice(0, 2) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article.title, "description": article.summary }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})}  ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-5 pt-8 pb-10"> <div class="overflow-hidden rounded-3xl"> <img${addAttribute(getCover(article.slug), "src")}${addAttribute(article.title, "alt")} class="w-full aspect-[16/9] object-cover"> </div> </div>  <article class="max-w-2xl mx-auto px-5 pb-16"> <div class="flex items-center gap-3 mb-5"> <span class="text-xs font-medium text-warm-500 bg-warm-50 px-3 py-1 rounded-full">${article.tag}</span> <span class="text-xs text-ink-300">${formatDate(getDate(article.slug))}</span> <span class="text-xs text-ink-300">${article.readTime}</span> </div> <h1 class="text-2xl sm:text-3xl font-bold text-ink-800 leading-snug mb-6"> ${article.title} </h1> <!-- Author & Meta --> <div class="flex items-center gap-3 mb-8 pb-8 border-b border-cream-200"> <div class="w-10 h-10 rounded-full bg-warm-100 flex items-center justify-center text-lg">🥡</div> <div> <p class="text-sm font-medium text-ink-700">抠门精小晨</p> <p class="text-xs text-ink-300">阅读 ${getViews(article.slug).toLocaleString()} · 省钱生活指南</p> </div> </div> <!-- Hook --> <div class="bg-warm-50 rounded-2xl p-6 mb-10"> <p class="text-ink-500 leading-relaxed text-sm sm:text-base">${article.hook}</p> </div> <!-- Meta --> <div class="flex flex-wrap items-center gap-4 text-sm text-ink-300 mb-10"> <span>👤 ${article.audience}</span> <span>💰 ${article.priceRange}</span> </div> <!-- Sections --> <div class="space-y-10"> ${article.sections.map((section) => renderTemplate`<section> <h2 class="text-lg sm:text-xl font-bold text-ink-700 mb-4 flex items-center gap-2"> <span class="text-warm-400 text-base">✨</span> ${section.heading} </h2> <div class="space-y-4"> ${section.paragraphs.map((p) => renderTemplate`<p class="text-ink-500 leading-[1.8] text-sm sm:text-base">${p}</p>`)} </div> ${section.bullets && section.bullets.length > 0 && renderTemplate`<ul class="mt-5 space-y-3"> ${section.bullets.map((b) => renderTemplate`<li class="flex items-start gap-3 text-ink-500 text-sm sm:text-base"> <span class="mt-2 w-1.5 h-1.5 rounded-full bg-warm-300 flex-shrink-0"></span> <span class="leading-[1.7]">${b}</span> </li>`)} </ul>`} </section>`)} </div> <!-- Takeaway --> <div class="mt-12 bg-mint-50 rounded-2xl p-6 sm:p-8"> <h3 class="text-base font-bold text-ink-700 mb-3 flex items-center gap-2"> <span class="text-mint-300">💡</span> 总结
</h3> <p class="text-ink-500 leading-[1.8] text-sm sm:text-base">${article.takeaway}</p> </div> <!-- Checklist --> ${article.checklist && article.checklist.length > 0 && renderTemplate`<div class="mt-8"> <h3 class="text-base font-bold text-ink-700 mb-4">✅ 行动清单</h3> <div class="space-y-3"> ${article.checklist.map((item, idx) => renderTemplate`<div class="flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-200"> <span class="w-5 h-5 rounded-full bg-warm-100 text-warm-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">${idx + 1}</span> <span class="text-ink-500 text-sm leading-[1.7]">${item}</span> </div>`)} </div> </div>`} <!-- CTA Card --> <div class="mt-12 bg-gradient-to-br from-warm-50 to-cream-100 rounded-2xl p-6 sm:p-8 border border-warm-100"> <h3 class="text-base font-bold text-ink-700 mb-2">🌟 觉得有用？</h3> <p class="text-ink-400 text-sm mb-5 leading-relaxed">
每周更新实用省钱攻略，从外卖优惠到买菜清单，帮你把生活里的漏钱点一项项理顺。
</p> <div class="flex flex-wrap gap-3"> <span class="inline-flex items-center px-4 py-2.5 rounded-xl bg-white border border-cream-200 text-sm text-ink-600 shadow-sm"> <span class="mr-2 text-base">📩</span>
关注公众号：抠门精小晨（即将开通）
</span> <span class="inline-flex items-center px-4 py-2.5 rounded-xl bg-warm-500 text-white text-sm font-medium shadow-sm"> <span class="mr-2 text-base">👥</span>
加入省钱交流群（即将开放）
</span> </div> </div> </article>  ${relatedArticles.length > 0 && renderTemplate`<section class="bg-white border-t border-cream-200 py-14"> <div class="max-w-2xl mx-auto px-5"> <h2 class="text-sm font-medium text-ink-300 mb-6 tracking-wider uppercase">你也可能喜欢</h2> <div class="space-y-8"> ${relatedArticles.map((a) => renderTemplate`<a${addAttribute(`/shengqian-intel-site/article/${a.slug}`, "href")} class="group flex gap-4 items-start"> <div class="w-24 h-24 sm:w-32 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0"> <img${addAttribute(getCover(a.slug), "src")}${addAttribute(a.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> </div> <div class="flex-1 min-w-0"> <h3 class="font-bold text-ink-700 group-hover:text-warm-600 transition-colors text-sm sm:text-base leading-snug mb-2">${a.title}</h3> <p class="text-xs text-ink-300 line-clamp-2 leading-relaxed">${a.summary}</p> </div> </a>`)} </div> </div> </section>`}<footer class="py-10 bg-cream-100 border-t border-cream-200"> <div class="max-w-3xl mx-auto px-5 text-center"> <p class="text-xs text-ink-300/70">© 2026 抠门精小晨. 生活可以节俭，但不需要尶。</p> </div> </footer> ` })}`;
}, "/Users/jingchen/shengqian-site-v2/src/pages/article/[slug].astro", void 0);

const $$file = "/Users/jingchen/shengqian-site-v2/src/pages/article/[slug].astro";
const $$url = "/shengqian-intel-site/article/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
