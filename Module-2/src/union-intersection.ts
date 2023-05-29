type nobeDeveloper = {
    name: string
}
type juniorDeveloper = nobeDeveloper & {
    expertise: string,
    experience: number
}

const newDeveloper : nobeDeveloper | juniorDeveloper = {
    name:"sahara",
    expertise:"React",
    experience: 1
}
// | union type, and & is intersection

// enum 