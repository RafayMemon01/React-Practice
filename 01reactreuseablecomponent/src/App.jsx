import './App.css'
import Card from './components/Card'

const App = () => {

  let data = [
    {
      name: "Programming Quote",
      text: "Programming is not about what you know, it's about what you can figure out."
    },
    {
      name: "Code Joke",
      text: "Why do programmers prefer dark mode? Because light attracts bugs!"
    },
    {
      name: "Programming Quote",
      text: "The best thing about a boolean is even if you are wrong, you are only off by a bit."
    },
    {
      name: "Programming Joke",
      text: "Why do Java developers wear glasses? Because they don't C#!"
    },
    {
      name: "Quote",
      text: "The only way to learn a new programming language is by writing programs in it."
    },
    {
      name: "Programming Joke",
      text: "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!"
    }
  ]

  let name = "HELLO WORLD"

  return (
    <>
    <h1 className='text-center text-4xl font-bold'>React Reuseable Components</h1>
    <div className='flex gap-5 flex-wrap justify-center'>

    {data.map((item,index)=>(
      <Card key={index} userName={item.name} userText={item.text}/>
    ))}
      
    </div>
    </>
  )
}

export default App
