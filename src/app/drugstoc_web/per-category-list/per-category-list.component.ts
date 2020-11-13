import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-per-category-list',
  templateUrl: './per-category-list.component.html',
})
export class PerCategoryListComponent implements OnInit {

  constructor(private list: ProductService) { }

  data: any = []

  ngOnInit(){
    this.list.per_company().subscribe(res => {
      let arr: any = [];
      arr = res
      console.log(arr.sort())
      this.data = arr.sort();
    })
  }

  getImage(name) {
    switch(name){
      case 'A&D Medical':
        return '../../../assets/images/Manufacturer Names/A_D Medical.png'
      case 'ADH Health Products Limited':
        return '../../../assets/images/Manufacturer Names/ADH Health Products Ltd.png'
      // case 'AQUATIX Pharmaceuticals':
      //   return '../../../assets/images/Manufacturer Names/ADH Health Products Ltd.png'
      case 'Abirot':
        return '../../../assets/images/Manufacturer Names/Abirot.png'
      case 'Abott':
        return '../../../assets/images/Manufacturer Names/Abbott.png'
      // case 'Absorbent':
      //   return '../../../assets/images/Manufacturer Names/Abbott.png'
      case 'Aconitum':
        return '../../../assets/images/Manufacturer Names/Aconitum.png'
      // case 'Adpharm Pharm Nig':
      //   return '../../../assets/images/Manufacturer Names/Abbott.png'
      case 'Afrab-Chem':
        return '../../../assets/images/Manufacturer Names/Afrab-Chem.png'
      case 'Africure':
        return '../../../assets/images/Manufacturer Names/Africure.png'
      case 'Agary Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/Agary.png'
      case 'Agewell HealthCare Ltd':
        return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png'
      // case 'Aiita':
      //   return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png'
      case 'Ajanta Pharma Ltd':
        return '../../../assets/images/Manufacturer Names/Ajanta Pharma Ltd.png'
      // case 'Al-Tinez':
      //   return '../../../assets/images/Manufacturer Names/Agewell HealthCare Ltd.png'
      case 'Alchemy Medicine Pvt Ltd':
        return '../../../assets/images/Manufacturer Names/Alchemy Medicine Pvt Ltd.png'
      case 'Alcon':
        return '../../../assets/images/Manufacturer Names/Alcon.png'
      case 'Alka-Seltzer':
        return '../../../assets/images/Manufacturer Names/Alka-Seltzer .png'
      case 'Alkem':
        return '../../../assets/images/Manufacturer Names/Alkem.png'
      // case 'Allen & Hanburys':
      //   return '../../../assets/images/Manufacturer Names/Allen & Hanburys.png'
      case 'Almond Ethicals':
        return '../../../assets/images/Manufacturer Names/Almond Ethicals.png'
      case 'Alpha Laboraties':
        return '../../../assets/images/Manufacturer Names/Alpa Laboratories.png'
      case 'Anhui Chengshi Pharmaceuticals ':
        return '../../../assets/images/Manufacturer Names/Anhui Chengshi Pharmaceuticals .png'
      // case 'Answer one':
      //   return '../../../assets/images/Manufacturer Names/Alchemy Medicine Pvt Ltd.png'
      case 'Appeton Health':
        return '../../../assets/images/Manufacturer Names/Appeton Health.png'
      // case 'Aquabloc':
      //   return '../../../assets/images/Manufacturer Names/Aquabloc.png'
      case 'Aristo Pharma':
        return '../../../assets/images/Manufacturer Names/Aristo Pharma.png'
      case 'Artemis Life Sciences':
        return '../../../assets/images/Manufacturer Names/Artemis Life Sciences.png'
      case 'Artepham Co Ltd':
        return '../../../assets/images/Manufacturer Names/Artemis Life Sciences.png'
      case 'AstraZeneca':
        return '../../../assets/images/Manufacturer Names/AstraZenica.png'
      case 'AstraZenica':
        return '../../../assets/images/Manufacturer Names/AstraZenica.png'
      case 'Astrazeneca':
        return '../../../assets/images/Manufacturer Names/AstraZenica.png'
      // case 'Ayo Ayodele Pharmaceuticals':
      //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
      case 'BAROQUE Pharmaceuticals ltd':
        return '../../../assets/images/Manufacturer Names/BAROQUE Pharmaceuticals ltd.png'
      // case 'BSMith Needles':
      //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
      // case 'Basic Supplement':
      //   return '../../../assets/images/Manufacturer Names/AstraZenica.png'
      case 'Bayer':
        return '../../../assets/images/Manufacturer Names/Bayers Pharmaceutical.png'
      // case 'Bells Healthcare':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Beximco Pharmaceuticals ':
        return '../../../assets/images/Manufacturer Names/Beximo Pharmaceuticals.png'
      case 'Bharat Biotech':
        return '../../../assets/images/Manufacturer Names/Bharat Biotech.png'
      case 'Bharat Parenterals':
        return '../../../assets/images/Manufacturer Names/Bharat Parenterals.png'
      case 'Biochem Pharma':
        return '../../../assets/images/Manufacturer Names/Biochem Pharma.png'
      case 'Biogate Laboratories':
        return '../../../assets/images/Manufacturer Names/Biogate Laboratories.png'
      // case 'Biopharma Nigeria Limited':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Biosea Sweeter Life':
        return '../../../assets/images/Manufacturer Names/Biosea Sweeter Life.png'
      case 'Biozek Medical':
        return '../../../assets/images/Manufacturer Names/Biozek Medical.png'
      case 'Bliss GVS Pharma':
        return '../../../assets/images/Manufacturer Names/Bliss GVS Pharma.png'
      case 'Boehringer Ingelheim':
        return '../../../assets/images/Manufacturer Names/boehringer-ingelheim-logo-vector.svg'
      case 'Bond Chemical Industries':
        return '../../../assets/images/Manufacturer Names/Bond Chemical Industries.png'
      case 'Boyd Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/Boyd Pharmaceuticals.png'
      // case 'Brian Munro Limited ':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Brookes Pharma':
        return '../../../assets/images/Manufacturer Names/Brookes Pharma.png'
      case 'CORE':
        return '../../../assets/images/Manufacturer Names/CORE.png'
      // case 'Carnation':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Carrot Top Drugs':
        return '../../../assets/images/Manufacturer Names/Carrot Top Drugs.png'
      case 'Celogen Generics Pvt. Ltd':
        return '../../../assets/images/Manufacturer Names/Celogen Generics Pvt. Ltd.png'
      case 'Centaur Pharmaceutical Ltd':
        return '../../../assets/images/Manufacturer Names/Centaur Pharmaceutical Ltd.png'
      case 'Centaur Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/Centaur Pharmaceutical Ltd.png'
      case 'Chez Resources':
        return '../../../assets/images/Manufacturer Names/Chez Resources.png'
      case 'Chi Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/Chi Pharmaceuticals.png'
      case 'Church & Dwight UK Ltd':
        return '../../../assets/images/Manufacturer Names/Church & Dwight UK Ltd.png'
      // case 'Citus Diagnosis':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Clarion Medicals Ltd':
        return '../../../assets/images/Manufacturer Names/Clarion Medicals Ltd.png'
      case 'Codix Pharma':
        return '../../../assets/images/Manufacturer Names/Codix Pharma.png'
      // case 'Colek':
      //   return '../../../assets/images/Manufacturer Names/Codix Pharma.png'
      // case 'Cranraspberry':
      //   return '../../../assets/images/Manufacturer Names/Codix Pharma.png'
      case 'Crookes Healthcare':
        return '../../../assets/images/Manufacturer Names/Crookes Healthcare.png'
      case 'DDD Limited':
        return '../../../assets/images/Manufacturer Names/DDD limited.png'
      case 'DHG Pharma':
        return '../../../assets/images/Manufacturer Names/ DHG Pharma.png'
      case 'DKT International ':
        return '../../../assets/images/Manufacturer Names/DKT international.png'
      // case 'Daewoo Pharm':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Daily Needs Industries':
        return '../../../assets/images/Manufacturer Names/Daily Needs Industries.png'
      case 'Dana Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/Dana.png'
      case 'Diatech Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Diatech Pharmaceuticals .png'
      case 'Dongkook Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/  Dongkook Pharmaceuticals.png'
      case "Dr.Reddy's":
        return "../../../assets/images/Manufacturer Names/ Dr.Reddy's .png"
      // case 'Drugfield':
      //   return '../../../assets/images/Manufacturer Names/  Dongkook Pharmaceuticals.png'
      // case 'Drugfield Pharmaceuticals':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Ecomed Pharma Ltd':
        return '../../../assets/images/Manufacturer Names/ Ecomed Pharma Ltd .png'
      case 'Efamol':
        return '../../../assets/images/Manufacturer Names/ Efamol .png'
      case 'Elastoplast':
        return '../../../assets/images/Manufacturer Names/Elastoplast.png'
      // case 'Elbe Pharma':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Embassy Pharmaceutical':
        return '../../../assets/images/Manufacturer Names/ Emzor Pharmaceuticals Industries Ltd .png'
      case 'Emzor':
        return '../../../assets/images/Manufacturer Names/ Emzor Pharmaceuticals Industries Ltd .png'
      case 'Ensure':
        return '../../../assets/images/Manufacturer Names/ Ensure .png'
      case 'Eurolife':
        return '../../../assets/images/Manufacturer Names/Eurolife.png'
      case 'Evans Baroque ':
        return '../../assets/images/Manufacturer Names/ Evans Baroque Limited .png'
      // case 'Evans Therapeutics':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Evergreen Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Evergreen .png'
      case 'Exeltis Pharmaceutical':
        return '../../../assets/images/Manufacturer Names/Exeltis Pharmaceutical.png'
      case 'FAES FARMA':
        return '../../../assets/images/Manufacturer Names/ FAES FARMA .png'
      case 'Farmex Meyer':
        return '../../../assets/images/Manufacturer Names/Farmex meyer Limited.png'
      case 'Fidson':
        return '../../../assets/images/Manufacturer Names/ Fidson Healthcare Plc .png'
      case 'Fiterman Pharma':
        return '../../../assets/images/Manufacturer Names/ Fiterman Pharma .png'
      case 'Future Biotics':
        return '../../../assets/images/Manufacturer Names/ Future Biotics .png'
      case 'Fyodor Biotechnologies':
        return '../../../assets/images/Manufacturer Names/ Fyodor Biotechnologies .png'
      case 'G.R Lane HealthCare Products':
        return '../../../assets/images/Manufacturer Names/ G.R Lane HealthCare Products .png'
      case 'GSK':
        return '../../../assets/images/Manufacturer Names/ GSK .png'
      case 'HOVID':
        return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Union Swiss':
        return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      // case 'Union Swiss':
      //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
      default:
        return 'assets/images/drugstoc.png'
    }
  }

}
