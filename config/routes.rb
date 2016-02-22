Rails.application.routes.draw do
  root "static_pages#root"

  resources :users, except: [:index]
  resource :session, only: [:create, :destroy]

end
