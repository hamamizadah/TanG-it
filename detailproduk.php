<?php 
require  'config/functions.php';

if (!isset($_SESSION)) {
        session_start();
    }

 ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>TanG-it</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"> --> 

    <link rel="stylesheet" type="text/css" href="admin/font-awesome/css/font-awesome.css">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

   <link rel="stylesheet" type="text/css" href="css/style.css">


   <link rel="stylesheet" type="text/css" href="css/style1.css">

   <link rel="shortcut icon" href="icon.png">
   <style>
    /* Notice
====================================================================== */

.hero-unit {
  border-left: 4px solid #FF9416;
  padding: 13px 13px 13px 15px;
  font-style: italic;
  margin: 20px auto;
  -webkit-border-radius: 0px;
     -moz-border-radius: 0px;
          border-radius: 0px;
  font-size: 14px !important;
}


/* Page Title
=================================================================== */

#page-title-icon {
  background: #fff;
  height: 48px;
  width: 48px;
  -webkit-border-radius: 50em;
  -moz-border-radius: 50em;
  border-radius: 50em;
  padding: 4px;
  margin-left: -16px;
  margin-top: -18px;
  position: relative;
  z-index: 10;
  float: left;
  
}

#page-title-icon-inner {
  background: #ffd35f;
  height: 48px;
  width: 48px;
  -webkit-border-radius: 50em;
  -moz-border-radius: 50em;
  border-radius: 50em;
  margin-left: -52px;
  margin-top: -14px;
  position: relative;
  z-index: 30;
  float: left;
}

#page-title {
  background: url(img/syr.png);
  display: block;
  margin-top: 40px;
  margin-bottom: 25px;
  position: relative;
  z-index: 20;
  border-bottom: 5px solid #f6f6f6;
}

#page-title-inner {
  background: rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: inset 0px 0px 5px rgba(0,0,0,.25);
  -moz-box-shadow: inset 0px 0px 5px rgba(0,0,0,.25);
  box-shadow: inset 0px 0px 5px rgba(0,0,0,.25);
  padding: 10px;
}

#page-title i {
  margin: -6px 2px -5px -18px;
  padding: 0px;
}

#page-title h2 {
  display: inline-block;
  font-family: "Boogaloo" !important;
  color: #fff;
  padding: 2px 20px 5px 20px;
  font-size: 30px;
}

#page-title span {
  color: #555;
}

/*popup cart*/
/* jwpopup box style */
.jwpopup {
    display: none;
    position: fixed;
    z-index: 999999;
    padding-top: 110px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.7);
}
.jwpopup-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    max-width: 500px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}

.jwpopup-head {
  font-size: 11px;
    padding: 1px 16px;
    color: white;
    background: #006faa; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(#006faa, #002c44); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#006faa, #002c44); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#006faa, #002c44); /* For Firefox 3.6 to 15 */
    background: linear-gradient(#006faa, #002c44); /* Standard syntax */
}
.jwpopup-main {
  margin-left: 50px;
  margin-right: 50px;
  }
.jwpopup-foot {
  font-size: 12px;
    padding: .5px 16px;
    color: #ffffff;
    background: #006faa; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(#006faa, #002c44); /* For Safari 5.1 to 6.0 */
    background: -o-linear-gradient(#006faa, #002c44); /* For Opera 11.1 to 12.0 */
    background: -moz-linear-gradient(#006faa, #002c44); /* For Firefox 3.6 to 15 */
    background: linear-gradient(#006faa, #002c44); /* Standard syntax */
}

/* tambahkan efek animasi */
@-webkit-keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

@keyframes animatetop {
    from {top:-300px; opacity:0}
    to {top:0; opacity:1}
}

/* style untuk tombol close */
.close {
  margin-top: 7px;
    color: white;
    float: right;
    font-size: 28px;
    font-weight: bold;
}
.close:hover, .close:focus {
    color: #999999;
    text-decoration: none;
    cursor: pointer;
}


   /*FOOTER*/

     .newsletter-follow {
      text-align: center;
      margin-top: -20px;
      margin-left: -80px;
    }

     .newsletter-follow li {
      display: inline-block;
      margin-right: 5px;
    }

    .newsletter-follow li:last-child {
      margin-right: 0px;
    }

     .newsletter-follow li a {
      position: relative;
      display: block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #15161D;
      background-color: #E4E7ED;
      -webkit-transition: 0.2s all;
      transition: 0.2s all;
    }


     .newsletter-follow li a:hover,  .newsletter-follow li a:focus {
      background-color: #15161D;
      color: #D10024;
    }

    #footer{
      margin-top: 250px;
    }
   </style>
  </head>
  <body>

     <!-- navbar -->

     <?php include 'template/navbar_cust.php'; ?>


    

<!-- start: Page Title -->
  <div id="page-title">

    <div id="page-title-inner">

      <!-- start: Container -->
      <div class="container ">

        <h2><i class="fa fa-bar-chart-o" style="padding-right: 10px"></i>Detail Produk</h2>

      </div>
      <!-- end: Container  -->

    </div>  

  </div>
  <!-- end: Page Title -->


<div class="container">
      <?php                  
              $query = mysqli_query($conn, "SELECT * FROM tbl_barang WHERE id='$_GET[kd]'");
              $data  = mysqli_fetch_array($query);
              ?>
            <!--<div class="span4">-->
                <!--<div class="icons-box">-->
                    <div class="hero-unit" style="margin-left: 40px;">
                    <table>
                    <tr>
                        <td rowspan="7"><img src="img/<?php echo $data['gambar']; ?>"  width="150px;" style="margin-right: 20px;"/></td>
                        </tr>
                        <tr>
                        <td colspan="4"><div class="title"><h3><?php echo $data['nama']; ?></h3></div></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td size="200"><h3>Harga</h3></td>
                        <td><h3>:</h3></td>
            <td><div><h3>Rp.<?php echo number_format($data['harga']);?></h3></div></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td><h3>Stock</h3></td>
                        <td><h3>:</h3></td>
                        <td><div><h3><?php if ($data['stock'] >= 1){
                             echo '<strong style="color: blue;">In Stock</strong>'; 
                                } else {
                             echo '<strong style="color: red;">Out Of Stock</strong>';  
                                }; ?></h3></div></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td><h3>Keterangan</h3></td>
                        <td><h3>:</h3></td>
                        <td><div><h3><?php echo $data['keterangan']; ?></h3></div></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td><h3>Petani</h3></td>
                        <td><h3>:</h3></td>
                        <td><div><h3><?php echo $data['petani']; ?></h3></div></td>
                        </tr>
                        <tr>
                        <td></td>
                        <td><h3>Dari</h3></td>
                        <td><h3>:</h3></td>
                        <td><div><h3><?php echo $data['alamat']; ?></h3></div></td>
                        </tr>   
                        <tr>
                        <td></td>
                        <td></td>
                        <td><h3>No.Hp</h3></td>
                        <td><h3>:</h3></td>
                        <td><div><h3><a href="https://wa.me/<?php echo $data['telepon']; ?>"><i class="fa fa-phone"></i>&nbsp;+<?php echo $data['telepon']; ?></a></h3></div></td>
                        </tr> 
                        <tr>
                        <td></td>
                        <td></td>
                        <td><h3></h3></td>
                        <td><h3></h3></td>
                        <td><div><h3>Silahkan klik nomer hp diatas untuk menghubungi petani</h3></div></td>
                        </tr>                  
          <!--  <p>
            
            </p> -->
                        <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <div class="button"> 
                            <a href="cart.php?act=add&amp;barang_id=<?php echo $data['id']; ?>&amp;ref=detailproduk.php?kd=<?php echo $data['id'];?>" class="btn btn-md btn-warning" onclick="konfirmasiDulu()">Beli &raquo;
                            </a>
                          </div>
                        </td>
                        </tr>
     
                    </table>
                    </div>
                    <!--</div> -->
    
</div>



    <!-- --------------------------------------------------Akhir Header-------------------------------------------------- -->
    <!-- trigger the jwpopup -->
    <!-- jwpopup box -->
    <div id="jwpopupBox" class="jwpopup">
      <!-- jwpopup content -->
      <div class="jwpopup-content">
        <div class="jwpopup-head">
          <span class="close">×</span>
          <h2>Keranjang Anda</h2>
        </div>
        <table class="table table-hover table-condensed table-bordered">
                    <tr>
                    <th><center>No</center></th>
          <th><center>Nama</center></th>
          <th><center>Quantity</center></th>
          <th><center>Sub Total</center></th>
        </tr>
                    <?php
        //MENAMPILKAN DETAIL KERANJANG BELANJA//
                
    $total = 0;
    //mysql_select_db($database_conn, $conn);
    if (isset($_SESSION['items'])) {
        foreach ($_SESSION['items'] as $key => $val) {
            $query = mysqli_query($conn, "SELECT id, nama, harga FROM tbl_barang WHERE id = '$key'");
            $data = mysqli_fetch_array($query);

            $jumlah_harga = $data['harga'] * $val;
            $total += $jumlah_harga;
            $no = 1;
            ?>
                <tr>
                <td><center><?php echo $no ++; ?></center></td>
                <td><center><?php echo $data['nama']; ?></center></td>
                <td><center><?php echo number_format($val); ?> Pcs</center></td>
                <td><center>Rp. <?php echo number_format($jumlah_harga); ?></center></td>
                </tr>
                
          <?php
                    //mysql_free_result($query);      
            }
              //$total += $sub;
            }?>
                        <?php
        if($total == 0){ ?>
          <td colspan="4" align="center"><?php echo "Keranjang Kosong!"; ?></td>
        <?php } else { ?>
          
                        <td colspan="4" style="font-size: 18px;"><b><div class="pull-right">Total Belanja Anda : Rp. <?php echo number_format($total); ?>,- </div> </b></td>
          
      <?php }
        ?>
                </table> 
                <p><div align="right">
            <a href="detail.php" class="btn btn-primary">&raquo Details Keranjang &laquo</a>
            </div></p>
            </div>

        </div>
      </div>
    </div>
    <!-- end popup cart -->


    <!-- FOOTER -->
    <?php include 'template/ftr_cust.php'; ?>
    <!-- /FOOTER -->


  </body>


    <script>
      function konfirmasiDulu(){
        alert("Barang sudah masuk keranjang");
      }
    </script>

    <!-- javascript popup cart -->
    <script>
      // untuk mendapatkan jwpopup
      var jwpopup = document.getElementById('jwpopupBox');

      // untuk mendapatkan link untuk membuka jwpopup
      var mpLink = document.getElementById("jwpopupLink");

      // untuk mendapatkan aksi elemen close
      var close = document.getElementsByClassName("close")[0];

      // membuka jwpopup ketika link di klik
      mpLink.onclick = function() {
        jwpopup.style.display = "block";
      }

      // membuka jwpopup ketika elemen di klik
      close.onclick = function() {
        jwpopup.style.display = "none";
      }

      // membuka jwpopup ketika user melakukan klik diluar area popup
      window.onclick = function(event) {
        if (event.target == jwpopup) {
          jwpopup.style.display = "none";
        }
      }
    </script>



    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>