//
//  CollectionViewCell.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 17/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

class CollectionViewCell: UICollectionViewCell/*, UICollectionViewDelegateFlowLayout*/ {
    @IBOutlet weak var title: UILabel!
    @IBOutlet weak var textContent: UILabel!
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        let yourWidth = collectionView.bounds.width/5
        let yourHeight = yourWidth
        
        return CGSize(width: yourWidth, height: yourHeight)
    }

}
