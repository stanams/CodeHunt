Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, default: {format: :json} do
    resources :users, only: [:show, :index]
    resources :products do
      resources :comments

      member do
        put "like", to: "links#upvote"
        put "dislike", to: "links#downvote"
      end

    end
  end
  get "*products", to: "static_pages#root"
end
