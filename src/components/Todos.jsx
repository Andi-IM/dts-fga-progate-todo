import React from 'react'

const Todos = ({ todos }) => {
    return (
        <div style={styles.container}>
            {todos.map((todo) => {
                return <p key={todo.id}>{todo.title}</p>
            })}
        </div>
    )
}

const styles = {
    container: {
        width: '40%',
        margin: '0 auto',
    },
}
export default Todos