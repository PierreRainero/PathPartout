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
    var mapHandlerVC:MapHandlerViewController?
    var currentPosition : CLLocationCoordinate2D!
    var latitude : Double = 0
    var longitude : Double = 0
    var run: Run!
    var mapCreated: Bool = false
    var camera: GMSCameraPosition!
    var mapView: GMSMapView!
    var userMarker: GMSMarker!
    
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
    
    // Update the location of the user marker. Also create map if needed.
    func updateLocation() {
        if !mapCreated {
            camera = GMSCameraPosition.camera(withLatitude: latitude, longitude: longitude, zoom: 15.0)
            mapView = GMSMapView.map(withFrame: CGRect.zero, camera: camera)
            self.view = mapView
            userMarker = GMSMarker()
            mapCreated = true
        }
        
        currentPosition = CLLocationCoordinate2D(latitude: latitude, longitude: longitude)
        mapView.camera = GMSCameraPosition.camera(withLatitude: currentPosition.latitude, longitude: currentPosition.longitude, zoom: mapView.camera.zoom)
        
        // Creates a marker at the user position.
        userMarker.position = currentPosition
        userMarker.icon = UIImage(named: "hiker_icon")
        userMarker.title = "Your Position"
        userMarker.map = mapView
        
        displayPointsOfInterest()
    }

    /**
        Display the different point of interest
     
            - mapView: Map in which points will be displayed
    */
    func displayPointsOfInterest() {
        let path = GMSMutablePath()
        var noPointFound: Bool = true
        
        if(run == nil) {return}
        let locations = run.points
        
        for location in locations {
            path.add(CLLocationCoordinate2D(latitude: location.latitude, longitude: location.longitude)) // Add point to path
            
            // Mark the location
            let marker = GMSMarker()
            marker.title = location.type
            marker.position = CLLocationCoordinate2D(latitude: location.latitude, longitude: location.longitude)
            // Use an icon
            if (location.type == "start") { marker.icon = UIImage(named: "start_icon") }
            else if (location.type == "finish") { marker.icon = UIImage(named: "finish_icon") }
            else { marker.icon = GMSMarker.markerImage(with: UIColor(named: "PClair")) }
            marker.map = mapView
            
            let dist = CLLocation(latitude: currentPosition.latitude, longitude: currentPosition.longitude).distance(from: CLLocation(latitude: location.latitude, longitude: location.longitude))
            print(dist)
            if(dist <= 1) { mapHandlerVC?.notifyUserPointFound(location) }
            if(dist <= 5) {
                mapHandlerVC?.notifyUserNearFromPoint(location)
                noPointFound = false
            }
        }
        
        if noPointFound { mapHandlerVC?.hideNearPointButton() }
    
        let rectangle = GMSPolyline(path: path)
        rectangle.strokeWidth = 5
        rectangle.strokeColor = UIColor(named: "PSombre")!
        rectangle.map = mapView
        self.view = mapView
    }
    
    
    // When new path is created, new map needed !
    func newPath(){
        mapCreated = false
        updateLocation()
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

