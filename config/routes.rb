Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'

  get 'existing', to: 'home#existing'

  get 'planned', to: 'home#planned'

  get 'banksites', to: 'home#banksites'

  get 'layer', to: 'home#layer'

  get 'resiall', to: 'home#resiall'

  get 'satellite', to: 'home#satellite'

  get 'transit', to: 'home#transit'

  get 'demographic', to: 'home#demographic'

  get 'zips', to: 'home#zips'

  get 'amenity', to: 'home#amenity'

  get 'migration', to: 'home#migration'

  get 'comps', to: 'home#comps'

  get 'infrastructure', to: 'home#infrastructure'

  get 'clock', to: 'home#clock'

end
