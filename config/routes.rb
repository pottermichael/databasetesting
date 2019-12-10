Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get 'existing', to: 'home#existing'

  get 'planned', to: 'home#planned'

  get 'cbdtour', to: 'home#cbdtour'

  get 'indextwo', to: 'home#indextwo'

  get 'amenity', to: 'home#amenity'

  get 'bike', to: 'home#bike'

  get 'migration', to: 'home#migration'

  get 'isochrone', to: 'home#isochrone'

  get 'transit', to: 'home#transit'

  get 'demographic', to: 'home#demographic'

  get 'satellite', to: 'home#satellite'

  get 'income', to: 'home#income'

  get 'citymodel', to: 'home#citymodel'

  get 'finished', to: 'home#finished'

#routes for misc folder

  get 'group', to: 'home#group'

  get 'slider', to: 'home#slider'

  get 'play', to: 'misc#play'

  get 'clock', to: 'home#clock'

end
