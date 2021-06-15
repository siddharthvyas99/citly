class LinksController < ApplicationController
  require "securerandom"
  
  skip_before_action :verify_authenticity_token

  before_action :generate_slug, :shortened_url, only: :create
  before_action :load_link, only: [:show, :update]

  def index
    links = Link.all.order(is_pinned: :desc, created_at: :desc)
    render status: :ok, json: { links: links }
  end

  def create
    @link = Link.new(link_params)
    if @link.save
      render status: :ok, json: { notice: t('successfully_created') }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors  }
    end
  end

  def show
    @link.update_attribute(:clicked, @link.clicked + 1)
    if @link.save
      render status: :ok, json: { link: @link }
    else
      errors = @link.errors.full_messages
      render status: :unprocessable_entity, json: { errors: errors }
    end
  end

  def update
    @link.update_attribute(:is_pinned, !@link.is_pinned)
    render status: :ok, json: {
      message: 'Link has been pin to top'
    }

  end
  
  private

  def link_params
    params.require(:link).permit(:original_url)
      .merge(slug: @slug, shortened_url: @shortened_url)
  end

  def load_link
    @link = Link.find_by_slug(params[:slug])
    render json: {errors: 'No link found'} unless @link
    rescue ActiveRecord::RecordNotFound => errors
      render json: {errors: errors}
  end

  def generate_slug
    @slug = SecureRandom.hex(4)
    link = Link.find_by(slug: @slug)
    generate_slug() if link
  end

  def shortened_url
    @shortened_url = "#{request.base_url}/#{@slug}"
  end
end
