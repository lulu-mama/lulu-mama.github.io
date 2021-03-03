function initialize() {
		// création de la carte et paramétrage général : centre et niveau de zoom
        var map = L.map('mapid').setView([48.862162, 2.345818], 12);
 
		// création d'une couche "osmLayer"
        var osmLayer = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        });
		    
		// la couche "osmLayer" est ajoutée à la carte		
        map.addLayer(osmLayer);
		

		// création d'une couche geoJson qui appelle le fichier "arrondissement.geojson"			
		var parcelle = $.getJSON("Cadastre_Nantes_44100.geojson",function(dataParcelle)
					{L.geoJson( dataParcelle, 
						{style: function(feature)
							{	
							// paramétrage de la symbologie de la couche "arrondissement"
							return { color: "#046380", weight: 0, fillColor: '#4BB5C1', fillOpacity: 0 };
							},
		onEachFeature: function( feature, layer )
				{
				// paramétrage de la popup de la couche "parcelle"
				if (feature.properties.numero % 2 == 0)){ 
					layer.bindPopup( "<b><u>Numero pair</u></b>")
				}else{
					layer.bindPopup( "<b><u>Numero impair</u></b>")
				}
				}
		}).addTo(map);
		});
																		

}