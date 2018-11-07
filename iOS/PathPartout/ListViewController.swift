//
//  MainViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 17/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

class ListViewController: UIViewController, UICollectionViewDataSource, UICollectionViewDelegate {
        
    let items = [["Tour de St Phillipe", "Un petit tour pendant la pause repas."]]
    
    let races = [
        Race(name: "Tour de St Phillipe", description: "Un petit tour pendant la pause repas.", points: [Point(type: "start", latitude: 43.616100, longitude: 7.073171),Point(type: "", latitude: 43.617911, longitude: 7.074644),Point(type: "", latitude: 43.622734, longitude: 7.0756081),Point(type: "finish", latitude: 43.620458, longitude: 7.070573)])
    ]
    
    // List of points. TODO : get it from an other controller
    var locations = [
        Point(type: "start", latitude: 43.616100, longitude: 7.073171),
        Point(type: "", latitude: 43.617911, longitude: 7.074644),
        Point(type: "", latitude: 43.622734, longitude: 7.0756081),
        Point(type: "finish", latitude: 43.620458, longitude: 7.070573)
    ]
    
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        self.navigationItem.title = "Choisissez une course !"
        // Do any additional setup after loading the view.
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        print(races)
        return races.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "Cell", for: indexPath) as! CollectionViewCell
        /*cell.title.text = items[indexPath.item][0]
        cell.textContent.text = items[indexPath.item][1]
        cell.textContent.lineBreakMode = .byWordWrapping
        cell.textContent.numberOfLines = 0*/
        return cell
    }

    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        print(indexPath.item)
    }
    
}
