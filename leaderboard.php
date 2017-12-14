<?php

	if (isset($_POST['username']) && isset($_POST['ipaddress']) && isset($_POST['highscore'])){

		$xml = new DomDocument("1.0", "UTF-8");
		$xml->load("users.xml");
		
		$username = $_POST["username"];
		$ipaddress = $_POST["ipaddress"];
		$highscore = $_POST["highscore"];
		
		// Create New Nodes
		$userTag = $xml->createElement("USER");
		$userTag = $xml->documentElement->appendChild($userTag);
		
		$usernameTag = $xml->createElement("USERNAME", $username);
		$usernameTag = $userTag->appendChild($usernameTag);

		$ipAddressTag = $xml->createElement("IPADDRESS", $ipaddress);
		$ipAddressTag = $userTag->appendChild($ipAddressTag);

		$highScoreTag = $xml->createElement("HIGHSCORE", $highscore);
		$highScoreTag = $userTag->appendChild($highScoreTag);
		
		// Save XML
		$xml->FormatOutput = true;
		$string_value = $xml->saveXML();
		$xml->save("users.xml");

	}
	
?>