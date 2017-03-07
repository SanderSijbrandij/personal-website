Rails.application.routes.draw do
  # Static pages use the link column as primary key.
  root to: 'static_pages#react_entry'
  resources :static_pages, param: :link, only: [:index, :show]

  devise_for :admins
  namespace :admin do
    root to: 'static_pages#react_entry'
    resources :static_pages, param: :link, only: [:create, :update, :destroy]
  end
end
