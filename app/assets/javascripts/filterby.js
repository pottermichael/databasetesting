// function to filter by year. Create variables to filter year and filtering by type, then apply variables to set the filter
function filterBy(year) {
  var filterYear = ['<=',['number',['get','Year']], year];
  var filterType = ['!=', ['string', ['get', 'Type']], 'placeholder'];
    map.setFilter('residential-circles', filterYear);
    map.setFilter('residential-labels', filterYear);
}
