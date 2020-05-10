<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];




$servername = "localhost";
$username = "id10866683_root";
$password = "password";
$dbname = "id10866683_db1";
$custtablename = "customer_details";
$querytablename = "query_details";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else{
    echo "Connected successfully";
    $x = checkValidity($name, $email, $phone);
    if($x != null){
        echo "<script type='text/javascript'>alert('$x');</script>";
        die("Error: Wrong Input Fields: $x");
    }
    else{
        $cid = findcustomer($name, $email, $phone);
        $qid = getnewqueryID();
        $date = date("Y-m-d");

        $sql_insert = "INSERT INTO `$dbname`.`$querytablename`(`queryID`, `custID`, `message`, `date`) VALUES('$qid','$cid','$message','$date')";
        if ($conn->query($sql_insert) === TRUE) {
            echo "new query created successfully";
            require 'phpmailer/PHPMailerAutoload.php';
    
            $mailto = $email;;
            $mailSub =  "EventBlizz";
            $mailMSG = "Thanks For Contacting EventBlizz............We will contact you soon";
        
            // require '../Contact/PHPMailer-master/PHPMailerAutoload.php';
            $mail = new PHPMailer();
            $mail ->Port = 587;
            // $mail->isSMTP();
            $mail ->SMTPAuth = true;
            $mail ->SMTPSecure ='tls' ;
            $mail ->Username = "incognitoking69@gmail.com";
            $mail ->Password = "kingsdick6969";
            
            $mail ->SetFrom("incognitoking69@gmail.com");
            $mail ->AddAddress($mailto);
            $mail ->addReplyTo($email,$name);
            $mail ->Host = "smtp.gmail.com";
            
            $mail ->IsHTML(true);
            $mail ->Subject = $mailSub;
            $mail ->Body = $mailMSG;
        
            if(! $mail ->Send())
            {
                echo "Mail to customer Not Send";
            }
            else
            {
                echo "mail to customer sent";
                // $output = "Thanks for contacting us. We will get back to you soon";
            }
            $mailto = 'incognitoking69@gmail.com';;
            $mailSub =  "EventBlizz";
            $mailMSG = $name . " tried to contact you from you site " . $phone ." ". $email.". ";
        
            // require '../Contact/PHPMailer-master/PHPMailerAutoload.php';
            $mail = new PHPMailer();
            $mail ->Port = 587;
            // $mail->isSMTP();
            $mail ->SMTPAuth = true;
            $mail ->SMTPSecure ='tls' ;
            $mail ->Username = "incognitoking69@gmail.com";
            $mail ->Password = "kingsdick6969";
            
            $mail ->SetFrom("incognitoking69@gmail.com");
            $mail ->AddAddress($mailto);
            $mail ->addReplyTo($_POST['email'],$_POST['name']);
            $mail ->Host = "smtp.gmail.com";
            
            $mail ->IsHTML(true);
            $mail ->Subject = $mailSub;
            $mail ->Body = $mailMSG;
        
            if(! $mail ->Send())
            {
                echo "Mail to customer Not Send";
            }
            else
            {
                echo "mail to customer sent";
                // $output = "Thanks for contacting us. We will get back to you soon";
            }
            $conn->close();
            // $uri="../Contact/contact.php";
            // header('Location:'.$uri);
            // // print 'success';
        } 
        else {
            die( "Error: " . $sql_insert . "<br>" . $conn->error);
        }
    }    
}


function getnewqueryID(){
    $servername = "localhost";
    $username = "id10866683_root";
    $password = "password";
    $dbname = "id10866683_db1";
    $querytablename = "query_details";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    else{
        echo "Connected successfully";
    }

    $sql_search = "SELECT * FROM `$dbname`.`$querytablename` ORDER BY `queryID` DESC LIMIT 1";

    $result = $conn->query($sql_search);
    $row = mysqli_fetch_array($result);

    if($row != null)
        $qid = $row[0];
    else    
        $qid = 00001;

    $qid += 1;

    
    return $qid;




    // $result = $conn->query($sql_search);

    // if ($result->num_rows > 0) {
    //     while($row = $result->fetch_assoc() ) {
    //         echo "Last Customer found"."<br>";
    //         $qid = $row["queryID"];
    //     }
    //     $qid += 1;
    //     return $qid;
    // }
    // else{
    //     return 00001;   
    // }
 }


function getnewcustID($name, $email, $phone){
    $servername = "localhost";
    $username = "id10866683_root";
    $password = "password";
    $dbname = "id10866683_db1";
    $custtablename = "customer_details";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    else{
        echo "Connected successfully";
    }

    $x = checkValidity($name, $email, $phone);
    if($x != null)
    {
        echo "<script type='text/javascript'>alert('$x');</script>";
        die("Error: Wrong Input Fields: $x");
    }
    else{
        $sql_search = "SELECT * FROM `$dbname`.`$custtablename`  ORDER BY `custID` DESC  LIMIT 1";

        $result = $conn->query($sql_search);
        $row = mysqli_fetch_array($result);
        if (!$result) {
            printf("Error: %s\n", mysqli_error($conn));
            exit();
        }
        if($row != null)
            $cid = $row[0];
        else    
            $cid = 00000;
        
        $cid += 1;

        $sql_insert = "INSERT INTO `$dbname`.`$custtablename`(`custID`, `name`, `email`, `phone`) VALUES('$cid','$name','$email','$phone')";
        if ($conn->query($sql_insert) === TRUE) {
            echo "new query created successfully";
            return $cid;  
        } 
        else {
            die( "Error: " . $sql_insert . "<br>" . $conn->error);
        }






        
        return $cid;
    





        // $result = $conn->query($sql_search);

        // if ($result->num_rows > 0) {
        //     while($row = $result->fetch_assoc() ) {
        //         echo "Last Customer found"."<br>";
        //         $cid = $row["custID"];
        //     }
        //     $cid += 1;
        //     return $cid;
        // }
        // else{
        //     return 00001;
        // }
    }
}

function findcustomer($name, $email, $phone)
{
    $servername = "localhost";
    $username = "id10866683_root";
    $password = "password";
    $dbname = "id10866683_db1";
    $custtablename = "customer_details";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    else{
        echo "Connected successfully";
    }

    $sql_search = "SELECT * FROM `$dbname`.`$custtablename` WHERE `name` = '$name' && `email` = '$email' && `phone`= '$phone' COLLATE NO CASE";

    $result = $conn->query($sql_search);
    $row = mysqli_fetch_array($result);

    if($row != null)
        $cid = $row[0];
    else    
        $cid = getnewcustID($name, $email, $phone);
    
    return $cid;






    // $result = $conn->query($sql_search);

    // if ($result->num_rows > 0) {
    //     while($row = $result->fetch_assoc() ) {
    //         echo "Last Customer found"."<br>";
    //         $cid = $row["custID"];
    //     }
    //     return $cid ;
    // }
    // else{
    //     return getnewcustID($name, $email, $phone);
    // }
}

function checkValidity($name, $email, $phone){
    $servername = "localhost";
    $username = "id10866683_root";
    $password = "password";
    $dbname = "id10866683_db1";
    $tablename = "customer_details";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    else{
        echo "Connected successfully";
    }

    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
        $nameErr = "Only letters and white space allowed";
        return $nameErr;
      }
    elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
        return $emailErr;
    }
    elseif(!preg_match('/^[0-9]{3}[0-9]{3}[0-9]{4}$/', $phone))
    {
        $error = 'Invalid Number!';
        return $error;
    }
    else
    {
        return null;

    }
}


?>
