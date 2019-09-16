@cats.each do |cat|
  json.set! cat.id do
    json.partial! '/api/cats/cat', cat: cat
  end
end