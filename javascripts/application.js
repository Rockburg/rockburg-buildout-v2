$( document ).ready(function() {
  $('.album-art').each(function(index){
    var $this = $(this);
    var pattern = Trianglify({
      width: $this.data('size'),
      height: $this.data('size'),
      cell_size: $this.data('size') / 4,
      variance: 0.75,
      x_colors: 'random',
      seed: $this.data('seed')
    });

    $this.append(pattern.canvas());
  });

  $(".tabs a").click(function(e){
    e.preventDefault();

    var tabid = $(this).data('tab');
    $('.tab-content').hide();
    $('.tabs a').removeClass('active');
    $(this).addClass('active');
    $('#'+tabid).show();
  });

});