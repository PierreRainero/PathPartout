//
//  PointOfInterestViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 08/11/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

class PointOfInterestViewController: UIViewController {
    
    @IBOutlet weak var Popupview: UIView!
    var currentPoint: Point!
    @IBOutlet weak var pointName: UILabel!
    @IBOutlet weak var pointDescription: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Apply radius to Popupview
        Popupview.layer.cornerRadius = 10
        Popupview.layer.masksToBounds = true
        Popupview.layer.shadowColor = UIColor.black.cgColor
        Popupview.layer.shadowOpacity = 1
        Popupview.layer.shadowOffset = CGSize.zero
        Popupview.layer.shadowRadius = 10
        Popupview.layer.shadowPath = UIBezierPath(rect: Popupview.bounds).cgPath
        Popupview.layer.shouldRasterize = true
        self.modalPresentationStyle = .overFullScreen
        
        pointName.text = currentPoint.name
        pointDescription.text = currentPoint.description
        pointDescription.numberOfLines = 0
        pointDescription.lineBreakMode = .byWordWrapping
        pointDescription.sizeToFit()
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
