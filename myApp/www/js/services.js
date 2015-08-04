angular.module('starter.services', [])

.factory('Chats', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var chats = [{
        id: 0,
        name: 'Disney World',
        lastText: 'Go to the enchanted world',
        face: 'http://beam.la/disneyworld.png',
        //rides: ['one', 'two', 'three'],
        ride1: 'Magic Kingdom',
        ride2: 'Astro Orbiter',
        ride3: 'Cinderella Castle'
  }, {
        id: 1,
        name: 'Lego Land',
        lastText: 'Welcome to lego land! The land of legos!',
        face: 'http://beam.la/legoland.png',
        ride1: 'Sky Cruiser',
        ride2: 'Sky Patrol',
        ride3: 'Beetle Bounce'
  }, {
        id: 2,
        name: 'Disney Land',
        lastText: "It's the land of Disney!",
        face: 'http://beam.la/disneyland.png',
        ride1: 'Haunted Mansion',
        ride2: 'Splash Mountain',
        ride3: 'Space Mountain'
  }, {
        id: 3,
        name: 'Great America',
        lastText: 'A part of the great America!',
        face: 'http://beam.la/greatamerica.png',
        ride1: 'Flight Deck',
        ride2: 'Vortex',
        ride3: 'Tiki Twirl'
  }, {
        id: 4,
        name: 'Six Flags',
        lastText: 'There are six flags on our property.',
        face: 'http://beam.la/sixflags.png',
        ride1: 'Batman',
        ride2: 'Apocalypse',
        ride3: 'Gren Lantern'
  }];

    return {
        all: function () {
            return chats;
        },
        remove: function (chat) {
            chats.splice(chats.indexOf(chat), 1);
        },
        get: function (chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }
    };
});