import { User, SortFrom, SortBy } from "interfaces";

const sort = (users: User[], filter: SortFrom, sortBy: SortBy) => {
    switch (filter) {
        case "inc":
            switch (sortBy) {
                case "age":
                    return [...users].sort((a, b) => a.age - b.age);
                case "dateOfAddition":
                    const copy = [...users];
                    return copy.sort((a, b) => {
                        const dateA = new Date(a.dateOfAddition);
                        const dateB = new Date(b.dateOfAddition);
                        return dateB.getTime() - dateA.getTime();
                    });
            }
            break;
        case "decr":
            switch (sortBy) {
                case "age":
                    return [...users].sort((a, b) => b.age - a.age);
                case "dateOfAddition":
                    const copy = [...users];
                    return copy.sort((a, b) => {
                        const dateA = new Date(a.dateOfAddition);
                        const dateB = new Date(b.dateOfAddition);
                        return dateA.getTime() - dateB.getTime();
                    });
            }
            break;
    }
};

export default sort;
