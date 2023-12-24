const person = {
  name: 'Jun',
  address: {
    line1: 'Minato-ku',
    city: 'Tokyo',
    country: 'Japan'
  },
  profiles: ['X', 'linkedin', 'instagram'],
  printProfile: () => {
    Object.values(person.profiles).map(
      profile => console.log(profile)
    )
    console.log(typeof(person.profiles))
  }
}

export default function LearningJavaScript(){
  return (
    <>
      <div>{person.name}</div>
      <div>{person.address.line1}</div>
      <div>{person.address.city}</div>
      <div>{person.address.country}</div>
      <div>{person.profiles[0]}</div>
      <div>{ person.printProfile() }</div>
    </>
  )
}