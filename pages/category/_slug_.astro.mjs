/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Dvld-7Qp.mjs';
import 'kleur/colors';
import { s as siteData, $ as $$Layout, a as $$Header } from '../../chunks/siteData_COAmZfs4.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://vnhhfszzdj-oss.github.io");
function getStaticPaths() {
  return siteData.categories.map((cat) => ({
    params: { slug: cat.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const category = siteData.categories.find((c) => c.slug === slug);
  if (!category) {
    throw new Error(`Category not found: ${slug}`);
  }
  const categoryArticles = siteData.articles.filter((a) => a.category === slug || a.tag === category.tag);
  const pinnedArticle = categoryArticles[0];
  const restArticles = categoryArticles.slice(1);
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
    return `${d.getMonth() + 1}\u6708${d.getDate()}\u65E5`;
  }
  const coverImages = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    "https://images.unsplash.com/photo-1482049016gy-729317b4f?w=800&q=80"
  ];
  function getCover(slug2) {
    let hash = 0;
    for (let i = 0; i < slug2.length; i++) hash = slug2.charCodeAt(i) + ((hash << 5) - hash);
    return coverImages[Math.abs(hash) % coverImages.length];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": category.title, "description": category.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="py-14 px-5"> <div class="max-w-2xl mx-auto text-center"> <div class="text-4xl mb-3">${category.emoji}</div> <h1 class="text-2xl sm:text-3xl font-bold text-ink-800 mb-2">${category.title}</h1> <p class="text-ink-400 text-sm sm:text-base mb-4">${category.description}</p> <p class="text-xs text-ink-300">共 ${categoryArticles.length} 篇文章</p> </div> </div>  ${pinnedArticle && renderTemplate`<section class="pb-12 px-5"> <div class="max-w-2xl mx-auto"> <h2 class="text-sm font-medium text-ink-300 mb-4 tracking-wider uppercase">栏目必读</h2> <article class="group"> <a${addAttribute(`/shengqian-intel-site/article/${pinnedArticle.slug}`, "href")} class="block"> <div class="overflow-hidden rounded-3xl mb-5"> <img${addAttribute(getCover(pinnedArticle.slug), "src")}${addAttribute(pinnedArticle.title, "alt")} class="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out" loading="lazy"> </div> <div class="px-1"> <div class="flex items-center gap-3 mb-3"> <span class="text-xs font-medium text-warm-500 bg-warm-50 px-3 py-1 rounded-full">${pinnedArticle.tag}</span> <span class="text-xs text-ink-300">${formatDate(getDate(pinnedArticle.slug))}</span> <span class="text-xs text-ink-300">${pinnedArticle.readTime}</span> </div> <h2 class="text-xl sm:text-2xl font-bold text-ink-800 mb-3 leading-snug group-hover:text-warm-600 transition-colors"> ${pinnedArticle.title} </h2> <p class="text-ink-400 leading-relaxed text-sm sm:text-base line-clamp-2"> ${pinnedArticle.summary} </p> </div> </a> </article> </div> </section>`} <section class="pb-20 px-5"> <div class="max-w-2xl mx-auto"> <h2 class="text-sm font-medium text-ink-300 mb-6 tracking-wider uppercase">更多文章</h2> <div class="space-y-6"> ${restArticles.length === 0 ? renderTemplate`<p class="text-center text-ink-300 py-10">暂无更多文章</p>` : restArticles.map((article) => renderTemplate`<a${addAttribute(`/shengqian-intel-site/article/${article.slug}`, "href")} class="group block p-4 bg-white rounded-2xl border border-cream-200 hover:border-warm-200 transition-colors"> <div class="flex items-center justify-between mb-2"> <span class="text-xs font-medium text-warm-500 bg-warm-50 px-2.5 py-0.5 rounded-full">${article.tag}</span> <span class="text-xs text-ink-300">${formatDate(getDate(article.slug))}</span> </div> <h3 class="font-bold text-ink-800 group-hover:text-warm-600 transition-colors text-sm sm:text-base leading-snug"> ${article.title} </h3> <p class="text-ink-400 text-xs mt-1 line-clamp-1">${article.summary}</p> </a>`)} </div> </div> </section> <footer class="py-10 bg-cream-100 border-t border-cream-200"> <div class="max-w-3xl mx-auto px-5 text-center"> <p class="text-xs text-ink-300/70">© 2026 抠门精小晨. 生活可以节俭，但不需要尶。</p> </div> </footer> ` })}`;
}, "/Users/jingchen/shengqian-site-v2/src/pages/category/[slug].astro", void 0);

const $$file = "/Users/jingchen/shengqian-site-v2/src/pages/category/[slug].astro";
const $$url = "/shengqian-intel-site/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
