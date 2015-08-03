angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Disney World',
    lastText: 'Go to the enchanted world',
    face: 'http://4alltravelers.madadventuresinc.netdna-cdn.com/wp-content/uploads/2015/04/disney-world-walt-disney-world-34101377-500-334.jpg'
  }, {
    id: 1,
    name: 'Lego Land',
    lastText: 'Welcome to lego land! The land of legos!',
    face: 'http://www.legoland.com.my/Global/LEGOLAND%20MY/2012/Explore/Activities/The%20Beginning/LEGOLANDArc2%20resize.jpg'
  }, {
    id: 2,
    name: 'Disney Land',
    lastText: "It's the land of Disney!",
    face: 'https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/900/360/90/wdpromedia.disney.go.com/media/wdpro-assets/dlr/parks-and-tickets/destinations/disneyland-park/disneyland-00-full.jpg?15052013102112'
  }, {
    id: 3,
    name: 'Great America',
    lastText: 'A part of the great America!',
    face: 'http://brotherrice.org/wp-content/uploads/2012/09/Six_Flags_Great_America.jpeg'
  }, {
    id: 4,
    name: 'Six Flags',
    lastText: 'There are six flags on our property.',
    face: 'http://www3.nd.edu/~class10/Class%20of%202010/Six%20Flags_files/2004042511484000_six-flags-trip-4-25-2004-078.png'
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
