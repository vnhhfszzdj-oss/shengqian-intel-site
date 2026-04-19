# life-savings-site

`抠门精小晨` 的生活省钱内容站 MVP。

## 当前内容

- `index.html`：首页骨架
- `styles.css`：视觉样式
- `script.js`：首页内容数据和轻量动画

## 预览方式

直接在浏览器打开 `index.html` 即可。

如果要在命令行启动一个本地静态服务，可在该目录执行：

```bash
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 下一步建议

- 补栏目页：`category.html`
- 补文章详情页：`article.html`
- 把首页静态内容拆成可维护的数据文件
- 接入真正的内容管理或静态站点生成器
