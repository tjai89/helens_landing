class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      redirect_to root_path, notice: 'Contact was successfully created.'
    else
      redirect_to root_path, notice: 'Errors.'
    end
  end
end


