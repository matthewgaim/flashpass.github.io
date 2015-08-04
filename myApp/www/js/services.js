angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Disney World',
    lastText: 'Go to the enchanted world',
    face: 'http://beam.la/disneyworld.png',
    rides: ['one', 'two', 'three']
  }, {
    id: 1,
    name: 'Lego Land',
    lastText: 'Welcome to lego land! The land of legos!',
    face: 'http://beam.la/legoland.png'
  }, {
    id: 2,
    name: 'Disney Land',
    lastText: "It's the land of Disney!",
    face: 'https://beam.la/disneyland.png'
  }, {
    id: 3,
    name: 'Great America',
    lastText: 'A part of the great America!',
    face: 'http://beam.la/greatamerica.png'
  }, {
    id: 4,
    name: 'Six Flags',
    lastText: 'There are six flags on our property.',
    face: 'http://beam.la/sixflags.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
