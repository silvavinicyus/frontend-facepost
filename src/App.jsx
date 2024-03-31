import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/silvavinicyus.png',
      name: 'Vinícyus Silva',
      role: "Backend Engineer"
    },
    content: [
      {type: 'paragraph', content: "Fala galera!"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz durante meu fim de semana"},
      {type: 'links', content: 'jane.design/doctorcare'},
      {type: 'hashtags', content: [ 
        {
          link: '#',
          value: '#nlw'
        },
        {
          link: '#',
          value: '#rockeseat'
        },
        {
          link: '#',
          value: '#ignite'
        }
      ]}
    ],
    publishedAt: new Date('2024-03-29 12:25:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/silvavinicyus.png',
      name: 'Vinícyus Silva',
      role: "FrontEnd Engineer"
    },
    content: [
      {type: 'paragraph', content: "Fala galera!"},
      {type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz durante meu fim de semana"},
      {type: 'links', content: ['jane.design/doctorcare']},
      {type: 'hashtags', content: [ 
        {
          link: '#',
          value: '#nlw'
        },
        {
          link: '#',
          value: '#rockeseat'
        },
        {
          link: '#',
          value: '#ignite'
        }
      ]}
    ],
    publishedAt: new Date('2024-03-25 12:25:00')
  }
]

function App() {
  return (
    <>
    <Header />
     
     <div className={styles.wrapper}>
        <Sidebar />

        <main>
         {posts.map((post) => {          
          return (
            <Post 
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
         })}
        </main>
     </div>
    </>
  )
}

export default App

