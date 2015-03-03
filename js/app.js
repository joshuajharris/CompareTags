var app = angular.module('CompareTagsApp', []);

app.controller('TagController', function(){
    this.tags = tagData;
});

var tagData = [
    {'name': '#javascript', 'count': '43,785'},
    {'name': '#python', 'count': '27,792'},
    {'name': '#ruby', 'count': '20,000'}
];
