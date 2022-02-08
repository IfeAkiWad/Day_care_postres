Rails.application.routes.draw do

    resources :toddlers

    resources :daycares, only: [:index, :show] do
      resources :toddlers
    end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
