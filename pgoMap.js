var map;
  function loadMapScenario() {
      map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
          credentials: 'AjCftuylaha9iD3UV9n2Gwa4DLAzWGoTfDKnqNZJVZzgn4A593v7T7WqWwNDXJYu'
      });
      add_pokemon_layer();
  } 
  
  
//1. Define pokemon data format, create pokemon data
map_items = [
    {
    "pokemon_id" : 10,
    "expire" : 123456778,
    "longitude" : -74.4701474,
    "latitude" : 40.52093,
    }
]

//2. Create pokemon image on map
function get_pokemon_layer(map_items){
     var pushpins = []
     var layer = new Microsoft.Maps.Layer();
     for(var i in map_items){
        var map_item = map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                                 { icon: '/images/pushpin_images/pokemon/' + map_item["pokemon_id"] +'.png',
                                                   title: "expiration_time"});
       pushpins.push(pushpin);
     } 
     layer.add(pushpins);
     return layer;
}

function add_pokemon_layer(){
    var pokemon_layer = get_pokemon_layer(map_items)
    map.layers.insert(pokemon_layer);
}


//3. Countdown refresh


//4. Connect with rest api
