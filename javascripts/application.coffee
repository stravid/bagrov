baseline = ->
  top = 0
  bodyHeight = $('body').height()
  bodyOffset = $('#bagrov-container').offset()
  bodyWidth = $('body').width()

  until top > bodyHeight
    $('#bagrov-container').append($('<div>').css({
      width: bodyWidth,
      height: 24,
      top: top + bodyOffset.top,
      left: bodyOffset.left,
      position: 'absolute',
      background: 'rgba(255, 0, 0, 0.3)'
    }))

    top += 48

columns = ->
  bodyHeight = $('body').height()
  bodyWidth =  $('body').width()
  bodyOffset =  $('#bagrov-container').offset()
  width = 0  
  step = 0

  until step > (bodyWidth / (68 + 24)).toFixed(0) - 1
    width = step * (68 + 24)

    $('#bagrov-container').append($('<div>').css({
      width: 68,
      height: bodyHeight,
      background: 'rgba(0, 0, 255, 0.3)',
      top: bodyOffset.top,
      left: bodyOffset.left + (step * (68 + 24)),
      position: 'absolute'
    }))    

    step++

jQuery ->
  bodyHeight = $('body').height()
  bodyWidth =  $('body').width()
  bodyOffset =  $('body').offset()

  console.log bodyHeight, bodyWidth, bodyOffset
  
  $('body').prepend('<div id="bagrov-container">');

  baseline()
  columns()  
