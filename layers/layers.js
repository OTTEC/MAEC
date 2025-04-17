var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_Parcellescadastrales_1 = new ol.format.GeoJSON();
var features_Parcellescadastrales_1 = format_Parcellescadastrales_1.readFeatures(json_Parcellescadastrales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcellescadastrales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcellescadastrales_1.addFeatures(features_Parcellescadastrales_1);
var lyr_Parcellescadastrales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcellescadastrales_1,
maxResolution:6.160982553497632,
 
                style: style_Parcellescadastrales_1,
                popuplayertitle: 'Parcelles cadastrales',
                interactive: true,
                title: '<img src="styles/legend/Parcellescadastrales_1.png" /> Parcelles cadastrales'
            });
var format_Plantesfibres_2 = new ol.format.GeoJSON();
var features_Plantesfibres_2 = format_Plantesfibres_2.readFeatures(json_Plantesfibres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plantesfibres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plantesfibres_2.addFeatures(features_Plantesfibres_2);
var lyr_Plantesfibres_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plantesfibres_2,
maxResolution:6.160982553497632,
 
                style: style_Plantesfibres_2,
                popuplayertitle: 'Plantes à fibres',
                interactive: true,
                title: '<img src="styles/legend/Plantesfibres_2.png" /> Plantes à fibres'
            });
var format_Protagineux_3 = new ol.format.GeoJSON();
var features_Protagineux_3 = format_Protagineux_3.readFeatures(json_Protagineux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protagineux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Protagineux_3.addFeatures(features_Protagineux_3);
var lyr_Protagineux_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Protagineux_3,
maxResolution:6.160982553497632,
 
                style: style_Protagineux_3,
                popuplayertitle: 'Protéagineux',
                interactive: true,
                title: '<img src="styles/legend/Protagineux_3.png" /> Protéagineux'
            });
var format_Autresolagineux_4 = new ol.format.GeoJSON();
var features_Autresolagineux_4 = format_Autresolagineux_4.readFeatures(json_Autresolagineux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autresolagineux_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autresolagineux_4.addFeatures(features_Autresolagineux_4);
var lyr_Autresolagineux_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autresolagineux_4,
maxResolution:6.160982553497632,
 
                style: style_Autresolagineux_4,
                popuplayertitle: 'Autres oléagineux',
                interactive: true,
                title: '<img src="styles/legend/Autresolagineux_4.png" /> Autres oléagineux'
            });
var format_Tournesol_5 = new ol.format.GeoJSON();
var features_Tournesol_5 = format_Tournesol_5.readFeatures(json_Tournesol_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tournesol_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tournesol_5.addFeatures(features_Tournesol_5);
var lyr_Tournesol_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tournesol_5,
maxResolution:6.160982553497632,
 
                style: style_Tournesol_5,
                popuplayertitle: 'Tournesol',
                interactive: true,
                title: '<img src="styles/legend/Tournesol_5.png" /> Tournesol'
            });
var format_Colza_6 = new ol.format.GeoJSON();
var features_Colza_6 = format_Colza_6.readFeatures(json_Colza_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colza_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colza_6.addFeatures(features_Colza_6);
var lyr_Colza_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colza_6,
maxResolution:6.160982553497632,
 
                style: style_Colza_6,
                popuplayertitle: 'Colza',
                interactive: true,
                title: '<img src="styles/legend/Colza_6.png" /> Colza'
            });
var format_Autrescrales_7 = new ol.format.GeoJSON();
var features_Autrescrales_7 = format_Autrescrales_7.readFeatures(json_Autrescrales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autrescrales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autrescrales_7.addFeatures(features_Autrescrales_7);
var lyr_Autrescrales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autrescrales_7,
maxResolution:6.160982553497632,
 
                style: style_Autrescrales_7,
                popuplayertitle: 'Autres céréales',
                interactive: true,
                title: '<img src="styles/legend/Autrescrales_7.png" /> Autres céréales'
            });
var format_Orge_8 = new ol.format.GeoJSON();
var features_Orge_8 = format_Orge_8.readFeatures(json_Orge_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Orge_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Orge_8.addFeatures(features_Orge_8);
var lyr_Orge_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Orge_8,
maxResolution:6.160982553497632,
 
                style: style_Orge_8,
                popuplayertitle: 'Orge',
                interactive: true,
                title: '<img src="styles/legend/Orge_8.png" /> Orge'
            });
var format_Divers_9 = new ol.format.GeoJSON();
var features_Divers_9 = format_Divers_9.readFeatures(json_Divers_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divers_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divers_9.addFeatures(features_Divers_9);
var lyr_Divers_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Divers_9,
maxResolution:6.160982553497632,
 
                style: style_Divers_9,
                popuplayertitle: 'Divers',
                interactive: true,
                title: '<img src="styles/legend/Divers_9.png" /> Divers'
            });
var format_Lgumesoufleurs_10 = new ol.format.GeoJSON();
var features_Lgumesoufleurs_10 = format_Lgumesoufleurs_10.readFeatures(json_Lgumesoufleurs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgumesoufleurs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgumesoufleurs_10.addFeatures(features_Lgumesoufleurs_10);
var lyr_Lgumesoufleurs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgumesoufleurs_10,
maxResolution:6.160982553497632,
 
                style: style_Lgumesoufleurs_10,
                popuplayertitle: 'Légumes ou fleurs',
                interactive: true,
                title: '<img src="styles/legend/Lgumesoufleurs_10.png" /> Légumes ou fleurs'
            });
var format_Autresculturesindustrielles_11 = new ol.format.GeoJSON();
var features_Autresculturesindustrielles_11 = format_Autresculturesindustrielles_11.readFeatures(json_Autresculturesindustrielles_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autresculturesindustrielles_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autresculturesindustrielles_11.addFeatures(features_Autresculturesindustrielles_11);
var lyr_Autresculturesindustrielles_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autresculturesindustrielles_11,
maxResolution:6.160982553497632,
 
                style: style_Autresculturesindustrielles_11,
                popuplayertitle: 'Autres cultures industrielles',
                interactive: true,
                title: '<img src="styles/legend/Autresculturesindustrielles_11.png" /> Autres cultures industrielles'
            });
var format_Vignes_12 = new ol.format.GeoJSON();
var features_Vignes_12 = format_Vignes_12.readFeatures(json_Vignes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vignes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vignes_12.addFeatures(features_Vignes_12);
var lyr_Vignes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vignes_12,
maxResolution:6.160982553497632,
 
                style: style_Vignes_12,
                popuplayertitle: 'Vignes',
                interactive: true,
                title: '<img src="styles/legend/Vignes_12.png" /> Vignes'
            });
var format_Vergers_13 = new ol.format.GeoJSON();
var features_Vergers_13 = format_Vergers_13.readFeatures(json_Vergers_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vergers_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vergers_13.addFeatures(features_Vergers_13);
var lyr_Vergers_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vergers_13,
maxResolution:6.160982553497632,
 
                style: style_Vergers_13,
                popuplayertitle: 'Vergers',
                interactive: true,
                title: '<img src="styles/legend/Vergers_13.png" /> Vergers'
            });
var format_Masgrainetensilage_14 = new ol.format.GeoJSON();
var features_Masgrainetensilage_14 = format_Masgrainetensilage_14.readFeatures(json_Masgrainetensilage_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masgrainetensilage_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masgrainetensilage_14.addFeatures(features_Masgrainetensilage_14);
var lyr_Masgrainetensilage_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masgrainetensilage_14,
maxResolution:6.160982553497632,
 
                style: style_Masgrainetensilage_14,
                popuplayertitle: 'Maïs grain et ensilage',
                interactive: true,
                title: '<img src="styles/legend/Masgrainetensilage_14.png" /> Maïs grain et ensilage'
            });
var format_Prairiestemporaires_15 = new ol.format.GeoJSON();
var features_Prairiestemporaires_15 = format_Prairiestemporaires_15.readFeatures(json_Prairiestemporaires_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prairiestemporaires_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prairiestemporaires_15.addFeatures(features_Prairiestemporaires_15);
var lyr_Prairiestemporaires_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prairiestemporaires_15,
maxResolution:6.160982553497632,
 
                style: style_Prairiestemporaires_15,
                popuplayertitle: 'Prairies temporaires',
                interactive: true,
                title: '<img src="styles/legend/Prairiestemporaires_15.png" /> Prairies temporaires'
            });
var format_Prairiespermanentes_16 = new ol.format.GeoJSON();
var features_Prairiespermanentes_16 = format_Prairiespermanentes_16.readFeatures(json_Prairiespermanentes_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prairiespermanentes_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prairiespermanentes_16.addFeatures(features_Prairiespermanentes_16);
var lyr_Prairiespermanentes_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prairiespermanentes_16,
maxResolution:6.160982553497632,
 
                style: style_Prairiespermanentes_16,
                popuplayertitle: 'Prairies permanentes',
                interactive: true,
                title: '<img src="styles/legend/Prairiespermanentes_16.png" /> Prairies permanentes'
            });
var format_Estivesetlandes_17 = new ol.format.GeoJSON();
var features_Estivesetlandes_17 = format_Estivesetlandes_17.readFeatures(json_Estivesetlandes_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estivesetlandes_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estivesetlandes_17.addFeatures(features_Estivesetlandes_17);
var lyr_Estivesetlandes_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estivesetlandes_17,
maxResolution:6.160982553497632,
 
                style: style_Estivesetlandes_17,
                popuplayertitle: 'Estives et landes',
                interactive: true,
                title: '<img src="styles/legend/Estivesetlandes_17.png" /> Estives et landes'
            });
var format_Fourrage_18 = new ol.format.GeoJSON();
var features_Fourrage_18 = format_Fourrage_18.readFeatures(json_Fourrage_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fourrage_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fourrage_18.addFeatures(features_Fourrage_18);
var lyr_Fourrage_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fourrage_18,
maxResolution:6.160982553497632,
 
                style: style_Fourrage_18,
                popuplayertitle: 'Fourrage',
                interactive: true,
                title: '<img src="styles/legend/Fourrage_18.png" /> Fourrage'
            });
var format_Lgumineusesgrains_19 = new ol.format.GeoJSON();
var features_Lgumineusesgrains_19 = format_Lgumineusesgrains_19.readFeatures(json_Lgumineusesgrains_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgumineusesgrains_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgumineusesgrains_19.addFeatures(features_Lgumineusesgrains_19);
var lyr_Lgumineusesgrains_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgumineusesgrains_19,
maxResolution:6.160982553497632,
 
                style: style_Lgumineusesgrains_19,
                popuplayertitle: 'Légumineuses à grains',
                interactive: true,
                title: '<img src="styles/legend/Lgumineusesgrains_19.png" /> Légumineuses à grains'
            });
var format_Gel_20 = new ol.format.GeoJSON();
var features_Gel_20 = format_Gel_20.readFeatures(json_Gel_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gel_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gel_20.addFeatures(features_Gel_20);
var lyr_Gel_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gel_20,
maxResolution:6.160982553497632,
 
                style: style_Gel_20,
                popuplayertitle: 'Gel',
                interactive: true,
                title: '<img src="styles/legend/Gel_20.png" /> Gel'
            });
var format_Bltendre_21 = new ol.format.GeoJSON();
var features_Bltendre_21 = format_Bltendre_21.readFeatures(json_Bltendre_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bltendre_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bltendre_21.addFeatures(features_Bltendre_21);
var lyr_Bltendre_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bltendre_21,
maxResolution:6.160982553497632,
 
                style: style_Bltendre_21,
                popuplayertitle: 'Blé tendre',
                interactive: true,
                title: '<img src="styles/legend/Bltendre_21.png" /> Blé tendre'
            });
var format_SMBVdelaBresle_22 = new ol.format.GeoJSON();
var features_SMBVdelaBresle_22 = format_SMBVdelaBresle_22.readFeatures(json_SMBVdelaBresle_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelaBresle_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelaBresle_22.addFeatures(features_SMBVdelaBresle_22);
var lyr_SMBVdelaBresle_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelaBresle_22, 
                style: style_SMBVdelaBresle_22,
                popuplayertitle: 'SMBV de la Bresle',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelaBresle_22.png" /> SMBV de la Bresle'
            });
var format_SMBVdelYres_23 = new ol.format.GeoJSON();
var features_SMBVdelYres_23 = format_SMBVdelYres_23.readFeatures(json_SMBVdelYres_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelYres_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelYres_23.addFeatures(features_SMBVdelYres_23);
var lyr_SMBVdelYres_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelYres_23, 
                style: style_SMBVdelYres_23,
                popuplayertitle: 'SMBV de l\'Yères',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelYres_23.png" /> SMBV de l\'Yères'
            });
var format_SMBVdelArques_24 = new ol.format.GeoJSON();
var features_SMBVdelArques_24 = format_SMBVdelArques_24.readFeatures(json_SMBVdelArques_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelArques_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelArques_24.addFeatures(features_SMBVdelArques_24);
var lyr_SMBVdelArques_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelArques_24, 
                style: style_SMBVdelArques_24,
                popuplayertitle: 'SMBV de l\'Arques',
                interactive: true,
                title: '<img src="styles/legend/SMBVdelArques_24.png" /> SMBV de l\'Arques'
            });
var format_PETRduPaysdeBray_25 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_25 = format_PETRduPaysdeBray_25.readFeatures(json_PETRduPaysdeBray_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_25.addFeatures(features_PETRduPaysdeBray_25);
var lyr_PETRduPaysdeBray_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_25, 
                style: style_PETRduPaysdeBray_25,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: true,
                title: '<img src="styles/legend/PETRduPaysdeBray_25.png" /> PETR du Pays de Bray'
            });
var format_VilledeGisors_26 = new ol.format.GeoJSON();
var features_VilledeGisors_26 = format_VilledeGisors_26.readFeatures(json_VilledeGisors_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VilledeGisors_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilledeGisors_26.addFeatures(features_VilledeGisors_26);
var lyr_VilledeGisors_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilledeGisors_26, 
                style: style_VilledeGisors_26,
                popuplayertitle: 'Ville de Gisors',
                interactive: true,
                title: '<img src="styles/legend/VilledeGisors_26.png" /> Ville de Gisors'
            });
var format_SMBVCaillyAubetteRobec_27 = new ol.format.GeoJSON();
var features_SMBVCaillyAubetteRobec_27 = format_SMBVCaillyAubetteRobec_27.readFeatures(json_SMBVCaillyAubetteRobec_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVCaillyAubetteRobec_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVCaillyAubetteRobec_27.addFeatures(features_SMBVCaillyAubetteRobec_27);
var lyr_SMBVCaillyAubetteRobec_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVCaillyAubetteRobec_27, 
                style: style_SMBVCaillyAubetteRobec_27,
                popuplayertitle: 'SMBV Cailly-Aubette-Robec',
                interactive: true,
                title: '<img src="styles/legend/SMBVCaillyAubetteRobec_27.png" /> SMBV Cailly-Aubette-Robec'
            });
var format_Zoneshumides_28 = new ol.format.GeoJSON();
var features_Zoneshumides_28 = format_Zoneshumides_28.readFeatures(json_Zoneshumides_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneshumides_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneshumides_28.addFeatures(features_Zoneshumides_28);
var lyr_Zoneshumides_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneshumides_28, 
                style: style_Zoneshumides_28,
                popuplayertitle: 'Zones humides',
                interactive: true,
                title: '<img src="styles/legend/Zoneshumides_28.png" /> Zones humides'
            });
var format_SitesNatura2000_29 = new ol.format.GeoJSON();
var features_SitesNatura2000_29 = format_SitesNatura2000_29.readFeatures(json_SitesNatura2000_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesNatura2000_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesNatura2000_29.addFeatures(features_SitesNatura2000_29);
var lyr_SitesNatura2000_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesNatura2000_29, 
                style: style_SitesNatura2000_29,
                popuplayertitle: 'Sites Natura 2000',
                interactive: true,
                title: '<img src="styles/legend/SitesNatura2000_29.png" /> Sites Natura 2000'
            });
var format_PETRduPaysdeBray_30 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_30 = format_PETRduPaysdeBray_30.readFeatures(json_PETRduPaysdeBray_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_30.addFeatures(features_PETRduPaysdeBray_30);
var lyr_PETRduPaysdeBray_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_30, 
                style: style_PETRduPaysdeBray_30,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_30.png" /> PETR du Pays de Bray'
            });
var format_Communes_31 = new ol.format.GeoJSON();
var features_Communes_31 = format_Communes_31.readFeatures(json_Communes_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_31.addFeatures(features_Communes_31);
var lyr_Communes_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_31, 
                style: style_Communes_31,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_31.png" /> Communes'
            });
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_PETRduPaysdeBray_30,lyr_Communes_31,],
                                fold: "open",
                                title: 'Limites administratives'});
var group_Zonagesenvironnementaux = new ol.layer.Group({
                                layers: [lyr_Zoneshumides_28,lyr_SitesNatura2000_29,],
                                fold: "open",
                                title: 'Zonages environnementaux'});
var group_StructuresanimatricesMAEC = new ol.layer.Group({
                                layers: [lyr_SMBVdelaBresle_22,lyr_SMBVdelYres_23,lyr_SMBVdelArques_24,lyr_PETRduPaysdeBray_25,lyr_VilledeGisors_26,lyr_SMBVCaillyAubetteRobec_27,],
                                fold: "open",
                                title: 'Structures animatrices MAEC'});
var group_Parcellesagricoles = new ol.layer.Group({
                                layers: [lyr_Plantesfibres_2,lyr_Protagineux_3,lyr_Autresolagineux_4,lyr_Tournesol_5,lyr_Colza_6,lyr_Autrescrales_7,lyr_Orge_8,lyr_Divers_9,lyr_Lgumesoufleurs_10,lyr_Autresculturesindustrielles_11,lyr_Vignes_12,lyr_Vergers_13,lyr_Masgrainetensilage_14,lyr_Prairiestemporaires_15,lyr_Prairiespermanentes_16,lyr_Estivesetlandes_17,lyr_Fourrage_18,lyr_Lgumineusesgrains_19,lyr_Gel_20,lyr_Bltendre_21,],
                                fold: "open",
                                title: 'Parcelles agricoles'});
var group_Cadastre = new ol.layer.Group({
                                layers: [lyr_Parcellescadastrales_1,],
                                fold: "open",
                                title: 'Cadastre'});
var group_Habillage = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Habillage'});

lyr_BDOrthoIGN_0.setVisible(true);lyr_Parcellescadastrales_1.setVisible(true);lyr_Plantesfibres_2.setVisible(true);lyr_Protagineux_3.setVisible(true);lyr_Autresolagineux_4.setVisible(true);lyr_Tournesol_5.setVisible(true);lyr_Colza_6.setVisible(true);lyr_Autrescrales_7.setVisible(true);lyr_Orge_8.setVisible(true);lyr_Divers_9.setVisible(true);lyr_Lgumesoufleurs_10.setVisible(true);lyr_Autresculturesindustrielles_11.setVisible(true);lyr_Vignes_12.setVisible(true);lyr_Vergers_13.setVisible(true);lyr_Masgrainetensilage_14.setVisible(true);lyr_Prairiestemporaires_15.setVisible(true);lyr_Prairiespermanentes_16.setVisible(true);lyr_Estivesetlandes_17.setVisible(true);lyr_Fourrage_18.setVisible(true);lyr_Lgumineusesgrains_19.setVisible(true);lyr_Gel_20.setVisible(true);lyr_Bltendre_21.setVisible(true);lyr_SMBVdelaBresle_22.setVisible(true);lyr_SMBVdelYres_23.setVisible(true);lyr_SMBVdelArques_24.setVisible(true);lyr_PETRduPaysdeBray_25.setVisible(true);lyr_VilledeGisors_26.setVisible(true);lyr_SMBVCaillyAubetteRobec_27.setVisible(true);lyr_Zoneshumides_28.setVisible(true);lyr_SitesNatura2000_29.setVisible(true);lyr_PETRduPaysdeBray_30.setVisible(true);lyr_Communes_31.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,group_Cadastre,group_Parcellesagricoles,group_StructuresanimatricesMAEC,group_Zonagesenvironnementaux,group_Limitesadministratives];
lyr_Parcellescadastrales_1.set('fieldAliases', {'id': 'id', 'commune': 'commune', 'prefixe': 'prefixe', 'section': 'section', 'numero': 'numero', 'contenance': 'contenance', 'created': 'created', 'updated': 'updated', 'layer': 'layer', 'path': 'path', });
lyr_Plantesfibres_2.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Protagineux_3.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Autresolagineux_4.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Tournesol_5.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Colza_6.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Autrescrales_7.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Orge_8.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Divers_9.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Lgumesoufleurs_10.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Autresculturesindustrielles_11.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Vignes_12.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Vergers_13.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Masgrainetensilage_14.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Prairiestemporaires_15.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Prairiespermanentes_16.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Estivesetlandes_17.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Fourrage_18.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Lgumineusesgrains_19.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Gel_20.set('fieldAliases', {'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', });
lyr_Bltendre_21.set('fieldAliases', {'ID_PARCEL': 'ID_PARCEL', 'SURF_PARC': 'SURF_PARC', 'CODE_CULTU': 'CODE_CULTU', 'CODE_GROUP': 'CODE_GROUP', 'CULTURE_D1': 'CULTURE_D1', 'CULTURE_D2': 'CULTURE_D2', });
lyr_SMBVdelaBresle_22.set('fieldAliases', {'Libelle': 'Libelle', 'Idenr': 'Idenr', 'Surface': 'Surface', });
lyr_SMBVdelYres_23.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Surface': 'Surface', });
lyr_SMBVdelArques_24.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'SurfacePAE': 'SurfacePAE', });
lyr_PETRduPaysdeBray_25.set('fieldAliases', {'ID': 'ID', });
lyr_VilledeGisors_26.set('fieldAliases', {'LIBELLEOPE': 'LIBELLEOPE', 'LIBELLEPAE': 'LIBELLEPAE', 'Surface': 'Surface', 'Opérateur': 'Opérateur', });
lyr_SMBVCaillyAubetteRobec_27.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Champident': 'Champident', 'Surface': 'Surface', 'Nom': 'Nom', });
lyr_Zoneshumides_28.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'URLMETAD': 'URLMETAD', });
lyr_SitesNatura2000_29.set('fieldAliases', {'SITECODE': 'SITECODE', 'SITENAME': 'SITENAME', });
lyr_PETRduPaysdeBray_30.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_Communes_31.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Parcellescadastrales_1.set('fieldImages', {'id': 'TextEdit', 'commune': 'TextEdit', 'prefixe': 'TextEdit', 'section': 'TextEdit', 'numero': 'TextEdit', 'contenance': 'TextEdit', 'created': 'DateTime', 'updated': 'DateTime', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Plantesfibres_2.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Protagineux_3.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Autresolagineux_4.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Tournesol_5.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Colza_6.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Autrescrales_7.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Orge_8.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Divers_9.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Lgumesoufleurs_10.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Autresculturesindustrielles_11.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Vignes_12.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Vergers_13.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Masgrainetensilage_14.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Prairiestemporaires_15.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Prairiespermanentes_16.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Estivesetlandes_17.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Fourrage_18.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Lgumineusesgrains_19.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Gel_20.set('fieldImages', {'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', });
lyr_Bltendre_21.set('fieldImages', {'ID_PARCEL': 'TextEdit', 'SURF_PARC': 'TextEdit', 'CODE_CULTU': 'TextEdit', 'CODE_GROUP': 'TextEdit', 'CULTURE_D1': 'TextEdit', 'CULTURE_D2': 'TextEdit', });
lyr_SMBVdelaBresle_22.set('fieldImages', {'Libelle': 'TextEdit', 'Idenr': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelYres_23.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelArques_24.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'SurfacePAE': 'TextEdit', });
lyr_PETRduPaysdeBray_25.set('fieldImages', {'ID': 'TextEdit', });
lyr_VilledeGisors_26.set('fieldImages', {'LIBELLEOPE': 'TextEdit', 'LIBELLEPAE': 'TextEdit', 'Surface': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SMBVCaillyAubetteRobec_27.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Champident': 'TextEdit', 'Surface': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Zoneshumides_28.set('fieldImages', {'LIBELLE': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_SitesNatura2000_29.set('fieldImages', {'SITECODE': '', 'SITENAME': '', });
lyr_PETRduPaysdeBray_30.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Communes_31.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Parcellescadastrales_1.set('fieldLabels', {'id': 'hidden field', 'commune': 'hidden field', 'prefixe': 'hidden field', 'section': 'inline label - visible with data', 'numero': 'inline label - visible with data', 'contenance': 'hidden field', 'created': 'hidden field', 'updated': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Plantesfibres_2.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Protagineux_3.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Autresolagineux_4.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Tournesol_5.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Colza_6.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Autrescrales_7.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Orge_8.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Divers_9.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Lgumesoufleurs_10.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Autresculturesindustrielles_11.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Vignes_12.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Vergers_13.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Masgrainetensilage_14.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Prairiestemporaires_15.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Prairiespermanentes_16.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Estivesetlandes_17.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Fourrage_18.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Lgumineusesgrains_19.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Gel_20.set('fieldLabels', {'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', });
lyr_Bltendre_21.set('fieldLabels', {'ID_PARCEL': 'hidden field', 'SURF_PARC': 'inline label - visible with data', 'CODE_CULTU': 'inline label - visible with data', 'CODE_GROUP': 'hidden field', 'CULTURE_D1': 'hidden field', 'CULTURE_D2': 'hidden field', });
lyr_SMBVdelaBresle_22.set('fieldLabels', {'Libelle': 'hidden field', 'Idenr': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelYres_23.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelArques_24.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'SurfacePAE': 'hidden field', });
lyr_PETRduPaysdeBray_25.set('fieldLabels', {'ID': 'hidden field', });
lyr_VilledeGisors_26.set('fieldLabels', {'LIBELLEOPE': 'hidden field', 'LIBELLEPAE': 'hidden field', 'Surface': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SMBVCaillyAubetteRobec_27.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Champident': 'hidden field', 'Surface': 'hidden field', 'Nom': 'hidden field', });
lyr_Zoneshumides_28.set('fieldLabels', {'LIBELLE': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_SitesNatura2000_29.set('fieldLabels', {'SITECODE': 'no label', 'SITENAME': 'no label', });
lyr_PETRduPaysdeBray_30.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Communes_31.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'inline label - visible with data', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Communes_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});