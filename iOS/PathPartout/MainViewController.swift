//
//  MainViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 17/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

class MainViewController: UIViewController, UICollectionViewDataSource, UICollectionViewDelegate {
        
    let items = [["Tour de St Phillipe", "Un petit tour pendant la pause repas."]]
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        tabBarItem = UITabBarItem(title: "ACCEUIL", image: UIImage(named: "home_icon"), tag: 1)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "Path'Partout"
        // Do any additional setup after loading the view.
    }
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }
    
    // Collection Elements
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return items.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "Cell", for: indexPath) as! CollectionViewCell
        cell.title.text = items[indexPath.item][0]
        cell.textContent.text = items[indexPath.item][1]
        cell.textContent.lineBreakMode = .byWordWrapping
        cell.textContent.numberOfLines = 0
        return cell
    }

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        print(indexPath.item)
    }
    
}
