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
        let camera = GMSCameraPosition.camera(withLatitude: latitude, longitude: longitude, zoom: 15.0)
        let mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
        self.view = mapView
        
        let currentPos = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
        
        // Creates a marker at the user position.
        let marker = GMSMarker()
        marker.position = currentPos
        marker.icon = UIImage(named: "hiker_icon")
        marker.title = "Your Position"
        marker.map = mapView
        
        Shared.shared.currentLocation = currentPos
        
        displayPointsOfInterest(mapView, currentPos)
    }

    /**
        Display the different point of interest
     
            - mapView: Map in which points will be displayed
    */
    func displayPointsOfInterest(_ mapView: GMSMapView, _ currentPos: CLLocationCoordinate2D) {
        let path = GMSMutablePath()
        let race = Shared.shared.run
        
        if(race == nil) { return }
        
        let locations = race?.points
        
        for location in locations! {
            path.add(CLLocationCoordinate2D(latitude: location.latitude, longitude: location.longitude)) // Add point to path
            let marker = GMSMarker()
            
            marker.position = CLLocationCoordinate2D(latitude: location.latitude, longitude: location.longitude)
            // Use an icon
            if (location.type == "start") { marker.icon = UIImage(named: "start_icon") }
            else if (location.type == "finish") { marker.icon = UIImage(named: "finish_icon") }
            else { marker.icon = GMSMarker.markerImage(with: UIColor(named: "PClair")) }
            
            if(location.latitude == currentPos.latitude && location.longitude == currentPos.longitude){
                let alert = UIAlertController(title: race?.name, message: "Bravo, vous avez trouvé un nouveau point d'interêt !", preferredStyle: .alert)
                alert.addAction(UIAlertAction(title: NSLocalizedString("OK", comment: "Default action"), style: .default, handler: { _ in
                    NSLog("The \"OK\" alert occured.")
                }))
                self.present(alert, animated: true, completion: nil)
            }
            
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

