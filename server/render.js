// module.exports = function(app) {
//   app.get('*', (req, res) => {
//     match({ routes: routes, location: req.url }, (err, redirect, props) => {
//         const appHtml = reactDomServer.renderToString(<RouterContext {...props}/>)
//         res.send(renderPage(appHtml))
//     })
// })
// }

module.exports = function(app) {
    app.get('*', (req, res) => {
    const component = ReactDOMServer.renderToString(<App id="1" />);
    const html = `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <title>Calendar</title>
      </head>
      <body>
        <div id="AK-app">HI from server</div>
      </body>
      </html>`

      res.send(html);
  })
};