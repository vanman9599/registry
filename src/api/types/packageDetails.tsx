export interface PackageDetails{
    name: string;
    descriptin: string;
    readme: string;
    author:{
        email: string;
        name: string;
    }
    license: string;
    maintainers: {
        email: string;
        name: string;
    }[];
}