<?php
session_start();

require '../config/functions.php';
// cek apakah tombol submit sudah ditekan atau belum
if (isset($_POST["submit"]) ) {
	if (tambah1($_POST) > 0 ) {
		echo "
			   <script>
			   	
			   	document.location.href = 'home.php';
			   </script>
			   ";
	} else {
		echo mysqli_error($conn);
	}
}

if (!isset($_SESSION['username'])) {
	echo "<script>alert('Anda Harus Login!');</script>";
	header("Location: index.php");
	exit();
}

$a = "SELECT alamat FROM tb_petani WHERE username LIKE '%$_SESSION[username]%'";
  $result = mysqli_query($conn, $a);

  if(mysqli_num_rows($result) > 0 ){
  $row = mysqli_fetch_assoc($result);
  $user_a =  $row['alamat'];

  //using session
  $_SESSION["user_a"] = $user_a;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>

<?php include '../template/head_ptn.php'; ?>

    <style>
    	form{
    		height: 100vh;
    	}
    </style>
</head>

<body>

	<div id="wrapper">

		<!-- Navigation -->
		<?php include '../template/navbar_ptn.php'; ?>

		<div id="page-wrapper">

			<div class="container-fluid">

				
				<!-- page table -->
				<form method="post">
					<center><h2 style="color: green;">Tambah Produk</h2></center><br>
                  <fieldset>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">				
						  <label>Nama Petani:</label>
                          <input class="form-control" name="petani" value="<?php echo "$_SESSION[username]"; ?>" disabled>
                          <br>
                          <label>Nama Produk:</label>
                          <input class="form-control" name="nama" type="text" value="" >
                          <br>
                           <label>Harga:</label>
                          <input class="form-control" name="harga" type="text" value="" >
                          <br>
                           <label>Stock:</label>
                          <input class="form-control" name="stock" type="text" value="" >
                          <br>
                           <label>Keterangan:</label>
                          <input class="form-control" name="keterangan" type="text" value="" >
                          <br>
                          <label>Gambar:</label>
                          <input class="form-control" name="gambar" type="file" value="" >	
                          <br>
						  <label>Alamat:</label>
                          <input class="form-control" name="alamat" type="text" value="<?php echo "$user_a"; ?>" disabled>
                          <br>
                          <div class="btn-group">
                           <button type="submit" name="submit" class="btn btn-primary">Tambah</button>
                          </div>
                        </div>
                      </div>
                    

                    </fieldset>

                </form>
					
			</div>
			<!-- /#page-wrapper -->

		</div>
		<!-- /#wrapper -->

		<!-- jQuery -->
		<script src="js/jquery.js"></script>

		<!-- Bootstrap Core JavaScript -->
		<script src="js/bootstrap.min.js"></script>

		<!-- Morris Charts JavaScript -->
		<script src="js/plugins/morris/raphael.min.js"></script>
		<script src="js/plugins/morris/morris.min.js"></script>
		<script src="js/plugins/morris/morris-data.js"></script>

		<!-- Flot Charts JavaScript -->
		<!--[if lte IE 8]><script src="js/excanvas.min.js"></script><![endif]-->
		<script src="js/plugins/flot/jquery.flot.js"></script>
		<script src="js/plugins/flot/jquery.flot.tooltip.min.js"></script>
		<script src="js/plugins/flot/jquery.flot.resize.js"></script>
		<script src="js/plugins/flot/jquery.flot.pie.js"></script>
		<script src="js/plugins/flot/flot-data.js"></script>

		<!-- Page-Level Plugin Scripts - Tables -->
		<script src="datatable/jquery.dataTables.min.js"></script>
		<script src="datatable/dataTable.bootstrap.min.js"></script>
		<!-- tooltip -->
		<script>
			$('.tooltip-demo').tooltip({
				selector: "[data-toggle=tooltip]",
				container: "body"
			})
		</script>

			<!-- generate datatable on our table -->
			<script>
				$(document).ready(function(){
		//inialize datatable
		$('#myTable').DataTable();

	    //hide alert
	    $(document).on('click', '.close', function(){
	    	$('.alert').hide();
	    })
	});
	</script>

	</body>

	</html>

