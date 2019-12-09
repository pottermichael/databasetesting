// old code from year and type filter. Keeping for reference changed to "filterBye"
// function to filter by year. Create variables to filter year and filtering by type, then apply variables to set the filter
function filterBye(year) {
  var filterYear = ['<=',['number',['get','Year']], year];
  var filterType = ['!=', ['string', ['get', 'Type']], 'placeholder'];
    map.setFilter('property-circles', filterYear);
    map.setFilter('property-labels', filterYear);
}
