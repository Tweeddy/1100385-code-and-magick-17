'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var X = 110;
var Y = 20;
var COLUMN_X = 150;
var COLUMN_Y = 250;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_SPACE = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (times) {
  var max = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }
  return max;
};

var getRandomNumber = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, X, Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, X - 10, Y - 10, '#fff');

  ctx.fillStyle = 'black';
  ctx.font = '16px, PT Mono';
  ctx.fillText(' Ура вы победили!', 115, 40);
  ctx.fillText('Список результатов:', 123, 60);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], COLUMN_X + i * (COLUMN_WIDTH + COLUMN_SPACE), 270);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0,83,138,' + getRandomNumber(0.2, 0.9) + ')';
    ctx.fillRect(COLUMN_X + i * (COLUMN_WIDTH + COLUMN_SPACE), COLUMN_Y, COLUMN_WIDTH, COLUMN_HEIGHT * times[i] / maxTime * (-1));
  }

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), COLUMN_X + i * (COLUMN_WIDTH + COLUMN_SPACE), COLUMN_Y + COLUMN_HEIGHT * times[i] / maxTime * -1 - 15);
  }
};
