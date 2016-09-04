class ItemsController < ApplicationController
  respond_to :json

  def index
    @items = Item.all
  end

  def create
  	respond_with Item.create(item_params)
  end

  def update
  	item = Item.find(params["id"])
  	item.update_attributes(item_params)
  	respond_with item, json: item
  end

  def destroy
    respond_with Item.destroy(params[:id])
  end

  private
  def item_params
    params.require(:item).permit(:id, :name, :description)
  end
end