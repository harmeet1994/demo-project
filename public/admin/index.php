<?php 
session_start();
setcookie('user','login',time()-84600,"/");
if(isset($_POST['sub']))
{
    $u = $_POST['email'];
    $p = $_POST['password'];
    if($u == "admin@jobschool.io" && $p == "N=J66gwvPN[jv4Z")
    {
        setcookie('user','login',time()+84600*30,"/");
        header("Location:home.php");
    }
    else
    {
        echo "<script>alert('Invalid Credentials')</script>";
    }
}?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">
  <title>
    JobSchool - By Envisionist
  </title>
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  <!-- Nucleo Icons -->
  <link href="assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="assets/css/nucleo-svg.css" rel="stylesheet" />
  <!-- Font Awesome Icons -->
  <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
  <!-- Material Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
  <!-- CSS Files -->
  <link id="pagestyle" href="assets/css/material-dashboard.css?v=3.0.2" rel="stylesheet" />
</head>

<body class="">
  <main class="main-content mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 ps-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
              <div class="position-relative bg-gradient-primary h-100  d-flex flex-column justify-content-center" style="background-image: url('assets/img/login-img.jpg'); background-size: cover;">
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-7 d-flex flex-column ms-auto me-lg-5">
              <div class="card card-plain">
                <div class="card-header pb-0">
                    <h4 class="font-weight-bolder text-center">JobSchool -  By Envisionist</h4>
                    <h5 class="font-weight-bolder text-center">Login to CRM</h5>
                </div>
                <div class="card-body">
                  <form role="form" method="POST" class="text-start" autocomplete="false">
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" name="email" class="form-control" autocomplete="off">
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <label class="form-label">Password</label>
                      <input type="password" name="password" class="form-control" autocomplete="off">
                    </div>
                    <div class="text-center">
                      <button type="submit" name="sub" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!--   Core JS Files   -->
  <script src="assets/js/core/popper.min.js"></script>
  <script src="assets/js/core/bootstrap.min.js"></script>
  <script src="assets/js/plugins/perfect-scrollbar.min.js"></script>
  <script src="assets/js/plugins/smooth-scrollbar.min.js"></script>
  <script>
    var win = navigator.platform.indexOf('Win') > -1;
    if (win && document.querySelector('#sidenav-scrollbar')) {
      var options = {
        damping: '0.5'
      }
      Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
    }
  </script>
  <!-- Github buttons -->
  <script async defer src="https://buttons.github.io/buttons.js"></script>
  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="assets/js/material-dashboard.min.js?v=3.0.2"></script>
</body>

</html>