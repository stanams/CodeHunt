Rails.application.routes.draw do
  root "static_pages#root"

namespace :api, default: {format: :json} do
  resources :users, only: [:index, :new, :create]
  resource :session, only: [:create, :destroy]
  resources :products
end

end
