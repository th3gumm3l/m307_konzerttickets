<?php
require 'core/bootstrap.php';

$routes = [
	'/' => 'FormController@formMain',
	'/form' => 'FormController@form',
	'/validateInputForm' => 'FormController@validateInputForm',
	'/list' => 'OrderlistController@orderlist',
	//...
];

$db = [
	'name'     => 'kurseictbz_30714',
	'username' => 'root',
	'password' => '',
];

$router = new Router($routes);
$router->run($_GET['url'] ?? '');