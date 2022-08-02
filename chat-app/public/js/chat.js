$(function() {
    var FADE_TIME = 150; // ms

    // Initialize variables
    var $window = $(window);
    var $usernameInput = $('.usernameInput'); // Input for username
    var $messages = $('.messages'); // Messages area
    var $inputMessage = $('.inputMessage'); // Input message input box
  
    var $loginPage = $('.login.page'); // The login page
    var $chatPage = $('.chat.page'); // The chat page
  
    // Prompt for setting a username
    var username;
    var $currentInput = $usernameInput.focus();
    
    var socket = io();
    // Sets the client's username
    function setUsername () {
      username = $usernameInput.val();

      if(username){
        $loginPage.fadeOut();
        $chatPage.show();

        socket.emit('add user', username)
      }
    }
  
    // Sends a chat message
    function sendMessage () {
        var message = $inputMessage.val();

        if(message){
          $inputMessage.val('');
          addChatMessage({
            username: username,
            message: message
          });
          socket.emit('new message', message);
        }
    }
  
    // Log a message
    function log (message, options) {
      var $el = $('<li>').addClass('log').text(message);
      addMessageElement($el, options);
    }
  
    // Adds the visual chat message to the message list
    function addChatMessage (data, options) {
  
      var $usernameDiv = $('<span class="username"/>').text(data.username);
      var $messageBodyDiv = $('<span class="messageBody">').text(data.message);
  
      var $messageDiv = $('<li class="message"/>')
        .data('username', data.username)
        .append($usernameDiv, $messageBodyDiv);
  
      addMessageElement($messageDiv, options);
    }
  
    // Adds a message element to the messages and scrolls to the bottom
    // el - The element to add as a message
    // options.fade - If the element should fade-in (default = true)
    // options.prepend - If the element should prepend
    //   all other messages (default = false)
    function addMessageElement (el, options) {
      var $el = $(el);
  
      // Setup default options
      if (!options) {
        options = {};
      }
      if (typeof options.fade === 'undefined') {
        options.fade = true;
      }
      if (typeof options.prepend === 'undefined') {
        options.prepend = false;
      }
  
      // Apply options
      if (options.fade) {
        $el.hide().fadeIn(FADE_TIME);
      }
      if (options.prepend) {
        $messages.prepend($el);
      } else {
        $messages.append($el);
      }
      $messages[0].scrollTop = $messages[0].scrollHeight;
    }
  
    // Keyboard events
    $window.keydown(function (event) {
      // Auto-focus the current input when a key is typed
      if (!(event.ctrlKey || event.metaKey || event.altKey)) {
        $currentInput.focus();
      }
      // When the client hits ENTER on their keyboard
      if (event.which === 13) {
        if (username) {
          sendMessage();
        } else {
          setUsername();
        }
      }
    });

    socket.on('new message', function(data){
      console.log(data);
      addChatMessage(data);
    });

    socket.on('user joined', function(data){
      console.log(data.username);
      log(data.username + ' joined');
    });
  });
  