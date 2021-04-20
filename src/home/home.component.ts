import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { HomeService } from "./home.service";

@Component({
    selector: 'app-component',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    public isOpened: any;
    public parentItems: Array<any>;
    public groupedData: any;
    public categoriesArray: Array<any>;
    public form: FormGroup;

    public initializing: Boolean;

    private categoriesMap: any;
    private orginalData: any;

    constructor(
        private fb: FormBuilder,
        private homeService: HomeService
    ) {

        this.initializing = true;

        this.orginalData = [];
        this.groupedData = {};
        this.categoriesMap = {};
        this.categoriesArray = [];
        this.parentItems = [];
        this.isOpened = {};
    }

    ngOnInit() {

        this.fetchData();
    }

    /**
     * Toggle Result Viewer
     * @param parentId 
     * @returns 
     */
    public toggleChild(parentId) {
        if (this.isOpened[parentId]) {
            this.isOpened[parentId] = false;
            return;
        }
        this.isOpened[parentId] = true;
    }

    /**
     * Fetch data from service
     */
    private fetchData() {
        
        this.homeService
            .fetch()
            .subscribe(
                (response) => {

                    this.orginalData = response.data || [];

                    this.groupData();
                },
                error => {
                    console.log(error);
                    //Show error message if any API failed.
                }
            )
    }

    /**
     * Group data based on parent_object_id
     */
    private groupData() {

        this.orginalData.forEach((item) => {
            if (item.parent_objective_id) {
                if (!this.groupedData[item.parent_objective_id]) {
                    this.groupedData[item.parent_objective_id] = [];
                }
                this.groupedData[item.parent_objective_id].push(item);
            } else if (item.id) {
                this.parentItems.push(item);
                this.isOpened[item.id] = true;
            }

            if (!this.categoriesMap[item.category]) {
                this.categoriesMap[item.category] = true;
                this.categoriesArray.push({
                    name: item.category,
                    value: item.category
                })
            }
        });

        this.createFilterFormInputs();

        this.initializing = false;
    }


    /**
     * Filter form group
     */
    private createFilterFormInputs() {
        this.form = new FormGroup({
            categories: this.createCategories(this.categoriesArray)
        });
    }
    
    private createCategories(categoriesInputs) {
        const arr = categoriesInputs.map(category => {
            return new FormControl(category.selected || false);
        });
        return new FormArray(arr);
    }
}
