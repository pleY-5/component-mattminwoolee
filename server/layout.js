module.exports = (title, body, scripts) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title> ${ title } </title>
    </head>
    <body>
      ${ body }
    </body>
      ${ scripts }
  </html>
`;
