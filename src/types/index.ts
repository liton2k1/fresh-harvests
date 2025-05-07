export type TProduct = {
    id: string;
    name: string;
    category: string;
    productName: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    categoryId: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}

export type TInputsRegister = {
    fullName: string;
    email: string;
    password: string;
  };

export type TInputsLogin = {
    email: string;
    password: string;
    rememberMe: boolean;
  }