'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 50;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - (TEXT_HEIGHT * 2) - (GAP * 2);
var BAR_GAP = 50;
var TEXT_WIDTH = 90;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

ctx.fillStyle = '#000';
ctx.font = '16px PT Mono';
ctx.textBaseline = 'hanging';
ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 4);

var maxTime = getMaxElement(times);

for (var i = 0; i < names.length; i++) {
ctx.fillText(names[i], CLOUD_X + (GAP * 4) + (TEXT_WIDTH) * i, CLOUD_HEIGHT - GAP * 2);
ctx.fillText(Math.round(times[i]), CLOUD_X + (GAP * 4) + (TEXT_WIDTH) * i, CLOUD_HEIGHT - GAP * 3 - ((barHeight * times[i]) / maxTime) - GAP * 2);
ctx.fillRect(CLOUD_X + GAP * 4 + (TEXT_WIDTH) * i, CLOUD_HEIGHT - GAP * 3, BAR_WIDTH, (-barHeight * times[i]) / maxTime);
  }

for (var i = 0; i < names.length; i++) {
  if (names[i] === 'Вы') {
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + GAP * 4 + (TEXT_WIDTH) * i, CLOUD_HEIGHT - GAP * 3, BAR_WIDTH, (-barHeight * times[i]) / maxTime);
}
  else {
    function rand(min, max) {
      return min + Math.random() * (max - min);
  }

    function get_random_color() {
      var h = 250;
      var s = rand(0, 100);
      var l = 50;
      return 'hsl(' + h + ',' + s + '%,' + l + '%)';
  }
    ctx.fillStyle = get_random_color();
    ctx.fillRect(CLOUD_X + GAP * 4 + (TEXT_WIDTH) * i, CLOUD_HEIGHT - GAP * 3, BAR_WIDTH, (-barHeight * times[i]) / maxTime);
    }
  }
};
