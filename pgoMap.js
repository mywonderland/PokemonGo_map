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
     var pushpins = Microsoft.Maps.TestDataGenerator.getPushpins(10, map.getBounds());
     var layer = new Microsoft.Maps.Layer();
     layer.add(pushpins);
     return layer;
}

function add_pokemon_layer(){
    var pokemon_layer = get_pokemon_layer(map_items)
    map.layers.insert(pokemon_layer);
}


//3. Countdown refresh


//4. Connect with rest api
