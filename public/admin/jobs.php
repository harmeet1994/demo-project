<?php
include 'sidebar.php';
include '../config.php';
$jobId = '';
$JobTitle = "";
$JobDesc = "";
$JobLocation = "";
$JobType = "";
$JobFor = "";
$IsRemote = "";
$CompanyName = "";
$Logo = "";
$custom_url = "";
if (isset($_REQUEST['id']))
    $jobId = $_REQUEST['id'];
if ($jobId != '') {
    $querySelect = "SELECT * FROM wp_job_postings WHERE Id = $jobId";
    $resultSelect = mysqli_query($conn, $querySelect);
    while ($rows = mysqli_fetch_array($resultSelect)) {
        $JobTitle = $rows['Job_title'];
        $JobDesc = $rows['Job_description'];
        $JobLocation  = $rows['Job_Locations'];
        $JobType  = $rows['Job_type'];
        $JobFor  = $rows['Job_for'];
        $IsRemote  = $rows['Is_Remote_location'];
        $Logo = $rows['Logo'];
        $CompanyName = $rows['Company_name'];
        $custom_url = $rows['custom_url'];
        $path = "../assets/img/company_logo/" . $Logo;
    }
}

if (isset($_POST['submit'])) {
    if ($jobId == '') {
        $jobTitle = mysqli_real_escape_string($conn,$_POST['job_title']);
        $jobDesc = mysqli_real_escape_string($conn,$_POST['job_desc']);
        $companyname = mysqli_real_escape_string($conn,$_POST['company_name']);
        $job_location = $_POST['job_location'];
        $job_type = $_POST['job_type'];
        $job_for = $_POST['job_for'];
        $is_remote_location = isset($_POST['is_remote']);
        $jobDesc = mysqli_real_escape_string($conn, $jobDesc);
        $image_name = addslashes($_FILES['comp_logo']['name']);
        $image_size = $_FILES['comp_logo']['size'];
        $custom_url = $_POST['c_url'];
        $filearr = explode('.', $image_name);
        $extention = $filearr[sizeof($filearr) - 1];
        if (strtolower($extention) != "jpg" && strtolower($extention) != "jpeg" && strtolower($extention) != "png") {
            //nothing to upload
            echo "Only Jpg Images allowed";
            exit();
        } else {
            $featured_img = "Job-" . time() . "." . $extention;
            move_uploaded_file($_FILES["comp_logo"]["tmp_name"], "../assets/img/company_logo/" . $featured_img);
            $queryInsert = "INSERT into wp_job_postings (Company_name,Logo,Job_title,Job_description,custom_url,Created_on,Job_Locations,Job_type,Job_for,Is_Remote_location) VALUES ('$companyname','$featured_img','$jobTitle','$jobDesc','$custom_url', CURRENT_TIMESTAMP,'$job_location','$job_type','$job_for','$is_remote_location')";
            $resultInsert = mysqli_query($conn, $queryInsert);
            if ($resultInsert) {
                echo "<script>window.location.href='view-jobs.php'</script>";
            }
        }
    } else {
        $jobTitle = mysqli_real_escape_string($conn,$_POST['job_title']);
        $jobDesc = $_POST['job_desc'];
        $jobDesc = mysqli_real_escape_string($conn, $jobDesc);
        $companyname = mysqli_real_escape_string($conn,$_POST['company_name']);
        $job_location = $_POST['job_location'];
        $job_type = $_POST['job_type'];
        $job_for = $_POST['job_for'];
        $is_remote_location = isset($_POST['is_remote']);
        $custom_url = $_POST['c_url'];
        $image_name = addslashes($_FILES['comp_logo']['name']);
        $image_size = $_FILES['comp_logo']['size'];
        $filearr = explode('.', $image_name);
        $extention = $filearr[sizeof($filearr) - 1];
        if ($image_name == '') {
            $featured_img = $Logo;
        } else {
            $featured_img = "Job-" . time() . "." . $extention;
        }
        move_uploaded_file($_FILES["comp_logo"]["tmp_name"], "../assets/img/company_logo/" . $featured_img);
        $queryUpdate = "UPDATE wp_job_postings SET Job_title = '$jobTitle',Logo = '$featured_img', Job_description = '$jobDesc',Company_name = '$companyname',custom_url = '$custom_url',Job_Locations = '$job_location',Job_type='$job_type',Job_for='$job_for',Is_Remote_location = '$is_remote_location' WHERE Id = '$jobId'";
        $resultUpdate = mysqli_query($conn, $queryUpdate);
        if ($resultUpdate) {
            echo "<script>window.location.href='view-jobs.php'</script>";
        }
    }
}
?>
<style>
    .form-control,
    .form-control:focus {
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

    .mybutton {
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

    .round {
        position: relative;
    }

    .round label {
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        height: 28px;
        left: 0;
        position: absolute;
        top: 0;
        width: 28px;
    }

    .round label:after {
        border: 2px solid #fff;
        border-top: none;
        border-right: none;
        content: "";
        height: 6px;
        left: 7px;
        opacity: 0;
        position: absolute;
        top: 8px;
        transform: rotate(-45deg);
        width: 12px;
    }

    .round input[type="checkbox"] {
        visibility: hidden;
    }

    .round input[type="checkbox"]:checked+label {
        background-color: #66bb6a;
        border-color: #66bb6a;
    }

    .round input[type="checkbox"]:checked+label:after {
        opacity: 1;
    }
</style>
<div class="row ">
    <div class="col-md-12">
        <form method="post" action="" enctype="multipart/form-data">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12">
                            <?php if (empty($jobId)) { ?>
                                <h4>Add new Job</h4>
                            <?php } else { ?>
                                <h4>Edit Job</h4>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6 col-6">
                            <label for="mailserver_url">Job title</label>
                            <input name="job_title" class="form-control" required type="text"
                                value="<?php echo $JobTitle; ?>" placeholder="Enter Job title">
                        </div>
                        <div class="col-md-6 col-6">
                            <label for="mailserver_login">Company Name</label>
                            <input name="company_name" required type="text" placeholder="Company Name"
                                id="mailserver_url" value="<?php echo $CompanyName; ?>"
                                class="regular-text ltr form-control">
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6 col-6">
                            <label for="mailserver_url">Job Location</label>
                            <input name="job_location" class="form-control" required type="text"
                                value="<?php echo $JobLocation; ?>" placeholder="Enter Job Location">
                        </div>
                        <div class="col-md-6 col-6">
                            <label for="mailserver_login">Job Type</label>
                            <select name="job_type" id="job_type" class="form-control" required>
                                <option value="" disabled <?php empty($jobId) ? "selected":"" ?>>SELECT JOB TYPE</option>
                                <option value="full_time" <?php echo $JobType == "full_time" ? "selected":"" ?>>Full Time</option>
                                <option value="part_time" <?php echo $JobType == "part_time" ? "selected":"" ?>>Part Time</option>
                            </select>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-6 col-6">
                            <label for="mailserver_login">Job For</label>
                            <select name="job_for" id="job_for" class="form-control" required>
                                <option value="" disabled <?php empty($jobId) ? "selected":"" ?>>SELECT</option>
                                <option value="Fresher" <?php echo $JobFor == "Fresher" ? "selected":"" ?>>Fresher</option>
                                <option value="Experienced" <?php echo $JobFor == "Experienced" ? "selected":"" ?>>Experienced</option>
                            </select>
                        </div>
                        <div class="col-md-6 col-6 mt-4">
                            <div class="round">
                                <input type="checkbox" <?php echo $IsRemote ? "checked": "";?> id="is_remote" name="is_remote" />
                                <label for="is_remote"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is Job on Remote Location ?
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <label for="default_email_category">Job Description</label>
                            <textarea name="job_desc" id="ping_sites" placeholder="Enter Job Description"
                                class="large-text code blog_desc" rows="3"><?php echo $JobDesc; ?></textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12">
                            <div>
                                <label for="default_email_category">Company Logo</label>
                            </div>
                            <div class="upload-btn-wrapper">
                                <button for="uploadfile" style="display:<?php if ($jobId != null) {
                                    echo "none";
                                } ?>" class="button">Select<br>Image</button>
                                <img src='<?php if ($jobId != null) {
                                    echo $path;
                                } ?>' id="myimage" style="height:100px" />
                                <input type="file" name="comp_logo" id="uploadfile0"
                                    onchange="imageUpload(jQuery(this))" data-index="0" />
                                <input type="hidden" name="c_url" id="c_url" value="<?php echo $custom_url; ?>" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" name="submit" id="submit" class="btn float-end bg-gradient-primary w-10"
                        value="Save">
                </div>
            </div>
        </form>
    </div>
</div>
<?php
include 'footer.php';
?>