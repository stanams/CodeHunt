Rails.application.routes.draw do
  root "static_pages#root"

  resources :users, only: [:index, :new, :create]
  resource :session, only: [:create, :destroy]

  namespace :api, default: {format: :json} do
    resources :products
  end

end
