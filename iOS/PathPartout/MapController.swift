//
//  MapController.swift
//  PathPartoutReborn
//
//  Created by Fabien DURANDO on 12/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit
import GoogleMaps

class MapController: UIViewController {
    
    var locationManager = CLLocationManager()
    var mapView: GMSMapView!
    var latitude : Double = 0
    var longitude : Double = 0

    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    override func loadView() {
        super.loadView()
        
        // Get location
        
        self.locationManager.requestAlwaysAuthorization()
        // For use in foreground
        self.locationManager.requestWhenInUseAuthorization()
        
        if CLLocationManager.locationServicesEnabled() {
            locationManager.delegate = self
            locationManager.desiredAccuracy = kCLLocationAccuracyNearestTenMeters
            locationManager.startUpdatingLocation()
        }
    }
    
    func updateLocation() {
        let camera = GMSCameraPosition.camera(withLatitude: latitude, longitude: longitude, zoom: 6.0)
        let mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
        self.view = mapView
        
        // Creates a marker in the center of the map.
        let marker = GMSMarker()
        marker.position = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
        marker.title = "Your Position"
        marker.map = mapView
    }
}

extension MapController: CLLocationManagerDelegate {
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        guard let locValue: CLLocationCoordinate2D = manager.location?.coordinate else { return }
        longitude = locValue.longitude
        latitude = locValue.latitude
        updateLocation()
    }
}

