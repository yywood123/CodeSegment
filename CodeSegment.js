/**
 * 将圆角矩形转为svg path
 * @param {*} x 位置
 * @param {*} y 位置
 * @param {*} width 宽度
 * @param {*} height 高度
 * @param {*} rx 圆角
 * @param {*} ry 圆角
 */
function rect2path(x, y, width, height, rx, ry) { 
  rx = rx || ry || 0; 
  ry = ry || rx || 0; 
  if (isNaN(x - y + width - height + rx - ry)) return; 
  rx = rx > width / 2 ? width / 2 : rx; 
  ry = ry > height / 2 ? height / 2 : ry; 
  if(0 == rx || 0 == ry){ 
    var path = 'M' + x + ' ' + y + 'h' + width + 'v' + height + 'h' + -width + 'z'; 
  }else{
     var path = 'M' + x + ' ' + (y+ry) + 'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + (-ry) + 'h' + (width - rx - rx) + 'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + ry + 'v' + (height - ry -ry) + 'a' + rx + ' ' + ry + ' 0 0 1 ' + (-rx) + ' ' + ry + 'h' + (rx + rx -width) + 'a' + rx + ' ' + ry + ' 0 0 1 ' + (-rx) + ' ' + (-ry) + 'z'; 
  } 
  return path; 
}