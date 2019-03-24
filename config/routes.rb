Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'

  get 'history', to: 'home#history'

  get 'amenity', to: 'home#amenity'

  get 'migration', to: 'home#migration'

  get 'comps', to: 'home#comps'

  get 'apartment', to: 'home#apartment'

  get 'inventory', to: 'home#inventory'

  get 'infrastructure', to: 'home#infrastructure'

  get 'timeseries', to: 'home#timeseries'

  get 'locator', to: 'home#locator'

end
