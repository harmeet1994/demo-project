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
        <h3>Job Openings</h3>
    </div>
    <div class="col-md-5 col-5" style="text-align: right;">
        <a href="jobs.php" class="btn btn-primary">Add New Job Opening</a>
    </div>
</div>
<div class="row mt-3">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <table class="table table-striped table-bordered" id="mytable" role="presentation">
                    <thead>
                        <tr>
                            <th>Job title</th>
                            <th>Company Name</th>
                            <th>Published On</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php 
                            $query ="SELECT * FROM wp_job_postings ORDER BY Id DESC";
                            $result = mysqli_query($conn,$query);
                            while($rows = mysqli_fetch_array($result)){
                        ?>
                        <tr>
                            <td>
                                <?php echo $rows['Job_title'];?>
                            </td>
                            <td>
                                <?php echo $rows['Company_name'];?>
                            </td>
                            <td>
                                <?php echo $rows['Created_on'];?>
                            </td>
                            <td>
                                <a href="jobs.php?id=<?php echo $rows['Id'];?>"><i class="material-icons opacity-10">edit</i></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="javascript:void(0)" onclick="delJobConfirm(jQuery(this));" data-id='<?php echo $rows['Id'];?>'><i class="material-icons opacity-10">delete</i></a>
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