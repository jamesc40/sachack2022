Rails.application.routes.draw do

  resources :missing_person_data
  resources :users, only: [:show, :create, :destroy]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  get '/validate-user', to: 'users#show'
  
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"
end
