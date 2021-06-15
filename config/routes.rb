Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :links, only: [:index, :create, :update], param: :slug
  get 'links/:slug', to: 'links#show'
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
