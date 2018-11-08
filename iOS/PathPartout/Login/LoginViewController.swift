//
//  LoginViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 02/11/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

class LoginViewController: UIViewController {
    
    @IBOutlet weak var userName: UITextField!
    
    @IBAction func buttonActionLogin(_ sender: Any) {
        UserDefaults.standard.set(true, forKey: "status")
        if(userName.text != nil) { Shared.shared.userName = userName.text }
        Switcher.updateRootVC()
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
