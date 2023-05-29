type a1 = string;
type a2 = number;
type a3 = undefined;

type b = a1 extends string ? string : null;


type d = a1 extends string ? string : a2 extends number? number : a3 extends undefined ? undefined : never;

type Partners = {
    a1 : string,
    a2: string
}
// jodi oi key thake tahole true dibe r na thakle  false 
type Checking <T, K> = K extends keyof Partners  ? true : false
type checkInfo = Checking<Partners, "a2">


// remove friends 

type AllFriends = "Mehenaj" | "Sarmin" | "Suchi";

type RemoveFr<T, K> = T extends K ? never : T;
type RecentFr = RemoveFr<AllFriends, 'Suchi'>
