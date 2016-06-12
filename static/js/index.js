$(document).ready(function () {

  $('#filter').keyup(function () {
    filter($(this).val());
  })
  
  $('#mooh').change(function () {
    if ('-' == $(this).val()) {
      $('.table-cat').parent().addClass('row-active')
    } else {
      var rex = new RegExp($(this).val(), 'i');
      $('.table-cat').parent().removeClass('row-active')
      $('.table-cat').filter(function () {
        return rex.test($(this).text());
      }).parent().addClass('row-active');
    }
    filter ($('#filter').val())
  })
  
});

function filter (text) {
  var rex = new RegExp(text, 'i');
  $('.searchable tbody tr').hide();
  $('.searchable tbody .row-active').filter(function () {
    return rex.test($(this).text());
  }).show();
}