<?php 
include 'sidebar.php';
include '../config.php';
?>
<style>
    thead th,tbody td,.odd td
    {
        color:black !important;
    }
</style>
<div class="row mt-5">
    <div class="col-md-7 col-7">
        <h3>View Blogs</h3>
    </div>
    <div class="col-md-5 col-5" style="text-align: right;">
        <a href="blogs.php" class="btn btn-primary">Add New Blog</a>
    </div>
</div>
<div class="row mt-3">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped table-bordered" id="mytable" role="presentation">
                    <thead>
                        <tr>
                            <th>Blog title</th>
                            <th>Published On</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php 
                            $query ="SELECT * FROM wp_blogs ORDER BY Blog_publish_date DESC";
                            $result = mysqli_query($conn,$query);
                            while($rows = mysqli_fetch_array($result)){
                        ?>
                        <tr>
                            <td>
                                <?php echo $rows['Blog_title'];?>
                            </td>
                            <td>
                                <?php echo $rows['Blog_publish_date'];?>
                            </td>
                            <td>
                                <a href="blogs.php?id=<?php echo $rows['ID'];?>"><i class="material-icons opacity-10">edit</i></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="delConfirm(jQuery(this));" data-id='<?php echo $rows['ID'];?>'><i class="material-icons opacity-10">delete</i></a>
                            </td>
                        </tr>
                        <?php } ?>
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
</div>

<?php 
include 'footer.php';
?>