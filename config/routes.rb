Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index, :update]
    resources :images, only: [:create, :index, :show]
    resources :products do
      resources :comments

      member do
        post "like", to: "products#upvote"
        delete "unlike", to: "products#downvote"
      end

    end
  end
  get "*products", to: "static_pages#root"
end
