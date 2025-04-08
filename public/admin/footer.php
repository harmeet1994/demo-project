  </div>
</main>
<!--   Core JS Files   -->
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script src="./assets/js/core/popper.min.js"></script>
  <script src="./assets/js/core/bootstrap.min.js"></script>
  <script src="./assets/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="./assets/js/plugins/smooth-scrollbar.min.js"></script>
  <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.tiny.cloud/1/m48xc7jxjq5cvcz8l2xw7ujnbk33asiogy9ao6cecvyi55bv/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
    $(function() {
      $( "#test" ).datepicker();
    });
    $('#mailserver_url').on('change',function(){
        var c_url = $('#mailserver_url').val();
        c_url = c_url.replaceAll(' ','-');
        c_url = c_url.toLowerCase();
        $('#c_url').val(c_url);
    });
    function imageUpload(obj){
      var index = obj.attr('data-index');
      console.log(index);
    	var fr = new FileReader();
		  var imgTag = obj.prev();
      var button = obj.prev().prev();
      console.log(imgTag);
      fr.readAsDataURL(obj[0].files[0]);
      fr.onload = function (e) {
			//console.log(e.target.result);
      //var imgTag = $("<img class='imgDefaultContainer failed " + f + "' style='width:150px; height:100px;'>");
      button.hide();
      imgTag.attr('src', e.target.result);
      };
    }
  if ($('#test')[0].type != 'date' ) {
      $('#test').datepicker();
  }

</script>
<script>tinymce.init({
    selector: 'textarea', invalid_elements: "script",
    height: 300,
    // theme: 'modern',
    plugins: [
    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks visualchars code fullscreen',
    'insertdatetime media nonbreaking save table contextmenu directionality',
    'emoticons template paste textcolor colorpicker textpattern imagetools'
    ],
    toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
    toolbar2: 'print preview media | forecolor backcolor emoticons',
    image_advtab: true,
    templates: [
    { title: 'Test template 1', content: 'Test 1' },
    { title: 'Test template 2', content: 'Test 2' }
    ],
    content_css: [
    '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
    '//www.tinymce.com/css/codepen.min.css'
    ]
});</script>
  <script>
  $(document).ready( function () {
      $('#mytable').DataTable({
          "ordering": false
      });
  });
  
function delConfirm(obj){
  var id = obj.attr('data-id');
  var conf = confirm("Are you sure you want to delete this blog?");
  console.log(conf);
  if(conf){
      jQuery.ajax({
          method:'POST',
          data : {id: id},
          url: 'delete.php',
          success:function(response){
              if(response =='success'){
                  window.location.reload();
              }
          }
      });
  }
}

function delJobConfirm(obj){
  var id = obj.attr('data-id');
  var conf = confirm("Are you sure you want to delete this job posting?");
  console.log(conf);
  if(conf){
      jQuery.ajax({
          method:'POST',
          data : {id: id},
          url: 'delete-job.php',
          success:function(response){
              if(response =='success'){
                  window.location.reload();
              }
          }
      });
  }
}
  </script>

  <!-- Github buttons -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="./assets/js/material-dashboard.min.js?v=3.0.2"></script>
</body>

</html>