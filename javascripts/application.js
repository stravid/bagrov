(function() {
  var baseline, columns;
  baseline = function() {
    var bodyHeight, bodyOffset, bodyWidth, top, _results;
    top = 0;
    bodyHeight = $('#bagrov-container').height();
    bodyOffset = $('#bagrov-container').offset();
    bodyWidth = $('#bagrov-container').width();
    _results = [];
    while (!(top > bodyHeight)) {
      $('#bagrov-container').append($('<div>').css({
        width: bodyWidth,
        height: 24,
        top: top + bodyOffset.top,
        left: bodyOffset.left,
        position: 'absolute',
        background: 'rgba(255, 0, 0, 0.3)'
      }));
      _results.push(top += 48);
    }
    return _results;
  };
  columns = function() {
    var bodyHeight, bodyOffset, bodyWidth, step, width, _results;
    bodyHeight = $('#bagrov-container').height();
    bodyWidth = $('#bagrov-container').width();
    bodyOffset = $('#bagrov-container').offset();
    width = 0;
    step = 0;
    _results = [];
    while (!(step > (bodyWidth / (68 + 24)).toFixed(0) - 1)) {
      width = step * (68 + 24);
      $('#bagrov-container').append($('<div>').css({
        width: 68,
        height: bodyHeight,
        background: 'rgba(0, 0, 255, 0.3)',
        top: bodyOffset.top,
        left: bodyOffset.left + (step * (68 + 24)),
        position: 'absolute'
      }));
      _results.push(step++);
    }
    return _results;
  };
  jQuery(function() {
    var bodyHeight, bodyOffset, bodyWidth;
    bodyHeight = $('body').height();
    bodyWidth = $('body').width();
    bodyOffset = $('body').offset();
    console.log(bodyHeight, bodyWidth, bodyOffset);
    $('body').prepend($('<div id="bagrov-container">').css({
      height: '100%',
      width: '100%'
    }));
    baseline();
    return columns();
  });
}).call(this);
