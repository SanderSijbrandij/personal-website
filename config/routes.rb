Rails.application.routes.draw do
  root to: 'static_pages#react_entry'
  resources :static_pages, param: :link, only: [:index, :show]
  resources :projects, only: [:index]

  devise_for :admins
  namespace :admin do
    root to: 'static_pages#react_entry'
    resources :static_pages, param: :link, only: [:create, :update, :destroy]
    resources :projects, only: [:create, :update, :destroy]
  end
end
