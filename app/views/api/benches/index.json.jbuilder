
# json.array! @benches, :id, :description, :lat, :lng

@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :description, :lat, :lng
  end
end

# entities: {
#   benches: {
#     1: {
#       id: 1,
#       description: "...",
#       lat: 0.0,
#       lng: 0.0
#     },
#     2: {
#       id: 2,
#       description: "...",
#       lat: 0.0,
#       lng: 0.0
#     },
#     3: {
#       id: 3,
#       description: "...",
#       lat: 0.0,
#       lng: 0.0
#     }
#   }
# }