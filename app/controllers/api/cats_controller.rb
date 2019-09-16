class Api::CatsController < ApplicationController
    def index
        @cats = Cat.all
    end

    def create
        @cat = Cat.new(cat_params)
        if @cat.save
            render :show
        else
            render json: @cat.errors.full_messages, status: 401
        end
    end

    def show
        @cat = Cat.find(params[:id])
        render :show
    end

    def update
        @cat = Cat.find(params[:id])
        if @cat.update(cat_params)
          render :show
        else
          render json: @cat.errors.full_messaages, status: 401
        end
      end

    def destroy
        @cat = Cat.find(params[:id])
        @cat.destroy
        render :show
    end

    private
    
    def cat_params
        params.require(:cat).permit(:name, :description, :breed, :age, :weight, :image_url, :photo)
    end
end