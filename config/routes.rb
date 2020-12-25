Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      resources :patients, only: [:index, :create]
      resources :exercises, only: [:index, :create]
    end 
  end 
end
