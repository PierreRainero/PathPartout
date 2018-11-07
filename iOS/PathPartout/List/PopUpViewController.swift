//
//  PopUpViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 07/11/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

struct Race {
    var name: String
    var description: String
    var points: [Point]
}

struct Point {
    var type : String
    var latitude : Double
    var longitude : Double
}

class PopUpViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var Popupview: UIView!
    @IBOutlet weak var tableView: UITableView!
    
    let races: [Race] = [
        Race(name: "Tour de St Phillipe", description: "Un petit tour pendant la pause repas.", points: [Point(type: "start", latitude: 43.616100, longitude: 7.073171),Point(type: "", latitude: 43.617911, longitude: 7.074644),Point(type: "", latitude: 43.622734, longitude: 7.0756081),Point(type: "finish", latitude: 43.620458, longitude: 7.070573)])
    ]

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        tableView.dataSource = self
        tableView.delegate = self
        
        // Apply radius to Popupview
        Popupview.layer.cornerRadius = 10
        Popupview.layer.masksToBounds = true
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.races.count
    }
    
    // Select item from tableView
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        print("On veut faire : " + races[indexPath.row].name)
        
        // Shared.shared.companyName = names[indexPath.row]
        
        
        dismiss(animated: true, completion: nil)
        
        /*
            let storyBoard: UIStoryboard = UIStoryboard(name: "Main", bundle: nil)
            let newViewController = storyBoard.instantiateViewController(withIdentifier: "MapHandlerVC") as! MapHandlerViewController
            self.present(newViewController, animated: true, completion: nil)
        */
    }
    
    //Assign values for tableView
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell
    {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        
        cell.textLabel?.text = races[indexPath.row].name
        
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
