var map_manager = {
     "map" : null,
     "map_items" : []
}


function loadMapScenario() {
    map_manager.map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
          credentials: 'AjCftuylaha9iD3UV9n2Gwa4DLAzWGoTfDKnqNZJVZzgn4A593v7T7WqWwNDXJYu'
    });
    add_pokemon_layer();
} 
  
  
//1. Define pokemon data format, create pokemon data
map_manager.map_items = [
    {
    "pokemon_id" : 10,
    "expire" : 1476822926,
    "longitude" : -74.4701474,
    "latitude" : 40.52093,
    }
]

function get_count_down_time(epoch){
    var now_time = new Date().getTime() / 1000;
    var cd_time = epoch - now_time;
    var second = Math.floor(cd_time % 60);
    var minute = Math.floor(cd_time /60);
    return minute + ":" + second;  
}

//2. Create pokemon image on map
function get_pokemon_layer(map_items){
     var pushpins = []
     var layer = new Microsoft.Maps.Layer();
     for(var i in map_items){
        var map_item = map_items[i];
        var pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(map_item["latitude"], map_item["longitude"]), 
                                                 { icon: 'images/pushpin_images/pokemon/' + map_item['pokemon_id'] +'.png',
                                                   title: get_count_down_time(map_item['expire'])});
       pushpins.push(pushpin);
     } 
     layer.add(pushpins);
     return layer;
}

function add_pokemon_layer(){
    var pokemon_layer = get_pokemon_layer(map_manager.map_items)
    map_manager.map.layers.insert(pokemon_layer);
}


//3. Countdown refresh
function refresh_pokemon_layer(){
  //create new layer
  var pokemon_layer = get_pokemon_layer(map_manager.map_items)
  //remove previous layer
  map_manager.map.layers.clear()
  //add new layer
  map_manager.map.layers.insert(pokemon_layer);
}

//4. Connect with REST api


window.setInterval(refresh_pokemon_layer, 1000)
