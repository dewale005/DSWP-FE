import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-per-category-list',
  templateUrl: './per-category-list.component.html',
})
export class PerCategoryListComponent implements OnInit {

  constructor(private list: ProductService) {
    this.data2.length = 40; 
   }
  loading: boolean = true;
  data: any = []
  data2: any = []

  ngOnInit(){
    this.list.per_company().subscribe(res => {
      this.loading = false;
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
        return '../../../assets/images/Manufacturer Names/ Embassy Pharmaceutical .png'
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
      case 'GainWorld':
        return '../../../assets/images/Manufacturer Names/GainWorld.png'
      case 'Gedeon Richter':
        return '../../../assets/images/Manufacturer Names/  Gedeon Richter .png'
      case 'Gemini':
        return '../../../assets/images/Manufacturer Names/ Gemini .png'
      case 'Geneith Pharm Limited':
        return '../../../assets/images/Manufacturer Names/ Geneith Pharm Limited .png'
      case 'Generix Global':
        return '../../../assets/images/Manufacturer Names/  Generix Globa .png'
      case 'Getz Pharma':
        return '../../../assets/images/Manufacturer Names/ Getz Pharma  .png'
      case 'Ginsana':
        return '../../../assets/images/Manufacturer Names/ Ginsana .png'
      // case 'Gland':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Globela Pharm Pvt. Ltd.':
        return '../../../assets/images/Manufacturer Names/ Globela Pharm Pvt. Ltd. .png'
      case 'Greenlife Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/  Greenlife Pharmaceuticals .png'
      case 'HOVID':
        return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Haliborange':
        return '../../../assets/images/Manufacturer Names/  Haliborange .png'
      // case 'Hameln':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Hangzhou Qingyuan Medical Equipment Tech Ltd ':
        return '../../../assets/images/Manufacturer Names/  Hangzhou Qingyuan Medical Equipment Tech Ltd  .png'
      case 'Hanlim Pharm':
        return '../../../assets/images/Manufacturer Names/ Hanlim Pharm .png'
      // case 'Healflon':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      // case 'Health Check':
      //   return '../../../assets/images/Manufacturer Names/HOVID.png'
      case 'Health Forever Limited':
        return '../../../assets/images/Manufacturer Names/Health Forever Limited.png'
      // case 'HealthCheck':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'Healthquipng':
        return '../../../assets/images/Manufacturer Names/Healthquipng.png'
      // case 'Hemeln Pharms':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'Holland and Barrett':
        return '../../../assets/images/Manufacturer Names/ Holland and Barrett .png'
      case 'IPCA Laboratories':
        return '../../../assets/images/Manufacturer Names/ Ipca Laboratories .png'
      // case 'Immunecare':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'Indus Life Sciences':
        return '../../../assets/images/Manufacturer Names/Indus Life Sciences.png'
      case 'Innotech Laboratories':
        return '../../../assets/images/Manufacturer Names/ Innotech Laboratories .png'
      // case 'Ivee Aqua EPZ Ltd':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'JIZIKI':
        return '../../../assets/images/Manufacturer Names/ JIZIKI .png'
      case 'Janssen':
        return '../../../assets/images/Manufacturer Names/Janssen.png'
      case 'Jawa International ':
        return '../../../assets/images/Manufacturer Names/ Jawa International Limited .png'
      case 'Jiangsu Pengyao Pharmaceuticals Co. Ltd':
        return '../../../assets/images/Manufacturer Names/  Jiangsu Pengyao Pharmaceuticals Co. Ltd .png'
      case 'Jiangxi Xier Kangtai Pharmaceutical':
        return '../../../assets/images/Manufacturer Names/ Jiangxi Xier Kangtai Pharmaceutical .png'
      case 'Johnson & Johnson':
        return '../../../assets/images/Manufacturer Names/ Johnson and Johnson Limited .png'
      case 'Joswe Medical':
        return '../../../assets/images/Manufacturer Names/ Joswe Medical .png'
      case 'Juhel':
        return '../../../assets/images/Manufacturer Names/ Juhel .png'
      // case 'KIMCO':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'Kalms':
        return '../../../assets/images/Manufacturer Names/ Kalms .png'
      case 'Kendy Ltd':
        return '../../../assets/images/Manufacturer Names/ Kendy Ltd .png'
      case 'Kimbery Clark':
        return '../../../assets/images/Manufacturer Names/ Kimbery Clark .png'
      case 'KingLion':
        return '../../../assets/images/Manufacturer Names/Kinglion Pharmaceuticals.png'
      case 'Korea Pharma Co':
        return '../../../assets/images/Manufacturer Names/  Korea Pharma Co .png'
      case 'Korlyns Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Korlyns Pharmaceuticals .png'
      case 'Labacon':
        return '../../../assets/images/Manufacturer Names/ Labacon .png'
      case 'Laborate Pharmaceuticals Ltd':
        return '../../../assets/images/Manufacturer Names/ Laborate Pharmaceuticals Ltd .png'
      case 'Lane Health Products':
        return '../../../assets/images/Manufacturer Names/ Lane Health Products .png'
      // case 'Lavus Investment':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'LefasPharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Lefas Pharmaceuticals .png'
      case 'Lifesign Medical':
        return '../../../assets/images/Manufacturer Names/  Lifesign Medical .gif'
      case 'Lilly Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Lilly Medical .png'
      case 'Lincoln Parenteral Limited':
        return '../../../assets/images/Manufacturer Names/ Lincoln Parenteral Limited .png'
      case 'M & B Pharma':
        return '../../../assets/images/Manufacturer Names/M & B Pharma.png'
      // case 'M.P.I Pharmaceutica GmbH':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'MIMS':
        return '../../../assets/images/Manufacturer Names/ MIMS .png'
      case 'MSG company':
        return '../../../assets/images/Manufacturer Names/ MSG company .png'
      case 'MSN Laboratories':
        return '../../../assets/images/Manufacturer Names/MSN Laboratories.png'
      case 'MYK':
        return '../../../assets/images/Manufacturer Names/ MYK .png'
      case 'Marcson Healthcare':
        return '../../../assets/images/Manufacturer Names/  Marcson Healthcare .png'
      case 'Mark Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Mark Pharmaceuticals .png'
      case 'Martindale Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Martindale Pharmaceuticals .png'
      case 'Mass Pharma Ltd':
        return '../../../assets/images/Manufacturer Names/ Mass Pharma Ltd .png'
      case 'Maxivision':
        return '../../../assets/images/Manufacturer Names/ Maxivision .png'
      case 'McNeil Products Limited':
        return '../../../assets/images/Manufacturer Names/ McNeil Products Limited .gif'
      case 'McW Healthcare':
        return '../../../assets/images/Manufacturer Names/McW Healthcare.png'
      case 'Mecure Industries':
        return '../../../assets/images/Manufacturer Names/ Mecure Industries .png'
      case 'Medi Scan':
        return '../../../assets/images/Manufacturer Names/  Medi Scan .png'
      case 'Medicom Healthcare Ltd':
        return '../../../assets/images/Manufacturer Names/ Medicom Healthcare Ltd .png'
      case 'Medisure':
        return '../../../assets/images/Manufacturer Names/ Medisure .png'
      case 'Medop Healthcare':
        return '../../../assets/images/Manufacturer Names/Medop Healthcare.png'
      case 'Medreich':
        return '../../../assets/images/Manufacturer Names/ Medreich .png'
      case 'Mega Lifescience Nigeria Ltd':
        return '../../../assets/images/Manufacturer Names/  Mega Lifescience Nigeria Ltd .png'
      case 'Mentholatum Company Ltd':
        return '../../../assets/images/Manufacturer Names/ Mentholatum Company Ltd .png'
      case 'Merck':
        return '../../../assets/images/Manufacturer Names/ Merck .png'
      case 'Merit':
        return '../../../assets/images/Manufacturer Names/ Merit .png'
      // case 'Mic-Micro labs':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'Micro Nova':
        return '../../../assets/images/Manufacturer Names/ Micro Nova Pharmaceuticals .png'
      case 'Micropoint Bioscience':
        return '../../../assets/images/Manufacturer Names/ Micropoint Bioscience .png'
      case 'Mopson Pharmaceutical':
        return '../../../assets/images/Manufacturer Names/Mopson Pharmaceutical.png'
      case 'Moxie':
        return '../../../assets/images/Manufacturer Names/ Moxie .png'
      case 'Mundi Pharma':
        return '../../../assets/images/Manufacturer Names/Mundi Pharma.png'
      // case 'NGC PLC':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case '"Nanjing Bajingyu Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Nanjing Bajingyu Pharmaceuticals .gif'
      // case 'Nature Care':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case "Nature's Field":
        return ".../../../assets/images/Manufacturer Names/Nature's Field.png"
      case "Nature's Way":
        return "../../../assets/images/Manufacturer Names/Nature's Way.png"
      case 'Nectar Healthcare Ltd':
        return '../../../assets/images/Manufacturer Names/Nectar Healthcare Ltd.png'
      case 'Neimeth':
        return '../../../assets/images/Manufacturer Names/ Neimeth .png'
      case 'Nemel Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/  Nemel Pharmaceuticals .png'
      case 'New Healthway Company':
        return '../../../assets/images/Manufacturer Names/   New Healthway Company .png'
      case 'New Height Pharma Distribution':
        return '../../../assets/images/Manufacturer Names/New Height Pharma Distribution.png'
      case 'Nino Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Nino Pharmaceuticals .png'
      case 'Nitin Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/ Nitin Pharmaceuticals .png'
      // case 'Novartis':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'Novo Nordisk Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/Novo Nordisk Pharmaceutical.png'
      // case 'Nuestra':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'Oak-Faith Pharmaceuticals':
        return '../../../assets/images/Manufacturer Names/Oak-Faith Pharmaceuticals.png'
      // case 'Oakleaf Pharmaceuticals':
      //   return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      case 'Oculus Pharmacare':
        return '../../../assets/images/Manufacturer Names/ Oculus Pharmacare .png'
      case 'Ofidy Global':
        return '../../../assets/images/Manufacturer Names/ Ofidy Global .png'
      case 'Olive Healthcare':
        return '../../../assets/images/Manufacturer Names/ Olive Healthcare .png'
      case 'Olpharm Nigeria':
        return '../../../assets/images/Manufacturer Names/ Olpharm Nigeria .png'
      case 'Omega Pharma Limited':
        return '../../../assets/images/Manufacturer Names/ Omega Pharma Limited .png'
      case 'Union Swiss':
        return '../../../assets/images/Manufacturer Names/Union_Swiss.png'
      // case 'Union Swiss':
      //   return '../../../assets/images/Manufacturer Names/Union Swiss.png'
      default:
        return 'assets/images/no_image2.png'
    }
  }

}
