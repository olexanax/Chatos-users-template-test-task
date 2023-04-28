import { User } from "interfaces";

const filterBySearch = (items: User[], term: string) => {
    if (term.length === 0) {
        return items;
    }

    return items.filter((item) => {
        return item.name.indexOf(term) > -1;
    });
};
export default filterBySearch;
