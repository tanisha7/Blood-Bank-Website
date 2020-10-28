<?php
    session_start();
    
    // db configration
    $server="localhost";
    $username="root";
    $password="";
    $database="blood_bank";
       
    date_default_timezone_set('Asia/Kolkata');
    $con=mysqli_connect($server,$username,$password,$database) or die ("could not connect to mysql");

    // some global value
    $DATETIME_FORMAT="l, M j, Y @ g:ia";
    $HOSTNAME="http://localhost/bbms";
    $COMPANY_NAME="Blood Bank";
    $COMPANY_ADDRESS="Delhi";
    $COMPANY_MOBILE="+91 7838556514";
    $COMPANY_EMAIL="tanisha.mca18.du@gmail.com";

    require_once 'function.php';
?>