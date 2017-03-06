Rails.application.routes.draw do
  root to: 'static_pages#react_entry'

  # Static pages use the link column as primary key.
  resources :static_pages, param: :link
end
