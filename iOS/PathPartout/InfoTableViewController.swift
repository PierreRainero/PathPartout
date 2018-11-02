//
//  InfoTableViewController.swift
//  PathPartout
//
//  Created by Fabien DURANDO on 19/10/2018.
//  Copyright © 2018 Fabien DURANDO. All rights reserved.
//

import UIKit

struct Info {
    
    var id : Int
    var title : String
    var text : String
    var icon : String
    
}

class InfosTableViewCell: UITableViewCell {
    @IBOutlet weak var picture: UIImageView!
    @IBOutlet weak var title: UILabel!
    @IBOutlet weak var textContent: UILabel!
}

class InfoTableViewController: UITableViewController {
    /*
    let infos = [
        Info(id: 1, title: "Tracer", text: "Faites vos trajets facilement et rapidement à l'aide de notre carte intéractive intégrée.", icon: "map2"),
        Info(id: 2, title: "Promener", text: "Explorez des points d'intêrets autours de vous, changez vous les idées avec de longues randonnées.", icon: "man"),
        Info(id: 3, title: "Partager", text: "Echangez vos trajets et vos découvertes avec vos amis ou le reste de la communauté", icon: "share")
    ]*/
    
    let infos = [Info(id: 1, title: "Tour de St Phillipe", text: "Un petit tour pendant la pause repas.", icon: "map2")]


    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        print(infos.count)
        return infos.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "LabelCell", for: indexPath) as! InfosTableViewCell

        let info = infos[indexPath.item]
        
        cell.title.text = info.title
        cell.textContent.text = info.text
        cell.textContent.lineBreakMode = .byWordWrapping
        cell.textContent.numberOfLines = 0
        cell.picture.image = UIImage(named: info.icon)

        
        cell.detailTextLabel?.numberOfLines = 0
        cell.detailTextLabel?.lineBreakMode = NSLineBreakMode.byWordWrapping;
        
        return cell
    }
}
