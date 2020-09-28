"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 25;
var TEXT_Y = 240;
var COL_WIDTH = 40;
var COL_DIST = 50;
var COL_Y = 215;
var barWidth = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 125, 40);
  ctx.fillText("Список результатов:", 125, 57);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = "#000";
    ctx.fillText(
      players[i],
      CLOUD_X + GAP + FONT_GAP + (COL_WIDTH + COL_DIST) * i,
      CLOUD_Y + GAP + TEXT_Y
    );
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + GAP + FONT_GAP + (COL_WIDTH + COL_DIST) * i,
      CLOUD_Y + COL_Y - (barWidth * times[i]) / maxTime
    );
    if (players[i] == "Вы") {
      ctx.fillStyle = "#e30e0e";
    } else {
      ctx.fillStyle =
        `hsl(245, 84%, ${Math.floor((Math.random() * (90 - 20)) + 20)}%)`;
    }
    ctx.fillRect(
      CLOUD_X + GAP + FONT_GAP + (COL_WIDTH + COL_DIST) * i,
      CLOUD_Y + GAP + COL_Y,
      COL_WIDTH,
      -(barWidth * times[i]) / maxTime
    );
  }
};
