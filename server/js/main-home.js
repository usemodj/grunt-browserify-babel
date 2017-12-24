require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({2:[function(require,module,exports){
"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _messages = require("./messages");

var messages = _interopRequireWildcard(_messages);

var _homeMessages = require("./home-messages");

var homeMessages = _interopRequireWildcard(_homeMessages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var greetingMessage = "Hello there, welcome to our site!";

(0, _jquery2.default)(document).ready(function () {
	(0, _jquery2.default)(".button").on("click", function () {
		homeMessages.generateMessage(greetingMessage);
	});
});

},{"./home-messages":1,"./messages":4,"jquery":5}],1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var homeMessage = "Hi, this message is for Home page.";

var generateMessage = function generateMessage(message) {
	console.log(message);
};

console.log(homeMessage);

exports.generateMessage = generateMessage;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLWhvbWUuanMiLCJqcy9ob21lLW1lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOztJQUFZLFE7O0FBQ1o7O0lBQVksWTs7Ozs7O0FBRVosSUFBSSxrQkFBa0IsbUNBQXRCOztBQUVBLHNCQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVk7QUFDN0IsdUJBQUUsU0FBRixFQUFhLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsWUFBVTtBQUNsQyxlQUFhLGVBQWIsQ0FBNkIsZUFBN0I7QUFDQSxFQUZEO0FBR0EsQ0FKRDs7Ozs7Ozs7QUNOQSxJQUFJLGNBQWMsb0NBQWxCOztBQUVBLElBQUksa0JBQWtCLFNBQWxCLGVBQWtCLENBQVUsT0FBVixFQUFtQjtBQUN4QyxTQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsQ0FGRDs7QUFJQSxRQUFRLEdBQVIsQ0FBWSxXQUFaOztRQUVTLGUsR0FBQSxlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgKiBhcyBob21lTWVzc2FnZXMgZnJvbSBcIi4vaG9tZS1tZXNzYWdlc1wiO1xuXG52YXIgZ3JlZXRpbmdNZXNzYWdlID0gXCJIZWxsbyB0aGVyZSwgd2VsY29tZSB0byBvdXIgc2l0ZSFcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXHQkKFwiLmJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG5cdFx0aG9tZU1lc3NhZ2VzLmdlbmVyYXRlTWVzc2FnZShncmVldGluZ01lc3NhZ2UpO1xuXHR9KTtcbn0pO1xuIiwidmFyIGhvbWVNZXNzYWdlID0gXCJIaSwgdGhpcyBtZXNzYWdlIGlzIGZvciBIb21lIHBhZ2UuXCI7XG5cbnZhciBnZW5lcmF0ZU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn07XG5cbmNvbnNvbGUubG9nKGhvbWVNZXNzYWdlKTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVNZXNzYWdlIH07XG4iXX0=
