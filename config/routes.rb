Rails.application.routes.draw do
  get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'

  get 'existing', to: 'home#existing'

  get 'heat', to: 'home#heat'

  get 'playbutton', to: 'home#playbutton'

  get 'rivertour', to: 'home#rivertour'

  get 'planned', to: 'home#planned'

  get 'finished', to: 'home#finished'

  get 'bank', to: 'home#bank'

  get 'isochrone', to: 'home#isochrone'

  get 'banksites', to: 'home#banksites'

  get 'resiall', to: 'home#resiall'

  get 'satellite', to: 'home#satellite'

  get 'transit', to: 'home#transit'

  get 'demographic', to: 'home#demographic'

  get 'income', to: 'home#income'

  get 'amenity', to: 'home#amenity'

  get 'bib', to: 'home#bib'

  get 'migration', to: 'home#migration'

  get 'citymodel', to: 'home#citymodel'

#routes for misc folder

  get 'group', to: 'home#group'

  get 'slider', to: 'home#slider'

  get 'play', to: 'misc#play'

  get 'clock', to: 'home#clock'

end
