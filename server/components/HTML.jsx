export default function StaticHTML({ title }) {
  return <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content="SSR Test" data-react-helmet="true" />
      <link rel="stylesheet" href="/css/main.css"></link>
      <script src="/js/vendors.bundle.js" async></script>
      <script src="/js/runtime.bundle.js" async></script>
      <script src="/js/main.bundle.js" async></script>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
}
