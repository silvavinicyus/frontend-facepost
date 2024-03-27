import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://github.com/silvavinicyus.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Vinicyus Silva </strong>
              <time title='26 de março às 23:43' dateTime='2024-03-26 23:44:15'> Cerca de 1h atrás.</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p> Muito bom Devon, parabéns!! clap clap </p>
        </div>

        <footer> 
          <button>
            <ThumbsUp />
            Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>

    </div>
  )
}