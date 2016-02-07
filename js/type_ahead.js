
$(document).ready(function(){

  var resorts = ['Sugar Bowl', 'Soda Springs', 'Donner Ski Ranch', 'Tahoe Donner', 'Northstar', 'Diamond Peak',
      'Mt. Rose', 'Squaw Valley', 'Alpine Meadows'
  ];

  $('.typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  { source: resorts });

  console.log('typeahead init');

});



