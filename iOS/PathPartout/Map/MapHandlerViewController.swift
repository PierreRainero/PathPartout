//
//  MapHandlerViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 17/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

class MapHandlerViewController: UIViewController {
    @IBOutlet weak var button: UIButton!
    @IBOutlet weak var PopUpView: UIView!
    
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
    }
    
    func trst(){
        print("abc")
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
