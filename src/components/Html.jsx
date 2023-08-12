export default function HTML({ children }) {
  return <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <title>Page | SSR</title>
      <meta name="description" content="SSR Test" data-react-helmet="true" />
      <link rel="stylesheet" href="css/main.css"></link>
    </head>
    <body>
      <div id="root">{children}</div>
    </body>
  </html>
}
