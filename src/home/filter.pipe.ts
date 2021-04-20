import { Pipe, PipeTransform  } from "@angular/core";

@Pipe({
    name: 'dataFilter'
})

export class DataFilterPipe implements PipeTransform  {

    transform(value: any, selected?: any, allCategories?: any): Array<any> {

        let selectedCategories = [];
        if (selected && selected.length) {
            selected.forEach((element, index) => {
                if (element) {
                    selectedCategories.push(allCategories[index].value);
                }
            });

            if (selectedCategories && selectedCategories.length && value && value.length) {
                let filtered =  value.filter(item => selectedCategories.includes(item.category));
                return filtered;
            }
        }
        return value;
    }
}