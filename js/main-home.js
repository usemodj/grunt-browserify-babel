import $ from "jquery";
import * as messages from "./messages";
import * as homeMessages from "./home-messages";

var greetingMessage = "Hello there, welcome to our site!";

$(document).ready(function () {
	$(".button").on("click", function(){
		homeMessages.generateMessage(greetingMessage);
	});
});
