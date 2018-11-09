//
//  PopUpViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 07/11/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit
import GoogleMaps


class InfosTableViewCell: UITableViewCell {
    @IBOutlet weak var cellTitle: UILabel!
    @IBOutlet weak var cellDescription: UILabel!
    @IBOutlet weak var cellDistance: UILabel!
}

class RunsViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var Popupview: UIView!
    @IBOutlet weak var tableView: UITableView!
    var mapHandlerVC:MapHandlerViewController?
    var currentPosition : CLLocationCoordinate2D = CLLocationCoordinate2D(latitude: 0, longitude: 0)
    var runs : [Run] = []

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        tableView.dataSource = self
        tableView.delegate = self
        tableView.tableFooterView = UIView()
        
        // Sort the list on the dists with the user
        self.runs = runs.sorted(by: { CLLocation(latitude: $0.points[0].latitude,longitude: $0.points[0].longitude).distance(from: CLLocation(latitude: currentPosition.latitude,longitude: currentPosition.longitude)) < CLLocation(latitude: $1.points[0].latitude,longitude: $1.points[0].longitude).distance(from: CLLocation(latitude: currentPosition.latitude,longitude: currentPosition.longitude)) })
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.runs.count
    }
    
    override var prefersStatusBarHidden: Bool {
        return true
    }
    
    // Select item from tableView
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        mapHandlerVC?.newRunChosen(runs[indexPath.row])
        self.dismiss(animated: false, completion: nil)
    }
    
    //Assign values for tableView
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell
    {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! InfosTableViewCell
        
        cell.cellTitle?.text = runs[indexPath.row].name
        cell.cellDescription?.text = runs[indexPath.row].description
        
        
        let userLocation = CLLocation(latitude: currentPosition.latitude,longitude: currentPosition.longitude)
        let runLocation = CLLocation(latitude: runs[indexPath.row].points[0].latitude,longitude: runs[indexPath.row].points[0].longitude)
        
        cell.cellDistance?.text = String(format:"%.0f", userLocation.distance(from: runLocation)) + " m"
            
        return cell
    }
    
    
    // Close PopUp
    @IBAction func closePopup(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
}
