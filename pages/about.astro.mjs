/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dvld-7Qp.mjs';
import 'kleur/colors';
import { $ as $$Layout, s as siteData, a as $$Header } from '../chunks/siteData_COAmZfs4.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const { about } = siteData;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u5173\u4E8E", "description": about.missionTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div class="max-w-2xl mx-auto px-5 py-16 sm:py-24"> <div class="text-center mb-14"> <div class="text-5xl mb-5">🥡</div> <h1 class="text-2xl sm:text-3xl font-bold text-ink-800 mb-3">${about.name}</h1> <p class="text-ink-400 text-base">${about.missionTitle}</p> </div> <div class="space-y-12"> <section> <h2 class="text-base font-bold text-ink-700 mb-4 flex items-center gap-2"> <span class="text-warm-400">💡</span> 我的理念
</h2> <div class="space-y-4"> ${about.mission.map((p) => renderTemplate`<p class="text-ink-500 leading-[1.8] text-sm sm:text-base">${p}</p>`)} </div> </section> <section> <h2 class="text-base font-bold text-ink-700 mb-4 flex items-center gap-2"> <span class="text-warm-400">✅</span> 三个原则
</h2> <div class="space-y-3"> ${about.principles.map((p, i) => renderTemplate`<div class="flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-200"> <span class="w-6 h-6 rounded-full bg-warm-50 text-warm-600 flex items-center justify-center text-xs font-bold flex-shrink-0">${i + 1}</span> <p class="text-ink-500 text-sm leading-[1.7]">${p}</p> </div>`)} </div> </section> <section> <h2 class="text-base font-bold text-ink-700 mb-4 flex items-center gap-2"> <span class="text-warm-400">🎯</span> 关于本站
</h2> <p class="text-ink-500 leading-[1.8] text-sm sm:text-base">${about.origin}</p> </section> <section> <h2 class="text-base font-bold text-ink-700 mb-4 flex items-center gap-2"> <span class="text-warm-400">📞</span> 联系方式
</h2> ${about.contact ? renderTemplate`<div class="space-y-2 text-ink-500 text-sm"> <p><span class="text-ink-300">公众号：</span>${about.contact.wechat}</p> <p><span class="text-ink-300">邮箱：</span>${about.contact.email}</p> <p><span class="text-ink-300">小红书：</span>${about.contact.xiaohongshu}</p> </div>` : renderTemplate`<p class="text-ink-300 text-sm">联系方式即将更新...</p>`} </section> </div> </div> <footer class="py-10 bg-cream-100 border-t border-cream-200"> <div class="max-w-3xl mx-auto px-5 text-center"> <p class="text-xs text-ink-300/70">© 2026 抠门精小晨. 生活可以节俭，但不需要尶。</p> </div> </footer> ` })}`;
}, "/Users/jingchen/shengqian-site-v2/src/pages/about.astro", void 0);

const $$file = "/Users/jingchen/shengqian-site-v2/src/pages/about.astro";
const $$url = "/shengqian-intel-site/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
