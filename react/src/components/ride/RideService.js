import Ride from './Ride';
import Poi from './Poi';

class RideService {
    /**
     * MOCKED
     * Return all the rides of an user
     * @param {User} user user to use
     */
    static getUserRides(user){
        const pois1 = [];
        pois1.push(new Poi(1, "Polytech Nice", "Cette école d'ingénieur local va nous servir de point de départ. Elle offre une super vue sur l'ensemble du technopole de Sophia-Antipolis.", 43.615366, 7.072105));
        pois1.push(new Poi(2, "Le MK", "Le MK est un petit bistro typique de la zone. Restauration rapide, bières correctes et afterworks rythment son existence.", 43.617764, 7.074794));
        pois1.push(new Poi(3, "Gusto", "Gusto est un lieu de restauration très prisé des entreprises environnementes. Il n'est pas rare de croiser des gens venus de l'autre bout du technolopole pour déguster leurs produits italiens.", 43.623187, 7.076532));
        
        const pois2 = [];
        pois2.push(new Poi(4, "Parcours Sportif", "Profitez du parcours sportif pour vous mettre en jambes.", 43.569133, 7.03195));
        pois2.push(new Poi(5, "Vue sur l'Esterel", "Vous voilà maintenant au grand air, profitez de la vue qui s'offre à vous.", 43.566233, 7.034733));
        pois2.push(new Poi(6, "Pause à la borne", "Profitez de la borne 60.27 xz 9.00 xz pour faire une petite pause sur votre route", 43.564317, 7.038950));
        pois2.push(new Poi(7, "La croisée des chemins", "La promenade change de tête, attention lors de votre traversée.", 43.561633, 7.044267));
        pois2.push(new Poi(8, "Ecart bucolique", "Plus qu'à quelques mètres du belvedere, une belle vue sur le Cannet vous attend déjà.", 43.558567, 7.042500));
        pois2.push(new Poi(9, "Le belvedere", "Ca y est ! Votre objectif final se dresse devant vous, prenez une petite pause avant de faire demi-tour.", 43.555130, 7.042194));
        
        const rides = [];
        rides.push(new Ride(1, "Tour de St Philippe", "Un petit tour pendant la pause repas", new Date('2018-10-30'), new Date('2018-10-30'), pois1));
        rides.push(new Ride(2, "Promenade du belvedere", "Le canal de la Siagne est un ouvrage à l’initiative de Lord Brougham, ancien chancelier d’Angleterre, construit entre 1866 et 1868 afin d’alimenter la ville de Cannes en eau.", new Date('2018-10-28'), new Date('2018-11-02'), pois2));
        
        
        return rides;
    }
}

export default RideService;  