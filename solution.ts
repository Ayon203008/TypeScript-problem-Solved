
function formatValue(input: number | string | boolean) {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else if (typeof input === "boolean") {
    return !input;
  }
}



function getLength(input: string | any[]) {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
}



class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name: [${this.name}], Age: [${this.age}]'`;
  }
}



type data = {
  title: string;
  rating: number;
};

function filterByRating(input: data[]) {
  return input.filter((input) => input.rating >= 4);
}


type userData = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(input: userData[]) {
  return input.filter((input) => input.isActive);
}



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(input: Book) {
  console.log(
    `Title: ${input.title}, Author: ${input.author}, Published: ${
      input.publishedYear
    }, Available: ${input.isAvailable ? "Yes" : "No"}`
  );
}



function getUniqueValues(
    arr1: (number | string)[],
    arr2: (number | string)[]
): (number | string)[] {

    const result: (number | string)[] = [];

    for (let i = 0; i < arr1.length; i++) {
        let alreadyExists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr1[i] === result[j]) {
                alreadyExists = true;
            }
        }
        if (alreadyExists === false) {
            result.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        let alreadyExists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                alreadyExists = true;
            }
        }
        if (alreadyExists === false) {
            result.push(arr2[i]);
        }
    }
    return result;
}



type products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(input: products[]) {
  const priceList = input.map((item) => {
    const original = item.price * item.quantity;
    if (item.discount !== undefined) {
      return original - (original * item.discount) / 100;
    }
    return original

  });
const total = priceList.reduce((sum, price) => sum + price, 0);
  return total;

}



