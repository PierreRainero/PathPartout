//
//  UserViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 17/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

class UserViewController: UIViewController {
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        tabBarItem = UITabBarItem(title: "PROFIL", image: UIImage(named: "account_icon"), tag: 3)
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
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
