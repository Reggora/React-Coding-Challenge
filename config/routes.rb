Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :cats, only: [:create, :index, :show, :update, :destroy]
  end
  root "static_pages#root"
  # get '*path', to: 'static_pages#root'
end
