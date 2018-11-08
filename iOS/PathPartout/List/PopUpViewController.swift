//
//  PopUpViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 07/11/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit
import GoogleMaps

struct Run {
    var name: String
    var description: String
    var points: [Point]
}

struct Point {
    var type : String
    var latitude : Double
    var longitude : Double
}

class InfosTableViewCell: UITableViewCell {
    @IBOutlet weak var cellTitle: UILabel!
    @IBOutlet weak var cellDescription: UILabel!
    @IBOutlet weak var cellDistance: UILabel!
}

class PopUpViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var Popupview: UIView!
    @IBOutlet weak var tableView: UITableView!
    
    var runs: [Run] = [
        Run(name: "Tour de St Phillipe", description: "Un petit tour pendant la pause repas.", points: [Point(type: "start", latitude: 43.616100, longitude: 7.073171),Point(type: "", latitude: 43.617911, longitude: 7.074644),Point(type: "", latitude: 43.622734, longitude: 7.0756081),Point(type: "finish", latitude: 43.620458, longitude: 7.070573)]),
        
        Run(name: "Tournée des bars", description: "Tournée des nombreux bars des alentours.", points: [Point(type: "start", latitude: 43.618673, longitude: 7.0748659),Point(type: "", latitude: 43.6177577, longitude: 7.0746102),Point(type: "", latitude: 43.6212068, longitude: 7.0639032),Point(type: "finish", latitude: 43.619034, longitude: 7.0565848)]),
        
        Run(name: "Chasse aux sangliers", description: "Petite session de chasse avec l'ami Bealou.", points: [Point(type: "start", latitude: 43.6176093, longitude: 7.0681092),Point(type: "", latitude: 43.6184054, longitude: 7.0649818),Point(type: "finish", latitude: 43.6197084, longitude: 7.062774)])
    ]

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        tableView.dataSource = self
        tableView.delegate = self
        
        // Sort the list on the dists with the user
        self.runs = runs.sorted(by: { CLLocation(latitude: $0.points[0].latitude,longitude: $0.points[0].longitude).distance(from: CLLocation(latitude: Shared.shared.currentLocation.latitude,longitude: Shared.shared.currentLocation.longitude)) < CLLocation(latitude: $1.points[0].latitude,longitude: $1.points[0].longitude).distance(from: CLLocation(latitude: Shared.shared.currentLocation.latitude,longitude: Shared.shared.currentLocation.longitude)) })
        
        // Apply radius to Popupview
        Popupview.layer.cornerRadius = 10
        Popupview.layer.masksToBounds = true
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.runs.count
    }
    
    override var prefersStatusBarHidden: Bool {
        return true
    }
    
    // Select item from tableView
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        print("On veut faire : " + runs[indexPath.row].name)
        
        Shared.shared.run = runs[indexPath.row]
        
        let storyBoard: UIStoryboard = UIStoryboard(name: "Main", bundle: nil)
        let newViewController = storyBoard.instantiateViewController(withIdentifier: "tabbarvc") as! UITabBarController
        self.present(newViewController, animated: false, completion: nil)
    }
    
    //Assign values for tableView
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell
    {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! InfosTableViewCell
        
        cell.cellTitle?.text = runs[indexPath.row].name
        cell.cellDescription?.text = runs[indexPath.row].description
        
        let userLocation = CLLocation(latitude: Shared.shared.currentLocation.latitude,longitude: Shared.shared.currentLocation.longitude)
        let runLocation = CLLocation(latitude: runs[indexPath.row].points[0].latitude,longitude: runs[indexPath.row].points[0].longitude)
        
        cell.cellDistance?.text = String(format:"%.0f", userLocation.distance(from: runLocation)) + " m"
        
        print(userLocation.distance(from: runLocation))
        
        return cell
    }
    
    
    // Close PopUp
    @IBAction func closePopup(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }



    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
