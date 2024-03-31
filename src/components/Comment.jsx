/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avattar } from './Avattar'
import { useState } from 'react'

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return(
    <div className={styles.comment}>
      <Avattar
        src="https://github.com/silvavinicyus.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Vinicyus Silva </strong>
              <time title='26 de março às 23:43' dateTime='2024-03-26 23:44:15'> Cerca de 1h atrás.</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p> {content} </p>
        </div>

        <footer> 
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span> {likeCount} </span>
          </button>
        </footer>
      </div>

    </div>
  )
}