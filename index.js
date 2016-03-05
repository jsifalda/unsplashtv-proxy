var express = require('express');
var app = express();

app.get('/:id.jpg', function (req, res) {
  res.statusCode = 302
  res.set('Location', 'https://images.unsplash.com/photo-' + req.params.id + '?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=1de1e76648b3a98f91cdf6266ed21839')
  res.end()
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
