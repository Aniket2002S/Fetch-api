import { useEffect , useState } from 'react' ;
import Card from './api/component/Card';
import { getPosts } from './api/Api'

const App = () => {
  const [data, setdata] = useState(null)
  useEffect(() => {
    getPosts().then((post) => setdata(post))
  }, [])
  
  return (
    <div>
      {data ? data.map((e) => <Card key={e.id} title={e.title} body={e.body} />) : <p></p>}
    </div>
  )
}

export default App
