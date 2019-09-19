json.extract! cat,
    :id,
    :name,
    :description,
    :breed,
    :age,
    :weight,
    :image_url,
    :created_at

if cat.photo.attached?
  json.photo url_for(cat.photo)
end