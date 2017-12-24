'use strict';

(function() {

  class websiteMsgController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      $scope.dd = "ddd";

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          console.log(this.awesomeThings)
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    /**
     * 增加一条信息
     */
    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

angular.module('sitNavApp.admin')
    .controller('websiteMsg', websiteMsgController);
})();
