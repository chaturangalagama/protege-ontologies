import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BussinessStoreService } from '../../../../../core/services/api-services/store-bussiness.service';
import { ApiMemberDetailsService } from '../api-member-details.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss']
})
export class MemberSearchComponent implements OnInit {

  searchFormGroup: FormGroup;
  result = [];
  kottu = false;
  friedrice = false;
  pizza = false;
  pasta = false;
  searchItemList = [{ name: 'Stewards and their Managers', 'headers': ['Manager','Steward', ''],
                      query:'PREFIX uni: <https://github.com/rafaeleyng/protege-ontologies/raw/master/university.owl#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT (CONCAT(?manager_first_name, " ", ?manager_last_name) AS ?_1) (CONCAT(?steward_first_name, " ", ?steward_last_name) AS ?_2) WHERE {   ?manager uni:manages ?resturant . ?steward uni:works ?resturant . ?manager uni:first_name ?manager_first_name .?manager uni:last_name ?manager_last_name .?steward uni:first_name ?steward_first_name . ?steward uni:last_name ?steward_last_name . }'},
                    { name: 'Customers and their food', 'headers': ['Customer','Food', ''], 
                      query:'PREFIX uni: <https://github.com/rafaeleyng/protege-ontologies/raw/master/university.owl#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT (CONCAT(?first_name, " ", ?last_name) AS ?_1) ?_2  WHERE {   ?uni uni:eats ?_2 . ?uni uni:first_name ?first_name . ?uni uni:last_name ?last_name .    }'},                   
                    { name: 'Staff members', 'headers': ['Staff members', 'Name', 'Resturant'], 
                      query:'PREFIX uni: <https://github.com/rafaeleyng/protege-ontologies/raw/master/university.owl#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?_1 (CONCAT(?first_name, " ", ?last_name) AS ?_2) ?_3 WHERE {   ?_1 rdfs:subClassOf uni:Staff .  ?_1 uni:first_name ?first_name .  ?_1 uni:last_name ?last_name . ?_1 uni:works ?_3 . }'},
                    { name: 'Resturant branches', 'headers': ['Resturant branches', 'Name', 'Location'], 
                      query:'PREFIX uni: <https://github.com/rafaeleyng/protege-ontologies/raw/master/university.owl#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?_1 ?_2 ?_3 WHERE {   ?_1 rdfs:subClassOf uni:Resturant . ?_1 uni:location ?_2 . ?_1 uni:name ?_3 .    }'},


                    { name: 'Foods available', 'headers': ['Food', '', ''], 
                      query:'PREFIX uni: <https://github.com/rafaeleyng/protege-ontologies/raw/master/university.owl#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?_1 WHERE { VALUES ?o { '}   
                    

                     

                    // { name: 'Foods available', 'headers': ['Food', '', ''], 
                    //   query:'PREFIX uni: <https://github.com/rafaeleyng/protege-ontologies/raw/master/university.owl#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?_1 WHERE {   ?_1 rdfs:subClassOf uni:Food .    }'}
                    // { name: 'Kottu types available', 'headers': ['Kottu Types', '', ''], 
                    //   query:'PREFIX uni: <https://github.com/rafaeleyng/protege-ontologies/raw/master/university.owl#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> SELECT ?_1 WHERE {   ?_1 rdfs:subClassOf uni:Kottu .    }'}
                   ];
  rows = [];   

  constructor(private fb: FormBuilder, private storeBussinessService: BussinessStoreService,private apiMemberDetailsService: ApiMemberDetailsService
    ) { }

  ngOnInit() {
    this.searchFormGroup = this.createSearchFormGroup();
  }

  createSearchFormGroup(): FormGroup {
    return this.fb.group({
      memberGroup: ['', Validators.required]
    })
  }

  onSearchClicked() {
    let query;
    let pre_query;
    if(this.searchFormGroup.value.memberGroup['name']=='Foods available'){
      pre_query = this.searchFormGroup.value.memberGroup['query'];
      if(this.kottu==false && this.friedrice==false && this.pizza==false && this.pasta==false)
        pre_query = pre_query+'   uni:Food ';
      if(this.kottu==true)
        pre_query = pre_query+'   uni:Kottu  ';
      if(this.friedrice==true)
        pre_query = pre_query+'   uni:Fried_Rice  ';
      if(this.pizza==true)
        pre_query = pre_query+'  uni:Pizza  ';
      if(this.pasta==true)
        pre_query = pre_query+'   uni:Pasta  ';
      // else
      //   pre_query = pre_query+'   ?_1 rdfs:subClassOf uni:Food . ';

      query = pre_query+'} ?_1 rdfs:subClassOf ?o. }'; 

    }
    else
      query = this.searchFormGroup.value.memberGroup['query'];
    const body = new HttpParams().set('query', query);
    this.getResult(body);
    
  }

  getResult(query) {
    this.apiMemberDetailsService.getResult(query).subscribe(
      response => {
        this.result = response['results']['bindings'];
        // if(this.searchFormGroup.value.memberGroup == this.searchItemList[0])
        //   this.result = response['results']['bindings']['manager_name.value'];
        // this.result.forEach(element => {
        //   this.rows.push({"value" : element.student.value.split('#')[1]});
        // });
        console.log('result', this.rows);
      }
    );
  }
}
