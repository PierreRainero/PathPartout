//
//  MapController.swift
//  PathPartoutReborn
//
//  Created by Fabien DURANDO on 12/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit
import GoogleMaps

struct Point {
    var type : String
    var latitude : Double
    var longitude : Double
}

class MapController: UIViewController {
    
    var locationManager = CLLocationManager()
    var mapView: GMSMapView!
    var latitude : Double = 0
    var longitude : Double = 0
    
    // List of points. TODO : get it from an other controller
    var locations = [
        Point(type: "start", latitude: 43.616100, longitude: 7.073171),
        Point(type: "", latitude: 43.617911, longitude: 7.074644),
        Point(type: "", latitude: 43.622734, longitude: 7.0756081),
        Point(type: "finish", latitude: 43.620458, longitude: 7.070573)
    ]
    
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
        let camera = GMSCameraPosition.camera(withLatitude: latitude, longitude: longitude, zoom: 15.0)
        let mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
        self.view = mapView
        
        // Creates a marker at the user position.
        let marker = GMSMarker()
        marker.position = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
        marker.icon = UIImage(named: "hiker_icon")
        marker.title = "Your Position"
        marker.map = mapView
        
        displayPointsOfInterest(mapView)
    }

    /**
        Display the different point of interest
     
            - mapView: Map in which points will be displayed
    */
    func displayPointsOfInterest(_ mapView: GMSMapView) {
        let path = GMSMutablePath()
        
        for location in locations{
            path.add(CLLocationCoordinate2D(latitude: location.latitude, longitude: location.longitude)) // Add point to path
            let marker = GMSMarker()
            
            marker.position = CLLocationCoordinate2D(latitude: location.latitude, longitude: location.longitude)
            // Use an icon
            if (location.type == "start") { marker.icon = UIImage(named: "start_icon") }
            else if (location.type == "finish") { marker.icon = UIImage(named: "finish_icon") }
            else { marker.icon = GMSMarker.markerImage(with: UIColor(named: "PClair")) }
            marker.title = location.type
            marker.map = mapView
        }
        
        let rectangle = GMSPolyline(path: path)
        rectangle.strokeWidth = 5
        rectangle.strokeColor = UIColor(named: "PSombre")!
        rectangle.map = mapView
        self.view = mapView
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

