import personImg1 from '../images/person1.png'
import personImg2 from '../images/person2.png'
import personImg3 from '../images/person3.png'
import personImg4 from '../images/person4.png'

const TeamSection = () => (
  <div className="grid place-items-center w-full mb-20">
    <div className="flex items-start justify-between w-full max-w-screen-xl px-8 py-24">
      <div className="grid gap-6 max-w-xs mt-32">
        <h2 className="font-medium text-red-500">Meet the team</h2>
        <h1 className="font-medium text-gray-600 text-4xl">
          We are chilled and a laidback team
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex items-start gap-6">
        <img
          className="rounded-2xl w-80 mt-28"
          src={personImg3}
          alt="woman portrait"
        />
        <div className="flex flex-col items-start gap-6">
          <img
            className="rounded-2xl w-64"
            src={personImg1}
            alt="man portrait"
          />
          <img
            className="rounded-2xl w-72"
            src={personImg2}
            alt="man portrait"
          />
        </div>
      </div>
    </div>
    <div className="w-full max-w-screen-xl px-8 py-24">
      <h1 className="font-medium text-gray-600 text-4xl leading-normal max-w-4xl mb-8">
        “Fast and outstanding resutls. Edie understands their customer’s needs.
        They have a young and talented team.”
      </h1>
      <div className="flex gap-8">
        <img className="rounded-xl w-20" src={personImg4} alt="man portrait" />
        <div className="flex flex-col justify-around">
          <h2 className="font-medium text-2xl text-gray-600">Carlos Tran</h2>
          <p className="font-medium text-gray-400">The Decorate Gatsby</p>
        </div>
      </div>
    </div>
  </div>
)

export default TeamSection
