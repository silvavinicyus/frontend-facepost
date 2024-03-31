/* eslint-disable react/prop-types */
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avattar } from './Avattar'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  const [comments, setComments] = useState([
    'Post Muito Bacana meu nobre'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment(event) {    
    event.preventDefault()        
    setComments([...comments, newCommentText])    
    setNewCommentText('')
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsAfterDelete = comments.filter((comment) => comment !== commentToDelete)
    setComments(commentsAfterDelete)
  }

  function handleInvalidComment(event) {
    event.target.setCustomValidity('Esse campo é obrigatório!')    
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avattar
            src={author.avatarUrl}            
          />

          <div className={styles.authorInfo}>
            <strong> {author.name}  </strong>
            <span> {author.role}  </span>
          </div>
        </div>
        <time  title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> {publishedDateRelativeToNow} </time>
      </header>

      <div className={styles.content}>        
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } 
          if (line.type === 'links') {                          
              return <p key={line.content}> <a  href={line.content}>{line.content}</a> </p>            
          }
          if (line.type === 'hashtags') {
            return (
              <p key={line.content}>
                {line.content.map((hashtag) => {
                  return <a key={hashtag.value} href={hashtag.link}>{hashtag.value}{' '}</a>
                })}
              </p>
            )            
          }
        })}             
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>

        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleInvalidComment}
          required
        />

        <footer>
          <button 
            type='submit'
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>      

      <div className={styles.commentList}>        
        {comments.map((comment) => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )          
        })}
      </div>
    </article>
  )
}