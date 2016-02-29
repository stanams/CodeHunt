Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index]
    resources :products do
      resources :comments

      member do
        put "like", to: "products#upvote"
        put "dislike", to: "products#downvote"
      end

    end
  end
  get "*products", to: "static_pages#root"
end


# put "api/poducts/like"
