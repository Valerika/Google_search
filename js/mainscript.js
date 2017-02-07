'use strict';

$(function(){

    $('.search__form').submit(function(){

        $('ul').remove();

        var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ encodeURIComponent($('#textId').val()) + '&callback=GoogleCallback&context=?';

        $.ajax({
            url: urlFull,
            dataType : "jsonp",

            success: function (data, textStatus) {
                var $divResultsWrapper = $('.results').append('<ul class="results__wrapper"></ul>');

                $.each(data.results, function(i, val) {

                         var $divLinkWrapper = $('.results__wrapper').append('<li class="link__wrapper"></li>');

                         $('.link__wrapper').last().html('<a href="'+val.url+'" title="'+val.url+'" target="_blank" class="link">'+val.title+'</a>' +
                            '<p class="val__url">'+ val.url + '</p>'+
                            '<p class="val__content">'+ val.content + '</p>');
                    }
                );
            },

            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("Status: " + textStatus);
                alert("Error: " + errorThrown);
            }

        });
        return false;
    });

});

function GoogleCallback (func, data) {
    window[func](data);
};

function Human() {
  this.name = 'Mariam';
  this.age = 27;
  this.sex = 'female';
  this.height = 155;
  this.weight = 50;
};

var protoHuman = new Human();

function Worker() {
  this.company = 'Google';
  this.salary = 10000;
  this.work = function() {
    console.log('Get back to work');
  }
};

Worker.prototype = protoHuman;

function Student() {
  this.academy = 'GoIT';
  this.scholarship = 1000;
  this.slack = function() {
    console.log('Watch some video');
  }
};

Student.prototype = protoHuman;

var workerAjmal = new Worker();
var workerSaid = new Worker();
var workerGoro = new Worker();

var studentSam = new Student();
var studentJim = new Student();
var studentBob = new Student();

console.log('workerAjmal name', workerAjmal.name);
console.log('workerSaid age', workerSaid.age);
console.log('workerGoro weight', workerGoro.weight);

console.log('studentSam sex', studentSam.sex);
console.log('studentJim height', studentJim.height);
console.log('studentBob age', studentBob.age);
