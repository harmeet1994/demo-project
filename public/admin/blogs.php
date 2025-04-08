<?php 
   include 'sidebar.php';
   include '../config.php';
   $blogId = '';
   $BlogTitle ="";
   $BlogDesc="";
   $publishDate="";
   $blogAuthor="";
   if(isset($_REQUEST['id']))
   $blogId = $_REQUEST['id'];
   if($blogId != ''){
       $querySelect = "SELECT * FROM wp_blogs WHERE ID = $blogId";
       $resultSelect = mysqli_query($conn,$querySelect);
       while($rows = mysqli_fetch_array($resultSelect)){
           $publishDate = $rows['Blog_publish_date'];
           $BlogTitle = $rows['Blog_title'];
           $BlogDesc = $rows['Blog_desc'];
           $BlogImage = $rows['Blog_image'];
           $custom_url = $rows['custom_url'];
           $blogAuthor = $rows['guid'];
           $path = "../assets/img/blog-images/".$BlogImage;
       }
   }

   if(isset($_POST['submit'])){
       if($blogId == '')
       {  
            $blogTitle = $_POST['blog_title'];
            $blogDesc = $_POST['blog_desc'];
            $blogDesc = mysqli_real_escape_string($conn,$blogDesc);
            $blog_author=$_POST['blog_author'];
            $blogDate = date('Y-m-d',strtotime($_POST['blog_date']));
            $image_name = addslashes($_FILES['blog_img']['name']);
            $image_size = $_FILES['blog_img']['size'];
            $custom_url = $_POST['c_url'];
            $filearr=explode('.', $image_name);
            $extention=$filearr[sizeof($filearr)-1];
            if(strtolower($extention)!="jpg" && strtolower($extention)!="jpeg" && strtolower($extention)!="png")
            {
                //nothing to upload
                echo "Only Jpg Images allowed";
                exit();
            }
            else
            {
                $featured_img="Blog-" . time() . "." . $extention;
                move_uploaded_file($_FILES["blog_img"]["tmp_name"], "../assets/img/blog-images/" .$featured_img );
                $queryInsert = "INSERT into wp_blogs (Blog_publish_date,Blog_desc,Blog_title,custom_url,Blog_image,`guid`) VALUES ('$blogDate','$blogDesc','$blogTitle','$custom_url','$featured_img','$blog_author')";
                $resultInsert = mysqli_query($conn,$queryInsert);
                if($resultInsert){
                    echo "<script>window.location.href='view-blogs.php'</script>";
                }
            }
       }
       else
       {
           $blogTitle = $_POST['blog_title'];
           $blogDesc = $_POST['blog_desc'];
           $custom_url = $_POST['c_url'];
           $blog_author = $_POST['blog_author'];
           $blogDate = date('Y-m-d',strtotime($_POST['blog_date']));
           $image_name = addslashes($_FILES['blog_img']['name']);
           $image_size = $_FILES['blog_img']['size'];
           $filearr=explode('.', $image_name);
           $extention=$filearr[sizeof($filearr)-1];    
           if($image_name == ''){
               $featured_img = $BlogImage;
           }
           else{
               $featured_img="Blog-" . time() . "." . $extention;
           }
           move_uploaded_file($_FILES["blog_img"]["tmp_name"], "../assets/img/blog-images/" .$featured_img );
           $queryUpdate = "UPDATE wp_blogs SET Blog_title = '$blogTitle',Blog_image = '$featured_img', Blog_publish_date = '$blogDate',Blog_desc = '$blogDesc',custom_url = '$custom_url',`guid`='$blog_author' WHERE ID = '$blogId'";
           $resultUpdate = mysqli_query($conn,$queryUpdate);
           if($resultUpdate){
               echo "<script>window.location.href='view-blogs.php'</script>";
           }
        }
       }
   ?>
<style>
    .form-control,.form-control:focus
    {
        display: block;
        width: 100%;
        padding: 0.5rem;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5rem;
        color: #495057;
        background-color: transparent;
        background-clip: padding-box;
        border: 1px solid #d2d6da;
        appearance: none;
        border-radius: 0.375rem;
        transition: 0.2s ease;
    }
   .upload-btn-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
   }
   .button {
        border: 1px dotted gray;
        color: gray;
        background-color: white;
        padding: 30px 50px;
        border-radius: 3px;
        font-size: 12px;
        font-weight: 500;
   }
   .mybutton{
        border: none;
        background: #0073aa;
        color: #fff;
        padding: 10px 15px;
        font-size: 16px;
        border-radius: 4px
   }
   .upload-btn-wrapper input[type=file] {
        font-size: 100px;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
   }
</style>
<div class="row ">
   <div class="col-md-12">
      <form method="post" action="" enctype="multipart/form-data">
        <div class="card">
           <div class="card-body">
               <div class="row">
                    <div class="col-md-12">
                        <?php if(empty($blogId)){ ?>
                        <h4>Add new Blog</h4>
                        <?php } else{ ?>
                        <h4>Edit Blog</h4>
                        <?php } ?>
                    </div>
               </div>
                <div class="row mt-3">
                    <div class="col-md-12 col-12">
                        <label for="mailserver_url">Blog title</label>
                        <input name="blog_title" class="form-control" required type="text" id="mailserver_url" value="<?php echo $BlogTitle; ?>" placeholder="Enter Blog title" >
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6 ">
                        <label for="mailserver_login">Blog Publish Date</label>
                        <input name="blog_date" required type="text" id="test" placeholder="Publish Date" value="<?php echo $publishDate; ?>" class="regular-text ltr form-control">
                    </div>
                    <div class="col-md-6 col-6">
                        <label for="mailserver_login">Blog Author</label>
                        <input name="blog_author" required type="text" placeholder="Blog Author" id="author" value="<?php echo $blogAuthor; ?>" class="regular-text ltr form-control">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <label for="default_email_category">Blog Description</label>
                        <textarea name="blog_desc" id="ping_sites" placeholder="Enter Blog Description"  class="large-text code blog_desc" rows="3"><?php echo $BlogDesc; ?></textarea>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12">
                        <div>
                            <label for="default_email_category">Blog Image</label>
                        </div>
                        <div class="upload-btn-wrapper">
                            <button for="uploadfile" style="display:<?php if($blogId != null){ echo "none";}?>" class="button">Select<br>Image</button>
                            <img src='<?php if($blogId != null){ echo $path;}?>' id="myimage" style="height:100px"/>
                            <input type="file" name="blog_img" id="uploadfile0" onchange="imageUpload(jQuery(this))" data-index="0"/>
                            <input type="hidden" name="c_url" id="c_url" value="<?php echo $custom_url; ?>"/>
                        </div>
                    </div>
                </div>
                <input type="submit" name="submit" id="submit" class="btn float-end bg-gradient-primary w-10" value="Save">
           </div>
        </div>
      </form>
   </div>
</div>
<?php 
   include 'footer.php';
   ?>