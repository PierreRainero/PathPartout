//
//  MapHandlerViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 17/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

struct Run {
    var name: String
    var description: String
    var points: [Point]
}

struct Point {
    var type : String
    var latitude : Double
    var longitude : Double
    var name : String
    var description : String
    var picture : UIImage?
}


class MapHandlerViewController: UIViewController {
    @IBOutlet weak var button: UIButton!
    @IBOutlet weak var cautionButton: UIButton!
    @IBOutlet weak var PopUpView: UIView!
    var mapController:MapController!
    var currentPoint:Point?
    var runs: [Run] = [
        Run(name: "Tour de St Phillipe", description: "Un petit tour pendant la pause repas. Je rajoute un peut de texte pour voir le saut de ligne.", points: [Point(type: "start", latitude: 43.616100, longitude: 7.073171, name: "MK", description: "Le MK, bar légendaire de Sophia Antipolis.", picture: UIImage(named: "beer")),Point(type: "", latitude: 43.617911, longitude: 7.074644, name: "", description: "", picture: UIImage(named: "question")),Point(type: "", latitude: 43.622734, longitude: 7.0756081, name: "", description: "", picture: UIImage(named: "question")),Point(type: "finish", latitude: 43.620458, longitude: 7.070573, name: "", description: "", picture: UIImage(named: "question"))])
        /*,
        Run(
            name: "Tournée des bars", description: "Tournée des nombreux bars des alentours.", points: [Point(type: "start", latitude: 43.618673, longitude: 7.0748659, name: "MK", picture: UIImage(named: "mk")),Point(type: "", latitude: 43.6177577, longitude: 7.0746102, name: "", picture: UIImage(named: "question")),Point(type: "", latitude: 43.6212068, longitude: 7.0639032, name: "", picture: UIImage(named: "question")),Point(type: "finish", latitude: 43.619034, longitude: 7.0565848, name: "", picture: UIImage(named: "question"))])//,
        */
        /*Run(name: "Chasse aux sangliers", description: "Petite session de chasse avec l'ami Bealou.", points: [Point(type: "start", latitude: 43.6176093, longitude: 7.0681092),Point(type: "", latitude: 43.6184054, longitude: 7.0649818),Point(type: "finish", latitude: 43.6197084, longitude: 7.062774)])*/
    ]
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        tabBarItem = UITabBarItem(title: "CARTE", image: UIImage(named: "carte_icon"), tag: 2)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()

        button.layer.shadowColor = UIColor.black.cgColor
        button.layer.shadowOffset = CGSize(width: 0.0, height: 2.0)
        button.layer.masksToBounds = false
        button.layer.shadowRadius = 1.0
        button.layer.shadowOpacity = 0.5
        button.layer.cornerRadius = button.frame.width / 2
        cautionButton.layer.shadowColor = UIColor.black.cgColor
        cautionButton.layer.shadowOffset = CGSize(width: 0.0, height: 2.0)
        cautionButton.layer.masksToBounds = false
        cautionButton.layer.shadowRadius = 1.0
        cautionButton.layer.shadowOpacity = 0.5
        cautionButton.layer.cornerRadius = button.frame.width / 2
        cautionButton.isHidden = true
    }
    
    // Content to pass to child viewController
    override func prepare(for segue: UIStoryboardSegue, sender: Any?)
    {
        if segue.destination is MapController
        {
            let vc = segue.destination as? MapController
            mapController = vc
            vc?.mapHandlerVC = self
        } else if segue.destination is RunsViewController{
            let vc = segue.destination as? RunsViewController
            vc?.runs = self.runs
            vc?.currentPosition = mapController.currentPosition
            vc?.mapHandlerVC = self
        } else if segue.destination is PointOfInterestViewController{
            let vc = segue.destination as? PointOfInterestViewController
            vc?.currentPoint = currentPoint
        }
    }
    
    /**
        Notify an user about a point of interest
     */
    func notifyUserNearFromPoint(_ point: Point){
        cautionButton.isHidden = false
        currentPoint = point
    }
    
    func newRunChosen(_ run: Run){
        mapController.run = run
        mapController.newPath()
    }
    
    func hideNearPointButton(){
        cautionButton.isHidden = true
    }
    
    func notifyUserPointFound(_ point: Point){
        let alert = UIAlertController(title: point.name, message: "Bravo, vous avez trouvé un nouveau point d'interêt !", preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: NSLocalizedString("OK", comment: "Default action"), style: .default, handler: { _ in
            NSLog("The \"OK\" alert occured.")
        }))
        self.present(alert, animated: true, completion: nil)
    }
}
