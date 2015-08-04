angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats,  $ionicPopup, $timeout) {
    $scope.chat = Chats.get($stateParams.chatId);
    var cash = 13;
    //alert(cash);
    $scope.dadopecash = cash;

    // An alert dialog

    /*
      $scope.zero = [
    {'ride' : 'Nexus S'},
    {'ride' : 'Motorola XOOM with WiFi'},
    {'ride' : 'Motoral XOOMIZOOM'}
  ];
        $scope.one = [
    {'ride' : 'Nexus S'},
    {'ride' : 'Motorola XOOM with WiFi'},
    {'ride' : 'Motoral XOOMIZOOM'}
  ];
        $scope.two = [
    {'ride' : 'Nexus S'},
    {'ride' : 'Motorola XOOM with WiFi'},
    {'ride' : 'Motoral XOOMIZOOM'}
  ];
        $scope.three = [
    {'ride' : 'Nexus S'},
    {'ride' : 'Motorola XOOM with WiFi'},
    {'ride' : 'Motoral XOOMIZOOM'}
  ];
            $scope.four = [
    {'ride' : 'Nexus S'},
    {'ride' : 'Motorola XOOM with WiFi'},
    {'ride' : 'Motoral XOOMIZOOM'}
  ];
  */
 
    $scope.showPopup = function () {
        cash--;
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            
            template: '<center><h5>Welcome to {{chat.ride1}}!</h5><p>You may now skip all the lines and show this app for confirmation.</p><img src="http://beam.la/qrcode.png"></center>',
//            title: 'Welcome to {{chat.ride1}}!',
//            subTitle: 'You may now skip all the lines and show this app for confirmation.',
            cssClass: 'popup',
            scope: $scope,
            /*buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: '<b>Confirm?</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
       },
     ]*/
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 5000);
    };
    $scope.showPopup2 = function () {
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<center><h5>Welcome to {{chat.ride2}}!</h5><p>You may now skip all the lines and show this app for confirmation.</p><img src="http://beam.la/qrcode.png"></center>',
//            title: 'Welcome to {{chat.ride2}}!',
//            subTitle: 'You may now skip all the lines and show this app for confirmation.',
            cssClass: 'popup',
            scope: $scope,
            /*buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: '<b>Confirm?</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
       },
     ]*/
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 5000);
    };
    $scope.showPopup3 = function () {
        $scope.data = {}

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<center><h5>Welcome to {{chat.ride3}}!</h5><p>You may now skip all the lines and show this app for confirmation.</p><img src="http://beam.la/qrcode.png"></center>',
//            title: 'Welcome to {{chat.ride3}}!',
//            subTitle: 'You may now skip all the lines and show this app for confirmation.',
            cssClass: 'popup',
            scope: $scope,
            /*buttons: [
                { 
                    text: 'Cancel'
                },
                {
                    text: '<b>Confirm?</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            //don't allow the user to close unless he enters wifi password
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
       },
     ]*/
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 5000);
    };
    // A confirm dialog
    $scope.showConfirm = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Consume Ice Cream',
            template: 'Are you sure you want to eat this ice cream?'
        });
        confirmPopup.then(function (res) {
            if (res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    };

    $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'You may skip this line!',
            template: 'This user successfully skipped the line'
        });
        alertPopup.then(function (res) {
            console.log('Thank you for not eating my delicious ice cream cone');
        });
    };
    
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});