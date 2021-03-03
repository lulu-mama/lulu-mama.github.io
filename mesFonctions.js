function initialize() {
		// création de la carte et paramétrage général : centre et niveau de zoom
        var map = L.map('mapid').setView([47.55, -1.5333], 12);
 
		// création d'une couche "osmLayer"
        var osmLayer = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        });
		    
		// la couche "osmLayer" est ajoutée à la carte		
        map.addLayer(osmLayer);
		
		/* // création d'une couche geoJson qui appelle le fichier "arrondissement.geojson"			
		var arrondissement = $.getJSON("arrondissement.geojson",function(dataArrondissement)
					{L.geoJson( dataArrondissement, 
						{style: function(feature)
							{	
							// paramétrage de la symbologie de la couche "arrondissement"
							return { color: "#046380", weight: 1, fillColor: '#4BB5C1', fillOpacity: .1 };
							},
		onEachFeature: function( feature, layer )
				{
				// paramétrage de la popup de la couche "arrondissement"
				if ([1, 4, 5, 6, 7, 8, 12, 13, 15, 16, 20].includes(feature.properties.c_ar)){ 
					layer.bindPopup( "<b><u>Touche la Seine</u></b>")
				}else{
					layer.bindPopup( "<b><u>Touche pas la Seine</u></b>")
				}
				}
		}).addTo(map);
		}); */
		
		// création d'une couche geoJson qui appelle le fichier "Cadastre_Nantes_44100.geojson"			
		var parcelle = $.getJSON("Cadastre_Nantes_44100.geojson",function(dataParcelle)
					{L.geoJson( dataParcelle, 
						{style: function(feature)
							{	
							// paramétrage de la symbologie de la couche "arrondissement"
							return { color: "#046380", weight: 1, fillColor: '#4BB5C1', fillOpacity: .05 };
							},
		onEachFeature: function( feature, layer )
				{
				// paramétrage de la popup de la couche "parcelle"
				if (feature.properties.numero % 2 == 0){ 
					layer.bindPopup( "<b><u>Numero pair</u></b>")
				}else{
					layer.bindPopup( "<b><u>Numero impair</u></b>")
				}
				}
		}).addTo(map);
		});
																		

}