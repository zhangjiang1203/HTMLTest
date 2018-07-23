<?php 

echo "haha";
// var_dump($_POST);
if (count($_POST) > 0) {
    foreach ($_POST as $key => $value) {
        echo $key,$value;
    }
}
